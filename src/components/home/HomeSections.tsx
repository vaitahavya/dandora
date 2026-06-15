"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { SERVICES, SECTORS } from "@/lib/constants";

export function ManifestoStrip() {
  return (
    <Section className="py-32 md:py-40">
      <Reveal>
        <RevealItem>
          <blockquote className="font-display max-w-4xl text-3xl font-medium leading-snug tracking-tight md:text-4xl lg:text-5xl">
            We&apos;re not a vendor. We&apos;re the people in the room with you.
          </blockquote>
        </RevealItem>
        <RevealItem className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          A growth consulting firm for businesses ready to move. We come in early,
          ask the hard questions, and stay until it&apos;s done.
        </RevealItem>
        <RevealItem className="mt-10">
          <LinkButton href="/about" variant="ghost">
            Learn about us
          </LinkButton>
        </RevealItem>
      </Reveal>
    </Section>
  );
}

export function ServicesSnapshot() {
  return (
    <Section className="border-t border-border py-32 md:py-40">
      <Reveal>
        <RevealItem>
          <p className="text-xs uppercase tracking-widest text-muted">
            What we do
          </p>
        </RevealItem>
      </Reveal>

      <div className="mt-16 space-y-0">
        {SERVICES.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.05}>
            <RevealItem>
              <div className="group grid gap-4 border-t border-border py-10 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8">
                <span className="font-display text-sm text-muted">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted">{service.snapshot}</p>
                </div>
                <div className="hidden h-16 w-24 rounded-lg bg-gradient-to-br from-accent/30 to-transparent opacity-60 transition-opacity group-hover:opacity-100 md:block" />
              </div>
            </RevealItem>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <RevealItem>
          <LinkButton href="/services" variant="ghost">
            Explore our services
          </LinkButton>
        </RevealItem>
      </Reveal>
    </Section>
  );
}

export function SectorsGrid() {
  return (
    <Section className="border-t border-border py-32 md:py-40">
      <Reveal>
        <RevealItem>
          <h2 className="font-display max-w-2xl text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            We don&apos;t do generic. We know your world.
          </h2>
        </RevealItem>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {SECTORS.map((sector, i) => (
          <Reveal key={sector.slug} delay={i * 0.08}>
            <RevealItem>
              <Link
                href={sector.href}
                className="card-lift group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl border border-border p-8 md:min-h-[320px]"
                style={{
                  background: `linear-gradient(135deg, ${sector.accent}22 0%, transparent 60%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                  style={{
                    background: `radial-gradient(circle at 80% 20%, ${sector.accent}, transparent 50%)`,
                  }}
                />
                <h3 className="font-display relative text-3xl font-medium">
                  {sector.name}
                </h3>
                <span className="relative mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
                  See how
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </RevealItem>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section className="border-t border-border py-32 md:py-40">
      <Reveal>
        <RevealItem>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Before we advise, we listen.
          </h2>
        </RevealItem>
        <RevealItem className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Every engagement starts with a survey and a feasibility check. Good
          advice starts with understanding — not assumptions.
        </RevealItem>
      </Reveal>
    </Section>
  );
}

export function CloseSection() {
  return (
    <Section className="border-t border-border py-32 md:py-48">
      <Reveal>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Ready when you are.
          </h2>
        </RevealItem>
        <RevealItem className="mt-10">
          <LinkButton href="/contact">Talk to us</LinkButton>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
