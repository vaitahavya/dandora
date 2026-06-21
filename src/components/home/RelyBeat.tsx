"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { RELY } from "@/lib/home";
import { IMAGES } from "@/lib/images";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";

export function RelyBeat() {
  return (
    <section className="bg-background py-[clamp(88px,11vh,140px)]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Copy */}
        <Reveal>
          <RevealItem className="max-w-[560px]">
            <p className="eyebrow">Why Dandora</p>
            <h2 className="h2 mt-4">{RELY.h2}</h2>
          </RevealItem>
          <RevealItem className="mt-6">
            <p className="body-base text-muted">{RELY.body}</p>
          </RevealItem>
          <RevealItem className="mt-8 border-t border-border pt-7">
            <div className="flex flex-wrap gap-2">
              {RELY.proof.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="rounded-full border-border px-3.5 py-1.5 text-[0.8125rem] font-medium text-muted"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </RevealItem>
        </Reveal>

        {/* Stacked image composition */}
        <Reveal>
          <RevealItem>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
              <div
                className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 80% 10%, rgba(79,70,229,0.22), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(6,182,212,0.22), transparent 70%)",
                }}
                aria-hidden
              />
              {/* main: production / storytelling */}
              <div className="absolute right-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-[1.5rem] ring-1 ring-foreground/10 shadow-[var(--shadow-glass)]">
                <Image
                  src={IMAGES.home.relyProduction}
                  alt="High-end production and storytelling"
                  fill
                  sizes="(max-width: 1024px) 70vw, 32vw"
                  className="object-cover"
                />
              </div>
              {/* overlap: growth strategy */}
              <div className="absolute bottom-0 left-0 h-[52%] w-[52%] overflow-hidden rounded-[1.25rem] ring-1 ring-foreground/10 shadow-[var(--shadow-glass)] outline outline-4 outline-background">
                <Image
                  src={IMAGES.home.relyStrategy}
                  alt="Business development and growth strategy"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              {/* glass location chip */}
              <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" />
                Hyderabad-rooted
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
