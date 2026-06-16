"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { SECTORS } from "@/lib/constants";

const SECTOR_OPTIONS = [
  ...SECTORS.map((s) => s.name),
  "Other",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
          <Check className="h-7 w-7 text-accent" />
        </div>
        <p className="font-display mt-6 text-2xl font-medium">
          Conversation started.
        </p>
        <p className="mt-2 text-muted">We&apos;ll be in touch shortly.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-muted underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
      </div>

      <div>
        <label htmlFor="sector" className="mb-2 block text-sm text-muted">
          Sector
        </label>
        <select
          id="sector"
          name="sector"
          required
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a sector
          </option>
          {SECTOR_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="challenge" className="mb-2 block text-sm text-muted">
          What&apos;s the challenge?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring w-full rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#245a45] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Start the conversation"}
      </button>
    </form>
  );
}

const fieldClass =
  "focus-ring w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}
