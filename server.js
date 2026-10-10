var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/stripe.ts
var stripe_exports = {};
__export(stripe_exports, {
  constructWebhookEvent: () => constructWebhookEvent,
  createCheckoutSession: () => createCheckoutSession,
  getSessionDetails: () => getSessionDetails,
  getStripeClient: () => getStripeClient,
  getStripeConfig: () => getStripeConfig
});
import Stripe from "stripe";
import dotenv from "dotenv";
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
  if (!params.amountCents || params.amountCents < 50) {
    throw new Error("Le montant du don doit \xEAtre d'au moins 0.50 $ (50 cents).");
  }
  const currency = (params.currency || "usd").toLowerCase();
  const isMonthly = params.frequency === "monthly";
  const origin = params.origin || "https://blessedvallyfoundation.org";
  const productName = params.causeTitle || (isMonthly ? "Don Mensuel \u2014 Blessed Vally Foundation" : "Donation \u2014 Blessed Vally Foundation");
  const productDescription = isMonthly ? "Soutien mensuel r\xE9current pour la scolarisation, la nutrition et les missions en Ha\xEFti" : "Donation directe pour les programmes \xE9ducatifs et communautaires en Ha\xEFti";
  const lineItem = isMonthly ? {
    price_data: {
      currency,
      unit_amount: Math.round(params.amountCents),
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
      unit_amount: Math.round(params.amountCents),
      product_data: {
        name: productName,
        description: productDescription
      }
    },
    quantity: 1
  };
  const metadata = {
    donorName: params.donorName || "Anonyme",
    donorEmail: params.donorEmail || "",
    donorPhone: params.donorPhone || "",
    causeId: params.causeId || "general",
    causeTitle: params.causeTitle || "Fonds G\xE9n\xE9ral",
    frequency: params.frequency || "once",
    isTribute: params.isTribute ? "true" : "false",
    tributeName: params.tributeName || "",
    wantsReceipt: params.wantsReceipt !== false ? "true" : "false",
    organization: "Blessed Vally Foundation Inc."
  };
  const session = await stripe.checkout.sessions.create({
    line_items: [lineItem],
    mode: isMonthly ? "subscription" : "payment",
    customer_email: params.donorEmail || void 0,
    billing_address_collection: "auto",
    metadata,
    success_url: `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/donate?status=cancelled`
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
var init_stripe = __esm({
  "server/stripe.ts"() {
    "use strict";
    dotenv.config();
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
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
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
      res.status(400).send(`Erreur de validation Webhook : ${err.message}`);
    }
  }
);
app.use(express.json());
app.get("/api/stripe/config", (_req, res) => {
  const { publishableKey, isConfigured } = getStripeConfig();
  res.json({
    publishableKey,
    isConfigured
  });
});
app.get("/api/stripe/session-status", async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    if (!sessionId) {
      res.status(400).json({ error: "Param\xE8tre session_id manquant" });
      return;
    }
    const { getSessionDetails: getSessionDetails2 } = await Promise.resolve().then(() => (init_stripe(), stripe_exports));
    const details = await getSessionDetails2(sessionId);
    res.json(details);
  } catch (error) {
    console.error("[Session Status Error]:", error.message);
    res.status(500).json({ error: error.message || "Erreur de r\xE9cup\xE9ration de la session" });
  }
});
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
      origin
    } = req.body;
    const requestOrigin = origin || `${req.protocol}://${req.get("host")}`;
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
      origin: requestOrigin
    });
    res.json(session);
  } catch (error) {
    console.error("[Stripe Session Error]:", error.message);
    res.status(500).json({ error: error.message || "Erreur lors de la cr\xE9ation de la session Stripe" });
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
