"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BEATS = [
  "We help you find it.",
  "Build on it.",
  "Take it somewhere worth going.",
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const beat1Ref = useRef<HTMLParagraphElement>(null);
  const beat2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showCta, setShowCta] = useState(false);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isMobile = window.innerWidth < 768;

      if (prefersReducedMotion || isMobile) {
        let beatIndex = 0;
        if (beat2Ref.current) beat2Ref.current.textContent = BEATS[0];

        const mobileTl = gsap.timeline({ defaults: { ease: "power2.out" } });
        mobileTl
          .from(beat1Ref.current, { opacity: 0, y: 24, duration: 0.8 })
          .from(beat2Ref.current, { opacity: 0, y: 24, duration: 0.8 }, "-=0.4");

        BEATS.slice(1).forEach((beat) => {
          mobileTl
            .to(beat2Ref.current, { opacity: 0, y: -12, duration: 0.4 })
            .call(() => {
              beatIndex += 1;
              if (beat2Ref.current) beat2Ref.current.textContent = BEATS[beatIndex];
            })
            .fromTo(
              beat2Ref.current,
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.6 },
            );
        });

        mobileTl
          .from(ctaRef.current, { opacity: 0, y: 16, duration: 0.6 })
          .call(() => setShowCta(true));

        return;
      }

      if (beat2Ref.current) beat2Ref.current.textContent = BEATS[0];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const beatIndex = Math.min(
              BEATS.length - 1,
              Math.floor(self.progress * BEATS.length * 0.85),
            );
            if (beat2Ref.current) {
              beat2Ref.current.textContent = BEATS[beatIndex];
            }
            setShowCta(self.progress > 0.88);
          },
        },
      });

      tl.from(beat1Ref.current, { opacity: 0, y: 40, duration: 0.15 })
        .to(beat1Ref.current, { opacity: 1, y: 0, duration: 0.1 })
        .to(beat1Ref.current, { opacity: 0.35, duration: 0.1 }, "+=0.05")
        .from(beat2Ref.current, { opacity: 0, y: 30, duration: 0.1 })
        .to(beat2Ref.current, { opacity: 1, y: 0, duration: 0.55 })
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.1 });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-mesh grain"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(45,90,71,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p
          ref={beat1Ref}
          className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Your business has more to it than it&apos;s showing.
        </p>

        <p
          ref={beat2Ref}
          className="font-display mt-8 text-2xl font-medium leading-tight tracking-tight text-accent sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {BEATS[0]}
        </p>

        <div
          ref={ctaRef}
          className={`mt-12 transition-opacity duration-500 ${showCta ? "opacity-100" : "opacity-0"}`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-medium backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10"
          >
            Talk to us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
