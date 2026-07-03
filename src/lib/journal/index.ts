import type { JournalPost } from "@/lib/journal/types";
import { housingMarketRebalancing2026 } from "@/lib/journal/posts/housing-market-rebalancing-2026";

export const JOURNAL_POSTS: JournalPost[] = [
  housingMarketRebalancing2026,
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((post) => post.slug === slug);
}

export function getAllJournalSlugs(): string[] {
  return JOURNAL_POSTS.map((post) => post.slug);
}
