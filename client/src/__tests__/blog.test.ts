import { describe, expect, it } from "vitest";
import { blogPosts, type BlogPost } from "../lib/blog-data";

describe("Blog & Articles System - Data Integrity", () => {
  it("contains the 3 authentic published posts from blessedvallyfoundation.org", () => {
    expect(blogPosts.length).toBe(3);
  });

  it("includes the clean water artesian well article in Brostage", () => {
    const waterPost = blogPosts.find((p) => p.id === "nouvelles-recentes-eau-potable");
    expect(waterPost).toBeDefined();
    expect(waterPost?.title.fr).toContain("eau potable");
    expect(waterPost?.content.fr.join(" ")).toContain("puits artésien");
    expect(waterPost?.content.fr.join(" ")).toContain("Brostage");
  });

  it("includes the foundation vision and five pillars article", () => {
    const visionPost = blogPosts.find((p) => p.id === "blessed-vally-foundation-vision-piliers");
    expect(visionPost).toBeDefined();
    expect(visionPost?.title.fr).toContain("Blessed Vally Foundation");
    expect(visionPost?.content.fr.join(" ")).toContain("responsabilité");
  });

  it("includes the word from the founder (Mot de la Fondatrice) article", () => {
    const founderPost = blogPosts.find((p) => p.id === "mot-de-la-fondatrice-responsabilite");
    expect(founderPost).toBeDefined();
    expect(founderPost?.author.fr).toContain("Dr Vally Jean-Louis");
    expect(founderPost?.content.fr.join(" ")).toContain("responsabilité");
  });

  it("ensures all blog posts have complete bilingual versions and reading times", () => {
    for (const post of blogPosts) {
      expect(post.slug.length).toBeGreaterThan(0);
      expect(post.date.fr.length).toBeGreaterThan(0);
      expect(post.date.en.length).toBeGreaterThan(0);
      expect(post.author.fr.length).toBeGreaterThan(0);
      expect(post.author.en.length).toBeGreaterThan(0);
      expect(post.category.fr.length).toBeGreaterThan(0);
      expect(post.category.en.length).toBeGreaterThan(0);
      expect(post.readTime.fr).toContain("lecture");
      expect(post.readTime.en).toContain("read");
      expect(post.content.fr.length).toBeGreaterThan(2);
      expect(post.content.en.length).toBeGreaterThan(2);
    }
  });

  it("filters posts correctly by category or all", () => {
    const all = blogPosts;
    expect(all.length).toBe(3);

    const waterCategory = blogPosts.filter((p) => p.category.fr === "Eau potable & Santé");
    expect(waterCategory.length).toBe(1);
    expect(waterCategory[0].id).toBe("nouvelles-recentes-eau-potable");
  });
});
