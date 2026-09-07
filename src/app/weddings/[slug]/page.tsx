import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { LiteYouTube } from "@/components/seo/lite-youtube";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbNode,
  graph,
  pageMeta,
  absoluteUrl,
  ORG_ID,
  REVIEWS_HAVE_RATINGS,
} from "@/lib/seo";
import { weddings, weddingBySlug } from "@/data/pages";
import { films, testimonials, brand } from "@/data/site";
import { img } from "@/data/images";

export function generateStaticParams() {
  return weddings.map((w) => ({ slug: w.slug }));
}

type Params = { params: Promise<{ slug: string }> };

function place(w: NonNullable<ReturnType<typeof weddingBySlug>>) {
  return w.destination ? "a destination wedding" : `${w.city}, ${w.region}`;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const w = weddingBySlug(slug);
  if (!w) return {};

  const where = w.destination ? "Destination Wedding" : `${w.city} Wedding`;
  return pageMeta({
    title: `${w.couple} — ${where}`,
    description: w.summary,
    path: `/weddings/${w.slug}`,
    images: [img.couples[w.key as keyof typeof img.couples].cover],
  });
}

export default async function WeddingPage({ params }: Params) {
  const { slug } = await params;
  const w = weddingBySlug(slug);
  if (!w) notFound();

  const gallery = img.couples[w.key as keyof typeof img.couples].gallery;
  const cover = img.couples[w.key as keyof typeof img.couples].cover;
  const film = w.filmId ? films.find((f) => f.id === w.filmId) : undefined;
  const testimonial = testimonials.find((t) => t.key === w.key);

  const heading = w.destination
    ? `${w.couple} — A Destination Wedding`
    : `${w.couple} — Wedding Photography in ${w.city}`;

  /* --- JSON-LD: breadcrumb, the couple's words as a Review, the film ------- */
  const nodes: Record<string, unknown>[] = [
    breadcrumbNode([
      { name: "Weddings", path: "/weddings" },
      { name: w.couple, path: `/weddings/${w.slug}` },
    ]),
    {
      "@type": "ImageGallery",
      name: heading,
      about: `Wedding of ${w.couple}${w.destination ? "" : ` in ${w.city}, ${w.region}`}`,
      url: absoluteUrl(`/weddings/${w.slug}`),
      author: { "@id": ORG_ID },
      image: [absoluteUrl(cover), ...gallery.slice(0, 6).map(absoluteUrl)],
    },
  ];

  if (testimonial) {
    nodes.push({
      "@type": "Review",
      itemReviewed: { "@id": ORG_ID },
      author: { "@type": "Person", name: w.couple },
      reviewBody: testimonial.quote,
      publisher: { "@id": ORG_ID },
      ...(REVIEWS_HAVE_RATINGS
        ? {
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          }
        : {}),
    });
  }

  if (film) {
    nodes.push({
      "@type": "VideoObject",
      name: `${w.couple} — ${film.note}`,
      description: `${film.note} for ${w.couple}, filmed and edited by ${brand.name}.`,
      thumbnailUrl: absoluteUrl(img.films[film.id as keyof typeof img.films]),
      embedUrl: `https://www.youtube-nocookie.com/embed/${film.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${film.id}`,
      // TODO: add `uploadDate` (ISO 8601) once the real publish dates are known
      // — Google needs it before it will show video rich results.
    });
  }

  return (
    <>
      <JsonLd data={graph(...nodes)} />

      <PageHeader
        eyebrow={w.destination ? "Destination Wedding" : `${w.city} Wedding`}
        title={heading}
        crumbs={[
          { name: "Weddings", href: "/weddings" },
          { name: w.couple, href: `/weddings/${w.slug}` },
        ]}
      />

      <article className="bg-ivory pb-20 pt-8 md:pb-28 md:pt-12">
        <Container>
          <div className="max-w-2xl space-y-5">
            {w.intro.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="font-body text-[16px] font-light leading-relaxed text-charcoal/75"
              >
                {p}
              </p>
            ))}
            <p className="font-body text-[13px] uppercase tracking-[0.16em] text-charcoal/45">
              Photographed by {brand.name} · {place(w)}
            </p>
          </div>

          {film && (
            <div className="mt-12 md:mt-16">
              <LiteYouTube
                id={film.id}
                title={`${w.couple} — ${film.note}`}
                poster={img.films[film.id as keyof typeof img.films]}
              />
            </div>
          )}

          {testimonial && (
            <blockquote className="mx-auto mt-14 max-w-2xl border-l-2 border-champagne pl-6 md:mt-20">
              <p className="font-display text-xl italic leading-relaxed text-charcoal md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <cite className="mt-4 block font-body text-[12px] uppercase not-italic tracking-[0.18em] text-charcoal/50">
                {w.couple}
              </cite>
            </blockquote>
          )}

          <h2 className="mt-16 font-display text-2xl text-charcoal md:mt-24 md:text-3xl">
            The Gallery
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-charcoal/5"
              >
                <Image
                  src={src}
                  alt={`${w.couple}'s wedding${w.destination ? "" : ` in ${w.city}`} — photograph ${i + 1} of ${gallery.length} by ${brand.name}`}
                  fill
                  sizes="(min-width: 768px) 32vw, 48vw"
                  loading={i < 4 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-charcoal/10 pt-12 md:mt-24">
            <p className="font-display text-2xl text-charcoal md:text-3xl">
              Planning a wedding in {w.destination ? "another city" : w.city}?
            </p>
            <p className="mt-3 max-w-xl font-body text-[15px] font-light leading-relaxed text-charcoal/65">
              Click Weds takes a limited number of weddings each season. Tell us
              your dates and the functions you are planning.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/#booking">Book Your Date</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/weddings">See more weddings</Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
