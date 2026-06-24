"use client";

/**
 * Re-themed EduConnect UI mockups — pure CSS/SVG, no external images.
 * Built entirely on Dandora tokens (indigo/cyan, hairline borders,
 * --shadow-glass, Poppins). Each mock is decorative: it is marked
 * aria-hidden because the surrounding step copy carries the real meaning.
 */

import {
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  CreditCard,
  GraduationCap,
  IndianRupee,
  ReceiptText,
} from "lucide-react";
import type { ReactNode } from "react";

/* ── Shared window chrome ─────────────────────────────────────────── */

function Window({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-border bg-surface shadow-[var(--shadow-glass)]">
      <div className="flex items-center gap-2 border-b border-border bg-background-off px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-secondary/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-[0.8rem] font-semibold text-muted">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function Avatar({ initials, tone }: { initials: string; tone: string }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-semibold text-white"
      style={{ background: tone }}
    >
      {initials}
    </span>
  );
}

const INDIGO = "linear-gradient(135deg,#4f46e5,#4338ca)";
const CYAN = "linear-gradient(135deg,#06b6d4,#0891b2)";
const VIOLET = "linear-gradient(135deg,#6366f1,#4f46e5)";

/* ── 01 · Attendance window ───────────────────────────────────────── */

export function AttendanceMock() {
  const rows = [
    { name: "Aarav Reddy", roll: "Roll 04", initials: "AR", tone: INDIGO, present: true },
    { name: "Sara Khan", roll: "Roll 09", initials: "SK", tone: CYAN, present: true },
    { name: "Ishaan Mehta", roll: "Roll 12", initials: "IM", tone: VIOLET, present: false },
    { name: "Diya Nair", roll: "Roll 15", initials: "DN", tone: INDIGO, present: true },
  ];
  return (
    <Window title="Class 7-B · Today's attendance">
      <ul className="divide-y divide-border">
        {rows.map((r) => (
          <li
            key={r.name}
            className="flex items-center justify-between gap-3 px-4 py-3.5"
          >
            <span className="flex min-w-0 items-center gap-3">
              <Avatar initials={r.initials} tone={r.tone} />
              <span className="min-w-0">
                <span className="block truncate text-[0.9rem] font-semibold text-foreground">
                  {r.name}
                </span>
                <span className="block text-[0.75rem] text-muted">{r.roll}</span>
              </span>
            </span>
            {r.present ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-secondary-soft px-2.5 py-1 text-[0.72rem] font-semibold text-accent-secondary">
                <Check className="h-3 w-3" /> Present
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-destructive/10 px-2.5 py-1 text-[0.72rem] font-semibold text-destructive">
                Absent
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 border-t border-border bg-background-off px-4 py-3 text-[0.75rem] font-medium text-muted">
        <Bell className="h-3.5 w-3.5 text-accent" />
        Parent notified — &ldquo;Ishaan was marked absent today.&rdquo;
      </div>
    </Window>
  );
}

/* ── 02 · Announcements with read receipts ────────────────────────── */

export function AnnouncementsMock() {
  const items = [
    {
      title: "Annual Day — 28 June",
      body: "Join us at 5 PM in the main auditorium. Dress code: house colours.",
      tag: "Event",
      read: "Read by 142 parents",
    },
    {
      title: "Fee reminder — Term 2",
      body: "Term 2 fees are due by 30 June. View the breakdown in the app.",
      tag: "Notice",
      read: "Read by 118 parents",
    },
  ];
  return (
    <Window title="Announcements">
      <ul className="divide-y divide-border">
        {items.map((it) => (
          <li key={it.title} className="px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[0.9rem] font-semibold text-foreground">
                {it.title}
              </span>
              <span className="inline-flex items-center rounded-full border border-accent-secondary/30 bg-accent-secondary-soft px-2.5 py-0.5 text-[0.68rem] font-semibold text-accent-secondary">
                {it.tag}
              </span>
            </div>
            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
              {it.body}
            </p>
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-accent">
              <Check className="h-3.5 w-3.5" />
              {it.read}
            </p>
          </li>
        ))}
      </ul>
    </Window>
  );
}

/* ── 03 · Report card ─────────────────────────────────────────────── */

export function ReportMock() {
  const subjects = [
    { name: "Mathematics", marks: "94", grade: "A1" },
    { name: "Science", marks: "88", grade: "A2" },
    { name: "English", marks: "91", grade: "A1" },
    { name: "Social Studies", marks: "85", grade: "A2" },
  ];
  return (
    <Window title="Report card · Term 1">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3.5">
        <span className="flex items-center gap-3">
          <Avatar initials="AR" tone={INDIGO} />
          <span>
            <span className="block text-[0.9rem] font-semibold text-foreground">
              Aarav Reddy
            </span>
            <span className="block text-[0.75rem] text-muted">
              Class 7-B · CBSE
            </span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[0.72rem] font-semibold text-accent">
          <GraduationCap className="h-3.5 w-3.5" /> 89.5%
        </span>
      </div>
      <ul className="divide-y divide-border">
        {subjects.map((s) => (
          <li
            key={s.name}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <span className="flex items-center gap-2.5 text-[0.85rem] font-medium text-foreground">
              <BookOpen className="h-4 w-4 text-accent-secondary" />
              {s.name}
            </span>
            <span className="flex items-center gap-3">
              <span className="text-[0.85rem] font-semibold text-foreground">
                {s.marks}
              </span>
              <span className="inline-flex w-9 justify-center rounded-md bg-accent-secondary-soft py-0.5 text-[0.72rem] font-semibold text-accent-secondary">
                {s.grade}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

/* ── 04 · Fee receipt ─────────────────────────────────────────────── */

export function FeesMock() {
  const lines = [
    { label: "Tuition fee — Term 2", amount: "18,000" },
    { label: "Transport", amount: "4,500" },
    { label: "Activity & labs", amount: "2,500" },
  ];
  return (
    <Window title="Receipt · #EC-2026-0481">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3.5">
        <span className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <ReceiptText className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-[0.9rem] font-semibold text-foreground">
              Term 2 fees
            </span>
            <span className="block text-[0.75rem] text-muted">
              Aarav Reddy · Class 7-B
            </span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-accent-secondary-soft px-2.5 py-1 text-[0.72rem] font-semibold text-accent-secondary">
          <Check className="h-3 w-3" /> Paid
        </span>
      </div>
      <ul className="px-4 py-1">
        {lines.map((l) => (
          <li
            key={l.label}
            className="flex items-center justify-between gap-3 border-b border-border py-2.5 text-[0.82rem] last:border-b-0"
          >
            <span className="text-muted">{l.label}</span>
            <span className="inline-flex items-center font-medium text-foreground">
              <IndianRupee className="h-3 w-3" />
              {l.amount}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-3 border-t border-border bg-background-off px-4 py-3.5">
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted">
          <CreditCard className="h-3.5 w-3.5 text-accent" /> Paid online · 12 Jun
        </span>
        <span className="inline-flex items-center text-[1.05rem] font-semibold text-foreground">
          <IndianRupee className="h-4 w-4" />
          25,000
        </span>
      </div>
    </Window>
  );
}

/* ── 05 · Parent phone app ────────────────────────────────────────── */

export function PhoneMock() {
  const cards = [
    {
      icon: Check,
      tone: "cyan" as const,
      title: "Aarav is present today",
      sub: "Marked at 8:42 AM",
    },
    {
      icon: Bell,
      tone: "indigo" as const,
      title: "Annual Day — 28 June",
      sub: "New announcement",
    },
    {
      icon: BookOpen,
      tone: "indigo" as const,
      title: "Maths homework due",
      sub: "Exercise 4.2 · tomorrow",
    },
    {
      icon: IndianRupee,
      tone: "cyan" as const,
      title: "Term 2 fees paid",
      sub: "Receipt available",
    },
  ];
  return (
    <div className="mx-auto w-[clamp(240px,80vw,290px)]">
      <div className="rounded-[2.4rem] border border-border bg-dark-bg p-2.5 shadow-[var(--shadow-glass)]">
        <div className="overflow-hidden rounded-[2rem] bg-background-off">
          {/* App header */}
          <div
            className="px-5 pt-6 pb-7 text-white"
            style={{ background: "linear-gradient(135deg,#4f46e5,#06b6d4)" }}
          >
            <p className="text-[0.75rem] opacity-80">Good morning,</p>
            <p className="mt-0.5 text-[1.1rem] font-semibold">Mrs. Reddy</p>
          </div>
          {/* Cards */}
          <div className="-mt-3 space-y-2.5 px-3 pb-5">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex items-center gap-3 rounded-[0.9rem] border border-border bg-surface px-3 py-2.5 shadow-[var(--shadow-rest)]"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      c.tone === "cyan"
                        ? "bg-accent-secondary-soft text-accent-secondary"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[0.8rem] font-semibold text-foreground">
                      {c.title}
                    </span>
                    <span className="block truncate text-[0.7rem] text-muted">
                      {c.sub}
                    </span>
                  </span>
                </div>
              );
            })}
            <div className="flex items-center justify-center gap-1.5 pt-1 text-[0.7rem] font-medium text-muted">
              <CalendarDays className="h-3.5 w-3.5 text-accent-secondary" />
              Sports Meet · this Friday
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Registry ─────────────────────────────────────────────────────── */

export const MOCKS = {
  attendance: AttendanceMock,
  announcements: AnnouncementsMock,
  report: ReportMock,
  fees: FeesMock,
  phone: PhoneMock,
} as const;

export type MockKey = keyof typeof MOCKS;
