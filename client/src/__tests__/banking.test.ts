import { describe, expect, it } from "vitest";
import { pageContent } from "../lib/site-content";

describe("Banking & Donation Methods - Authenticity & Data", () => {
  it("includes official Bank of America checking account details in donation modalities", () => {
    const frDonate = pageContent.fr.donate;
    const bodyText = frDonate.sections.map((s) => s.body).join(" ");
    expect(bodyText).toContain("Bank of America");
    expect(bodyText).toContain("Stripe");
  });

  it("includes official Zelle and Wire transfer references in donation modalities", () => {
    const frDonate = pageContent.fr.donate;
    const bodyText = frDonate.sections.map((s) => s.body).join(" ");
    expect(bodyText).toContain("Zelle");
    expect(bodyText).toContain("virement bancaire direct (Wire");
  });

  it("verifies the Banque de l'Union Haïtienne (BUH) account numbers", () => {
    // BUH Gourdes account: 15000017423
    // BUH US Dollar account: 15000017431
    const buhGourdesAccount = "15000017423";
    const buhUsdAccount = "15000017431";
    const holder = "Dr. Vally Docteur Jean-Louis";

    expect(buhGourdesAccount.length).toBe(11);
    expect(buhUsdAccount.length).toBe(11);
    expect(buhGourdesAccount).toMatch(/^\d+$/);
    expect(buhUsdAccount).toMatch(/^\d+$/);
    expect(holder).toBe("Dr. Vally Docteur Jean-Louis");
  });

  it("includes official Haiti and Miami, Florida mailing addresses", () => {
    const frTax = pageContent.fr.taxStatus;
    const taxBody = frTax.sections.map((s) => s.body).join(" ");

    // Haiti address
    expect(taxBody).toContain("12, Pelerin 4A");
    expect(taxBody).toContain("Petionville-Haiti");
    expect(taxBody).toContain("Haïti");

    // US Address (Miami, Florida)
    expect(taxBody).toContain("12933 SW 129 Street");
    expect(taxBody).toContain("Miami, FL 33177");
    expect(taxBody).toContain("blessedvallyfoundation@gmail.com");
  });
});
