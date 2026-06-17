"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { BrandMark } from "@/components/ui/Logo";
import { SERVICES, SECTORS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function ManifestoStrip() {
  return (
    <Section id="about" className="py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <RevealItem>
            <BrandMark size={28} className="mb-4 opacity-80" />
            <p className="eyebrow">Who we are</p>
          </RevealItem>
          <RevealItem className="mt-4">
            <blockquote className="font-display-light text-3xl leading-snug tracking-tight md:text-4xl">
              We&apos;re not a vendor. We&apos;re the people in the room with
              you.
            </blockquote>
          </RevealItem>
          <RevealItem className="mt-7 space-y-4 prose-muted md:text-lg">
            <p>
              Dandora is a growth consulting firm. We work with founders, teams,
              and businesses that are ready to move — and we stay with them until
              they do.
            </p>
            <p>
              We come in early. We ask hard questions. We do the work alongside
              you — not from a distance.
            </p>
          </RevealItem>
          <RevealItem className="mt-9">
            <LinkButton href="/about" variant="ghost">
              Learn about us
            </LinkButton>
          </RevealItem>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.08}>
          <RevealItem>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src={IMAGES.manifesto}
                alt="Team collaborating in a strategy session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </Section>
  );
}

export function ServicesSnapshot() {
  return (
    <Section className="border-t border-border py-20 md:py-28">
      <Reveal>
        <RevealItem>
          <p className="eyebrow">What we do</p>
        </RevealItem>
        <RevealItem className="mt-4">
          <h2 className="font-display max-w-2xl text-3xl leading-snug tracking-tight md:text-4xl">
            Strategy. Tech. Marketing. Operations. All of it, if you need it.
          </h2>
        </RevealItem>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {SERVICES.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.05}>
            <RevealItem>
              <article className="card-lift group surface-card flex h-full flex-col overflow-hidden">
                <div className="relative h-36 overflow-hidden border-b border-border">
                  <Image
                    src={IMAGES.services[service.imageKey]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                  <BrandMark
                    size={24}
                    className="absolute bottom-3 left-4 opacity-90"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <span className="eyebrow text-accent-secondary">{service.number}</span>
                  <h3 className="font-display mt-2 text-xl">
                    {service.title}
                  </h3>
                  <p className="prose-muted mt-2 text-sm">{service.snapshot}</p>
                </div>
              </article>
            </RevealItem>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
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
    <Section className="border-t border-border py-20 md:py-28">
      <Reveal>
        <RevealItem>
          <p className="eyebrow">Sectors</p>
        </RevealItem>
        <RevealItem className="mt-4">
          <h2 className="font-display max-w-xl text-3xl tracking-tight md:text-4xl">
            We don&apos;t do generic. We know your world.
          </h2>
        </RevealItem>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {SECTORS.map((sector, i) => (
          <Reveal key={sector.slug} delay={i * 0.05}>
            <RevealItem>
              <Link
                href={sector.href}
                className="card-lift group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl border border-border md:min-h-[280px]"
              >
                <Image
                  src={IMAGES.sectors[sector.slug as keyof typeof IMAGES.sectors]}
                  alt={sector.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
                  style={{
                    boxShadow: `inset 0 -60px 40px -20px ${sector.accent}22`,
                  }}
                />
                <div className="relative p-6 md:p-7">
                  <BrandMark size={22} className="mb-3 opacity-90" />
                  <span
                    className="mb-2 inline-block h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: sector.accent }}
                  />
                  <h3 className="font-display text-2xl text-foreground md:text-[1.65rem]">
                    {sector.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
                    See how we help
                    <span aria-hidden>→</span>
                  </span>
                </div>
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
    <Section className="border-t border-border py-20 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <RevealItem>
            <BrandMark size={28} className="mb-4 opacity-80" />
            <p className="eyebrow">Our approach</p>
          </RevealItem>
          <RevealItem className="mt-4">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Before we advise, we listen.
            </h2>
          </RevealItem>
          <RevealItem className="mt-5 prose-muted max-w-lg md:text-lg">
            <p>
              Every engagement starts the same way — with a survey and a
              feasibility check. Not because it&apos;s process. Because good
              advice starts with understanding, not assumptions.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal delay={0.08}>
          <RevealItem>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border md:aspect-video">
              <Image
                src={IMAGES.process}
                alt="Consulting workshop in a boardroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </Section>
  );
}

export function CloseSection() {
  return (
    <Section className="border-t border-border py-20 md:py-32">
      <Reveal>
        <div className="surface-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[220px] md:min-h-full">
              <Image
                src={IMAGES.close}
                alt="Team ready to collaborate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/20 md:bg-gradient-to-l md:from-transparent md:to-surface" />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:p-12">
              <RevealItem>
                <BrandMark size={32} />
                <p className="eyebrow mt-5">Next step</p>
                <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
                  Ready when you are.
                </h2>
                <p className="prose-muted mt-3 max-w-md text-sm md:text-base">
                  Tell us where you&apos;re stuck. We&apos;ll tell you straight if
                  we can help.
                </p>
              </RevealItem>
              <RevealItem>
                <LinkButton href="/contact">Talk to us</LinkButton>
              </RevealItem>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
