import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, pageMeta, absoluteUrl, ORG_ID } from "@/lib/seo";
import { servicePages } from "@/data/pages";
import { img } from "@/data/images";

export const metadata: Metadata = pageMeta({
  title: "Wedding Photography & Film Services in Lucknow",
  description:
    "Everything a wedding needs under one roof — candid and traditional photography, cinematic and traditional films, drone, editing, crane and LED wall. Book the whole thing or one function.",
  path: "/services",
});

const itemListJsonLd = {
  "@type": "ItemList",
  name: "Wedding photography and film services by Click Weds",
  itemListElement: servicePages.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/services/${s.slug}`),
    name: s.title,
  })),
};

const servicesGraph = servicePages.map((s) => ({
  "@type": "Service",
  name: s.title,
  serviceType: s.title,
  description: s.summary,
  provider: { "@id": ORG_ID },
  areaServed: "Lucknow, Uttar Pradesh, India",
  url: absoluteUrl(`/services/${s.slug}`),
}));

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([{ name: "Services", path: "/services" }]),
          itemListJsonLd,
          ...servicesGraph
        )}
      />

      <PageHeader
        eyebrow="What We Do"
        title="Wedding Photography & Film Services"
        intro="Everything a wedding needs, kept under one roof — shot, edited and delivered by the same team in Lucknow. Book the whole celebration or only the part you are missing."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s, i) => (
              <li key={s.key}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-charcoal/5">
                    <Image
                      src={img.services[s.key as keyof typeof img.services]}
                      alt={`${s.title} by Click Weds`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 90vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-4 font-display text-xl text-charcoal">
                    {s.title}
                  </h2>
                  <p className="mt-2 font-body text-[14px] font-light leading-relaxed text-charcoal/60">
                    {s.description}
                  </p>
                  <span className="mt-3 inline-block font-body text-[11px] uppercase tracking-[0.18em] text-champagne">
                    Read more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
