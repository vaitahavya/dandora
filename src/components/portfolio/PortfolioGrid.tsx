"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  portfolioAspectClass,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/portfolio";

type PortfolioGridProps = {
  items: PortfolioItem[];
  className?: string;
  compact?: boolean;
};

export function PortfolioGrid({
  items,
  className,
  compact = false,
}: PortfolioGridProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "columns-1 gap-5 sm:columns-2",
        compact ? "lg:columns-3" : "lg:columns-3 xl:columns-4",
        className,
      )}
    >
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} compact={compact} />
      ))}
    </div>
  );
}

function PortfolioCard({
  item,
  compact,
}: {
  item: PortfolioItem;
  compact?: boolean;
}) {
  const isBrand = item.category === "brand";

  return (
    <article className="mb-5 break-inside-avoid">
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-surface ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/40 hover:shadow-[var(--shadow-glass)]",
          portfolioAspectClass(item.aspect),
        )}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={
            compact
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
          className={cn(
            "transition-transform duration-500 group-hover:scale-[1.03]",
            isBrand
              ? "bg-background-off object-contain p-8"
              : "object-cover",
          )}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d17]/75 via-[#0b0d17]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-semibold text-white">{item.client}</p>
          <p className="mt-0.5 text-xs text-white/75">{item.title}</p>
        </div>
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#0b0d17]/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
          {categoryLabel(item.category)}
        </span>
      </div>
    </article>
  );
}

function categoryLabel(category: PortfolioCategory) {
  switch (category) {
    case "brand":
      return "Brand";
    case "packaging":
      return "Packaging";
    case "print":
      return "Print";
    case "digital":
      return "Digital";
  }
}
