"use client";

import Image from "next/image";
import { Eye, Layers, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { REFRAME } from "@/lib/home";
import { IMAGES } from "@/lib/images";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  see: Eye,
  standardise: Layers,
  scale: TrendingUp,
};

export function ReframeBeat() {
  return (
    <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy */}
          <Reveal>
            <RevealItem className="max-w-[640px]">
              <p className="eyebrow">{REFRAME.eyebrow}</p>
              <h2 className="h2 mt-4">{REFRAME.h2}</h2>
              <p className="body-base mt-6 text-muted">
                They didn&apos;t get lucky. They built systems — for how they
                sell, market, and deliver — so growth stopped depending on
                heroics and started depending on a process. That&apos;s our
                work. We don&apos;t just run campaigns or shoot films.{" "}
                <span className="font-semibold text-foreground">
                  We standardise how your business grows
                </span>{" "}
                — leads, pitch, brand, follow-through — so the next step is
                repeatable, not accidental.
              </p>
            </RevealItem>
          </Reveal>

          {/* Image */}
          <Reveal>
            <RevealItem>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-5 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 30% 10%, rgba(79,70,229,0.22), transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(6,182,212,0.22), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-foreground/10 shadow-[var(--shadow-glass)]">
                  <Image
                    src={IMAGES.home.reframe}
                    alt="Architectural structure — systems built to scale"
                    fill
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0d17]/40 via-transparent to-transparent" />
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.09}>
          {REFRAME.pillars.map((pillar) => {
            const Icon = ICONS[pillar.id];
            return (
              <RevealItem key={pillar.id}>
                <div
                  className={`group h-full rounded-3xl border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 ${
                    pillar.emphasis
                      ? "border-accent-secondary/40 shadow-[var(--shadow-rest)] ring-1 ring-accent-secondary/15 hover:shadow-[var(--shadow-glass)]"
                      : "border-border hover:border-accent-secondary/30 hover:shadow-[var(--shadow-glass)]"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center rounded-2xl ${
                      pillar.emphasis
                        ? "h-12 w-12 bg-accent-secondary-soft"
                        : "h-11 w-11 bg-accent-secondary-soft/60"
                    }`}
                  >
                    <Icon
                      className={`text-accent-secondary ${
                        pillar.emphasis ? "h-6 w-6" : "h-5 w-5"
                      }`}
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="h3 mt-5 text-[1.35rem]">
                    {pillar.label}
                    {pillar.emphasis && (
                      <span className="mt-1 block h-0.5 w-10 rounded-full bg-accent-secondary" />
                    )}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">
                    {pillar.line}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
