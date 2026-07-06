export type JournalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "takeaways"; items: string[] }
  | { type: "quote"; text: string }
  | {
      type: "table";
      headers: [string, string, string];
      rows: [string, string, string][];
    }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; text: string }
  | { type: "faq"; title: string; items: { q: string; a: string }[] };

export type JournalPost = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  categoryLabel: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroImageAlt: string;
  seoDescription: string;
  cta: { label: string; href: string };
  blocks: JournalBlock[];
};
