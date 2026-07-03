import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticle } from "@/components/journal/JournalArticle";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import {
  getAllJournalSlugs,
  getJournalPost,
} from "@/lib/journal";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.seoDescription,
    path: `/journal/${post.slug}`,
    openGraphType: "article",
    publishedTime: post.publishedAt,
    authors: [post.author],
  });
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE.url}${post.heroImage}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/journal/${post.slug}`,
    },
  };

  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd} />
      <JournalArticle post={post} />
    </main>
  );
}
