import type { Language } from "./site-content";

export type DonationFrequency = "once" | "monthly";
export type Currency = "USD" | "EUR" | "HTG" | "CAD";

export interface DonationCause {
  id: string;
  label: Record<Language, string>;
  description: Record<Language, string>;
  badge: Record<Language, string>;
}

export interface AmountPreset {
  value: number;
  impact: Record<Language, string>;
  popular?: boolean;
}

export interface PaymentTab {
  id: "stripe" | "zelle" | "wire" | "buh" | "check";
  title: Record<Language, string>;
  badge: Record<Language, string>;
  subtitle: Record<Language, string>;
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  HTG: "HTG",
  CAD: "CA$",
};

export const DONATION_CAUSES: DonationCause[] = [
  {
    id: "general",
    label: {
      fr: "Fonds général (Là où l'urgence l'exige)",
      en: "General Fund (Where Most Needed)",
    },
    description: {
      fr: "Permet d'affecter les ressources aux besoins immédiats et urgents de la mission.",
      en: "Enables flexible resource allocation to immediate critical needs on the ground.",
    },
    badge: {
      fr: "Prioritaire",
      en: "Priority",
    },
  },
  {
    id: "education",
    label: {
      fr: "Écoles chrétiennes & Bourses scolaires",
      en: "Christian Schools & Student Scholarships",
    },
    description: {
      fr: "Financement des frais d'inscription, manuels scolaires et uniformes pour les enfants démunis.",
      en: "Underwrites tuition support, textbooks, learning supplies, and school kits for underprivileged children.",
    },
    badge: {
      fr: "Éducation",
      en: "Education",
    },
  },
  {
    id: "nutrition",
    label: {
      fr: "Cantines scolaires & Nutrition infantile",
      en: "School Canteens & Child Nutrition",
    },
    description: {
      fr: "Fourniture de repas chauds et nutritifs quotidiens pour soutenir la santé et l'attention en classe.",
      en: "Provides daily warm nutritious meals to sustain physical health and learning concentration.",
    },
    badge: {
      fr: "Santé",
      en: "Health",
    },
  },
  {
    id: "infrastructure",
    label: {
      fr: "Infrastructures, Énergie solaire & Eau potable (Dondon)",
      en: "Classroom Infrastructure, Solar Power & Clean Water (Dondon)",
    },
    description: {
      fr: "Construction et réfection des salles de classe, panneaux solaires et forage d'eau potable.",
      en: "Supports classroom renovation, solar installation, and deep-well drinking water access.",
    },
    badge: {
      fr: "Terrain",
      en: "Fieldwork",
    },
  },
  {
    id: "teacher_training",
    label: {
      fr: "Formation & Rémunération des enseignants",
      en: "Teacher Training & Educator Stipends",
    },
    description: {
      fr: "Valorisation des maîtres, ateliers pédagogiques et acquisition de compétences de pointe.",
      en: "Empowers dedicated local teachers with training seminars, modern pedagogical tools, and fair stipends.",
    },
    badge: {
      fr: "Impact",
      en: "Impact",
    },
  },
];

export const USD_PRESETS: AmountPreset[] = [
  {
    value: 25,
    impact: {
      fr: "Kits de fournitures scolaires et livres de lecture pour 2 élèves en Haïti.",
      en: "Complete school supply kits and reading books for 2 students in Haiti.",
    },
  },
  {
    value: 50,
    impact: {
      fr: "Repas chauds et équilibrés pour une classe entière pendant 2 semaines.",
      en: "Warm balanced meals for an entire classroom for 2 full weeks.",
    },
  },
  {
    value: 100,
    popular: true,
    impact: {
      fr: "Scolarité complète, suivi de santé et soutien nutritionnel d'un enfant pendant 1 mois.",
      en: "Full schooling, health checkups, and nutritional support for 1 child for an entire month.",
    },
  },
  {
    value: 250,
    impact: {
      fr: "Équipement informatique et matériel pédagogique pour une classe rurale.",
      en: "Computer learning gear and interactive pedagogical tools for a rural classroom.",
    },
  },
  {
    value: 500,
    impact: {
      fr: "Participation majeure à la toiture, aux panneaux solaires ou au forage d'eau à Dondon.",
      en: "Major contribution toward classroom roofing, solar panels, or borehole water in Dondon.",
    },
  },
];

