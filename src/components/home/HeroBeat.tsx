"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, TrendingUp } from "lucide-react";
import { HERO } from "@/lib/home";
import { IMAGES } from "@/lib/images";
import { useQuestionnaire } from "@/components/questionnaire/QuestionnaireProvider";

export function HeroBeat() {
  const { open } = useQuestionnaire();

  const scrollToRealise = () => {
    document.getElementById("realise")?.scrollIntoView({ behavior: "smooth" });
  };

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Soft indigo → cyan gradient wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 0%, rgba(79,70,229,0.12), transparent 55%), radial-gradient(90% 80% at 100% 100%, rgba(6,182,212,0.10), transparent 50%), #ffffff",
        }}
        aria-hidden
      />
      {/* faint grid texture */}
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
        {/* ── Copy column ── */}
        <div className="max-w-2xl text-center lg:text-left">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 shadow-[var(--shadow-rest)] backdrop-blur"
            {...rise(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
            <span className="eyebrow leading-none">{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            className="h1-display mt-6 max-w-[15ch] text-[clamp(2rem,9vw,2.75rem)] md:text-[clamp(2.5rem,6vw,4.5rem)] mx-auto lg:mx-0"
            {...rise(0.06)}
          >
            Wherever you are today —{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              there&apos;s a next step
            </span>{" "}
            towards growth.
          </motion.h1>

          {/* Canonical definition — literally present in the DOM for clarity */}
          <motion.p
            className="mx-auto mt-6 max-w-[52ch] text-[1.0625rem] font-medium leading-relaxed text-foreground lg:mx-0"
            {...rise(0.12)}
          >
            {HERO.definition}
          </motion.p>

          <motion.p
            className="body-l mx-auto mt-4 max-w-[46ch] text-muted lg:mx-0"
            {...rise(0.18)}
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start justify-center"
            {...rise(0.26)}
          >
            <button
              type="button"
              onClick={() => open()}
              className="btn btn-primary w-full sm:w-auto"
            >
              {HERO.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollToRealise}
              className="btn btn-ghost w-full sm:w-auto"
            >
              {HERO.ghost}
              <ArrowDown className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm font-semibold tracking-[0.02em] text-accent-secondary"
            {...rise(0.32)}
          >
            {HERO.micro}
          </motion.p>
        </div>

        {/* ── Visual column ── */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          {/* glow */}
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 70% 20%, rgba(79,70,229,0.28), transparent 70%), radial-gradient(50% 50% at 20% 90%, rgba(6,182,212,0.26), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10 shadow-[var(--shadow-glass)] sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src={IMAGES.home.hero}
              alt="Modern architecture rising — a metaphor for deliberate growth"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17]/55 via-transparent to-transparent" />

            {/* floating glass stat card */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  A repeatable system
                </p>
                <p className="truncate text-xs text-white/70">
                  Leads · pitch · brand · follow-through
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
