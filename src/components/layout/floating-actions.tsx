import Link from "next/link";
import { CalendarCheck, Tags } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { brand } from "@/data/site";
import { buildWhatsAppChatUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Booking, packages and contact stay reachable from anywhere on the page: a
 * bar across the bottom on phones, a compact stack in the bottom-right corner
 * on larger screens, where every pill is stretched to the width of the widest
 * row (Contact plus Instagram) so the stack reads as one aligned column.
 *
 * Three labelled buttons plus Instagram don't fit side by side on a 390px
 * phone, so below `sm` each button sets its icon above its label, tab-bar
 * style; from `sm` up there is room to put them on one line again.
 *
 * `body` carries matching bottom padding on mobile (see globals.css) so the
 * bar never permanently covers the end of the footer.
 */
const button =
  "flex flex-1 flex-col items-center justify-center gap-1 whitespace-nowrap px-1 py-2.5 font-body text-[10px] uppercase tracking-[0.06em] transition-colors sm:flex-row sm:gap-2 sm:px-3 sm:py-4 sm:text-[11px] sm:tracking-[0.16em] md:flex-none md:rounded-full md:px-6 md:py-3.5 md:shadow-lg";

export function FloatingActions() {
  const chatUrl = buildWhatsAppChatUrl();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:inset-x-auto md:bottom-8 md:right-8">
      <div className="flex items-stretch gap-px bg-charcoal/10 shadow-[0_-1px_12px_rgba(0,0,0,0.12)] md:flex-col md:items-stretch md:gap-3 md:bg-transparent md:shadow-none">
        <Link
          href="/#booking"
          className={cn(button, "bg-charcoal text-ivory hover:bg-charcoal-soft")}
        >
          <CalendarCheck size={16} strokeWidth={1.5} />
          Book Your Date
        </Link>

        <Link
          href="/packages"
          className={cn(button, "bg-ivory text-charcoal hover:bg-ivory-dark md:border md:border-charcoal/10")}
        >
          <Tags size={16} strokeWidth={1.5} />
          Packages
        </Link>

        {/*
          Instagram sits beside WhatsApp rather than under it — the two are the
          same kind of thing, "reach us now", and keeping them on one line stops
          the corner stack from growing another full-width pill. On phones the
          wrapper dissolves (`contents`) so all three labelled buttons share the
          bar's width equally instead of Contact splitting a third with the icon.
        */}
        <div className="contents md:flex md:items-stretch md:gap-2">
          <a
            href={chatUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(button, "bg-champagne text-charcoal hover:bg-champagne-light md:flex-1")}
          >
            <WhatsAppIcon size={16} />
            Contact Us
          </a>

          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Click Weds on Instagram (${brand.instagram})`}
            className="flex w-11 shrink-0 items-center justify-center bg-champagne text-charcoal transition-colors hover:bg-champagne-light sm:w-14 md:h-11 md:w-11 md:rounded-full md:shadow-lg"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
