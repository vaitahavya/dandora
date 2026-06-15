import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, technology, marketing, operations, and investment advisory — all of it, if you need it.",
};

const ACCENTS = [
  "from-emerald-900/20",
  "from-slate-800/30",
  "from-amber-900/20",
  "from-zinc-800/30",
  "from-green-900/20",
];

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <Section className="py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h1 className="font-display max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Strategy. Tech. Marketing. Operations. All of it, if you need it.
            </h1>
          </RevealItem>
        </Reveal>
      </Section>

      <div className="space-y-0">
        {SERVICES.map((service, i) => (
          <Section
            key={service.number}
            className={`border-t border-border py-20 md:py-28 bg-gradient-to-br ${ACCENTS[i]} to-transparent`}
          >
            <Reveal>
              <RevealItem>
                <span className="text-sm text-muted">{service.number}</span>
              </RevealItem>
              <RevealItem className="mt-4">
                <h2 className="font-display text-3xl font-medium md:text-4xl">
                  {service.title}
                </h2>
              </RevealItem>
              <RevealItem className="mt-6 max-w-3xl">
                <p className="font-display text-xl leading-snug md:text-2xl">
                  {service.headline}
                </p>
              </RevealItem>
              {service.tags.length > 0 && (
                <RevealItem className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-1.5 text-sm text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </RevealItem>
              )}
              <RevealItem className="mt-8 max-w-2xl">
                <p className="text-muted">{service.payoff}</p>
              </RevealItem>
            </Reveal>
          </Section>
        ))}
      </div>

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
