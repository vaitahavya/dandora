import Image from "next/image";
import Link from "next/link";
import type { JournalBlock, JournalPost } from "@/lib/journal/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

function JournalBlockView({ block }: { block: JournalBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="body-base text-muted">{block.text}</p>;

    case "heading":
      if (block.level === 3) {
        return <h3 className="h3 mt-10 text-foreground">{block.text}</h3>;
      }
      return <h2 className="h2 mt-14 text-foreground">{block.text}</h2>;

    case "takeaways":
      return (
        <aside className="my-10 rounded-2xl border border-accent-secondary/25 bg-accent-secondary-soft/50 p-6 sm:p-8">
          <p className="eyebrow text-accent-secondary">Key takeaways</p>
          <ul className="mt-4 space-y-3">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[1rem] leading-relaxed text-foreground"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      );

    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-accent pl-6">
          <p className="text-[1.35rem] font-medium leading-snug text-foreground italic sm:text-[1.5rem]">
            {block.text}
          </p>
        </blockquote>
      );

    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-border bg-background-off">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.join("-")}
                  className="border-b border-border last:border-b-0 even:bg-background-off/60"
                >
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="px-4 py-3 align-top text-muted"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-foreground/10 shadow-[var(--shadow-rest)]">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "faq":
      return (
        <section className="mt-16 space-y-4">
          <h2 className="h2 text-foreground">{block.title}</h2>
          {block.items.map((item) => (
            <Card
              key={item.q}
              className="border-l-4 border-l-accent-secondary p-5 sm:p-6"
            >
              <h3 className="text-[1.0625rem] font-semibold text-foreground">
                {item.q}
              </h3>
              <p className="mt-2 text-[1rem] leading-relaxed text-muted">
                {item.a}
              </p>
            </Card>
          ))}
        </section>
      );

    default:
      return null;
  }
}

export function JournalArticle({ post }: { post: JournalPost }) {
  return (
    <article>
      <header className="relative overflow-hidden border-b border-border">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,13,23,0.94) 0%, rgba(11,13,23,0.72) 42%, rgba(11,13,23,0.45) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[760px] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Badge
            variant="outline"
            className="rounded-full border-white/25 bg-white/10 px-3 py-1 text-[0.75rem] font-semibold tracking-wide text-white backdrop-blur"
          >
            {post.categoryLabel}
          </Badge>
          <h1 className="mt-6 max-w-[18ch] text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            {post.title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-[1.125rem] leading-relaxed text-white/85">
            {post.dek}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-white/70">
            <span>{post.publishedLabel}</span>
            <span aria-hidden className="text-white/40">
              ·
            </span>
            <span>{post.readTime}</span>
            <span aria-hidden className="text-white/40">
              ·
            </span>
            <span>{post.author}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-6">
          {post.blocks.map((block, index) => (
            <JournalBlockView key={`${block.type}-${index}`} block={block} />
          ))}
        </div>

        <Reveal className="mt-16">
          <RevealItem>
            <Card className="border-accent-secondary/30 bg-accent-secondary-soft/30 p-6 text-center sm:p-8">
              <p className="text-[1.0625rem] leading-relaxed text-foreground">
                Dandora — Growth, Brand &amp; Software Under One Roof.
              </p>
              <LinkButton href={post.cta.href} variant="primary" className="mt-6">
                {post.cta.label}
              </LinkButton>
            </Card>
          </RevealItem>
        </Reveal>

        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/journal"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary"
          >
            ← All journal posts
          </Link>
        </div>
      </div>
    </article>
  );
}
