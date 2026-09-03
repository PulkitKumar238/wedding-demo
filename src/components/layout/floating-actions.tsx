import { CalendarCheck } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { brand } from "@/data/site";
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
      <div className="flex items-stretch gap-px bg-charcoal/10 shadow-[0_-1px_12px_rgba(0,0,0,0.12)] md:flex-col md:items-end md:gap-3 md:bg-transparent md:shadow-none">
        <a
          href="#booking"
          className="flex flex-1 items-center justify-center gap-2 bg-charcoal px-4 py-4 font-body text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-charcoal-soft md:flex-none md:rounded-full md:px-6 md:py-3.5 md:shadow-lg"
        >
          <CalendarCheck size={16} strokeWidth={1.5} />
          Book Your Date
        </a>

        {/*
          Instagram sits beside WhatsApp rather than under it — the two are the
          same kind of thing, "reach us now", and keeping them on one line stops
          the corner stack from growing to three full-width pills.
        */}
        <div className="flex flex-1 items-stretch gap-px md:flex-none md:gap-2">
          <a
            href={chatUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-1 items-center justify-center gap-2 bg-champagne px-4 py-4 font-body text-[11px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-champagne-light md:flex-none md:rounded-full md:px-6 md:py-3.5 md:shadow-lg"
          >
            <WhatsAppIcon size={16} />
            Contact Us
          </a>

          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Click Weds on Instagram (${brand.instagram})`}
            className="flex w-14 shrink-0 items-center justify-center bg-champagne text-charcoal transition-colors hover:bg-champagne-light md:h-11 md:w-11 md:rounded-full md:shadow-lg"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
