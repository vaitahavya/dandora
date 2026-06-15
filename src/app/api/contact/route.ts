import { NextResponse } from "next/server";

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

    // [FILL IN] Wire to Formspree, Resend, or your CRM endpoint.
    // Example: await fetch(process.env.FORMSPREE_ENDPOINT, { method: 'POST', body: ... })
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      sector,
      challenge,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request." },
      { status: 500 },
    );
  }
}
