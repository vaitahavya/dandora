import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { getForm, type Answers, type Step } from "@/lib/questionnaire";

function formatValue(value: unknown): string {
  if (value == null) return "—";
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "—";
  }
  const str = String(value).trim();
  return str.length ? str : "—";
}

function renderStep(step: Step, answers: Answers, sections: string[]) {
  sections.push("");
  sections.push(`▸ ${step.title}`);
  for (const field of step.fields) {
    if (field.type === "contact") {
      sections.push(`  ${field.label}`);
      sections.push(`    Name: ${formatValue(answers.contactName)}`);
      sections.push(`    Email/phone: ${formatValue(answers.contactInfo)}`);
      continue;
    }
    sections.push(`  ${field.label}`);
    sections.push(`    ${formatValue(answers[field.key])}`);
  }
}

function buildBody(answers: Answers, stage: string): string {
  const sections: string[] = [];

  const sectorLabel = answers.sector ? String(answers.sector) : null;
  const form = getForm(sectorLabel ?? undefined);
  const heading = sectorLabel
    ? `${sectorLabel.toUpperCase()} — TAILORED ENQUIRY`
    : "DISCOVERY QUESTIONNAIRE — NEW SUBMISSION";

  sections.push(heading);
  sections.push("");
  sections.push(`Name: ${formatValue(answers.contactName)}`);
  sections.push(`Contact: ${formatValue(answers.contactInfo)}`);
  if (sectorLabel) sections.push(`Sector: ${sectorLabel}`);
  sections.push(
    `Stage: ${stage === "deeper" ? "Deeper follow-up (full)" : "Short intake"}`,
  );
  sections.push("");
  sections.push("──────────────────────────────");

  for (const step of form.short) {
    renderStep(step, answers, sections);
  }

  // Only include deeper answers when the visitor continued into them.
  if (stage === "deeper" && form.deeper.length > 0) {
    sections.push("");
    sections.push("── DEEPER FOLLOW-UP ──────────");
    for (const step of form.deeper) {
      renderStep(step, answers, sections);
    }
  }

  return sections.join("\n");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Answers & { _stage?: string };

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 },
      );
    }

    const stage = payload._stage === "deeper" ? "deeper" : "short";
    const answers = payload;

    const name = answers.contactName ? String(answers.contactName) : "Anonymous";
    const sector = answers.sector ? ` (${String(answers.sector)})` : "";
    const stageTag = stage === "deeper" ? " — deeper follow-up" : "";
    const contactInfo =
      typeof answers.contactInfo === "string" &&
      answers.contactInfo.includes("@")
        ? answers.contactInfo
        : undefined;

    await sendMail({
      subject: `Enquiry${sector} — ${name}${stageTag}`,
      text: buildBody(answers, stage),
      replyTo: contactInfo,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your submission." },
      { status: 500 },
    );
  }
}
