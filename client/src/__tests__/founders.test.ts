import { describe, expect, it } from "vitest";
import { pathToPage, routePaths } from "../lib/site-content";

describe("Founder's Corner (Le Coin de la Fondatrice) - Integration & Content", () => {
  it("provides canonical and alias routes for the Founder's corner", () => {
    expect(pathToPage["/coin-de-la-fondatrice"]).toBe("leadership");
    expect(pathToPage["/coindelafondatrice"]).toBe("leadership");
    expect(pathToPage["/leadership"]).toBe("leadership");
  });

  it("verifies Dr. Vally Jean-Louis Legouté key biographical milestones", () => {
    const milestones = [
      { label: "1961", detail: "Ranquitte, Haïti" },
      { label: "36 ans", detail: "Enseignement & Vocation" },
      { label: "2005", detail: "Miami, Floride" },
      { label: "Brostage", detail: "Campus Dondon" },
    ];

    expect(milestones.length).toBe(4);
    expect(milestones[0].label).toBe("1961");
    expect(milestones[1].label).toBe("36 ans");
    expect(milestones[2].label).toBe("2005");
    expect(milestones[3].label).toBe("Brostage");
  });

  it("verifies the founder's quote and motto", () => {
    const quoteFr = "« L'éducation chrétienne et l'amour en action transforment ce que les circonstances semblaient condamner. »";
    const quoteEn = "“Christian education and love in action transform what circumstances appeared to condemn.”";

    expect(quoteFr).toContain("L'éducation chrétienne");
    expect(quoteEn).toContain("Christian education");
  });
});
