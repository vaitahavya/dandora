import { SITE } from "@/lib/constants";

/**
 * Renders a JSON-LD <script> block. Safe to use inside Server Components.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type Crumb = { name: string; path?: string };

/**
 * Build a schema.org BreadcrumbList. A crumb without a `path` is rendered
 * as a name-only ListItem (used for grouping segments that have no route,
 * e.g. "Sectors"), which keeps the structured data free of dead URLs.
 */
export function breadcrumbList(crumbs: Crumb[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: `${SITE.url}${crumb.path}` } : {}),
    })),
  };
}
