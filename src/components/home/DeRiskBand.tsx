"use client";

import { DERISK } from "@/lib/home";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function DeRiskBand() {
  return (
    <section className="relative overflow-hidden py-[clamp(96px,12vh,160px)]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 0%, rgba(79,70,229,0.08), transparent 60%), radial-gradient(80% 80% at 50% 110%, rgba(6,182,212,0.08), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-[720px] px-5 text-center md:px-8">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">{DERISK.eyebrow}</p>
          </RevealItem>
          <RevealItem className="mt-4">
            <h2 className="h2">{DERISK.h2}</h2>
          </RevealItem>
          <RevealItem className="mt-6">
            <p className="body-base text-muted">{DERISK.body}</p>
          </RevealItem>
          <RevealItem className="mt-10">
            <p className="h3 text-accent-secondary">{DERISK.closer}</p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
