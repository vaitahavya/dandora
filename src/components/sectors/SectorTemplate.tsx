import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

type SectorData = {
  name: string;
  tagline: string;
  accent: string;
  problems: readonly string[];
  solutions: readonly { title: string; description: string }[];
  proof: string;
};

export function SectorTemplate({ sector }: { sector: SectorData }) {
  return (
    <main>
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[80vh] md:pb-24"
        style={{
          background: `linear-gradient(180deg, ${sector.accent}18 0%, var(--background) 70%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 30%, ${sector.accent}40, transparent)`,
          }}
        />
        <Section className="relative">
          <Reveal>
            <RevealItem>
              <p className="text-xs uppercase tracking-widest text-muted">
                Sector
              </p>
            </RevealItem>
            <RevealItem className="mt-4">
              <h1 className="font-display text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
                {sector.name}
              </h1>
            </RevealItem>
            <RevealItem className="mt-8 max-w-3xl">
              <p className="font-display text-xl leading-snug text-foreground/90 md:text-2xl lg:text-3xl">
                <em>{sector.tagline}</em>
              </p>
            </RevealItem>
          </Reveal>
        </Section>
      </section>

      <Section className="border-t border-border py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h2 className="text-xs uppercase tracking-widest text-muted">
              The problem
            </h2>
          </RevealItem>
          <div className="mt-10 space-y-6">
            {sector.problems.map((line, i) => (
              <Reveal key={line} delay={i * 0.1}>
                <RevealItem>
                  <p className="font-display text-2xl font-medium leading-snug md:text-3xl">
                    {line}
                  </p>
                </RevealItem>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h2 className="text-xs uppercase tracking-widest text-muted">
              How we help
            </h2>
          </RevealItem>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sector.solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <RevealItem>
                <div
                  className="card-lift h-full rounded-2xl border border-border p-8"
                  style={{
                    background: `linear-gradient(135deg, ${sector.accent}10, transparent)`,
                  }}
                >
                  <h3 className="font-display text-xl font-medium md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted">{item.description}</p>
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h2 className="text-xs uppercase tracking-widest text-muted">
              Proof
            </h2>
          </RevealItem>
          <RevealItem className="mt-8">
            <blockquote className="font-display max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
              {sector.proof}
            </blockquote>
          </RevealItem>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-24 md:py-40">
        <Reveal>
          <RevealItem>
            <LinkButton href="/contact">Talk to us</LinkButton>
          </RevealItem>
        </Reveal>
      </Section>
    </main>
  );
}
