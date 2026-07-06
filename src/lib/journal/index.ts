import type { JournalPost } from "@/lib/journal/types";
import { aiCodingBoomJuly2026 } from "@/lib/journal/posts/ai-coding-boom-july-2026";
import { aiCodingSoftwareDevNewsJuly2026 } from "@/lib/journal/posts/ai-coding-software-dev-news-july-2026";
import { aiCodingTools2026DevTrends } from "@/lib/journal/posts/ai-coding-tools-2026-dev-trends";
import { housingMarketRebalancing2026 } from "@/lib/journal/posts/housing-market-rebalancing-2026";
import { housingMarketResetJuly2026 } from "@/lib/journal/posts/housing-market-reset-july-2026";
import { hyderabadRealEstateNewsJuly32026 } from "@/lib/journal/posts/hyderabad-real-estate-news-july-3-2026";
import { realEstateInventoryTrendsJuly2026 } from "@/lib/journal/posts/real-estate-inventory-trends-july-2026";
import { realEstateMarketUpdateJuly42026 } from "@/lib/journal/posts/real-estate-market-update-july-4-2026";
import { softwareAppDevelopmentTrendsJuly2026 } from "@/lib/journal/posts/software-app-development-trends-july-2026";
import { softwareDevNewsJuly32026 } from "@/lib/journal/posts/software-dev-news-july-3-2026";

export const JOURNAL_POSTS: JournalPost[] = [
  housingMarketResetJuly2026,
  aiCodingTools2026DevTrends,
  realEstateInventoryTrendsJuly2026,
  aiCodingSoftwareDevNewsJuly2026,
  realEstateMarketUpdateJuly42026,
  aiCodingBoomJuly2026,
  hyderabadRealEstateNewsJuly32026,
  softwareDevNewsJuly32026,
  housingMarketRebalancing2026,
  softwareAppDevelopmentTrendsJuly2026,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getJournalPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((post) => post.slug === slug);
}

export function getAllJournalSlugs(): string[] {
  return JOURNAL_POSTS.map((post) => post.slug);
}

export const JOURNAL_CATEGORIES = [
  "Real Estate",
  "Software & IT",
] as const;
