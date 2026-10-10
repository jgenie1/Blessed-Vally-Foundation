import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import {
  constructWebhookEvent,
  createCheckoutSession,
  getStripeConfig,
} from "./stripe.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Webhook Stripe : DOIT recevoir le corps brut (raw Buffer) pour la validation cryptographique
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];

    if (!signature || typeof signature !== "string") {
      res.status(400).send("En-tête stripe-signature manquant");
      return;
    }

    try {
      const event = await constructWebhookEvent(req.body, signature);

      // Traitement des types d'événements clés
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          console.log(
            `[Stripe Webhook] Don validé: Session ${session.id}, Montant: ${session.amount_total} ${session.currency}`
          );
          break;
        }
        case "checkout.session.async_payment_succeeded": {
          const session = event.data.object;
          console.log(`[Stripe Webhook] Paiement asynchrone réussi: ${session.id}`);
          break;
        }
        case "payment_intent.payment_failed": {
          const intent = event.data.object;
          console.warn(`[Stripe Webhook] Échec du paiement: ${intent.id}`);
          break;
        }
        default:
          console.log(`[Stripe Webhook] Événement reçu : ${event.type}`);
      }

      res.status(200).json({ received: true });
    } catch (err: any) {
      console.error("[Stripe Webhook Error]:", err.message);
      res.status(400).send(`Erreur de validation Webhook : ${err.message}`);
    }
  }
);

// Pour les autres requêtes JSON
app.use(express.json());

// Endpoint pour vérifier la configuration publique de Stripe
app.get("/api/stripe/config", (_req, res) => {
  const { publishableKey, isConfigured } = getStripeConfig();
  res.json({
    publishableKey,
    isConfigured,
  });
});

// Endpoint pour récupérer les informations d'une session de don terminée
app.get("/api/stripe/session-status", async (req, res) => {
  try {
    const sessionId = req.query.session_id as string;
    if (!sessionId) {
      res.status(400).json({ error: "Paramètre session_id manquant" });
      return;
    }
    const { getSessionDetails } = await import("./stripe.js");
    const details = await getSessionDetails(sessionId);
    res.json(details);
  } catch (error: any) {
    console.error("[Session Status Error]:", error.message);
    res.status(500).json({ error: error.message || "Erreur de récupération de la session" });
  }
});

// Endpoint de création de la session Checkout
app.post("/api/stripe/create-checkout-session", async (req, res) => {
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

    const requestOrigin =
      origin || `${req.protocol}://${req.get("host")}`;

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
      origin: requestOrigin,
    });

    res.json(session);
  } catch (error: any) {
    console.error("[Stripe Session Error]:", error.message);
    res.status(500).json({ error: error.message || "Erreur lors de la création de la session Stripe" });
  }
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// En production : servir les fichiers statiques construits par Vite
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
