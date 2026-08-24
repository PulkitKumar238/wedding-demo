import { CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppChatUrl } from "@/lib/whatsapp";

/**
 * Booking and contact stay reachable from anywhere on the page: a two-up bar
 * across the bottom on phones, a compact stack in the bottom-right corner on
 * larger screens.
 *
 * `body` carries matching bottom padding on mobile (see globals.css) so the
 * bar never permanently covers the end of the footer.
 */
export function FloatingActions() {
  const chatUrl = buildWhatsAppChatUrl();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:inset-x-auto md:bottom-8 md:right-8">
      <div className="flex items-stretch gap-px bg-charcoal/10 shadow-[0_-1px_12px_rgba(0,0,0,0.12)] md:flex-col md:gap-3 md:bg-transparent md:shadow-none">
        <a
          href="#booking"
          className="flex flex-1 items-center justify-center gap-2 bg-charcoal px-4 py-4 font-body text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-charcoal-soft md:flex-none md:rounded-full md:px-6 md:py-3.5 md:shadow-lg"
        >
          <CalendarCheck size={16} strokeWidth={1.5} />
          Book Consultation
        </a>

        <a
          href={chatUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-1 items-center justify-center gap-2 bg-champagne px-4 py-4 font-body text-[11px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-champagne-light md:flex-none md:rounded-full md:px-6 md:py-3.5 md:shadow-lg"
        >
          <WhatsAppIcon size={16} />
          Contact Us
        </a>
      </div>
    </div>
  );
}
