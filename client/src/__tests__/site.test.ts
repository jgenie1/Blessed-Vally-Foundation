import { describe, expect, it } from "vitest";
import {
  pageContent,
  pathToPage,
  routePaths,
  type Language,
  type PageKey,
} from "../lib/site-content";

describe("Blessed Vally Foundation - Route Mapping", () => {
  it("maps core paths to correct PageKeys", () => {
    expect(pathToPage["/"]).toBe("home");
    expect(pathToPage["/about"]).toBe("about");
    expect(pathToPage["/haiti"]).toBe("haiti");
    expect(pathToPage["/donate"]).toBe("donate");
    expect(pathToPage["/contact"]).toBe("contact");
    expect(pathToPage["/statut-fiscal"]).toBe("taxStatus");
    expect(pathToPage["/privacy"]).toBe("privacy");
    expect(pathToPage["/terms"]).toBe("terms");
    expect(pathToPage["/news"]).toBe("news");
  });

  it("maps French alias paths for seamless bilingual navigation", () => {
    expect(pathToPage["/a-propos"]).toBe("about");
    expect(pathToPage["/travaux"]).toBe("haiti");
    expect(pathToPage["/faire-un-don"]).toBe("donate");
    expect(pathToPage["/politique-de-confidentialite"]).toBe("privacy");
    expect(pathToPage["/conditions-d-utilisation"]).toBe("terms");
    expect(pathToPage["/recus-fiscaux"]).toBe("taxStatus");
    expect(pathToPage["/coin-de-la-fondatrice"]).toBe("leadership");
    expect(pathToPage["/coindelafondatrice"]).toBe("leadership");
  });

  it("provides canonical routePaths for all key pages", () => {
    expect(routePaths.home).toBe("/");
    expect(routePaths.about).toBe("/about");
    expect(routePaths.haiti).toBe("/haiti");
    expect(routePaths.donate).toBe("/donate");
    expect(routePaths.contact).toBe("/contact");
    expect(routePaths.taxStatus).toBe("/statut-fiscal");
    expect(routePaths.privacy).toBe("/privacy");
    expect(routePaths.terms).toBe("/terms");
  });
});

describe("Blessed Vally Foundation - Bilingual Content Integrity", () => {
  const languages: Language[] = ["fr", "en"];
  const pageKeys: Array<Exclude<PageKey, "home">> = [
    "about",
    "mission",
    "education",
    "faith",
    "community",
    "haiti",
    "leadership",
    "partnerships",
    "news",
    "getInvolved",
    "donate",
    "contact",
    "taxStatus",
    "privacy",
    "terms",
  ];

  for (const lang of languages) {
    describe(`Language: ${lang}`, () => {
      for (const page of pageKeys) {
        it(`has complete structure for page '${page}'`, () => {
          const content = pageContent[lang][page];
          expect(content).toBeDefined();
          expect(content.title.length).toBeGreaterThan(0);
          expect(content.kicker.length).toBeGreaterThan(0);
          expect(content.description.length).toBeGreaterThan(0);
          expect(content.metaTitle.length).toBeGreaterThan(0);
          expect(content.metaDescription.length).toBeGreaterThan(0);
          expect(content.sections.length).toBeGreaterThan(0);

          for (const section of content.sections) {
            expect(section.title.length).toBeGreaterThan(0);
            expect(section.body.length).toBeGreaterThan(0);
          }
        });
      }
    });
  }
});

