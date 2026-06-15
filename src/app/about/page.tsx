import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dandora is a growth consulting firm. We work with founders and teams — early, hands-on, and until the job is done.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Section className="py-24 md:py-32">
        <Reveal>
          <RevealItem>
            <h1 className="font-display text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
              We stay in the room.
            </h1>
          </RevealItem>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Reveal>
          <RevealItem className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              Dandora is a growth consulting firm. We work with founders, teams,
              and businesses that are ready to move — and we stay with them until
              they do.
            </p>
          </RevealItem>
          <RevealItem className="mt-8 max-w-3xl">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              We come in early. We ask hard questions. We do the work alongside
              you — not from a distance.
            </p>
          </RevealItem>
        </Reveal>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value} delay={i * 0.1}>
              <RevealItem>
                <div className="card-lift flex min-h-[200px] items-end rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-transparent p-8">
                  <p className="font-display text-2xl font-medium md:text-3xl">
                    {value}
                  </p>
                </div>
              </RevealItem>
            </Reveal>
          ))}
        </div>
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
