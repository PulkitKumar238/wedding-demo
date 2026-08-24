import { NextResponse } from "next/server";

type Ceremony = {
  label: string;
  date: string;
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
  ceremonies?: Ceremony[];
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Keeps only well-formed {label, date} entries; anything else is discarded. */
function parseCeremonies(input: unknown): Ceremony[] {
  if (!Array.isArray(input)) return [];

  return input.flatMap((entry) => {
    if (typeof entry !== "object" || entry === null) return [];

    const { label, date } = entry as Record<string, unknown>;
    if (typeof label !== "string" || !label.trim()) return [];

    return [
      {
        label: label.trim(),
        date: typeof date === "string" ? date.trim() : "",
      },
    ];
  });
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, location, message } = body;

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
    location: location?.trim() || null,
    ceremonies: parseCeremonies(body.ceremonies),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
