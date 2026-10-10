import { describe, expect, it } from "vitest";
import {
  calculateTaxDeduction,
  DONATION_CAUSES,
  formatCurrencyAmount,
  getDynamicImpactMessage,
  PAYMENT_TABS,
  USD_PRESETS,
  type Currency,
  type DonationFrequency,
} from "../lib/donation-data";

describe("Donation Data & Calculators", () => {
  describe("calculateTaxDeduction", () => {
    it("correctly estimates 35% tax deduction and net cost for 100 USD", () => {
      const result = calculateTaxDeduction(100);
      expect(result.deduction).toBe(35);
      expect(result.netCost).toBe(65);
    });

    it("handles zero and negative amounts safely", () => {
      const zero = calculateTaxDeduction(0);
      expect(zero.deduction).toBe(0);
      expect(zero.netCost).toBe(0);

      const negative = calculateTaxDeduction(-50);
      expect(negative.deduction).toBe(0);
      expect(negative.netCost).toBe(0);
    });

    it("supports custom deduction rate", () => {
      const result = calculateTaxDeduction(100, 0.5);
      expect(result.deduction).toBe(50);
      expect(result.netCost).toBe(50);
    });
  });

  describe("formatCurrencyAmount", () => {
    it("formats USD amounts with dollar prefix", () => {
      expect(formatCurrencyAmount(50, "USD")).toBe("$50");
      expect(formatCurrencyAmount(99.5, "USD")).toBe("$99.50");
    });

    it("formats EUR amounts with euro symbol", () => {
      expect(formatCurrencyAmount(75, "EUR")).toBe("€75");
    });

    it("formats HTG amounts with HTG suffix", () => {
      expect(formatCurrencyAmount(5000, "HTG")).toBe("5,000 HTG");
    });

    it("formats CAD amounts with CA$ prefix", () => {
      expect(formatCurrencyAmount(120, "CAD")).toBe("CA$120");
    });
  });

  describe("getDynamicImpactMessage", () => {
    it("provides appropriate impact message for small amounts in FR and EN", () => {
      const frMsg = getDynamicImpactMessage(10, "USD", "once", "fr");
      const enMsg = getDynamicImpactMessage(10, "USD", "once", "en");

      expect(frMsg).toContain("cahiers et crayons");
      expect(enMsg).toContain("notebooks and pencils");
    });

    it("adapts message for monthly recurring donations", () => {
      const frMonthly = getDynamicImpactMessage(50, "USD", "monthly", "fr");
      const enMonthly = getDynamicImpactMessage(50, "USD", "monthly", "en");

      expect(frMonthly).toContain("Chaque mois");
      expect(enMonthly).toContain("Every month");
    });

    it("converts HTG currency proportionally to provide realistic impact", () => {
      // 15,000 HTG ~ 113 USD => should trigger the 100-200 USD bracket (scolarité intégrale)
      const htgMsg = getDynamicImpactMessage(15000, "HTG", "once", "fr");
      expect(htgMsg).toContain("scolarité intégrale");
    });

    it("handles large gifts with construction & infrastructure focus", () => {
      const largeMsg = getDynamicImpactMessage(500, "USD", "once", "fr");
      expect(largeMsg).toContain("chantiers de construction scolaire");
    });
  });

  describe("Donation Causes Integrity", () => {
    it("contains 5 structured designated causes with bilingual metadata", () => {
      expect(DONATION_CAUSES).toHaveLength(5);
      for (const cause of DONATION_CAUSES) {
        expect(cause.id).toBeTruthy();
        expect(cause.label.fr).toBeTruthy();
        expect(cause.label.en).toBeTruthy();
        expect(cause.description.fr).toBeTruthy();
        expect(cause.description.en).toBeTruthy();
        expect(cause.badge.fr).toBeTruthy();
        expect(cause.badge.en).toBeTruthy();
      }
    });

    it("includes general fund, education, nutrition, and infrastructure causes", () => {
      const ids = DONATION_CAUSES.map((c) => c.id);
      expect(ids).toContain("general");
      expect(ids).toContain("education");
      expect(ids).toContain("nutrition");
      expect(ids).toContain("infrastructure");
      expect(ids).toContain("teacher_training");
    });
  });

  describe("Presets & Modalities", () => {
    it("includes official presets (25, 50, 100, 250, 500)", () => {
      const values = USD_PRESETS.map((p) => p.value);
      expect(values).toEqual([25, 50, 100, 250, 500]);
    });

    it("defines 5 verified payment methods", () => {
      const methodIds = PAYMENT_TABS.map((t) => t.id);
      expect(methodIds).toEqual(["stripe", "zelle", "wire", "buh", "check"]);
    });
  });
});
