import type { Metadata } from "next";
import { brand, siteUrl, packages, faqs } from "@/data/site";
import { img } from "@/data/images";

/** `/weddings/nida-mohamed` -> `https://clickweds.com/weddings/nida-mohamed`. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Stable @id anchors, so every node in the graph can point at the business and
 * the website by reference instead of repeating them.
 */
export const ORG_ID = `${siteUrl}/#business`;
export const WEBSITE_ID = `${siteUrl}/#website`;
export const LOGO_ID = `${siteUrl}/#logo`;

/**
 * Reviews on the site are real client quotes, but they carry no star rating.
 * Google requires a numeric `reviewRating` before it will show review markup —
 * a Review without one is simply ignored, never penalised — so we emit the
 * quotes as-is and leave the stars off.
 *
 * Flip this to `true` only once every testimonial is confirmed 5★ by the studio
 * (or the section is replaced with real rated Google reviews). It then adds
 * `reviewRating` to each Review and an `aggregateRating` to the business.
 */
export const REVIEWS_HAVE_RATINGS = false;

/**
 * The nine packages as schema.org Offers. Wedding Only has no list price, so
 * its `price` is the flat fee; the rest use the post-discount figure the
 * quotations actually charge.
 */
function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Wedding photography & film packages",
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      category: "Wedding photography and videography",
      price: String(pkg.offer),
      priceCurrency: "INR",
      url: absoluteUrl("/packages"),
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: `${pkg.name} — wedding coverage`,
        serviceType: "Wedding photography and videography",
        provider: { "@id": ORG_ID },
      },
    })),
  };
}

/**
 * The LocalBusiness node. This is the anchor of the whole graph — Maps, the
 * knowledge panel and the local pack all read from it — so it carries the full
 * NAP, geo, price band, service area, socials and the package catalogue.
 */
export function businessNode(): Record<string, unknown> {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: brand.name,
    legalName: brand.legalName,
    description:
      "Luxury Indian wedding photography and film studio based in Hazratganj, Lucknow — documenting weddings across Uttar Pradesh, India and worldwide.",
    url: siteUrl,
    telephone: brand.phoneE164,
    email: brand.email,
    image: absoluteUrl(img.heroPoster),
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: absoluteUrl(img.logo),
    },
    priceRange: brand.priceRange,
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.postal.streetAddress,
      addressLocality: brand.postal.addressLocality,
      addressRegion: brand.postal.addressRegion,
      postalCode: brand.postal.postalCode,
      addressCountry: brand.postal.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: brand.geo.latitude,
      longitude: brand.geo.longitude,
    },
    hasMap: brand.mapLinkUrl,
    areaServed: brand.citiesServed.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Candid wedding photography",
      "Cinematic wedding films",
      "Pre-wedding shoots",
      "Drone photography",
      "Indian wedding ceremonies",
    ],
    sameAs: brand.sameAs,
    hasOfferCatalog: offerCatalog(),
  };
}

export function websiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: brand.name,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/** A `BreadcrumbList` for a sub-page. Pass the trail without the site root. */
export function breadcrumbNode(
  trail: { name: string; path: string }[]
): Record<string, unknown> {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The FAQ block on the Lucknow landing page, as a `FAQPage` node. */
export function faqNode(): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Wrap any set of nodes in a single `@graph` document. */
export function graph(
  ...nodes: Record<string, unknown>[]
): Record<string, unknown> {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * Boilerplate every page's `generateMetadata` needs: an absolute canonical and
 * an Open Graph `url` that agree with it. Title and description stay per-page.
 */
export function pageMeta({
  title,
  description,
  path,
  images,
}: {
  title: string;
  description: string;
  path: string;
  images?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${brand.name}`,
      description,
      url,
      siteName: brand.name,
      locale: "en_IN",
      type: "website",
      ...(images?.length
        ? { images: images.map((src) => ({ url: absoluteUrl(src) })) }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${brand.name}`,
      description,
      ...(images?.length ? { images: images.map(absoluteUrl) } : {}),
    },
  };
}