export const PAYMENT_TABS: PaymentTab[] = [
  {
    id: "stripe",
    title: {
      fr: "Carte bancaire (En ligne)",
      en: "Credit / Debit Card (Online)",
    },
    badge: {
      fr: "Immédiat & Sécurisé",
      en: "Instant & Secure",
    },
    subtitle: {
      fr: "Paiement chiffré par Stripe avec reçu instantané par courriel",
      en: "Encrypted checkout via Stripe with instant receipt sent to your email",
    },
  },
  {
    id: "zelle",
    title: {
      fr: "Zelle (USA)",
      en: "Zelle (USA)",
    },
    badge: {
      fr: "0% Frais",
      en: "0% Fees",
    },
    subtitle: {
      fr: "Transfert direct instantané depuis votre banque américaine",
      en: "Direct zero-fee transfer from your U.S. mobile banking app",
    },
  },
  {
    id: "wire",
    title: {
      fr: "Virement Bank of America",
      en: "Bank of America Wire",
    },
    badge: {
      fr: "Wire direct",
      en: "Direct Wire",
    },
    subtitle: {
      fr: "Virement bancaire professionnel ou personnel aux États-Unis",
      en: "Domestic or international bank wire transfer in the United States",
    },
  },
  {
    id: "buh",
    title: {
      fr: "Haïti Local (BUH)",
      en: "Haiti Local (BUH)",
    },
    badge: {
      fr: "Gourdes & USD",
      en: "Gourdes & USD",
    },
    subtitle: {
      fr: "Dépôts et virements bancaires locaux en Haïti",
      en: "Local direct deposit and transfer via Banque de l'Union Haïtienne",
    },
  },
  {
    id: "check",
    title: {
      fr: "Chèque postal (USA)",
      en: "Mailed Check (USA)",
    },
    badge: {
      fr: "Adresse Miami",
      en: "Miami Address",
    },
    subtitle: {
      fr: "Envoi postal par chèque à l'ordre de Blessed Vally Foundation Inc.",
      en: "Mailed check payable to Blessed Vally Foundation Inc. in Miami, Florida",
    },
  },
];

/**
 * Calcule l'estimation du coût réel après déduction fiscale (estimé à 35% en moyenne aux USA pour une 501c3)
 */
export function calculateTaxDeduction(amount: number, rate = 0.35): {
  deduction: number;
  netCost: number;
} {
  const safeAmount = Math.max(0, isNaN(amount) ? 0 : amount);
  const deduction = Math.round(safeAmount * rate * 100) / 100;
  const netCost = Math.max(0, Math.round((safeAmount - deduction) * 100) / 100);
  return { deduction, netCost };
}

/**
 * Formatage d'un montant selon la devise
 */
export function formatCurrencyAmount(amount: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency] || "$";
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  if (currency === "HTG") {
    return `${formatted} HTG`;
  }
  return `${symbol}${formatted}`;
}

/**
 * Renvoie une description d'impact adaptée au montant saisi
 */
export function getDynamicImpactMessage(
  amount: number,
  currency: Currency,
  frequency: DonationFrequency,
  language: Language
): string {
  // Convertir approximativement en équivalent USD pour l'impact
  let usdEquivalent = amount;
  if (currency === "HTG") usdEquivalent = amount / 132;
  else if (currency === "EUR") usdEquivalent = amount * 1.08;
  else if (currency === "CAD") usdEquivalent = amount * 0.74;

  const isMonthly = frequency === "monthly";

  if (usdEquivalent < 15) {
    return language === "fr"
      ? `${isMonthly ? "Chaque mois, votre" : "Votre"} don contribue à l'achat de cahiers et crayons pour les écoliers de Dondon.`
      : `${isMonthly ? "Each month, your" : "Your"} gift contributes toward notebooks and pencils for students in Dondon.`;
  }

  if (usdEquivalent < 40) {
    return language === "fr"
      ? `${isMonthly ? "Chaque mois, vous équipez" : "Vous offrez"} un kit complet de manuels scolaires et d'apprentissage pour 2 enfants.`
      : `${isMonthly ? "Every month, you equip" : "You provide"} a full learning textbook set and school supplies for 2 children.`;
  }

  if (usdEquivalent < 80) {
    return language === "fr"
      ? `${isMonthly ? "Chaque mois, vous financez" : "Vous financez"} deux semaines entières de repas nutritifs chauds pour une classe.`
      : `${isMonthly ? "Every month, you fund" : "You fund"} two entire weeks of warm, nutritious meals for an entire classroom.`;
  }

  if (usdEquivalent < 200) {
    return language === "fr"
      ? `${isMonthly ? "Chaque mois, vous assurez" : "Vous assurez"} la scolarité intégrale, les soins de base et le repas d'un enfant pendant 1 mois.`
      : `${isMonthly ? "Each month, you sustain" : "You sustain"} full tuition, basic health monitoring, and school meals for a child for 1 month.`;
  }

  if (usdEquivalent < 400) {
    return language === "fr"
      ? `${isMonthly ? "Chaque mois, vous soutenez" : "Vous soutenez"} l'équipement technologique d'une salle de classe ou une bourse complète d'études.`
      : `${isMonthly ? "Each month, you support" : "You support"} technological classroom gear or an advanced educational scholarship.`;
  }

  return language === "fr"
    ? `${isMonthly ? "Chaque mois, vous accélérez" : "Vous accélérez"} directement les chantiers de construction scolaire, l'eau potable et l'énergie solaire à Dondon.`
    : `${isMonthly ? "Each month, you directly" : "You directly"} advance school construction, clean water well-drilling, and solar power in Dondon.`;
}
