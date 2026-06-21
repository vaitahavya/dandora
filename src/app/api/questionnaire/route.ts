import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { STEPS, type Answers } from "@/lib/questionnaire";

function formatValue(value: unknown): string {
  if (value == null) return "—";
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "—";
  }
  const str = String(value).trim();
  return str.length ? str : "—";
}

function buildBody(answers: Answers): string {
  const sections: string[] = [];

  const name = formatValue(answers.contactName);
  const contact = formatValue(answers.contactInfo);
  const sector = answers.sector ? formatValue(answers.sector) : null;

  sections.push("DISCOVERY QUESTIONNAIRE — NEW SUBMISSION");
  sections.push("");
  sections.push(`Name: ${name}`);
  sections.push(`Contact: ${contact}`);
  if (sector) sections.push(`Sector: ${sector}`);
  sections.push("");
  sections.push("──────────────────────────────");

  for (const step of STEPS) {
    sections.push("");
    sections.push(`STEP ${step.id} — ${step.title}`);
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

  return sections.join("\n");
}

export async function POST(request: Request) {
  try {
    const answers = (await request.json()) as Answers;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 },
      );
    }

    const name = answers.contactName ? String(answers.contactName) : "Anonymous";
    const sector = answers.sector ? ` (${String(answers.sector)})` : "";
    const contactInfo =
      typeof answers.contactInfo === "string" &&
      answers.contactInfo.includes("@")
        ? answers.contactInfo
        : undefined;

    await sendMail({
      subject: `Questionnaire completed — ${name}${sector}`,
      text: buildBody(answers),
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
