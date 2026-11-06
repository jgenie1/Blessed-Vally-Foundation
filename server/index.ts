import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import {
  constructWebhookEvent,
  createCheckoutSession,
  getStripeConfig,
  isValidStripeSessionId,
  sanitizeOrigin,
} from "./stripe.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// 1. Masquer les en-têtes d'identification du serveur
app.disable("x-powered-by");

// 2. Middleware d'en-têtes de sécurité HTTP (Protection OWASP)
app.use((req, res, next) => {
  // Empêche le MIME-sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");
  // Empêche le Clickjacking en iframe non autorisée
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  // Filtre XSS pour les anciens navigateurs
  res.setHeader("X-XSS-Protection", "1; mode=block");
  // Contrôle de la politique de référent
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  // Politique de permissions (désactivation des capteurs non utilisés)
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // HSTS (HTTP Strict Transport Security) lorsque le trafic est sécurisé
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  // Content Security Policy robuste autorisant les ressources du site et Stripe
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://api.stripe.com; frame-src https://js.stripe.com https://hooks.stripe.com; frame-ancestors 'self';"
  );

  next();
});

// 3. Système de limitation de débit en mémoire (Rate Limiter anti-Brute-Force & DoS)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

function createRateLimiter(options: { windowMs: number; max: number; message: string }) {
  const store = new Map<string, RateLimitRecord>();

  // Nettoyage périodique automatique toutes les 5 minutes
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of store.entries()) {
      if (now > record.resetTime) {
        store.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
  interval.unref();

  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (process.env.NODE_ENV === "test") {
      return next();
    }

    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown-client";

    const now = Date.now();
    let record = store.get(ip);

    if (!record || now > record.resetTime) {
      record = { count: 1, resetTime: now + options.windowMs };
      store.set(ip, record);
    } else {
      record.count += 1;
    }

    res.setHeader("X-RateLimit-Limit", options.max);
    res.setHeader("X-RateLimit-Remaining", Math.max(0, options.max - record.count));
    res.setHeader("X-RateLimit-Reset", Math.ceil(record.resetTime / 1000));

    if (record.count > options.max) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader("Retry-After", retryAfter);
      res.status(429).json({
        error: options.message,
        retryAfter,
      });
      return;
    }

    next();
  };
}

const checkoutLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 20,
  message: "Trop de tentatives de don. Veuillez patienter une minute avant de réessayer.",
});

const statusLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 60,
  message: "Trop de requêtes de statut. Veuillez patienter un instant.",
});

const generalApiLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  max: 120,
  message: "Trop de requêtes envoyées à l'API. Veuillez patienter.",
});

// Appliquer le limiteur global aux routes API
app.use("/api/", generalApiLimiter);

// 4. Webhook Stripe : DOIT recevoir le corps brut avec limite de taille anti-DoS
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json", limit: "64kb" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];

    if (!signature || typeof signature !== "string") {
      res.status(400).send("En-tête stripe-signature manquant");
      return;
    }

    try {
      const event = await constructWebhookEvent(req.body, signature);

      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as any;
          console.log(
            `[Stripe Webhook] Don validé: Session ${session.id}, Montant: ${session.amount_total} ${session.currency}`
          );
          break;
        }
        case "checkout.session.async_payment_succeeded": {
          const session = event.data.object as any;
          console.log(`[Stripe Webhook] Paiement asynchrone réussi: ${session.id}`);
          break;
        }
        case "payment_intent.payment_failed": {
          const intent = event.data.object as any;
          console.warn(`[Stripe Webhook] Échec du paiement: ${intent.id}`);
          break;
        }
        default:
          console.log(`[Stripe Webhook] Événement reçu : ${event.type}`);
      }

      res.status(200).json({ received: true });
    } catch (err: any) {
      console.error("[Stripe Webhook Error]:", err.message);
      res.status(400).send("Erreur de validation cryptographique du Webhook.");
    }
  }
);

// 5. Analyseur JSON avec taille maximale stricte (16kb) pour prévenir les attaques de saturation
app.use(express.json({ limit: "16kb" }));

// 6. Endpoint pour vérifier la configuration publique de Stripe
app.get("/api/stripe/config", (_req, res) => {
  const { publishableKey, isConfigured } = getStripeConfig();
  res.json({
    publishableKey,
    isConfigured,
  });
});

// 7. Endpoint pour récupérer les informations d'une session de don terminée
app.get("/api/stripe/session-status", statusLimiter, async (req, res) => {
  try {
    const sessionId = req.query.session_id as string;
    if (!sessionId) {
      res.status(400).json({ error: "Paramètre session_id manquant" });
      return;
    }

    if (!isValidStripeSessionId(sessionId)) {
      res.status(400).json({ error: "Identifiant de session Stripe invalide" });
      return;
    }

    const { getSessionDetails } = await import("./stripe.js");
    const details = await getSessionDetails(sessionId);
    res.json(details);
  } catch (error: any) {
    console.error("[Session Status Error]:", error?.message || error);
    res.status(500).json({
      error:
        process.env.NODE_ENV === "development"
          ? error?.message
          : "Erreur lors de la récupération sécurisée de la session",
    });
  }
});

// 8. Endpoint de création de la session Checkout
app.post("/api/stripe/create-checkout-session", checkoutLimiter, async (req, res) => {
  try {
    const {
      donorName,
      donorEmail,
      donorPhone,
      amountCents,
      currency,
      frequency,
      causeId,
      causeTitle,
      isTribute,
      tributeName,
      wantsReceipt,
      origin,
    } = req.body;

    // Protection anti-redirection ouverte : valide l'origine contre la liste blanche
    const validatedOrigin = sanitizeOrigin(origin, req.get("host"));

    const session = await createCheckoutSession({
      donorName,
      donorEmail,
      donorPhone,
      amountCents: Number(amountCents),
      currency,
      frequency,
      causeId,
      causeTitle,
      isTribute,
      tributeName,
      wantsReceipt,
      origin: validatedOrigin,
    });

    res.json(session);
  } catch (error: any) {
    console.error("[Stripe Session Error]:", error?.message || error);
    res.status(400).json({
      error:
        error?.message ||
        "Erreur lors de la création de la session de paiement sécurisée",
    });
  }
});

// 9. Endpoint Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 10. En production : servir les fichiers statiques construits par Vite
const distPath = path.resolve(process.cwd(), "dist");
app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[BVF Server] Serveur actif sur http://localhost:${PORT}`);
  });
}

export default app;
