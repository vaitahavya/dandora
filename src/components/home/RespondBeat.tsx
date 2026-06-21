"use client";

import Image from "next/image";
import { ArrowRight, Clock, Lock, Sparkles } from "lucide-react";
import { RESPOND } from "@/lib/home";
import { IMAGES } from "@/lib/images";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { useQuestionnaire } from "@/components/questionnaire/QuestionnaireProvider";

const REASSURANCE = [
  { icon: Clock, label: "About 6 minutes" },
  { icon: Lock, label: "Everything stays between us" },
  { icon: Sparkles, label: "Clarity even if we never work together" },
];

export function RespondBeat() {
  const { open } = useQuestionnaire();

  return (
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
              {/* faint backdrop image */}
              <div className="absolute inset-0 -z-10 opacity-[0.06]" aria-hidden>
                <Image
                  src={IMAGES.home.respond}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <h2 className="h2 mx-auto max-w-[20ch]">{RESPOND.h2}</h2>
              <p className="body-l mx-auto mt-5 max-w-[48ch] text-muted">
                {RESPOND.sub}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => open({ startStep: 2 })}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  {RESPOND.buttonA}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => open({ startStep: 1 })}
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  {RESPOND.buttonB}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                {REASSURANCE.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent-secondary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
