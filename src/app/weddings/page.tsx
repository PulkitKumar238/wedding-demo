import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, pageMeta, absoluteUrl } from "@/lib/seo";
import { weddings } from "@/data/pages";
import { img } from "@/data/images";

export const metadata: Metadata = pageMeta({
  title: "Real Weddings — Photography Portfolio",
  description:
    "Every wedding Click Weds has delivered a gallery for — Lucknow, Varanasi, Kanpur and destination celebrations. Full photo galleries and films from each.",
  path: "/weddings",
});

const itemListJsonLd = {
  "@type": "ItemList",
  name: "Real weddings photographed by Click Weds",
  itemListElement: weddings.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/weddings/${w.slug}`),
    name: `${w.couple} — ${w.destination ? "destination wedding" : `${w.city} wedding`}`,
  })),
};

export default function WeddingsIndexPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([{ name: "Weddings", path: "/weddings" }]),
          itemListJsonLd
        )}
      />

      <PageHeader
        eyebrow="Real Weddings"
        title="Every Wedding We've Told"
        intro="Ten families, ten entirely different days — across Lucknow, Varanasi, Kanpur and further afield. Open any one for the full gallery and, where there is one, the film."
        crumbs={[{ name: "Weddings", href: "/weddings" }]}
      />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {weddings.map((w, i) => (
              <li key={w.key}>
                <Link href={`/weddings/${w.slug}`} className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-charcoal/5">
                    <Image
                      src={img.couples[w.key as keyof typeof img.couples].cover}
                      alt={`${w.couple}'s wedding${w.destination ? "" : ` in ${w.city}, ${w.region}`}, photographed by Click Weds`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 90vw"
                      loading={i < 3 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 font-display text-xl italic text-charcoal">
                    {w.couple}
                  </p>
                  <p className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-charcoal/50">
                    {w.destination
                      ? "Destination Wedding"
                      : `${w.city}, ${w.region}`}
                    {w.filmId ? " · Film" : ""}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
