import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import type { JournalPost } from "@/lib/journal/types";

export function JournalIndex({ posts }: { posts: JournalPost[] }) {
  return (
    <>
      <Section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-20">
        <PageHeader
          eyebrow="Journal"
          title="Insights on growth, markets, and brand."
          description="Long-form reads from the Dandora team — data-backed perspective for founders, developers, and sector leaders."
        />
      </Section>

      <Section className="py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <RevealItem>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group focus-ring flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-rest)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17]/55 via-transparent to-transparent" />
                    <Badge
                      variant="outline"
                      className="absolute top-4 left-4 rounded-full border-white/25 bg-white/10 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-white backdrop-blur"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-muted">
                      {post.publishedLabel} · {post.readTime}
                    </p>
                    <h2 className="mt-3 text-[1.25rem] font-semibold leading-snug text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                      {post.dek}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
