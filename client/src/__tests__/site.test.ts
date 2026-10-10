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
    expect(frTaxPhones?.body).toContain("+509 3618-4340");
    expect(frTaxPhones?.body).toContain("+509 4310-8621");
  });

  it("includes registered Florida Non-Profit entity details", () => {
    const frCorp = pageContent.fr.taxStatus.sections[0];
    expect(frCorp.body).toContain("BLESSED VALLY FOUNDATION, INC.");
    expect(frCorp.body).toContain("Florida Non-Profit Corporation");
    expect(frCorp.body).toContain("Dr. Vally Jean-Louis Legouté");
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
    expect(waterPost?.author.fr).toContain("Dr Vally Jean-Louis Legouté");

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

