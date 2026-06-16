import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { IMAGES } from "@/lib/images";

type SectorData = {
  slug: string;
  name: string;
  tagline: string;
  accent: string;
  problems: readonly string[];
  solutions: readonly { title: string; description: string }[];
  proof: string;
};

function isPlaceholder(text: string) {
  return text.includes("[FILL IN]");
}

export function SectorTemplate({ sector }: { sector: SectorData }) {
  const image =
    IMAGES.sectors[sector.slug as keyof typeof IMAGES.sectors] ?? IMAGES.hero;
  const showProof = !isPlaceholder(sector.proof);

  return (
    <main>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[58vh]">
        <Image
          src={image}
          alt={sector.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-white/20" />
        <Section className="relative pb-12 pt-24 md:pb-16">
          <Reveal>
            <RevealItem>
              <span
                className="eyebrow inline-flex items-center gap-2"
                style={{ color: sector.accent }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: sector.accent }}
                />
                {sector.name}
              </span>
            </RevealItem>
            <RevealItem className="mt-4">
              <BrandMark size={32} className="mb-4 opacity-90" />
              <h1 className="font-display max-w-3xl text-3xl font-medium leading-snug tracking-tight md:text-4xl lg:text-5xl">
                {sector.tagline}
              </h1>
            </RevealItem>
          </Reveal>
        </Section>
      </section>

      <Section className="border-t border-border py-16 md:py-20">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">The problem</p>
          </RevealItem>
          <div className="mt-6 space-y-4">
            {sector.problems.map((line) => (
              <RevealItem key={line}>
                <p className="font-display text-xl font-medium leading-snug md:text-2xl">
                  {line}
                </p>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-16 md:py-20">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">How we help</p>
          </RevealItem>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sector.solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <RevealItem>
                <div
                  className="card-lift surface-card h-full overflow-hidden"
                  style={{ borderTopColor: `${sector.accent}55`, borderTopWidth: 2 }}
                >
                  <div className="relative h-28 overflow-hidden border-b border-border">
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover opacity-80"
                      sizes="300px"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    <BrandMark size={20} className="absolute bottom-3 left-4 opacity-90" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-lg font-medium md:text-xl">
                      {item.title}
                    </h3>
                    <p className="prose-muted mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </Section>

      {showProof && (
        <Section className="border-t border-border py-16 md:py-20">
          <Reveal>
            <RevealItem>
              <p className="eyebrow">Results</p>
            </RevealItem>
            <RevealItem className="mt-5">
              <blockquote
                className="font-display max-w-3xl text-2xl font-medium leading-snug md:text-3xl"
                style={{ color: sector.accent }}
              >
                {sector.proof}
              </blockquote>
            </RevealItem>
          </Reveal>
        </Section>
      )}

      <Section className="border-t border-border py-16 md:py-24">
        <Reveal>
          <div
            className="surface-card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center"
            style={{ boxShadow: `inset 0 1px 0 0 ${sector.accent}33` }}
          >
            <RevealItem>
              <p className="font-display text-xl font-medium md:text-2xl">
                Ready to talk about {sector.name.toLowerCase()}?
              </p>
            </RevealItem>
            <RevealItem>
              <LinkButton href="/contact">Talk to us</LinkButton>
            </RevealItem>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
