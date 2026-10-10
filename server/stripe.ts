import Stripe from "stripe";
import dotenv from "dotenv";

// Charge les variables d'environnement depuis .env si présentes
dotenv.config();

export interface CreateCheckoutParams {
  donorName?: string;
  donorEmail: string;
  donorPhone?: string;
  amountCents: number;
  currency?: string;
  frequency?: "once" | "monthly";
  causeId?: string;
  causeTitle?: string;
  isTribute?: boolean;
  tributeName?: string;
  wantsReceipt?: boolean;
  origin?: string;
}

/**
 * Récupère les clés Stripe configurées (supporte les noms standards et BVALLEY_*)
 */
export function getStripeConfig() {
  const secretKey =
    process.env.STRIPE_SECRET_KEY || process.env.BVALLEY_STRIPE_SECRET_KEY || "";
  const publishableKey =
    process.env.STRIPE_PUBLISHABLE_KEY ||
    process.env.BVALLEY_STRIPE_PUBLISHABLE_KEY ||
    "";
  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET ||
    process.env.BVALLEY_STRIPE_WEBHOOK_SECRET ||
    "";

  return {
    secretKey,
    publishableKey,
    webhookSecret,
    isConfigured: Boolean(secretKey && !secretKey.includes("placeholder")),
  };
}

/**
 * Instance du client Stripe initialisée avec la clé secrète
 */
export function getStripeClient(): Stripe {
  const { secretKey, isConfigured } = getStripeConfig();
  if (!isConfigured) {
    throw new Error(
      "Stripe Secret Key manquante. Veuillez définir STRIPE_SECRET_KEY ou BVALLEY_STRIPE_SECRET_KEY dans votre fichier .env."
    );
  }
  return new Stripe(secretKey);
}

/**
 * Crée une session Stripe Checkout pour un don ponctuel ou mensuel
 */
export async function createCheckoutSession(
  params: CreateCheckoutParams
): Promise<{ url: string; id: string }> {
  const stripe = getStripeClient();

  if (!params.amountCents || params.amountCents < 50) {
    throw new Error("Le montant du don doit être d'au moins 0.50 $ (50 cents).");
  }

  const currency = (params.currency || "usd").toLowerCase();
  const isMonthly = params.frequency === "monthly";
  const origin = params.origin || "https://blessedvallyfoundation.org";

  const productName =
    params.causeTitle ||
    (isMonthly
      ? "Don Mensuel — Blessed Vally Foundation"
      : "Donation — Blessed Vally Foundation");

  const productDescription = isMonthly
    ? "Soutien mensuel récurrent pour la scolarisation, la nutrition et les missions en Haïti"
    : "Donation directe pour les programmes éducatifs et communautaires en Haïti";

  // Configuration du line item selon la fréquence
  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = isMonthly
    ? {
        price_data: {
          currency,
          unit_amount: Math.round(params.amountCents),
          recurring: {
            interval: "month",
          },
          product_data: {
            name: productName,
            description: productDescription,
          },
        },
        quantity: 1,
      }
    : {
        price_data: {
          currency,
          unit_amount: Math.round(params.amountCents),
          product_data: {
            name: productName,
            description: productDescription,
          },
        },
        quantity: 1,
      };

  const metadata: Record<string, string> = {
    donorName: params.donorName || "Anonyme",
    donorEmail: params.donorEmail || "",
    donorPhone: params.donorPhone || "",
    causeId: params.causeId || "general",
    causeTitle: params.causeTitle || "Fonds Général",
    frequency: params.frequency || "once",
    isTribute: params.isTribute ? "true" : "false",
    tributeName: params.tributeName || "",
    wantsReceipt: params.wantsReceipt !== false ? "true" : "false",
    organization: "Blessed Vally Foundation Inc.",
  };

  const session = await stripe.checkout.sessions.create({
    line_items: [lineItem],
    mode: isMonthly ? "subscription" : "payment",
    customer_email: params.donorEmail || undefined,
    billing_address_collection: "auto",
    metadata,
    success_url: `${origin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/donate?status=cancelled`,
  });

  if (!session.url) {
    throw new Error("Impossible d'obtenir l'URL de redirection Stripe Checkout.");
  }

  return {
    url: session.url,
    id: session.id,
  };
}

/**
 * Récupère les détails d'une session Stripe terminée pour afficher le récapitulatif
 */
export async function getSessionDetails(sessionId: string) {
  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return {
    id: session.id,
    status: session.status,
    paymentStatus: session.payment_status,
    amountTotal: session.amount_total ? session.amount_total / 100 : 0,
    currency: (session.currency || "usd").toUpperCase(),
    customerEmail:
      session.customer_details?.email || session.customer_email || "",
    donorName:
      session.metadata?.donorName ||
      session.customer_details?.name ||
      "Bienfaiteur de la Fondation",
    causeTitle: session.metadata?.causeTitle || "Fonds Général",
    frequency: session.metadata?.frequency || "once",
    created: session.created,
  };
}

/**
 * Valide et décode un événement Stripe Webhook entrant
 */
export async function constructWebhookEvent(
  rawBody: string | Buffer,
  signature: string
): Promise<Stripe.Event> {
  const stripe = getStripeClient();
  const { webhookSecret } = getStripeConfig();

  if (!webhookSecret) {
    throw new Error(
      "Webhook Secret manquant. Veuillez définir STRIPE_WEBHOOK_SECRET ou BVALLEY_STRIPE_WEBHOOK_SECRET."
    );
  }

  return stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
}
