import { describe, expect, it } from "vitest";
import { carouselSlides, type CarouselSlide } from "../lib/carousel-data";

describe("HomePhotoCarousel - Data & Integrity", () => {
  it("contains exactly 10 authentic slides", () => {
    expect(carouselSlides.length).toBe(10);
  });

  it("assigns unique slide IDs from slide-1 to slide-10", () => {
    const ids = carouselSlides.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
    expect(ids).toContain("slide-1");
    expect(ids).toContain("slide-10");
  });

  it("ensures all image paths resolve to valid public paths", () => {
    for (const slide of carouselSlides) {
      expect(slide.image).toMatch(/^\/images\//);
      expect(slide.image.endsWith(".jpg")).toBe(true);
    }
  });

  it("includes all 5 ongoing construction site photos from Brostage Dondon", () => {
    const constructionSlides = carouselSlides.filter((s) =>
      s.image.includes("travaux")
    );
    expect(constructionSlides.length).toBe(5);
    for (let i = 1; i <= 5; i++) {
      expect(constructionSlides.some((s) => s.image.includes(`travaux-${i}.jpg`))).toBe(true);
    }
  });

  it("ensures every slide has bilingual French and English tags, titles, captions and locations", () => {
    for (const slide of carouselSlides) {
      expect(slide.tag.fr.trim().length).toBeGreaterThan(0);
      expect(slide.tag.en.trim().length).toBeGreaterThan(0);
      expect(slide.title.fr.trim().length).toBeGreaterThan(0);
      expect(slide.title.en.trim().length).toBeGreaterThan(0);
      expect(slide.caption.fr.trim().length).toBeGreaterThan(0);
      expect(slide.caption.en.trim().length).toBeGreaterThan(0);
      expect(slide.location.trim().length).toBeGreaterThan(0);
    }
  });

  it("cycles slides correctly in carousel navigation logic", () => {
    const total = carouselSlides.length;
    const nextIndex = (current: number) => (current + 1) % total;
    const prevIndex = (current: number) => (current - 1 + total) % total;

    expect(nextIndex(0)).toBe(1);
    expect(nextIndex(9)).toBe(0); // wrap around to beginning
    expect(prevIndex(0)).toBe(9); // wrap around to end
    expect(prevIndex(5)).toBe(4);
  });
});
