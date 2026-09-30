import { describe, expect, it } from "vitest";
import { buildLlmsTxt } from "./llms-content";
import {
  getFooterLearnRoutes,
  getGuideRoutes,
  getPillarRoutes,
  getSeoPageCopy,
  getSeoRoute,
  SEO_ROUTES,
} from "./registry";
import { getSiteUrl } from "./site-url";

describe("SEO registry", () => {
  it("has unique paths", () => {
    const paths = SEO_ROUTES.map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("has unique meta titles and descriptions", () => {
    const titles = SEO_ROUTES.map((route) => getSeoPageCopy(route.path).metaTitle);
    const descriptions = SEO_ROUTES.map(
      (route) => getSeoPageCopy(route.path).metaDescription,
    );
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("related and guides only point at registered paths", () => {
    const known = new Set(SEO_ROUTES.map((route) => route.path));
    for (const route of SEO_ROUTES) {
      for (const related of route.related) {
        expect(known.has(related)).toBe(true);
        expect(related).not.toBe(route.path);
      }
      for (const guide of route.guides ?? []) {
        expect(known.has(guide)).toBe(true);
        expect(getSeoRoute(guide).kind).toBe("guide");
      }
    }
  });

  it("footer Learn lists only pillars and the FAQ hub", () => {
    const footer = getFooterLearnRoutes();
    expect(footer.every((r) => r.kind === "pillar" || r.kind === "hub")).toBe(
      true,
    );
    expect(footer.some((r) => r.path === "/faq")).toBe(true);
    expect(footer.some((r) => r.kind === "guide")).toBe(false);
  });

  it("includes every content URL in llms.txt", () => {
    const site = getSiteUrl();
    const text = buildLlmsTxt();
    for (const route of SEO_ROUTES) {
      expect(text).toContain(`${site}/en${route.path}`);
    }
    expect(text).toContain("## Positioning pillars");
    expect(text).toContain("## Topic guides");
    expect(text).toContain("## Product facts");
    expect(text).toContain("## Contact");
  });

  it("sitemap entries cover every registered content path", async () => {
    const { default: sitemap } = await import("../../app/sitemap");
    const site = getSiteUrl();
    const entries = sitemap();
    const urls = new Set(entries.map((entry) => entry.url));
    for (const route of SEO_ROUTES) {
      expect(urls.has(`${site}/en${route.path}`)).toBe(true);
    }
  });

  it("lists all pillars and guides in their sections", () => {
    expect(getPillarRoutes().length).toBeGreaterThanOrEqual(4);
    expect(getGuideRoutes().length).toBe(56);
  });

  it("copy avoids em dashes and MVP jargon", () => {
    for (const route of SEO_ROUTES) {
      const copy = getSeoPageCopy(route.path);
      const blobs = [
        copy.metaTitle,
        copy.metaDescription,
        copy.footerLabel,
        copy.llmsDescription,
        copy.title,
        copy.lead,
        copy.relatedTitle,
        copy.guidesTitle ?? "",
        ...copy.sections.flatMap((section) => [
          section.title,
          section.body ?? "",
          ...(section.points ?? []),
        ]),
        ...copy.faq.flatMap((item) => [item.question, item.answer]),
      ];
      for (const text of blobs) {
        expect(text, route.path).not.toMatch(/[—–]/);
        expect(text, route.path).not.toMatch(/\bMVP\b/);
        expect(text, route.path).not.toMatch(/Out of scope/i);
      }
    }
  });
});
