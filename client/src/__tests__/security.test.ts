import { describe, expect, it } from "vitest";
import {
  ALLOWED_CURRENCIES,
  ALLOWED_ORIGINS,
  createCheckoutSession,
  isValidEmail,
  isValidStripeSessionId,
  sanitizeOrigin,
  sanitizeString,
} from "../../../server/stripe";

describe("Security Safeguards & Defensive Hardening", () => {
  describe("Open Redirect & Phishing Defense (sanitizeOrigin)", () => {
    it("accepts verified official foundation origins in HTTPS", () => {
      expect(sanitizeOrigin("https://blessedvallyfoundation.org")).toBe(
        "https://blessedvallyfoundation.org"
      );
      expect(sanitizeOrigin("https://www.blessedvallyfoundation.org")).toBe(
        "https://www.blessedvallyfoundation.org"
      );
    });

    it("accepts local development origins", () => {
      expect(sanitizeOrigin("http://localhost:7000")).toBe("http://localhost:7000");
      expect(sanitizeOrigin("http://127.0.0.1:7000")).toBe("http://127.0.0.1:7000");
    });

    it("rejects malicious phishing domains and falls back to canonical official domain", () => {
      expect(sanitizeOrigin("https://evil-attacker.com")).toBe(
        "https://blessedvallyfoundation.org"
      );
      expect(sanitizeOrigin("https://blessedvallyfoundation.org.attacker.com")).toBe(
        "https://blessedvallyfoundation.org"
      );
      expect(sanitizeOrigin("http://blessedvallyfoundation.org")).toBe(
        "https://blessedvallyfoundation.org" // Rejects insecure HTTP for production domain
      );
    });

    it("handles malformed, javascript:, or empty origins safely", () => {
      expect(sanitizeOrigin("javascript:alert(1)")).toBe(
        "https://blessedvallyfoundation.org"
      );
      expect(sanitizeOrigin("not-a-valid-url")).toBe(
        "https://blessedvallyfoundation.org"
      );
      expect(sanitizeOrigin("")).toBe("https://blessedvallyfoundation.org");
      expect(sanitizeOrigin(undefined)).toBe("https://blessedvallyfoundation.org");
    });
  });

  describe("Input Sanitization & Length Clamping (sanitizeString)", () => {
    it("strips ASCII control characters and trims whitespace", () => {
      const malicious = "\x00\x08Admin Name\x1F\x7F   ";
      expect(sanitizeString(malicious, 50)).toBe("Admin Name");
    });

    it("strictly truncates string to maxLength preventing Stripe metadata overflow", () => {
      const longInput = "A".repeat(500);
      const clamped = sanitizeString(longInput, 100);
      expect(clamped.length).toBe(100);
    });

    it("handles non-string inputs gracefully", () => {
      expect(sanitizeString(null, 50)).toBe("");
      expect(sanitizeString(undefined, 50)).toBe("");
      expect(sanitizeString(12345, 50)).toBe("");
    });
  });

  describe("Email Format Validation (isValidEmail - RFC 5321)", () => {
    it("approves valid email addresses", () => {
      expect(isValidEmail("donor@example.com")).toBe(true);
      expect(isValidEmail("first.last+tag@sub.domain.org")).toBe(true);
      expect(isValidEmail("contact@blessedvallyfoundation.org")).toBe(true);
    });

    it("rejects invalid, malformed, or injection emails", () => {
      expect(isValidEmail("plainaddress")).toBe(false);
      expect(isValidEmail("@missingusername.com")).toBe(false);
      expect(isValidEmail("username@.com")).toBe(false);
      expect(isValidEmail("user name@example.com")).toBe(false);
      expect(isValidEmail("user@example..com")).toBe(false);
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail(null)).toBe(false);
    });

    it("rejects emails exceeding maximum RFC length (254 chars)", () => {
      const hugeEmail = `${"a".repeat(250)}@example.com`;
      expect(isValidEmail(hugeEmail)).toBe(false);
    });
  });

  describe("Stripe Session ID Validation (isValidStripeSessionId)", () => {
    it("approves valid Stripe test and live checkout session identifiers", () => {
      expect(
        isValidStripeSessionId(
          "cs_test_a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V2w3X4y5Z6"
        )
      ).toBe(true);
      expect(
        isValidStripeSessionId(
          "cs_live_a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V2w3X4y5Z6"
        )
      ).toBe(true);
    });

    it("rejects directory traversal and path injection attempts", () => {
      expect(isValidStripeSessionId("../../../etc/passwd")).toBe(false);
      expect(isValidStripeSessionId("..\\..\\windows\\win.ini")).toBe(false);
    });

    it("rejects SQL and XSS injection payloads", () => {
      expect(isValidStripeSessionId("cs_test_' OR '1'='1")).toBe(false);
      expect(isValidStripeSessionId("<script>alert(1)</script>")).toBe(false);
      expect(isValidStripeSessionId("cs_test_drop_table")).toBe(false);
    });

    it("rejects empty or malformed session IDs", () => {
      expect(isValidStripeSessionId("")).toBe(false);
      expect(isValidStripeSessionId("cs_")).toBe(false);
      expect(isValidStripeSessionId("sess_12345")).toBe(false);
      expect(isValidStripeSessionId(null)).toBe(false);
    });
  });

  describe("Checkout Creation Boundaries & Currency Whitelist", () => {
    it("strictly supports only USD, EUR, HTG, and CAD", () => {
      expect(ALLOWED_CURRENCIES).toEqual(["usd", "eur", "htg", "cad"]);
    });

    it("rejects unsupported currencies", async () => {
      process.env.STRIPE_SECRET_KEY = "sk_test_mock_1234567890abcdef";

      await expect(
        createCheckoutSession({
          donorEmail: "test@example.com",
          amountCents: 5000,
          currency: "btc", // Bitcoin not allowed
        })
      ).rejects.toThrow(/Devise non prise en charge/);

      delete process.env.STRIPE_SECRET_KEY;
    });

    it("rejects amounts exceeding $100,000 max limit to prevent overflow or abuse", async () => {
      process.env.STRIPE_SECRET_KEY = "sk_test_mock_1234567890abcdef";

      await expect(
        createCheckoutSession({
          donorEmail: "test@example.com",
          amountCents: 10_000_001, // 1 cent over $100,000
        })
      ).rejects.toThrow(/dépasse la limite/);

      delete process.env.STRIPE_SECRET_KEY;
    });

    it("rejects non-integer and negative amounts", async () => {
      process.env.STRIPE_SECRET_KEY = "sk_test_mock_1234567890abcdef";

      await expect(
        createCheckoutSession({
          donorEmail: "test@example.com",
          amountCents: -500,
        })
      ).rejects.toThrow(/au moins 0.50 \$/);

      await expect(
        createCheckoutSession({
          donorEmail: "test@example.com",
          amountCents: 100.5, // fractional float cents not allowed
        })
      ).rejects.toThrow(/au moins 0.50 \$/);

      delete process.env.STRIPE_SECRET_KEY;
    });
  });
});
