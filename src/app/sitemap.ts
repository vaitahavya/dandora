import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { JOURNAL_POSTS } from "@/lib/journal";

// Stable lastModified for static pages — bump when site content meaningfully changes.
const SITE_LAST_MODIFIED = "2026-07-03";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/products/educonnect", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/journal", priority: 0.75 },
  { path: "/sectors/real-estate", priority: 0.7 },
  { path: "/sectors/d2c", priority: 0.7 },
  { path: "/sectors/healthcare", priority: 0.7 },
  { path: "/sectors/education", priority: 0.7 },
  { path: "/sectors/it-software", priority: 0.7 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const journalEntries = JOURNAL_POSTS.map((post) => ({
    url: `${base}/journal/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...journalEntries];
}
