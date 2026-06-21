"use client";

import {
  AnimatePresence,
  motion,
  Reorder,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check, GripVertical, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Answers, Field } from "@/lib/questionnaire";
import {
  INTRO,
  reflectObservations,
  STEPS,
  TOTAL_STEPS,
} from "@/lib/questionnaire";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type Phase = "intro" | "step" | "end";

type Props = {
  isOpen: boolean;
  phase: Phase;
  step: number;
  sector?: string;
  answers: Answers;
  onClose: () => void;
  onSetPhase: (p: Phase) => void;
  onSetStep: (s: number) => void;
  onSetAnswer: (key: string, value: unknown) => void;
};

function isFilled(value: unknown): boolean {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  return value != null && value !== "";
}

function stepComplete(step: number, answers: Answers): boolean {
  const def = STEPS[step - 1];
  if (!def) return true;
  return def.fields.every((f) => {
    if (!f.required) return true;
    if (f.type === "contact") {
      return (
        isFilled(answers.contactName) && isFilled(answers.contactInfo)
      );
    }
    return isFilled(answers[f.key]);
  });
}

export function QuestionnaireModal({
  isOpen,
  phase,
  step,
  sector,
  answers,
  onClose,
  onSetPhase,
  onSetStep,
  onSetAnswer,
}: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Body scroll lock.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Escape to close + basic focus trap.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Reset scroll + focus on step/phase change.
  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: 0 });
    const t = setTimeout(() => {
      const firstInput = panelRef.current?.querySelector<HTMLElement>(
        "input, textarea",
      );
      firstInput?.focus({ preventScroll: true });
    }, 60);
    return () => clearTimeout(t);
  }, [isOpen, step, phase]);

  const goNext = useCallback(() => {
    if (phase === "intro") {
      onSetPhase("step");
      onSetStep(1);
      return;
    }
    if (step >= TOTAL_STEPS) {
      onSetPhase("end");
      return;
    }
    onSetStep(step + 1);
  }, [phase, step, onSetPhase, onSetStep]);

  const goBack = useCallback(() => {
    if (step <= 1) {
      onSetPhase("intro");
      return;
    }
    onSetStep(step - 1);
  }, [step, onSetPhase, onSetStep]);

  const canContinue = phase !== "step" || stepComplete(step, answers);

  const [direction, setDirection] = useState(1);
  const handleNext = () => {
    setDirection(1);
    goNext();
  };
  const handleBack = () => {
    setDirection(-1);
    goBack();
  };

  const slide = reduce
    ? {}
    : {
        initial: { opacity: 0, x: direction * 32 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -32 },
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
      };

  const currentStep = STEPS[step - 1];
  const observations = phase === "end" ? reflectObservations(answers) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-stretch justify-center bg-[rgba(11,13,23,0.55)] backdrop-blur-sm md:items-center md:p-6"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Discovery questionnaire"
        >
          <motion.div
            ref={panelRef}
            className="relative flex h-full w-full flex-col bg-surface md:h-auto md:max-h-[88vh] md:max-w-2xl md:rounded-[1.5rem] md:shadow-[var(--shadow-glass)] md:ring-1 md:ring-foreground/10"
            initial={reduce ? undefined : { y: 24, opacity: 0 }}
            animate={reduce ? undefined : { y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Progress bar (shadcn) */}
            <Progress
              value={
                phase === "intro"
                  ? 0
                  : phase === "end"
                    ? 100
                    : (step / TOTAL_STEPS) * 100
              }
              className="shrink-0 gap-0 [&_[data-slot=progress-indicator]]:bg-accent-secondary [&_[data-slot=progress-indicator]]:transition-[width] [&_[data-slot=progress-indicator]]:duration-300 [&_[data-slot=progress-track]]:rounded-none [&_[data-slot=progress-track]]:bg-border md:[&_[data-slot=progress-track]]:rounded-t-2xl"
            />

            {/* Header */}
            <div className="flex shrink-0 items-center justify-between px-6 pt-5 pb-2 md:px-10">
              <span className="flex items-center gap-2.5">
                <span className="micro font-medium">
                  {phase === "step"
                    ? `Step ${step} of ${TOTAL_STEPS}`
                    : phase === "end"
                      ? "Complete"
                      : "A few questions"}
                </span>
                {sector && phase === "step" && (
                  <Badge
                    variant="outline"
                    className="rounded-full border-accent-secondary/40 bg-accent-secondary-soft px-2.5 text-[0.7rem] font-semibold tracking-wide text-accent-secondary"
                  >
                    {sector}
                  </Badge>
                )}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8"
            >
              <AnimatePresence mode="wait">
                {phase === "intro" && (
                  <motion.div key="intro" {...slide}>
                    <p className="eyebrow">Before we begin</p>
                    <h2 className="h3 mt-4 text-[1.65rem] leading-tight">
                      {INTRO.title}
                    </h2>
                    <p className="body-base prose-muted mt-4">{INTRO.body}</p>
                  </motion.div>
                )}

                {phase === "step" && currentStep && (
                  <motion.div key={`step-${step}`} {...slide}>
                    <p className="eyebrow">{currentStep.eyebrow}</p>
                    <h2 className="h3 mt-3">{currentStep.title}</h2>
                    <div className="mt-7 space-y-7">
                      {currentStep.fields.map((field) => (
                        <FieldRenderer
                          key={field.key}
                          field={field}
                          answers={answers}
                          onSetAnswer={onSetAnswer}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {phase === "end" && (
                  <motion.div key="end" {...slide}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-secondary-soft">
                      <Check className="h-6 w-6 text-accent-secondary" />
                    </div>
                    <h2 className="h3 mt-5">
                      Thank you — here&apos;s what we already see.
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {observations.map((obs, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary"
                            aria-hidden
                          />
                          <span className="body-base text-foreground">{obs}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="body-base prose-muted mt-6">
                      We&apos;ll come back with a short, specific read on your
                      situation and where the biggest opportunity is. Whatever
                      you decide, you now have a clearer picture than you did six
                      minutes ago.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer controls */}
            <div className="flex shrink-0 items-center justify-between gap-4 border-t border-border px-6 py-4 md:px-10 md:py-5">
              {phase === "end" ? (
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-primary ml-auto"
                >
                  Done
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleBack}
                    className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canContinue}
                    className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {phase === "intro"
                      ? INTRO.cta
                      : step >= TOTAL_STEPS
                        ? "See what we see"
                        : "Continue"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Field renderers ─────────────────────────────────────────── */

function FieldLabel({ field }: { field: Field }) {
  return (
    <div className="mb-2.5 flex items-baseline justify-between gap-3">
      <label
        htmlFor={field.key}
        className="block text-[0.95rem] font-medium text-foreground"
      >
        {field.label}
        {field.required && (
          <span className="text-accent-secondary" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {field.helper && (
        <span className="shrink-0 text-xs text-muted">{field.helper}</span>
      )}
    </div>
  );
}

const fieldClass =
  "h-12 rounded-xl border-border bg-background px-4 text-[1rem]";

function FieldRenderer({
  field,
  answers,
  onSetAnswer,
}: {
  field: Field;
  answers: Answers;
  onSetAnswer: (key: string, value: unknown) => void;
}) {
  const value = answers[field.key];

  if (field.type === "text") {
    return (
      <div>
        <FieldLabel field={field} />
        <Input
          id={field.key}
          type="text"
          className={fieldClass}
          placeholder={field.placeholder}
          value={(value as string) ?? ""}
          onChange={(e) => onSetAnswer(field.key, e.target.value)}
        />
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        <FieldLabel field={field} />
        <Textarea
          id={field.key}
          rows={3}
          className="min-h-24 resize-none rounded-xl border-border bg-background px-4 py-3 text-[1rem]"
          placeholder={field.placeholder}
          value={(value as string) ?? ""}
          onChange={(e) => onSetAnswer(field.key, e.target.value)}
        />
      </div>
    );
  }

  if (field.type === "chips") {
    const selected = value as string | undefined;
    return (
      <div>
        <FieldLabel field={field} />
        <div className="flex flex-wrap gap-2.5">
          {field.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              className="chip focus-ring"
              aria-pressed={selected === opt}
              onClick={() =>
                onSetAnswer(field.key, selected === opt ? "" : opt)
              }
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "multichips") {
    const selected = (value as string[]) ?? [];
    const toggle = (opt: string) => {
      onSetAnswer(
        field.key,
        selected.includes(opt)
          ? selected.filter((s) => s !== opt)
          : [...selected, opt],
      );
    };
    return (
      <div>
        <FieldLabel field={field} />
        <div className="flex flex-wrap gap-2.5">
          {field.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              className="chip focus-ring"
              aria-pressed={selected.includes(opt)}
              onClick={() => toggle(opt)}
            >
              {selected.includes(opt) && (
                <Check className="h-3.5 w-3.5 text-accent-secondary" />
              )}
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "cards") {
    const selected = value as string | undefined;
    return (
      <div>
        <FieldLabel field={field} />
        <div className="grid gap-2.5 sm:grid-cols-2">
          {field.options?.map((opt) => {
            const isSel = selected === opt;
            return (
              <button
                key={opt}
                type="button"
                aria-pressed={isSel}
                onClick={() =>
                  onSetAnswer(field.key, isSel ? "" : opt)
                }
                className={`focus-ring card-lift flex min-h-[64px] items-center rounded-xl border p-4 text-left text-[0.95rem] font-medium transition-colors ${
                  isSel
                    ? "border-accent-secondary bg-accent-secondary-soft text-foreground"
                    : "border-border bg-surface text-foreground hover:border-accent-secondary/50"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (field.type === "slider") {
    const v = Number(value ?? 5);
    return (
      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <label htmlFor={field.key} className="text-[0.95rem] font-medium">
            {field.label}
          </label>
          <span className="text-lg font-semibold text-accent">{v}/10</span>
        </div>
        <Slider
          value={[v]}
          min={1}
          max={10}
          step={1}
          onValueChange={(val) =>
            onSetAnswer(field.key, Array.isArray(val) ? val[0] : val)
          }
          className="py-2 [&_[data-slot=slider-thumb]]:size-4"
        />
        <div className="mt-1.5 flex justify-between text-xs text-muted">
          <span>Can wait</span>
          <span>Urgent</span>
        </div>
      </div>
    );
  }

  if (field.type === "rank") {
    const order = (value as string[]) ?? field.options ?? [];
    const move = (index: number, dir: -1 | 1) => {
      const next = [...order];
      const target = index + dir;
      if (target < 0 || target >= next.length) return;
      [next[index], next[target]] = [next[target], next[index]];
      onSetAnswer(field.key, next);
    };
    return (
      <div>
        <FieldLabel field={field} />
        <p className="-mt-1 mb-3 text-xs text-muted">
          Drag to reorder — most important at the top.
        </p>
        <Reorder.Group
          axis="y"
          values={order}
          onReorder={(v: string[]) => onSetAnswer(field.key, v)}
          className="space-y-2"
        >
          {order.map((opt, i) => (
            <Reorder.Item
              key={opt}
              value={opt}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-secondary-soft text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <span className="flex-1 text-[0.95rem] font-medium text-foreground">
                {opt}
              </span>
              <span className="flex items-center gap-0.5">
                <button
                  type="button"
                  aria-label={`Move ${opt} up`}
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="focus-ring rounded px-1 text-muted hover:text-foreground disabled:opacity-30"
                >
                  ↑
                </button>
                <button
                  type="button"
                  aria-label={`Move ${opt} down`}
                  onClick={() => move(i, 1)}
                  disabled={i === order.length - 1}
                  className="focus-ring rounded px-1 text-muted hover:text-foreground disabled:opacity-30"
                >
                  ↓
                </button>
              </span>
              <GripVertical
                className="h-4 w-4 cursor-grab text-muted/60"
                aria-hidden
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    );
  }

  if (field.type === "contact") {
    return (
      <div>
        <FieldLabel field={field} />
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            id="contactName"
            type="text"
            className={fieldClass}
            placeholder="Your name"
            value={(answers.contactName as string) ?? ""}
            onChange={(e) => onSetAnswer("contactName", e.target.value)}
          />
          <Input
            id="contactInfo"
            type="text"
            className={fieldClass}
            placeholder="Email or phone"
            value={(answers.contactInfo as string) ?? ""}
            onChange={(e) => onSetAnswer("contactInfo", e.target.value)}
          />
        </div>
      </div>
    );
  }

  return null;
}
