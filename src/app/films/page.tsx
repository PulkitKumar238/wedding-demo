import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { LiteYouTube } from "@/components/seo/lite-youtube";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, pageMeta, absoluteUrl, ORG_ID } from "@/lib/seo";
import { films, brand } from "@/data/site";
import { img } from "@/data/images";

export const metadata: Metadata = pageMeta({
  title: "Wedding Films — Cinematic Wedding Videos, Lucknow",
  description:
    "Seven weddings as they actually moved and sounded — cinematic teasers and highlight films shot and cut by Click Weds in Lucknow, including a Taj Mahal nikah and destination weddings.",
  path: "/films",
});

const videoNodes = films.map((f) => ({
  "@type": "VideoObject",
  name: `${f.title} — ${f.note}`,
  description: `${f.note} for ${f.title}, filmed and edited by ${brand.name}, Lucknow.`,
  thumbnailUrl: absoluteUrl(img.films[f.id as keyof typeof img.films]),
  embedUrl: `https://www.youtube-nocookie.com/embed/${f.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${f.id}`,
  publisher: { "@id": ORG_ID },
  // TODO: add `uploadDate` (ISO 8601) per film once real publish dates are
  // confirmed — required for video rich results.
}));

export default function FilmsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([{ name: "Films", path: "/films" }]),
          ...videoNodes
        )}
      />

      <PageHeader
        eyebrow="In Motion"
        title="Our Wedding Films"
        intro="Seven weddings as they actually sounded and moved — the teasers and highlight films, shot and cut in our own studio in Lucknow."
        crumbs={[{ name: "Films", href: "/films" }]}
      />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <ul className="grid gap-x-8 gap-y-14 lg:grid-cols-2">
            {films.map((f) => (
              <li key={f.id}>
                <LiteYouTube
                  id={f.id}
                  title={`${f.title} — ${f.note}`}
                  poster={img.films[f.id as keyof typeof img.films]}
                />
                <h2 className="mt-4 font-display text-2xl text-charcoal">
                  {f.title}
                </h2>
                <p className="mt-1 font-body text-[12px] uppercase tracking-[0.18em] text-charcoal/50">
                  {f.note}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-charcoal/10 pt-12 md:mt-24">
            <p className="font-display text-2xl text-charcoal md:text-3xl">
              Want a film like these?
            </p>
            <p className="mt-3 max-w-xl font-body text-[15px] font-light leading-relaxed text-charcoal/65">
              Every Click Weds package includes a cinematic crew and an in-house
              edit — the teaser first, the long film once the dust settles.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/services/cinematic-wedding-videography">
                  Cinematic videography
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/packages">See packages</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
