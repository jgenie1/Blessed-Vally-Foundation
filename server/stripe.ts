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

export const ALLOWED_CURRENCIES = ["usd", "eur", "htg", "cad"] as const;
export type AllowedCurrency = (typeof ALLOWED_CURRENCIES)[number];

export const ALLOWED_ORIGINS = [
  "https://blessedvallyfoundation.org",
  "https://www.blessedvallyfoundation.org",
] as const;

/**
 * Valide et assainit l'origine URL pour prévenir les failles d'Open Redirect et de Phishing
 */
export function sanitizeOrigin(candidateOrigin?: string, requestHost?: string): string {
  const defaultOrigin = "https://blessedvallyfoundation.org";

  if (!candidateOrigin) {
    if (requestHost && (requestHost.includes("localhost") || requestHost.includes("127.0.0.1"))) {
      return `http://${requestHost}`;
    }
    return defaultOrigin;
  }

  try {
    const parsed = new URL(candidateOrigin);
    // Autoriser le développement local sécurisé
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return parsed.origin;
    }
    // Autoriser les domaines officiels vérifiés en HTTPS
    if (
      parsed.protocol === "https:" &&
      ALLOWED_ORIGINS.includes(parsed.origin.toLowerCase() as any)
    ) {
      return parsed.origin;
    }
  } catch {
    // URL invalide ou malformée
  }

  return defaultOrigin;
}

/**
 * Assainit une chaîne de caractères en retirant les caractères de contrôle
 * et en limitant sa longueur pour prévenir l'injection dans les métadonnées Stripe
 */
export function sanitizeString(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  const cleaned = input.replace(/[\x00-\x1F\x7F]/g, "").trim();
  return cleaned.slice(0, maxLength);
}

/**
 * Valide le format d'une adresse email selon la norme RFC 5321
 */
export function isValidEmail(email: unknown): boolean {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  // Standard HTML5 / WHATWG email regex
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Valide le format d'un Checkout Session ID Stripe
 */
export function isValidStripeSessionId(sessionId: unknown): boolean {
  if (typeof sessionId !== "string") return false;
  return /^cs_(test|live)_[a-zA-Z0-9_-]{20,120}$/.test(sessionId.trim());
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
 * Crée une session Stripe Checkout pour un don ponctuel ou mensuel avec contrôles stricts
 */
export async function createCheckoutSession(
  params: CreateCheckoutParams
): Promise<{ url: string; id: string }> {
  const stripe = getStripeClient();

  // 1. Validation stricte du montant (minimum 50 cents, maximum 100 000 USD, nombre entier positif)
  if (
    typeof params.amountCents !== "number" ||
    !Number.isFinite(params.amountCents) ||
    !Number.isSafeInteger(params.amountCents) ||
    params.amountCents < 50
  ) {
    throw new Error("Le montant du don doit être d'au moins 0.50 $ (50 cents).");
  }

  if (params.amountCents > 10_000_000) {
    throw new Error("Le montant du don dépasse la limite maximale autorisée.");
  }

  // 2. Validation stricte de la devise (whitelist)
  const rawCurrency = (params.currency || "usd").toLowerCase();
  if (!ALLOWED_CURRENCIES.includes(rawCurrency as AllowedCurrency)) {
    throw new Error("Devise non prise en charge.");
  }
  const currency = rawCurrency;

  // 3. Validation de la fréquence
  const isMonthly = params.frequency === "monthly";

  // 4. Validation et assainissement de l'email
  if (params.donorEmail && !isValidEmail(params.donorEmail)) {
    throw new Error("Adresse email invalide.");
  }
  const sanitizedEmail = params.donorEmail ? params.donorEmail.trim().toLowerCase() : "";

  // 5. Protection contre les redirections ouvertes (Open Redirect)
  const safeOrigin = sanitizeOrigin(params.origin);

  // 6. Nettoyage sécurisé des textes pour métadonnées Stripe
  const safeDonorName = sanitizeString(params.donorName || "Anonyme", 100);
  const safeDonorPhone = sanitizeString(params.donorPhone || "", 30);
  const safeCauseId = sanitizeString(params.causeId || "general", 50);
  const safeCauseTitle = sanitizeString(params.causeTitle || "Fonds Général", 100);
  const safeTributeName = sanitizeString(params.tributeName || "", 100);

  const productName =
    safeCauseTitle ||
    (isMonthly
      ? "Don Mensuel — Blessed Vally Foundation"
      : "Donation — Blessed Vally Foundation");

  const productDescription = isMonthly
    ? "Soutien mensuel récurrent pour la scolarisation, la nutrition et les missions en Haïti"
    : "Donation directe pour les programmes éducatifs et communautaires en Haïti";

  // 7. Configuration du line item selon la fréquence
  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = isMonthly
    ? {
        price_data: {
          currency,
          unit_amount: params.amountCents,
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
          unit_amount: params.amountCents,
          product_data: {
            name: productName,
            description: productDescription,
          },
        },
        quantity: 1,
      };

  const metadata: Record<string, string> = {
    donorName: safeDonorName,
    donorEmail: sanitizedEmail,
    donorPhone: safeDonorPhone,
    causeId: safeCauseId,
    causeTitle: safeCauseTitle,
    frequency: isMonthly ? "monthly" : "once",
    isTribute: params.isTribute ? "true" : "false",
    tributeName: safeTributeName,
    wantsReceipt: params.wantsReceipt !== false ? "true" : "false",
    organization: "Blessed Vally Foundation Inc.",
  };

  const session = await stripe.checkout.sessions.create({
    line_items: [lineItem],
    mode: isMonthly ? "subscription" : "payment",
    customer_email: sanitizedEmail || undefined,
    billing_address_collection: "auto",
    payment_intent_data:
      !isMonthly && sanitizedEmail
        ? { receipt_email: sanitizedEmail }
        : undefined,
    metadata,
    success_url: `${safeOrigin}/donate?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${safeOrigin}/donate?status=cancelled`,
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
 * Valide et décode un événement Stripe Webhook entrant avec vérification cryptographique
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
