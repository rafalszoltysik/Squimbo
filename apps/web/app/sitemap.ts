import type { MetadataRoute } from "next";
import { SEO_ROUTES } from "@/seo/registry";
import { getSiteUrl } from "@/seo/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SEO_ROUTES.map((route) => ({
      url: `${siteUrl}/en${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    {
      url: `${siteUrl}/en/support`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/en/privacy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/en/terms`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
