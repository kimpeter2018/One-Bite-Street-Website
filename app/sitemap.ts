import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/ohae`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add more pages as the site grows, e.g.:
    // {
    //   url: `${SITE_CONFIG.url}/about`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${SITE_CONFIG.url}/ventures`,
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}
