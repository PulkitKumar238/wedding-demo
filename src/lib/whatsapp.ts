import { brand, whatsapp } from "@/data/site";

export type EnquiryFields = {
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  location?: string;
  message?: string;
};

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
    ["Wedding date", fields.weddingDate],
    ["Preferred location", fields.location],
  ];

  const lines = [
    `Hello ${brand.name} — I'd like to book a consultation.`,
    "",
    ...rows
      .filter(([, value]) => value?.trim())
      .map(([label, value]) => `${label}: ${value!.trim()}`),
  ];

  if (fields.message?.trim()) {
    lines.push("", "About our celebration:", fields.message.trim());
  }

  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
