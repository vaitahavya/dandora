import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, sector, challenge } = body;

    if (!name || !email || !sector || !challenge) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      `Sector: ${sector}`,
      "",
      "Message / challenge:",
      challenge,
    ].filter(Boolean);

    await sendMail({
      subject: `New enquiry — ${name}${sector ? ` (${sector})` : ""}`,
      text: lines.join("\n"),
      replyTo: typeof email === "string" ? email : undefined,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request." },
      { status: 500 },
    );
  }
}
