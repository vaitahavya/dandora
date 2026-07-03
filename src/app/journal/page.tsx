import type { Metadata } from "next";
import { JournalIndex } from "@/components/journal/JournalIndex";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { JOURNAL_POSTS } from "@/lib/journal";
import { buildPageMetadata } from "@/lib/seo";

const title = "Journal — Growth, Markets & Brand Insights";
const description =
  "Long-form insights from Dandora on real estate markets, growth strategy, brand, and software — written for founders and sector leaders.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/journal",
});

export default function JournalPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
        ])}
      />
      <JournalIndex posts={JOURNAL_POSTS} />
    </main>
  );
}
