"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { GrowthSectorContent } from "@/lib/sectors/types";
import { IMAGES } from "@/lib/images";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import { useQuestionnaire } from "@/components/questionnaire/QuestionnaireProvider";

export function GrowthSectorPage({ content }: { content: GrowthSectorContent }) {
  const { open } = useQuestionnaire();
  const images = IMAGES.sectorPages[content.imageKey];

  const scrollToCosting = () => {
    document.getElementById("costing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        data-hero-dark="true"
        className="relative flex min-h-[70vh] items-end overflow-hidden"
      >
        <Image
          src={images.hero}
          alt={`${content.sectorLabel} — ${content.hero.eyebrow}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,13,23,0.92) 0%, rgba(11,13,23,0.62) 38%, rgba(11,13,23,0.30) 70%, rgba(11,13,23,0.45) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 pt-36 pb-16 md:px-8 md:pt-40 md:pb-24">
          <Reveal>
            <RevealItem>
              <p className="eyebrow">{content.hero.eyebrow}</p>
            </RevealItem>
            <RevealItem className="mt-5">
              <h1 className="h1-display max-w-[20ch] text-white">
                {content.hero.h1}
              </h1>
            </RevealItem>
            <RevealItem className="mt-6">
              <p className="body-l max-w-[56ch] text-white/80">
                {content.hero.sub}
              </p>
            </RevealItem>
            <RevealItem className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => open({ sector: content.sectorLabel })}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  {content.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollToCosting}
                  className="btn btn-ghost-dark w-full sm:w-auto"
                >
                  {content.hero.ghostCta}
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── What's costing you ───────────────────────────────── */}
      <section
        id="costing"
        className="scroll-mt-24 bg-background-off py-[clamp(96px,12vh,160px)]"
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{content.costing.eyebrow}</p>
              <h2 className="h2 mt-4">
                The quiet leaks — and the next move on each.
              </h2>
            </RevealItem>
          </Reveal>

          <Reveal
            className="mt-12 grid gap-6 md:grid-cols-2"
            stagger={0.08}
          >
            {content.costing.items.map((item) => (
              <RevealItem key={item.pain}>
                <div className="group h-full rounded-3xl border border-border bg-surface p-7 ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]">
                  {item.stage && (
                    <p className="eyebrow mb-3 text-[0.7rem]">{item.stage}</p>
                  )}
                  <p className="text-[1.15rem] font-medium leading-snug text-foreground">
                    &ldquo;{item.pain}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-border pt-5">
                    <p className="eyebrow text-[0.7rem]">Next step</p>
                    <p className="mt-2 leading-relaxed text-muted">
                      {item.nextStep.charAt(0).toUpperCase() +
                        item.nextStep.slice(1)}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          {content.costingExtra && (
            <Reveal className="mt-14" delay={0.05}>
              <RevealItem>
                <p className="eyebrow">{content.costingExtra.label}</p>
              </RevealItem>
              <Reveal
                className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.07}
              >
                {content.costingExtra.items.map((item) => (
                  <RevealItem key={item.pain}>
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-hover)]">
                      <p className="font-medium text-foreground">
                        &ldquo;{item.pain}&rdquo;
                      </p>
                      <p className="mt-3 inline-flex items-start gap-1.5 text-[0.95rem] text-accent-secondary">
                        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0" />
                        <span className="text-muted">{item.nextStep}</span>
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </Reveal>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── What we can do for you ───────────────────────────── */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{content.capabilities.eyebrow}</p>
              <h2 className="h2 mt-4">
                One team, pointed at the whole problem.
              </h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-3" stagger={0.03}>
            {content.capabilities.items.map((cap) => (
              <RevealItem key={cap}>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2.5 text-[0.95rem] font-medium text-foreground shadow-[var(--shadow-rest)] transition-colors duration-300 hover:border-accent-secondary/50 hover:bg-accent-secondary-soft">
                  {cap}
                </span>
              </RevealItem>
            ))}
          </Reveal>

          {content.capabilities.note && (
            <Reveal className="mt-7" delay={0.1}>
              <RevealItem>
                <p className="max-w-[60ch] text-sm text-muted">
                  {content.capabilities.note}
                </p>
              </RevealItem>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── How we work (with band image) ────────────────────── */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
                      src={images.band}
                      alt={`${content.sectorLabel} — how we work`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 46vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0d17]/40 via-transparent to-transparent" />
                  </div>
                </div>
              </RevealItem>
            </Reveal>

            <Reveal>
              <RevealItem className="max-w-[640px]">
                <p className="eyebrow">{content.howWeWork.eyebrow}</p>
                <p className="body-l mt-5 text-foreground">
                  {content.howWeWork.body}
                </p>
              </RevealItem>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-[clamp(96px,12vh,160px)]">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(110% 80% at 50% 0%, rgba(79,70,229,0.14), transparent 60%), radial-gradient(90% 90% at 50% 120%, rgba(6,182,212,0.14), transparent 55%), #ffffff",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem>
              <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-surface/80 px-6 py-14 text-center shadow-[var(--shadow-glass)] backdrop-blur-xl sm:px-12 sm:py-16">
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full border-accent-secondary/40 bg-accent-secondary-soft px-3 text-[0.7rem] font-semibold tracking-wide text-accent-secondary"
                >
                  {content.sectorLabel}
                </Badge>
                <h2 className="h2 mx-auto max-w-[22ch]">{content.cta.h2}</h2>
                {content.cta.sub && (
                  <p className="body-l mx-auto mt-5 max-w-[50ch] text-muted">
                    {content.cta.sub}
                  </p>
                )}

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      open({ startStep: 2, sector: content.sectorLabel })
                    }
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    {content.cta.buttonA}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      open({ startStep: 1, sector: content.sectorLabel })
                    }
                    className="btn btn-ghost w-full sm:w-auto"
                  >
                    {content.cta.buttonB}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
