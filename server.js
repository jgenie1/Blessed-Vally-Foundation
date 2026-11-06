var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/stripe.ts
var stripe_exports = {};
__export(stripe_exports, {
  ALLOWED_CURRENCIES: () => ALLOWED_CURRENCIES,
  ALLOWED_ORIGINS: () => ALLOWED_ORIGINS,
  constructWebhookEvent: () => constructWebhookEvent,
  createCheckoutSession: () => createCheckoutSession,
  getSessionDetails: () => getSessionDetails,
  getStripeClient: () => getStripeClient,
  getStripeConfig: () => getStripeConfig,
  isValidEmail: () => isValidEmail,
  isValidStripeSessionId: () => isValidStripeSessionId,
  sanitizeOrigin: () => sanitizeOrigin,
  sanitizeString: () => sanitizeString
});
import Stripe from "stripe";
import dotenv from "dotenv";
function sanitizeOrigin(candidateOrigin, requestHost) {
  const defaultOrigin = "https://blessedvallyfoundation.org";
  if (!candidateOrigin) {
    if (requestHost && (requestHost.includes("localhost") || requestHost.includes("127.0.0.1"))) {
      return `http://${requestHost}`;
    }
    return defaultOrigin;
  }
  try {
    const parsed = new URL(candidateOrigin);
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return parsed.origin;
    }
    if (parsed.protocol === "https:" && ALLOWED_ORIGINS.includes(parsed.origin.toLowerCase())) {
      return parsed.origin;
    }
  } catch {
  }
  return defaultOrigin;
}
function sanitizeString(input, maxLength) {
  if (typeof input !== "string") return "";
  const cleaned = input.replace(/[\x00-\x1F\x7F]/g, "").trim();
  return cleaned.slice(0, maxLength);
}
function isValidEmail(email) {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}
function isValidStripeSessionId(sessionId) {
  if (typeof sessionId !== "string") return false;
  return /^cs_(test|live)_[a-zA-Z0-9_-]{20,120}$/.test(sessionId.trim());
}
function getStripeConfig() {
  const secretKey = process.env.STRIPE_SECRET_KEY || process.env.BVALLEY_STRIPE_SECRET_KEY || "";
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || process.env.BVALLEY_STRIPE_PUBLISHABLE_KEY || "";
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || process.env.BVALLEY_STRIPE_WEBHOOK_SECRET || "";
  return {
    secretKey,
    publishableKey,
    webhookSecret,
    isConfigured: Boolean(secretKey && !secretKey.includes("placeholder"))
  };
}
function getStripeClient() {
  const { secretKey, isConfigured } = getStripeConfig();
  if (!isConfigured) {
    throw new Error(
      "Stripe Secret Key manquante. Veuillez d\xE9finir STRIPE_SECRET_KEY ou BVALLEY_STRIPE_SECRET_KEY dans votre fichier .env."
    );
  }
  return new Stripe(secretKey);
}
async function createCheckoutSession(params) {
  const stripe = getStripeClient();
  if (typeof params.amountCents !== "number" || !Number.isFinite(params.amountCents) || !Number.isSafeInteger(params.amountCents) || params.amountCents < 50) {
    throw new Error("Le montant du don doit \xEAtre d'au moins 0.50 $ (50 cents).");
  }
  if (params.amountCents > 1e7) {
    throw new Error("Le montant du don d\xE9passe la limite maximale autoris\xE9e.");
  }
  const rawCurrency = (params.currency || "usd").toLowerCase();
  if (!ALLOWED_CURRENCIES.includes(rawCurrency)) {
    throw new Error("Devise non prise en charge.");
  }
  const currency = rawCurrency;
  const isMonthly = params.frequency === "monthly";
  if (params.donorEmail && !isValidEmail(params.donorEmail)) {
    throw new Error("Adresse email invalide.");
  }
  const sanitizedEmail = params.donorEmail ? params.donorEmail.trim().toLowerCase() : "";
  const safeOrigin = sanitizeOrigin(params.origin);
  const safeDonorName = sanitizeString(params.donorName || "Anonyme", 100);
  const safeDonorPhone = sanitizeString(params.donorPhone || "", 30);
  const safeCauseId = sanitizeString(params.causeId || "general", 50);
  const safeCauseTitle = sanitizeString(params.causeTitle || "Fonds G\xE9n\xE9ral", 100);
  const safeTributeName = sanitizeString(params.tributeName || "", 100);
  const productName = safeCauseTitle || (isMonthly ? "Don Mensuel \u2014 Blessed Vally Foundation" : "Donation \u2014 Blessed Vally Foundation");
  const productDescription = isMonthly ? "Soutien mensuel r\xE9current pour la scolarisation, la nutrition et les missions en Ha\xEFti" : "Donation directe pour les programmes \xE9ducatifs et communautaires en Ha\xEFti";
  const lineItem = isMonthly ? {
    price_data: {
      currency,
      unit_amount: params.amountCents,
      recurring: {
        interval: "month"
      },
      product_data: {
        name: productName,
        description: productDescription
      }
    },
    quantity: 1
  } : {
    price_data: {
      currency,
      unit_amount: params.amountCents,
      product_data: {
        name: productName,
        description: productDescription
      }
    },
    quantity: 1
  };
  const metadata = {
    donorName: safeDonorName,
    donorEmail: sanitizedEmail,
    donorPhone: safeDonorPhone,
    causeId: safeCauseId,
    causeTitle: safeCauseTitle,
    frequency: isMonthly ? "monthly" : "once",
    isTribute: params.isTribute ? "true" : "false",
    tributeName: safeTributeName,
    wantsReceipt: params.wantsReceipt !== false ? "true" : "false",
    organization: "Blessed Vally Foundation Inc."
  };
  const session = await stripe.checkout.sessions.create({
    line_items: [lineItem],
    mode: isMonthly ? "subscription" : "payment",
    customer_email: sanitizedEmail || void 0,
    billing_address_collection: "auto",
    payment_intent_data: !isMonthly && sanitizedEmail ? { receipt_email: sanitizedEmail } : void 0,
    metadata,
    success_url: `${safeOrigin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${safeOrigin}/donate?status=cancelled`
  });
  if (!session.url) {
    throw new Error("Impossible d'obtenir l'URL de redirection Stripe Checkout.");
  }
  return {
    url: session.url,
    id: session.id
  };
}
async function getSessionDetails(sessionId) {
  if (!isValidStripeSessionId(sessionId)) {
    throw new Error("Identifiant de session invalide.");
  }
  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return {
    id: session.id,
    status: session.status,
    paymentStatus: session.payment_status,
    amountTotal: session.amount_total ? session.amount_total / 100 : 0,
    currency: (session.currency || "usd").toUpperCase(),
    customerEmail: session.customer_details?.email || session.customer_email || "",
    donorName: session.metadata?.donorName || session.customer_details?.name || "Bienfaiteur de la Fondation",
    causeTitle: session.metadata?.causeTitle || "Fonds G\xE9n\xE9ral",
    frequency: session.metadata?.frequency || "once",
    created: session.created
  };
}
async function constructWebhookEvent(rawBody, signature) {
  const stripe = getStripeClient();
  const { webhookSecret } = getStripeConfig();
  if (!webhookSecret) {
    throw new Error(
      "Webhook Secret manquant. Veuillez d\xE9finir STRIPE_WEBHOOK_SECRET ou BVALLEY_STRIPE_WEBHOOK_SECRET."
    );
  }
  return stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
}
var ALLOWED_CURRENCIES, ALLOWED_ORIGINS;
var init_stripe = __esm({
  "server/stripe.ts"() {
    "use strict";
    dotenv.config();
    ALLOWED_CURRENCIES = ["usd", "eur", "htg", "cad"];
    ALLOWED_ORIGINS = [
      "https://blessedvallyfoundation.org",
      "https://www.blessedvallyfoundation.org"
    ];
  }
});

