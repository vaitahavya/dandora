"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Answers } from "@/lib/questionnaire";
import { getForm } from "@/lib/questionnaire";
import { QuestionnaireModal } from "./QuestionnaireModal";

type Phase = "intro" | "step" | "offer" | "end";
type Segment = "short" | "deeper";

type OpenOptions = {
  /** Step to land on within the short intake. Omit to show the intro screen. */
  startStep?: number;
  /** Answers to merge in (e.g. a Beat-3 card pre-fill). */
  prefill?: Answers;
  /** Growth sector label (e.g. "Real Estate") — selects the tailored form. */
  sector?: string;
};

type QuestionnaireContextValue = {
  open: (options?: OpenOptions) => void;
  close: () => void;
  isOpen: boolean;
};

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(
  null,
);

const STORAGE_KEY = "dandora-questionnaire";

export function QuestionnaireProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [segment, setSegment] = useState<Segment>("short");
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState<string | undefined>(undefined);
  const [answers, setAnswers] = useState<Answers>(() => {
    // Restore in-session answers. Safe lazy init: the modal renders nothing
    // until opened, so there is no SSR/hydration output to mismatch.
    if (typeof window === "undefined") return {};
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Answers) : {};
    } catch {
      return {};
    }
  });
  const lastFocused = useRef<HTMLElement | null>(null);

  // Keep a live ref so the submit handler always posts the latest answers.
  const answersRef = useRef(answers);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Persist answers within the session.
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers]);

  const form = useMemo(() => getForm(sector), [sector]);

  const open = useCallback((options?: OpenOptions) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    const nextForm = getForm(options?.sector);
    setSector(options?.sector);
    setSegment("short");
    if (options?.prefill || options?.sector) {
      setAnswers((prev) => ({
        ...prev,
        ...options?.prefill,
        ...(options?.sector ? { sector: options.sector } : {}),
      }));
    }
    if (options?.startStep) {
      setPhase("step");
      setStep(
        Math.min(Math.max(options.startStep, 1), nextForm.short.length),
      );
    } else {
      setPhase("intro");
      setStep(1);
    }
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Return focus to the trigger for accessibility.
    requestAnimationFrame(() => lastFocused.current?.focus?.());
  }, []);

  const setAnswer = useCallback((key: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const submit = useCallback(
    async (stage: Segment) => {
      try {
        await fetch("/api/questionnaire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...answersRef.current,
            sector,
            _stage: stage,
          }),
        });
      } catch {
        // Never block the visitor on a delivery hiccup; the lead UX continues.
      }
    },
    [sector],
  );

  const value = useMemo(
    () => ({ open, close, isOpen }),
    [open, close, isOpen],
  );

  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
      <QuestionnaireModal
        isOpen={isOpen}
        phase={phase}
        segment={segment}
        step={step}
        sector={sector}
        intro={form.intro}
        shortSteps={form.short}
        deeperSteps={form.deeper}
        answers={answers}
        onClose={close}
        onSetPhase={setPhase}
        onSetSegment={setSegment}
        onSetStep={setStep}
        onSetAnswer={setAnswer}
        onSubmit={submit}
      />
    </QuestionnaireContext.Provider>
  );
}

export function useQuestionnaire() {
  const ctx = useContext(QuestionnaireContext);
  if (!ctx) {
    throw new Error(
      "useQuestionnaire must be used within a QuestionnaireProvider",
    );
  }
  return ctx;
}
