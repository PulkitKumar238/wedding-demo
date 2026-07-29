import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  weddingDate?: string;
  location?: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, weddingDate, location, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // NOTE: this logs the enquiry server-side. To deliver these to an inbox,
  // wire this up to an email provider (e.g. Resend) via the Vercel Marketplace.
  console.log("[contact] new enquiry", {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || null,
    weddingDate: weddingDate?.trim() || null,
    location: location?.trim() || null,
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
