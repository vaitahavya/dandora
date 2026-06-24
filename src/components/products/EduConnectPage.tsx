"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Building2,
  Bus,
  Check,
  GaugeCircle,
  GraduationCap,
  School,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import { EDUCONNECT } from "@/lib/products/educonnect";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import { AttendanceMock } from "./EduConnectMocks";
import { FeatureWalkthrough } from "./FeatureWalkthrough";

const E = EDUCONNECT;

const AUDIENCE_ICONS = {
  management: School,
  teachers: GraduationCap,
  parents: Users,
} as const;

const ADDON_ICONS = {
  franchise: Building2,
  transport: Bus,
  canteen: Utensils,
} as const;

export function EduConnectPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main>
      {/* ══ 1 · RECOGNISE — hero ═══════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 90% at 12% 0%, rgba(79,70,229,0.12), transparent 55%), radial-gradient(90% 80% at 100% 100%, rgba(6,182,212,0.10), transparent 50%), #ffffff",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20,21,26,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,21,26,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(80% 70% at 50% 30%, #000 30%, transparent 80%)",
          }}
          aria-hidden
        />

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pt-32 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
          {/* Copy column */}
          <div className="max-w-2xl text-center lg:text-left">
            <Reveal>
              <RevealItem className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 shadow-[var(--shadow-rest)] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                  <span className="eyebrow leading-none">{E.hero.eyebrow}</span>
                </span>
              </RevealItem>

              <RevealItem className="mt-7">
                <span className="text-[1.6rem] font-semibold tracking-[-0.02em] text-foreground">
                  {E.product.name}
                </span>
                <span className="mt-1 block text-sm font-medium text-muted">
                  {E.product.tag}
                </span>
              </RevealItem>

              <RevealItem className="mt-5">
                <h1 className="h1-display mx-auto max-w-[16ch] text-[clamp(2rem,8vw,2.75rem)] md:text-[clamp(2.4rem,5vw,4rem)] lg:mx-0">
                  Your school runs on a dozen tools that{" "}
                  <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                    don&apos;t talk
                  </span>{" "}
                  to each other.
                </h1>
              </RevealItem>

              <RevealItem className="mt-6">
                <p className="body-l mx-auto max-w-[48ch] text-muted lg:mx-0">
                  {E.hero.sub}
                </p>
              </RevealItem>

              <RevealItem className="mt-9">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-center lg:justify-start">
                  <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                    {E.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#walkthrough" className="btn btn-ghost w-full sm:w-auto">
                    {E.hero.ghostCta}
                    <ArrowDown className="h-4 w-4" />
                  </a>
                </div>
              </RevealItem>

              <RevealItem className="mt-8">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                  <Check className="h-4 w-4 text-accent-secondary" />
                  {E.hero.trust}
                </p>
              </RevealItem>
            </Reveal>
          </div>

          {/* Visual column */}
          <Reveal>
            <RevealItem>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 70% 20%, rgba(79,70,229,0.26), transparent 70%), radial-gradient(50% 50% at 20% 90%, rgba(6,182,212,0.24), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div aria-hidden>
                  <AttendanceMock />
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-surface/90 p-3.5 shadow-[var(--shadow-glass)] backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Bell className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      Parent notified, instantly
                    </span>
                    <span className="block truncate text-xs text-muted">
                      One register entry — the whole school stays in sync.
                    </span>
                  </span>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ══ 2 · REALISE — quiet dark band ══════════════════════════ */}
      <section className="bg-dark-bg py-[clamp(112px,16vh,180px)] text-dark-text">
        <div className="mx-auto max-w-[720px] px-5 md:px-8">
          <p className="eyebrow">{E.realise.eyebrow}</p>
          <h2 className="h2 mt-4 text-dark-text">{E.realise.h2}</h2>
          <p
            className="body-base mt-6"
            style={{ color: "rgba(231,232,240,0.78)" }}
          >
            {E.realise.body}
          </p>

          <p className="body-l mt-10 text-dark-text">{E.realise.leadIn}</p>

          <ul className="mt-7 space-y-4">
            {E.realise.costs.map((cost) => (
              <li key={cost} className="flex gap-4">
                <span
                  className="mt-3 h-px w-6 shrink-0 bg-accent-secondary"
                  aria-hidden
                />
                <span
                  className="body-base"
                  style={{ color: "rgba(231,232,240,0.92)" }}
                >
                  {cost}
                </span>
              </li>
            ))}
          </ul>

          <p className="h3 mt-12 text-accent-secondary">{E.realise.closer}</p>
        </div>
      </section>

      {/* ══ 3 · RESONATE — selectable pain states ══════════════════ */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="mx-auto max-w-[720px] text-center">
              <p className="eyebrow">{E.resonate.eyebrow}</p>
              <h2 className="h2 mt-4">{E.resonate.h2}</h2>
              <p className="body-l mt-4 text-muted">{E.resonate.sub}</p>
            </RevealItem>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {E.resonate.cards.map((card, i) => {
              const isSel = selected === card.id;
              const dim = selected !== null && !isSel;
              return (
                <button
                  key={card.id}
                  type="button"
                  aria-pressed={isSel}
                  onClick={() => setSelected(isSel ? null : card.id)}
                  className={`group focus-ring relative flex min-h-[150px] flex-col items-start overflow-hidden rounded-3xl border p-7 text-left transition-all duration-300 ${
                    isSel
                      ? "border-accent-secondary/70 bg-surface shadow-[var(--shadow-hover)]"
                      : "border-border bg-surface hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]"
                  } ${dim ? "opacity-55" : "opacity-100"}`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      isSel ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "radial-gradient(80% 90% at 100% 0%, rgba(6,182,212,0.12), transparent 60%)",
                    }}
                  />
                  <span className="relative flex w-full items-center justify-between">
                    <Badge
                      variant="outline"
                      className="rounded-full px-2.5 text-[0.7rem] font-semibold tracking-wide text-muted"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </Badge>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isSel
                          ? "scale-100 bg-accent-secondary text-white"
                          : "scale-0 bg-transparent"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="relative mt-4 text-[1.25rem] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                    {card.headline}
                  </span>
                  <span className="relative mt-2 text-[0.95rem] text-muted">
                    {card.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 4 · REFRAME — one connected platform + walkthrough ═════ */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[760px]">
              <p className="eyebrow">{E.reframe.eyebrow}</p>
              <h2 className="h2 mt-4">{E.reframe.h2}</h2>
              <p className="body-base mt-6 text-muted">{E.reframe.body}</p>
            </RevealItem>
          </Reveal>

          {/* Module groups overview */}
          <Reveal
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.07}
          >
            {E.reframe.modules.map((group) => (
              <RevealItem key={group.id}>
                <div className="h-full rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/40 hover:shadow-[var(--shadow-glass)]">
                  <p className="eyebrow text-[0.7rem]">{group.label}</p>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[0.95rem] text-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>

        {/* Guided walkthrough */}
        <div
          id="walkthrough"
          className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-[clamp(72px,10vh,128px)] md:px-8"
        >
          <Reveal>
            <RevealItem className="max-w-[720px]">
              <p className="eyebrow">{E.reframe.walkthrough.eyebrow}</p>
              <h2 className="h2 mt-4">{E.reframe.walkthrough.h2}</h2>
              <p className="body-l mt-4 text-muted">
                {E.reframe.walkthrough.sub}
              </p>
            </RevealItem>
          </Reveal>

          <FeatureWalkthrough steps={E.reframe.walkthrough.steps} />
        </div>

        {/* Customisation lead-in */}
        <div className="mx-auto max-w-[1200px] px-5 pt-[clamp(72px,10vh,128px)] md:px-8">
          <Reveal>
            <RevealItem>
              <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface p-8 shadow-[var(--shadow-rest)] sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
                  <div>
                    <p className="eyebrow">{E.reframe.customisation.eyebrow}</p>
                    <h2 className="h2 mt-4 text-[clamp(1.6rem,3vw,2.2rem)]">
                      {E.reframe.customisation.h2}
                    </h2>
                  </div>
                  <div>
                    <p className="body-base text-muted">
                      {E.reframe.customisation.body}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {E.reframe.customisation.points.map((pt) => (
                        <li
                          key={pt}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-[0.875rem] font-medium text-foreground"
                        >
                          <Check className="h-3.5 w-3.5 text-accent-secondary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>

        {/* Extend it — ready add-on modules */}
        <div className="mx-auto max-w-[1200px] px-5 pt-[clamp(56px,8vh,96px)] md:px-8">
          <Reveal>
            <RevealItem className="max-w-[720px]">
              <p className="eyebrow">{E.reframe.extend.eyebrow}</p>
              <h2 className="h2 mt-4">{E.reframe.extend.h2}</h2>
              <p className="body-l mt-4 text-muted">{E.reframe.extend.sub}</p>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.09}>
            {E.reframe.extend.addons.map((addon) => {
              const Icon =
                ADDON_ICONS[addon.icon as keyof typeof ADDON_ICONS] ?? Sparkles;
              return (
                <RevealItem key={addon.id}>
                  <div className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-rest)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/40 hover:shadow-[var(--shadow-glass)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-secondary-soft">
                        <Icon
                          className="h-5 w-5 text-accent-secondary"
                          strokeWidth={1.75}
                        />
                      </span>
                      <Badge
                        variant="outline"
                        className="rounded-full border-accent-secondary/40 bg-accent-secondary-soft px-2.5 text-[0.68rem] font-semibold tracking-wide text-accent-secondary"
                      >
                        Add-on · Ready
                      </Badge>
                    </div>
                    <h3 className="h3 mt-5 text-[1.25rem]">{addon.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {addon.line}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>

          <Reveal className="mt-10" delay={0.05}>
            <RevealItem>
              <p className="inline-flex items-center gap-2 text-[1.05rem] font-medium text-accent-secondary">
                <Sparkles className="h-4 w-4" />
                {E.reframe.extend.closer}
              </p>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ══ REFRAME → RELY bridge — two outcomes ═══════════════════ */}
      <section className="bg-background py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[720px]">
              <p className="eyebrow">{E.outcomes.eyebrow}</p>
              <h2 className="h2 mt-4">{E.outcomes.h2}</h2>
              <p className="body-l mt-5 text-muted">{E.outcomes.sub}</p>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.12}>
            {E.outcomes.pillars.map((pillar) => {
              const isCyan = pillar.accent === "cyan";
              const Icon = isCyan ? TrendingUp : GaugeCircle;
              return (
                <RevealItem key={pillar.id}>
                  <div
                    className={`relative h-full overflow-hidden rounded-[1.75rem] border bg-surface p-8 shadow-[var(--shadow-rest)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glass)] sm:p-10 ${
                      isCyan
                        ? "border-accent-secondary/30 ring-1 ring-accent-secondary/10"
                        : "border-accent/25 ring-1 ring-accent/10"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-2xl"
                      style={{
                        background: isCyan
                          ? "radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)"
                          : "radial-gradient(circle, rgba(79,70,229,0.18), transparent 70%)",
                      }}
                    />
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isCyan
                          ? "bg-accent-secondary-soft text-accent-secondary"
                          : "bg-accent-soft text-accent"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="h3 mt-5 text-[1.5rem]">
                      {pillar.label}
                      <span
                        className={`mt-2 block h-0.5 w-10 rounded-full ${
                          isCyan ? "bg-accent-secondary" : "bg-accent"
                        }`}
                      />
                    </h3>
                    <p className="mt-4 max-w-[44ch] leading-relaxed text-muted">
                      {pillar.line}
                    </p>

                    <dl className="mt-7 space-y-4 border-t border-border pt-7">
                      {pillar.points.map((pt) => (
                        <div key={pt.k} className="flex gap-3.5">
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              isCyan
                                ? "bg-accent-secondary-soft text-accent-secondary"
                                : "bg-accent-soft text-accent"
                            }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          <div>
                            <dt
                              className={`text-[0.95rem] font-semibold ${
                                isCyan ? "text-accent-secondary" : "text-accent"
                              }`}
                            >
                              {pt.k}
                            </dt>
                            <dd className="mt-0.5 text-[0.95rem] leading-relaxed text-muted">
                              {pt.v}
                            </dd>
                          </div>
                        </div>
                      ))}
                    </dl>

                    {isCyan && (
                      <span className="mt-7 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold uppercase tracking-wider text-accent-secondary">
                        <ArrowRight className="h-3.5 w-3.5" />
                        Trust → retention → admissions
                      </span>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>

          <Reveal className="mt-12 text-center" delay={0.05}>
            <RevealItem>
              <p className="h3 text-accent-secondary">{E.outcomes.closer}</p>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ══ 5 · RELY — who it's for + credibility ══════════════════ */}
      <section className="bg-background-off py-[clamp(96px,12vh,160px)]">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal>
            <RevealItem className="max-w-[720px]">
              <p className="eyebrow">{E.rely.eyebrow}</p>
              <h2 className="h2 mt-4">{E.rely.h2}</h2>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.09}>
            {E.rely.audiences.map((aud) => {
              const Icon =
                AUDIENCE_ICONS[aud.id as keyof typeof AUDIENCE_ICONS] ?? Users;
              return (
                <RevealItem key={aud.id}>
                  <div className="h-full rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/30 hover:shadow-[var(--shadow-glass)]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-secondary-soft">
                      <Icon
                        className="h-5 w-5 text-accent-secondary"
                        strokeWidth={1.75}
                      />
                    </span>
                    <h3 className="h3 mt-5 text-[1.25rem]">{aud.role}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{aud.line}</p>
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>

          {/* Credibility panel */}
          <Reveal className="mt-10">
            <RevealItem>
              <div className="overflow-hidden rounded-[2rem] border border-accent-secondary/25 bg-accent-secondary-soft/40 p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="eyebrow">{E.rely.credibility.label}</p>
                    <p className="body-l mt-5 max-w-[52ch] text-foreground">
                      {E.rely.credibility.body}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-accent-secondary/20 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                    {E.rely.credibility.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="h3 text-[1.5rem] text-accent">
                          {stat.figure}
                        </p>
                        <p className="mt-1 text-[0.85rem] text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ══ 6 · RESPOND — final CTA ════════════════════════════════ */}
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
                  {E.respond.eyebrow}
                </Badge>
                <h2 className="h2 mx-auto max-w-[20ch]">{E.respond.h2}</h2>
                <p className="body-l mx-auto mt-5 max-w-[54ch] text-muted">
                  {E.respond.sub}
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    {E.respond.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-8 text-[0.8125rem] text-muted">
                  {E.respond.reassurance}
                </p>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* In-page sticky "Book a demo" — an enhancement, never the only path */}
      <Link
        href="/contact"
        aria-label="Book an EduConnect demo"
        className="focus-ring btn btn-primary fixed bottom-5 right-5 z-40 hidden shadow-[var(--shadow-hover)] sm:inline-flex"
      >
        Book a demo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </main>
  );
}
