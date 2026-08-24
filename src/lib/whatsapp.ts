import { brand, whatsapp } from "@/data/site";

export type Ceremony = {
  /** Ceremony name, or whatever the couple typed under "Other". */
  label: string;
  /** ISO yyyy-mm-dd straight from the date input, or "" if left blank. */
  date: string;
};

export type EnquiryFields = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
  ceremonies?: Ceremony[];
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Turns "2027-11-14" into "14 Nov 2027". Parsed by hand rather than through
 * `new Date()` so a date-only string can't be shifted a day by the timezone.
 */
export function formatCeremonyDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) return iso.trim();

  const [, year, month, day] = match;
  const name = MONTHS[Number(month) - 1];
  if (!name) return iso.trim();

  return `${Number(day)} ${name} ${year}`;
}

/**
 * Builds a wa.me link carrying the enquiry as a drafted message, so the couple
 * lands in WhatsApp with everything already typed and only has to press send.
 *
 * Empty optional fields are left out rather than sent as blank lines.
 */
export function buildWhatsAppUrl(fields: EnquiryFields): string {
  const rows: Array<[string, string | undefined]> = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Preferred location", fields.location],
  ];

  const lines = [
    `Hello ${brand.name} — I'd like to book a consultation.`,
    "",
    ...rows
      .filter(([, value]) => value?.trim())
      .map(([label, value]) => `${label}: ${value!.trim()}`),
  ];

  const ceremonies = (fields.ceremonies ?? []).filter((c) => c.label.trim());
  if (ceremonies.length) {
    lines.push("", "Ceremonies:");
    for (const ceremony of ceremonies) {
      const when = ceremony.date.trim()
        ? formatCeremonyDate(ceremony.date)
        : "date to be confirmed";
      lines.push(`• ${ceremony.label.trim()} — ${when}`);
    }
  }

  if (fields.message?.trim()) {
    lines.push("", "About our celebration:", fields.message.trim());
  }

  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * A bare "get in touch" link for the persistent contact button, with no form
 * details attached — just an opening line so the couple isn't staring at an
 * empty message box.
 */
export function buildWhatsAppChatUrl(): string {
  const text = `Hello ${brand.name} — I'd like to know more about your wedding services.`;
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}
