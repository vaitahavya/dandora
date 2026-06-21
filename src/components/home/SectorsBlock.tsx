"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SECTORS } from "@/lib/home";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";

export function SectorsBlock() {
  return (
    <section className="bg-background py-[clamp(96px,12vh,160px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <RevealItem className="mx-auto max-w-[720px] text-center">
            <p className="eyebrow">{SECTORS.eyebrow}</p>
            <h2 className="h2 mt-4">{SECTORS.h2}</h2>
          </RevealItem>
        </Reveal>

        <Reveal
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.09}
        >
          {SECTORS.cards.map((card) => {
            const tag = "tag" in card ? card.tag : undefined;
            return (
              <RevealItem key={card.id}>
                <Link
                  href={card.href}
                  className="group focus-ring flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="h3 text-[1.35rem]">{card.name}</h3>
                    {tag && (
                      <Badge
                        variant="outline"
                        className="shrink-0 rounded-full border-accent-secondary/40 bg-accent-secondary-soft px-2.5 text-[0.7rem] font-semibold tracking-wide text-accent-secondary"
                      >
                        {tag}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                    {card.line}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent-secondary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