describe("Blessed Vally Foundation - Official Directory & Addresses", () => {
  it("includes the Haiti official address in both French and English tax status", () => {
    const frTaxAddresses = pageContent.fr.taxStatus.sections.find(
      (s) => s.eyebrow.includes("Adresses") || s.title.includes("Adresse")
    );
    expect(frTaxAddresses).toBeDefined();
    expect(frTaxAddresses?.body).toContain("12, Pelerin 4A");
    expect(frTaxAddresses?.body).toContain("Petionville-Haiti");
    expect(frTaxAddresses?.body).toContain("Haïti");

    const enTaxAddresses = pageContent.en.taxStatus.sections.find(
      (s) => s.eyebrow.includes("Addresses") || s.title.includes("address")
    );
    expect(enTaxAddresses).toBeDefined();
    expect(enTaxAddresses?.body).toContain("12, Pelerin 4A");
    expect(enTaxAddresses?.body).toContain("Petionville-Haiti");
  });

  it("includes the Haiti official address in contact directories", () => {
    const frContactDir = pageContent.fr.contact.sections[0];
    expect(frContactDir.body).toContain("12, Pelerin 4A");
    expect(frContactDir.body).toContain("Petionville-Haiti");

    const enContactDir = pageContent.en.contact.sections[0];
    expect(enContactDir.body).toContain("12, Pelerin 4A");
    expect(enContactDir.body).toContain("Petionville-Haiti");
  });

  it("includes all verified foundation telephone numbers", () => {
    const frTaxPhones = pageContent.fr.taxStatus.sections.find((s) =>
      s.eyebrow.includes("Téléphones")
    );
    expect(frTaxPhones).toBeDefined();
    expect(frTaxPhones?.body).toContain("+1 (786) 443-0472");
    expect(frTaxPhones?.body).toContain("+1 (845) 655-7399");
    expect(frTaxPhones?.body).toContain("+509 3618-4340");
    expect(frTaxPhones?.body).toContain("+509 4310-8621");
    expect(frTaxPhones?.body).toContain("+509 48 34 2601");
  });

  it("includes registered Florida Non-Profit entity details", () => {
    const frCorp = pageContent.fr.taxStatus.sections[0];
    expect(frCorp.body).toContain("BLESSED VALLY FOUNDATION, INC.");
    expect(frCorp.body).toContain("Florida Non-Profit Corporation");
    expect(frCorp.body).toContain("Dr. Vally D. Jn.-Ls. Legouté");
  });
});

