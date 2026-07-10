"use client";

import { useMemo, useState } from "react";
import { PORTFOLIO } from "@/lib/home";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from "@/lib/portfolio";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PortfolioBeat() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <RevealItem className="max-w-[720px]">
            <p className="eyebrow">{PORTFOLIO.eyebrow}</p>
            <h2 className="h2 mt-4">{PORTFOLIO.h2}</h2>
            <p className="body-base mt-6 text-muted">{PORTFOLIO.sub}</p>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <RevealItem>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                    active === cat.id
                      ? "border-accent-secondary bg-accent-secondary text-white shadow-[var(--shadow-rest)]"
                      : "border-border bg-surface text-muted hover:border-accent-secondary/50 hover:text-foreground",
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <RevealItem>
            <PortfolioGrid items={filtered} />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
