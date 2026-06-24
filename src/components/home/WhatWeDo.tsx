"use client";

import Link from "next/link";
import { ArrowUpRight, Clapperboard, Code, Compass, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHAT_WE_DO } from "@/lib/home";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  clapperboard: Clapperboard,
  "trending-up": TrendingUp,
  code: Code,
};

export function WhatWeDo() {
  return (
    <section className="bg-background-off py-[clamp(64px,8vh,104px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <RevealItem className="max-w-[680px]">
            <p className="eyebrow">{WHAT_WE_DO.eyebrow}</p>
            <h2 className="h2 mt-4">{WHAT_WE_DO.h2}</h2>
          </RevealItem>
          <RevealItem className="mt-4">
            <p className="body-base max-w-[52ch] text-muted">{WHAT_WE_DO.sub}</p>
          </RevealItem>
        </Reveal>

        <Reveal
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {WHAT_WE_DO.services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <RevealItem key={service.id}>
                <Link
                  href={service.href}
                  className="group focus-ring flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-rest)] transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50 hover:shadow-[var(--shadow-glass)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-secondary-soft">
                      <Icon
                        className="h-5 w-5 text-accent-secondary"
                        strokeWidth={1.75}
                      />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-secondary" />
                  </div>
                  <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {service.line}
                  </p>
                </Link>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