describe("Blessed Vally Foundation - Blog & Carousel Integration", () => {
  it("maps /blog, /actualites, and /articles to news PageKey", () => {
    expect(pathToPage["/blog"]).toBe("news");
    expect(pathToPage["/actualites"]).toBe("news");
    expect(pathToPage["/articles"]).toBe("news");
  });

  it("contains the 3 authentic published blog posts with full bilingual content", async () => {
    const { blogPosts } = await import("../lib/blog-data");
    expect(blogPosts).toHaveLength(3);

    const waterPost = blogPosts.find((p) => p.id === "nouvelles-recentes-eau-potable");
    expect(waterPost).toBeDefined();
    expect(waterPost?.title.fr).toContain("Accès à l’eau potable");
    expect(waterPost?.content.fr.length).toBeGreaterThan(3);
    expect(waterPost?.quote?.fr).toContain("L'eau est un bien essentiel");
    expect(waterPost?.author.fr).toContain("Dr. Vally D. Jn.-Ls. Legouté");

    const visionPost = blogPosts.find((p) => p.id === "blessed-vally-foundation-vision-piliers");
    expect(visionPost).toBeDefined();
    expect(visionPost?.title.fr).toContain("Vision globale");
    expect(visionPost?.content.fr.some((p) => p.includes("Blessed Vally Foundation"))).toBe(true);

    const messagePost = blogPosts.find((p) => p.id === "mot-de-la-fondatrice-responsabilite");
    expect(messagePost).toBeDefined();
    expect(messagePost?.title.fr).toContain("Notre communauté est notre responsabilité");
  });

  it("contains all 10 authentic photo slides for the home carousel", async () => {
    const { carouselSlides } = await import("../lib/carousel-data");
    expect(carouselSlides).toHaveLength(10);

    for (const slide of carouselSlides) {
      expect(slide.image).toMatch(/^\/images\//);
      expect(slide.title.fr.length).toBeGreaterThan(0);
      expect(slide.title.en.length).toBeGreaterThan(0);
      expect(slide.caption.fr.length).toBeGreaterThan(0);
      expect(slide.location.length).toBeGreaterThan(0);
    }
  });
});

describe("Blessed Vally Foundation - Legal & Privacy Policy Compliance", () => {
  it("enforces strict zero-sale data policy and Stripe PCI encryption in privacy policy", () => {
    // French privacy
    const frPrivacy = pageContent.fr.privacy;
    expect(frPrivacy.sections.length).toBeGreaterThanOrEqual(4);
    const frCore = frPrivacy.sections[0];
    expect(frCore.body.toLowerCase()).toMatch(/ne vendons|n’échangeons|commercialisons/);
    expect(frCore.bullets?.some((b) => b.toLowerCase().includes("revente"))).toBe(true);

    const frData = frPrivacy.sections[1];
    expect(frData.body).toContain("Stripe");
    expect(frData.body).toContain("TLS");

    // English privacy
    const enPrivacy = pageContent.en.privacy;
    expect(enPrivacy.sections.length).toBeGreaterThanOrEqual(4);
    const enCore = enPrivacy.sections[0];
    expect(enCore.body.toLowerCase()).toContain("never sell");
    expect(enCore.bullets?.some((b) => b.toLowerCase().includes("zero sale"))).toBe(true);

    const enData = enPrivacy.sections[1];
    expect(enData.body).toContain("Stripe");
    expect(enData.body).toContain("PCI");
  });

  it("enforces copyright protection and voluntary donation clauses in terms of use", () => {
    // French terms
    const frTerms = pageContent.fr.terms;
    expect(frTerms.sections.length).toBeGreaterThanOrEqual(4);
    const frIP = frTerms.sections[1];
    expect(frIP.body.toLowerCase()).toContain("propriété exclusive");
    expect(frIP.body.toLowerCase()).toContain("haïti");

    const frDonation = frTerms.sections[2];
    expect(frDonation.body.toLowerCase()).toContain("volontaires");
    expect(frDonation.body.toLowerCase()).toContain("irrévocables");

    // English terms
    const enTerms = pageContent.en.terms;
    expect(enTerms.sections.length).toBeGreaterThanOrEqual(4);
    const enIP = enTerms.sections[1];
    expect(enIP.body.toLowerCase()).toContain("intellectual property");
    expect(enIP.body.toLowerCase()).toContain("haiti");

    const enDonation = enTerms.sections[2];
    expect(enDonation.body.toLowerCase()).toContain("voluntary");
    expect(enDonation.body.toLowerCase()).toContain("irrevocable");
  });

  it("guarantees official Florida jurisdiction and registered office in both legal documents", () => {
    expect(pageContent.fr.terms.sections[3].body).toContain("Floride");
    expect(pageContent.fr.terms.sections[3].body).toContain("12933 SW 129 Street");
    expect(pageContent.en.terms.sections[3].body).toContain("Florida");
    expect(pageContent.en.terms.sections[3].body).toContain("12933 SW 129 Street");

    expect(pageContent.fr.privacy.sections[3].body).toContain("12933 SW 129 Street");
    expect(pageContent.en.privacy.sections[3].body).toContain("12933 SW 129 Street");
  });
});

describe("Blessed Vally Foundation - Priority Projects in Brostage, Dondon, Haiti", () => {
  it("includes the 3 immediate priority projects in French with exact text and status", () => {
    const prioritySection = pageContent.fr.haiti.sections.find(
      (s) => s.title.includes("Projets prioritaires") && s.title.includes("Brostage")
    );
    expect(prioritySection).toBeDefined();
    expect(prioritySection?.title).toBe("Projets prioritaires – Brostage, Dondon, Haïti");
    expect(prioritySection?.body).toContain("l’assainissement, l’accès à l’eau potable et l’alimentation");
    expect(prioritySection?.body).toContain("1. Construction de blocs sanitaires");
    expect(prioritySection?.body).toContain("2. Accès à l’eau potable");
    expect(prioritySection?.body).toContain("3. Construction d’une cafétéria communautaire");
    expect(prioritySection?.body).toContain("Statut : Projets prioritaires en recherche de financement");
    expect(prioritySection?.body).toContain("témoigner de l’amour de Jésus-Christ");
  });

  it("includes the 3 immediate priority projects in English with exact text and status", () => {
    const prioritySection = pageContent.en.haiti.sections.find(
      (s) => s.title.includes("Priority Projects") && s.title.includes("Brostage")
    );
    expect(prioritySection).toBeDefined();
    expect(prioritySection?.title).toBe("Priority Projects – Brostage, Dondon, Haiti");
    expect(prioritySection?.body).toContain("sanitation, access to safe drinking water, and food assistance");
    expect(prioritySection?.body).toContain("1. Construction of Sanitation Facilities");
    expect(prioritySection?.body).toContain("2. Access to Safe Drinking Water");
    expect(prioritySection?.body).toContain("3. Construction of a Community Cafeteria");
    expect(prioritySection?.body).toContain("Status: Priority Projects Seeking Funding");
    expect(prioritySection?.body).toContain("demonstrate the love of Jesus Christ");
  });
});