// server/index.ts
init_stripe();
import express from "express";
import path from "node:path";
import dotenv2 from "dotenv";
dotenv2.config();
var app = express();
var PORT = process.env.PORT || 7e3;
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://api.stripe.com; frame-src https://js.stripe.com https://hooks.stripe.com; frame-ancestors 'self';"
  );
  next();
});
function createRateLimiter(options) {
  const store = /* @__PURE__ */ new Map();
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of store.entries()) {
      if (now > record.resetTime) {
        store.delete(ip);
      }
    }
  }, 5 * 60 * 1e3);
  interval.unref();
  return (req, res, next) => {
    if (process.env.NODE_ENV === "test") {
      return next();
    }
    const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown-client";
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
    res.setHeader("X-RateLimit-Reset", Math.ceil(record.resetTime / 1e3));
    if (record.count > options.max) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1e3);
      res.setHeader("Retry-After", retryAfter);
      res.status(429).json({
        error: options.message,
        retryAfter
      });
      return;
    }
    next();
  };
}
var checkoutLimiter = createRateLimiter({
  windowMs: 60 * 1e3,
  max: 20,
  message: "Trop de tentatives de don. Veuillez patienter une minute avant de r\xE9essayer."
});
var statusLimiter = createRateLimiter({
  windowMs: 60 * 1e3,
  max: 60,
  message: "Trop de requ\xEAtes de statut. Veuillez patienter un instant."
});
var generalApiLimiter = createRateLimiter({
  windowMs: 60 * 1e3,
  max: 120,
  message: "Trop de requ\xEAtes envoy\xE9es \xE0 l'API. Veuillez patienter."
});
app.use("/api/", generalApiLimiter);
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json", limit: "64kb" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];
    if (!signature || typeof signature !== "string") {
      res.status(400).send("En-t\xEAte stripe-signature manquant");
      return;
    }
    try {
      const event = await constructWebhookEvent(req.body, signature);
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          console.log(
            `[Stripe Webhook] Don valid\xE9: Session ${session.id}, Montant: ${session.amount_total} ${session.currency}`
          );
          break;
        }
        case "checkout.session.async_payment_succeeded": {
          const session = event.data.object;
          console.log(`[Stripe Webhook] Paiement asynchrone r\xE9ussi: ${session.id}`);
          break;
        }
        case "payment_intent.payment_failed": {
          const intent = event.data.object;
          console.warn(`[Stripe Webhook] \xC9chec du paiement: ${intent.id}`);
          break;
        }
        default:
          console.log(`[Stripe Webhook] \xC9v\xE9nement re\xE7u : ${event.type}`);
      }
      res.status(200).json({ received: true });
    } catch (err) {
      console.error("[Stripe Webhook Error]:", err.message);
      res.status(400).send("Erreur de validation cryptographique du Webhook.");
    }
  }
);
app.use(express.json({ limit: "16kb" }));
app.get("/api/stripe/config", (_req, res) => {
  const { publishableKey, isConfigured } = getStripeConfig();
  res.json({
    publishableKey,
    isConfigured
  });
});
app.get("/api/stripe/session-status", statusLimiter, async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    if (!sessionId) {
      res.status(400).json({ error: "Param\xE8tre session_id manquant" });
      return;
    }
    if (!isValidStripeSessionId(sessionId)) {
      res.status(400).json({ error: "Identifiant de session Stripe invalide" });
      return;
    }
    const { getSessionDetails: getSessionDetails2 } = await Promise.resolve().then(() => (init_stripe(), stripe_exports));
    const details = await getSessionDetails2(sessionId);
    res.json(details);
  } catch (error) {
    console.error("[Session Status Error]:", error?.message || error);
    res.status(500).json({
      error: process.env.NODE_ENV === "development" ? error?.message : "Erreur lors de la r\xE9cup\xE9ration s\xE9curis\xE9e de la session"
    });
  }
});
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
      origin
    } = req.body;
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
      origin: validatedOrigin
    });
    res.json(session);
  } catch (error) {
    console.error("[Stripe Session Error]:", error?.message || error);
    res.status(400).json({
      error: error?.message || "Erreur lors de la cr\xE9ation de la session de paiement s\xE9curis\xE9e"
    });
  }
});
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
var distPath = path.resolve(process.cwd(), "dist");
app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[BVF Server] Serveur actif sur http://localhost:${PORT}`);
  });
}
var index_default = app;
export {
  index_default as default
};
