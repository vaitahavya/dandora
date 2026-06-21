"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { RESONATE } from "@/lib/home";
import { BEAT3_TO_CLOSEST } from "@/lib/questionnaire";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";
import { useQuestionnaire } from "@/components/questionnaire/QuestionnaireProvider";

export function ResonateBeat() {
  const { open } = useQuestionnaire();
  const [selected, setSelected] = useState<string | null>(null);

  const goDeeper = () => {
    if (!selected) return;
    open({
      startStep: 3,
      prefill: { closest: BEAT3_TO_CLOSEST[selected] },
    });
  };

  return (
    <section className="bg-background py-[clamp(96px,12vh,160px)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal>
          <RevealItem className="mx-auto max-w-[720px] text-center">
            <p className="eyebrow">Find yourself</p>
            <h2 className="h2 mt-4">{RESONATE.h2}</h2>
            <p className="body-l mt-4 text-muted">{RESONATE.sub}</p>
          </RevealItem>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {RESONATE.cards.map((card, i) => {
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
                {/* selected gradient sheen */}
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

        <AnimatePresence>
          {selected && (
            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" onClick={goDeeper} className="btn btn-primary">
                {RESONATE.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
