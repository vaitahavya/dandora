"use client";

import { useState, type FormEvent, type ReactElement } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";

const PLATFORMS = ["Web", "Mobile", "Desktop", "Enterprise"] as const;
const STAGES = ["Idea", "Designs ready", "In progress", "Live & scaling"] as const;
const BUDGETS = ["< ₹5L", "₹5–15L", "₹15–40L", "₹40L+", "Not sure yet"] as const;
const ENGAGEMENTS = [
  "Dedicated team",
  "Project-based",
  "Staff augmentation",
  "Not sure yet",
] as const;

type Status = "idle" | "loading" | "success" | "error";

export function ScopeBuildDialog({ trigger }: { trigger: ReactElement }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [stage, setStage] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [engagement, setEngagement] = useState<string>("");

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
    setPlatforms([]);
    setStage("");
    setBudget("");
    setEngagement("");
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) reset();
  };

  const togglePlatform = (p: string) => {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const building = String(data.get("building") ?? "").trim();
    const timeline = String(data.get("timeline") ?? "").trim();
    const techTeam = String(data.get("techTeam") ?? "").trim();
    const success = String(data.get("success") ?? "").trim();

    const challengeParts = [
      building && `Building: ${building}`,
      platforms.length > 0 && `Platform: ${platforms.join(", ")}`,
      stage && `Stage: ${stage}`,
      timeline && `Timeline: ${timeline}`,
      budget && `Budget: ${budget}`,
      engagement && `Engagement model: ${engagement}`,
      techTeam && `Existing stack / team: ${techTeam}`,
      success && `Success criteria: ${success}`,
    ].filter(Boolean);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          sector: "Software & IT Development",
          challenge: challengeParts.join("\n"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={trigger} />
      <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto rounded-[1.5rem] p-0 sm:max-w-lg">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-secondary-soft">
              <Check className="h-7 w-7 text-accent-secondary" />
            </div>
            <h2 className="h3 mt-6 text-[1.4rem]">Got it — we&apos;re on it.</h2>
            <p className="mt-2 text-muted">
              We&apos;ll review your build and come back fast with next steps.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 text-sm font-medium text-accent-secondary underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </div>
        ) : (
          <>
            <DialogHeader className="px-6 pt-6 pb-2 sm:px-8">
              <DialogTitle className="h3 text-[1.4rem] leading-tight">
                Tell us what you&apos;re building.
              </DialogTitle>
              <DialogDescription className="text-muted">
                A few quick details and we&apos;ll scope it with you. Or email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent-secondary"
                >
                  {SITE.email}
                </a>
                .
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 px-6 py-6 sm:px-8"
              noValidate
            >
              <div>
                <label
                  htmlFor="building"
                  className="mb-2 block text-[0.95rem] font-medium text-foreground"
                >
                  What you&apos;re building
                  <span className="text-accent-secondary"> *</span>
                </label>
                <Textarea
                  id="building"
                  name="building"
                  required
                  rows={3}
                  placeholder="A customer portal, a mobile app, an internal tool…"
                  className="min-h-24 resize-none rounded-xl border-border bg-background px-4 py-3 text-[1rem]"
                />
              </div>

              <div>
                <span className="mb-2.5 block text-[0.95rem] font-medium text-foreground">
                  Platform
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PLATFORMS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className="chip focus-ring"
                      aria-pressed={platforms.includes(p)}
                      onClick={() => togglePlatform(p)}
                    >
                      {platforms.includes(p) && (
                        <Check className="h-3.5 w-3.5 text-accent-secondary" />
                      )}
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-[0.95rem] font-medium text-foreground"
                >
                  Timeline
                </label>
                <Input
                  id="timeline"
                  name="timeline"
                  type="text"
                  placeholder="e.g. 8–12 weeks, ASAP, flexible"
                  className="h-12 rounded-xl border-border bg-background px-4 text-[1rem]"
                />
              </div>

              <div>
                <span className="mb-2.5 block text-[0.95rem] font-medium text-foreground">
                  Current stage
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {STAGES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="chip focus-ring"
                      aria-pressed={stage === s}
                      onClick={() => setStage(stage === s ? "" : s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2.5 block text-[0.95rem] font-medium text-foreground">
                  Rough budget
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className="chip focus-ring"
                      aria-pressed={budget === b}
                      onClick={() => setBudget(budget === b ? "" : b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2.5 block text-[0.95rem] font-medium text-foreground">
                  How you&apos;d like to work with us
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {ENGAGEMENTS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      className="chip focus-ring"
                      aria-pressed={engagement === m}
                      onClick={() => setEngagement(engagement === m ? "" : m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="techTeam"
                  className="mb-2 block text-[0.95rem] font-medium text-foreground"
                >
                  Existing stack &amp; team
                </label>
                <Textarea
                  id="techTeam"
                  name="techTeam"
                  rows={2}
                  placeholder="e.g. React + Node, a designer and two engineers — or greenfield"
                  className="min-h-20 resize-none rounded-xl border-border bg-background px-4 py-3 text-[1rem]"
                />
              </div>

              <div>
                <label
                  htmlFor="success"
                  className="mb-2 block text-[0.95rem] font-medium text-foreground"
                >
                  What does success look like in 3–6 months?
                </label>
                <Textarea
                  id="success"
                  name="success"
                  rows={2}
                  placeholder="The outcome that would make this a win"
                  className="min-h-20 resize-none rounded-xl border-border bg-background px-4 py-3 text-[1rem]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[0.95rem] font-medium text-foreground"
                  >
                    Name<span className="text-accent-secondary"> *</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="h-12 rounded-xl border-border bg-background px-4 text-[1rem]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[0.95rem] font-medium text-foreground"
                  >
                    Email<span className="text-accent-secondary"> *</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="h-12 rounded-xl border-border bg-background px-4 text-[1rem]"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {status === "loading" ? "Sending…" : "Send your build brief"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
