"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { IT_SOFTWARE as C } from "@/lib/sectors/it-software";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/constants";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import { ScopeBuildDialog } from "./ScopeBuildDialog";

export function SoftwareEngineeringPage() {
  const images = IMAGES.sectorPages["it-software"];

  const scrollToDeliver = () => {
    document.getElementById("deliver")?.scrollIntoView({ behavior: "smooth" });
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
          alt="Software engineering team building a product"
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
              <p className="eyebrow">{C.hero.eyebrow}</p>
            </RevealItem>
            <RevealItem className="mt-5">
              <h1 className="h1-display max-w-[20ch] text-white">{C.hero.h1}</h1>
            </RevealItem>
            <RevealItem className="mt-6">
              <p className="body-l max-w-[58ch] text-white/80">{C.hero.sub}</p>
            </RevealItem>
            <RevealItem className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ScopeBuildDialog
                  trigger={
                    <button type="button" className="btn btn-primary w-full sm:w-auto">
                      {C.hero.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  }
                />
                <button
                  type="button"
                  onClick={scrollToDeliver}
                  className="btn btn-ghost-dark w-full sm:w-auto"
                >
                  {C.hero.ghostCta}
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── Stat strip ───────────────────────────────────────── */}
      <section className="border-b border-border bg-background-off py-10">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal className="grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {C.stats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="text-center sm:text-left">
                  <p className="h2 text-[clamp(1.75rem,3vw,2.4rem)] text-accent">
                    {stat.figure}
                  </p>
                  <p className="mt-1 text-muted">{stat.label}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Intro + pillars ──────────────────────────────────── */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[720px]">
              <p className="eyebrow">{C.intro.eyebrow}</p>
              <h2 className="h2 mt-4">{C.intro.h2}</h2>
              <p className="body-l mt-6 text-muted">{C.intro.body}</p>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.09}>
            {C.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="h-full rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/30 hover:shadow-[var(--shadow-glass)]">
                  <h3 className="h3 text-[1.25rem]">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{pillar.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── What we build ────────────────────────────────────── */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{C.whatWeBuild.eyebrow}</p>
              <h2 className="h2 mt-4">What we build.</h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {C.whatWeBuild.items.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]">
                  <h3 className="h3 text-[1.3rem]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="rounded-full border-border bg-background px-2.5 text-[0.72rem] font-medium text-muted"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Technology stack ─────────────────────────────────── */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{C.techStack.eyebrow}</p>
              <h2 className="h2 mt-4">A stack chosen to fit the problem.</h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-10 space-y-5" stagger={0.07}>
            {C.techStack.groups.map((group) => (
              <RevealItem key={group.label}>
                <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
                  <p className="shrink-0 text-[0.95rem] font-semibold text-foreground sm:w-56">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-[0.875rem] font-medium text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Why teams choose us ──────────────────────────────── */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{C.whyChooseUs.eyebrow}</p>
              <h2 className="h2 mt-4">Why teams choose us.</h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.07}>
            {C.whyChooseUs.items.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-secondary-soft">
                    <Check className="h-4 w-4 text-accent-secondary" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    {"detail" in item && item.detail && (
                      <p className="mt-1 leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── How we deliver ───────────────────────────────────── */}
      <section
        id="deliver"
        className="scroll-mt-24 bg-background py-[clamp(96px,12vh,160px)]"
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{C.howWeDeliver.eyebrow}</p>
              <h2 className="h2 mt-4">How we deliver.</h2>
            </RevealItem>
          </Reveal>

          <Reveal
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
            stagger={0.07}
          >
            {C.howWeDeliver.steps.map((step) => (
              <RevealItem key={step.number}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-secondary-soft text-sm font-semibold text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Engagement models ────────────────────────────────── */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[680px]">
              <p className="eyebrow">{C.engagementModels.eyebrow}</p>
              <h2 className="h2 mt-4">Ways to work with us.</h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.09}>
            {C.engagementModels.items.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]">
                  <h3 className="h3 text-[1.25rem]">{item.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-[0.9rem] font-semibold text-accent-secondary">
                    {item.best}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Our product (EduConnect) ─────────────────────────── */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem>
              <div className="overflow-hidden rounded-[2rem] border border-border bg-surface ring-1 ring-foreground/10 shadow-[var(--shadow-glass)]">
                <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <p className="eyebrow">OUR PRODUCT</p>
                    <h2 className="h2 mt-4 max-w-[18ch]">
                      EduConnect — smart school management.
                    </h2>
                    <p className="body-l mt-6 max-w-[54ch] text-muted">
                      Our own school ERP and parent-communication platform —
                      attendance, fees, academics, and parent engagement in one
                      connected app. Built and shipped by our team.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {[
                        "Attendance",
                        "Parent app",
                        "Fees & receipts",
                        "Report cards",
                      ].map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1.5 text-[0.875rem] font-medium text-foreground"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9">
                      <Link
                        href="/products/educonnect"
                        className="btn btn-primary w-full sm:w-auto"
                      >
                        View EduConnect
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-accent-secondary/25 bg-accent-secondary-soft/40 p-7 sm:p-8">
                    <p className="text-[0.8rem] font-semibold uppercase tracking-wider text-accent-secondary">
                      Shipped by Dandora
                    </p>
                    <p className="mt-4 leading-relaxed text-foreground">
                      One connected ecosystem for administrators, teachers, and
                      parents — proof that we build and run real products, not
                      just client work.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-accent-secondary/20 pt-6">
                      <div>
                        <p className="h3 text-[1.5rem] text-accent">1 app</p>
                        <p className="mt-1 text-[0.85rem] text-muted">
                          Admin, staff &amp; parents
                        </p>
                      </div>
                      <div>
                        <p className="h3 text-[1.5rem] text-accent">End-to-end</p>
                        <p className="mt-1 text-[0.85rem] text-muted">
                          Admissions to report cards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── De-risk band ─────────────────────────────────────── */}
      <section className="bg-background py-[clamp(64px,8vh,112px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem>
              <div className="rounded-[2rem] border border-accent-secondary/25 bg-accent-secondary-soft/40 px-7 py-10 text-center sm:px-12 sm:py-12">
                <p className="body-l mx-auto max-w-[62ch] text-foreground">
                  {C.deRisk}
                </p>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── CTA (scope your build) ───────────────────────────── */}
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
                <p className="eyebrow">{C.cta.eyebrow}</p>
                <h2 className="h2 mx-auto mt-4 max-w-[20ch]">{C.cta.h2}</h2>
                <p className="body-l mx-auto mt-5 max-w-[50ch] text-muted">
                  {C.cta.sub}
                </p>

                <div className="mt-10 flex flex-col items-center gap-5">
                  <ScopeBuildDialog
                    trigger={
                      <button type="button" className="btn btn-primary w-full sm:w-auto">
                        {C.cta.primaryCta}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    }
                  />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-medium text-accent-secondary underline-offset-4 hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
