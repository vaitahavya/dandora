"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { MARKET_HIGHLIGHTS } from "@/lib/copy";
import { IMAGES } from "@/lib/images";

export function MarketHighlights() {
  return (
    <Section className="border-t border-border bg-surface-elevated py-20 md:py-28">
      <Reveal>
        <RevealItem className="flex items-start gap-4">
          <BrandMark size={36} className="mt-1 hidden sm:block" />
          <div>
            <p className="eyebrow">Market reality</p>
            <h2 className="font-display mt-4 max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-4xl">
              {MARKET_HIGHLIGHTS.intro}
            </h2>
          </div>
        </RevealItem>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {MARKET_HIGHLIGHTS.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <RevealItem>
              <article className="surface-card h-full p-7 md:p-8">
                <BrandMark size={24} className="mb-4 opacity-80" />
                <p className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                  {stat.figure}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-foreground md:text-base">
                  {stat.label}
                </p>
                <p className="prose-muted mt-2 text-sm">{stat.context}</p>
              </article>
            </RevealItem>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">What we&apos;re seeing by sector</p>
          </RevealItem>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {MARKET_HIGHLIGHTS.sectors.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <RevealItem>
                <article className="surface-card overflow-hidden">
                  <div className="relative h-36 overflow-hidden border-b border-border">
                    <Image
                      src={
                        IMAGES.sectors[
                          item.slug as keyof typeof IMAGES.sectors
                        ]
                      }
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                    <BrandMark
                      size={22}
                      className="absolute bottom-3 left-4 opacity-90"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {item.title}
                    </p>
                    <p className="mt-3 font-display text-lg font-medium leading-snug md:text-xl">
                      {item.highlight}
                    </p>
                    <p className="prose-muted mt-2 text-sm">{item.body}</p>
                  </div>
                </article>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <RevealItem>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
            {MARKET_HIGHLIGHTS.close}
          </p>
        </RevealItem>
        <RevealItem className="mt-8">
          <LinkButton href="/contact" variant="ghost">
            Start a conversation
          </LinkButton>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
