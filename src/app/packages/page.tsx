import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Packages } from "@/components/sections/packages";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbNode,
  graph,
  pageMeta,
  ORG_ID,
  absoluteUrl,
} from "@/lib/seo";
import { brand, packages } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Wedding Photography Packages & Prices",
  description: `${brand.name}'s standard wedding photography and film packages — from ₹80,000 for the wedding day to full engagement-to-reception coverage — with add-on services and hourly rates.`,
  path: "/packages",
});

/** The nine packages as an ItemList of priced Offers, for price rich results. */
const packagesJsonLd = {
  "@type": "ItemList",
  name: "Wedding photography and film packages",
  itemListElement: packages.map((pkg, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: pkg.name,
      serviceType: "Wedding photography and videography",
      provider: { "@id": ORG_ID },
      areaServed: "Lucknow, Uttar Pradesh, India",
      offers: {
        "@type": "Offer",
        price: String(pkg.offer),
        priceCurrency: "INR",
        url: absoluteUrl("/packages"),
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

/*
  Packages sits on a route of its own rather than in the home page's scroll:
  nine of them, even collapsed, were a long stretch of a page nobody had asked
  to read. The nav item points here, and every other nav item is an absolute
  "/#section" so it still works from this page.
*/
export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([{ name: "Packages", path: "/packages" }]),
          packagesJsonLd
        )}
      />
      {/*
        The navbar is fixed, and on a phone it wraps to three rows, so this
        page needs to start below it — the home page never did, because the
        hero sits under the navbar by design.
      */}
      <div className="bg-ivory pt-32 md:pt-28">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/50 transition-colors hover:text-charcoal"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </Container>
      </div>

      <Packages />
    </>
  );
}
