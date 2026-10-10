import { describe, expect, it } from "vitest";
import {
  createCheckoutSession,
  getStripeConfig,
} from "../../../server/stripe";

describe("Stripe Gateway Configuration & Safety", () => {
  it("detects unconfigured or missing secret key gracefully", () => {
    // Dans l'environnement de test par défaut sans clé externe
    const config = getStripeConfig();
    expect(config).toBeDefined();
    expect(typeof config.isConfigured).toBe("boolean");
  });

  it("throws clear error when attempting checkout with unconfigured Stripe key", async () => {
    // Si la clé n'est pas définie, une erreur explicite doit être levée
    const originalSecret = process.env.STRIPE_SECRET_KEY;
    const originalBvSecret = process.env.BVALLEY_STRIPE_SECRET_KEY;

    delete process.env.STRIPE_SECRET_KEY;
    delete process.env.BVALLEY_STRIPE_SECRET_KEY;

    await expect(
      createCheckoutSession({
        donorEmail: "test@example.com",
        amountCents: 5000,
      })
    ).rejects.toThrow(/Stripe Secret Key manquante/);

    // Restaurer les variables d'origine
    if (originalSecret) process.env.STRIPE_SECRET_KEY = originalSecret;
    if (originalBvSecret) process.env.BVALLEY_STRIPE_SECRET_KEY = originalBvSecret;
  });

  it("validates that amountCents cannot be below 50 cents", async () => {
    // Même si une clé factice est fournie, le montant minimum doit être protégé
    process.env.STRIPE_SECRET_KEY = "sk_test_mock_1234567890abcdef";

    await expect(
      createCheckoutSession({
        donorEmail: "test@example.com",
        amountCents: 20, // 0.20$ is below Stripe's 0.50$ minimum
      })
    ).rejects.toThrow(/au moins 0.50 \$/);

    delete process.env.STRIPE_SECRET_KEY;
  });
});
