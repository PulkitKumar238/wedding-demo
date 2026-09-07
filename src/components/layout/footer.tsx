import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { brand, nav, footer } from "@/data/site";
import { img } from "@/data/images";

/**
 * Standalone routes that are not in the main nav but need a crawlable link from
 * every page — this is what carries link equity to the SEO landing pages and
 * keeps them shallow in the crawl.
 */
const explore = [
  { label: "Wedding Photography in Lucknow", href: "/wedding-photography-lucknow" },
  { label: "Real Weddings", href: "/weddings" },
  { label: "Wedding Films", href: "/films" },
  { label: "Services", href: "/services" },
  { label: "Packages & Prices", href: "/packages" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory pt-20">
      <Container>
        <div className="grid gap-x-10 gap-y-14 pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr_0.9fr]">
          <div>
            {/* The one place with room for the full lockup, name and all. */}
            <Link href="/#top" className="inline-block">
              <Image
                src={img.logo}
                alt={brand.name}
                width={628}
                height={640}
                sizes="140px"
                className="h-32 w-auto md:h-36"
              />
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-charcoal/60">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-[15px] text-charcoal/75 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-[15px] text-charcoal/75 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 font-body text-[15px] text-charcoal/75">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-champagne">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-champagne">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li className="text-charcoal/60">{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/40">
              Follow
            </h4>
            <ul className="mt-5 space-y-3 font-body text-[15px] text-charcoal/75">
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-champagne"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-champagne"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 py-8 font-body text-xs tracking-wide text-charcoal/45 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>{brand.location} — by invitation and availability.</p>
        </div>
      </Container>
    </footer>
  );
}
