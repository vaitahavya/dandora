import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import type { PortfolioItem } from "@/lib/portfolio";

type PortfolioStripProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: PortfolioItem[];
  compact?: boolean;
  className?: string;
};

export function PortfolioStrip({
  eyebrow = "SELECTED WORK",
  title,
  description,
  items,
  compact = true,
  className,
}: PortfolioStripProps) {
  if (items.length === 0) return null;

  return (
    <section className={className}>
      <Reveal>
        <RevealItem className="max-w-[680px]">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 mt-4">{title}</h2>
          {description && (
            <p className="body-base mt-5 text-muted">{description}</p>
          )}
        </RevealItem>
      </Reveal>

      <Reveal className="mt-10" delay={0.05}>
        <RevealItem>
          <PortfolioGrid items={items} compact={compact} />
        </RevealItem>
      </Reveal>
    </section>
  );
}
