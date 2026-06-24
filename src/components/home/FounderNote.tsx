"use client";

import { Quote } from "lucide-react";
import { FOUNDER_NOTE } from "@/lib/home";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function FounderNote() {
  return (
    <section className="bg-background py-[clamp(72px,9vh,120px)]">
      <div className="mx-auto max-w-[760px] px-5 md:px-8">
        <Reveal>
          <RevealItem>
            <figure className="relative overflow-hidden rounded-3xl border border-border bg-surface px-7 py-10 text-center shadow-[var(--shadow-rest)] sm:px-12 sm:py-12">
              <div
                className="absolute inset-0 -z-10 opacity-70"
                style={{
                  background:
                    "radial-gradient(80% 70% at 50% 0%, rgba(79,70,229,0.06), transparent 60%), radial-gradient(70% 70% at 50% 110%, rgba(6,182,212,0.06), transparent 55%)",
                }}
                aria-hidden
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-secondary-soft">
                <Quote className="h-6 w-6 text-accent-secondary" strokeWidth={1.75} />
              </span>
              <p className="eyebrow mt-6">{FOUNDER_NOTE.eyebrow}</p>
              <blockquote className="mt-5">
                <p className="text-[1.1875rem] leading-relaxed text-foreground sm:text-[1.25rem]">
                  {FOUNDER_NOTE.body}
                </p>
              </blockquote>
              <figcaption className="mt-7 text-[0.9375rem] font-semibold text-accent-secondary">
                {FOUNDER_NOTE.signature}
              </figcaption>
            </figure>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
