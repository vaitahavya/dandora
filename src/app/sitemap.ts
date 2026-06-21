import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/sectors/real-estate",
    "/sectors/healthcare",
    "/sectors/d2c",
    "/sectors/it-software",
    "/sectors/education",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
