"use client";

/**
 * Guided, scroll-driven feature walkthrough for EduConnect.
 *
 * Desktop (lg+): a two-column layout where the visual/mockup column is
 * `position: sticky` and crossfades to the mockup that matches the step the
 * reader has scrolled to. Active step is tracked with an IntersectionObserver.
 *
 * Mobile / no-JS: degrades to a clean stacked vertical sequence — each step
 * renders its own inline mockup directly above its copy. All copy is plain
 * markup and present without JavaScript; the sticky swap is purely an
 * enhancement and respects the global reduced-motion config (transitions are
 * neutralised there). The mockups are decorative (aria-hidden); the step copy
 * carries the meaning.
 */

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import type { WalkStep } from "@/lib/products/educonnect";
import { MOCKS } from "./EduConnectMocks";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

function StepCopy({ step }: { step: WalkStep }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-secondary-soft text-[0.95rem] font-semibold text-accent-secondary">
          {step.number}
        </span>
        <span className="eyebrow">{step.eyebrow}</span>
      </div>
      <h3 className="h3 mt-5 max-w-[20ch] text-[1.5rem]">{step.title}</h3>
      <p className="body-base mt-4 max-w-[46ch] text-muted">{step.body}</p>
      <ul className="mt-5 space-y-2.5">
        {step.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary-soft">
              <Check className="h-3 w-3 text-accent-secondary" />
            </span>
            <span className="text-[0.95rem] leading-relaxed text-foreground">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function FeatureWalkthrough({ steps }: { steps: WalkStep[] }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the entry closest to the viewport centre that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length === 0) return;
        const idx = els.indexOf(visible[0].target as HTMLLIElement);
        if (idx !== -1) setActive(idx);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      {/* ── Sticky visual column (desktop only) ───────────────────── */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          {/* progress rail */}
          <div className="mb-6 flex items-center gap-2" aria-hidden>
            {steps.map((s, i) => (
              <span
                key={s.id}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                  i <= active ? "bg-accent-secondary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 30% 10%, rgba(79,70,229,0.20), transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(6,182,212,0.20), transparent 70%)",
              }}
              aria-hidden
            />
            {/* All mockups stacked in one grid cell; active one fades in. */}
            <div className="grid" aria-hidden>
              {steps.map((s, i) => {
                const Mock = MOCKS[s.mock];
                return (
                  <div
                    key={s.id}
                    className={`[grid-area:1/1] transition-opacity duration-500 ${
                      i === active
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <Mock />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scrolling steps column ────────────────────────────────── */}
      <ol className="space-y-16 lg:space-y-[clamp(120px,22vh,220px)]">
        {steps.map((step, i) => {
          const Mock = MOCKS[step.mock];
          return (
            <li
              key={step.id}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="scroll-mt-28"
            >
              {/* Inline mockup — shown on mobile, hidden on desktop where the
                  sticky column takes over. */}
              <Reveal className="lg:hidden">
                <RevealItem>
                  <div className="relative mb-7">
                    <div
                      className="absolute -inset-5 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(60% 60% at 30% 10%, rgba(79,70,229,0.18), transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(6,182,212,0.18), transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <div aria-hidden>
                      <Mock />
                    </div>
                  </div>
                </RevealItem>
              </Reveal>

              <Reveal>
                <RevealItem>
                  <StepCopy step={step} />
                </RevealItem>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
