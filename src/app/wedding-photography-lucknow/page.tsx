import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbNode,
  faqNode,
  graph,
  pageMeta,
  absoluteUrl,
  ORG_ID,
} from "@/lib/seo";
import { weddings, servicePages } from "@/data/pages";
import { packages, faqs, brand } from "@/data/site";
import { img } from "@/data/images";

const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const metadata: Metadata = pageMeta({
  title: "Wedding Photography in Lucknow",
  description:
    "Click Weds is a luxury wedding photography and film studio in Hazratganj, Lucknow. Candid photography, cinematic films, drone and full-day coverage — packages from ₹80,000, delivered in about 40 days.",
  path: "/wedding-photography-lucknow",
});

const lucknowWeddings = weddings.filter((w) => w.city === "Lucknow");
const startingPrice = Math.min(...packages.map((p) => p.offer));

export default function LucknowPage() {
  const webPageNode = {
    "@type": "WebPage",
    name: "Wedding Photography in Lucknow",
    url: absoluteUrl("/wedding-photography-lucknow"),
    about: { "@id": ORG_ID },
    primaryImageOfPage: absoluteUrl(img.heroPoster),
    inLanguage: "en-IN",
  };

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            {
              name: "Wedding Photography in Lucknow",
              path: "/wedding-photography-lucknow",
            },
          ]),
          webPageNode,
          faqNode()
        )}
      />

      <PageHeader
        eyebrow="Lucknow · Uttar Pradesh"
        title="Wedding Photography in Lucknow"
        intro={`Click Weds is a luxury wedding photography and film studio based in Hazratganj, Lucknow. We photograph and film Indian weddings across the city and the state — candid coverage, cinematic films, and a printed album in about forty days.`}
        crumbs={[
          {
            name: "Wedding Photography in Lucknow",
            href: "/wedding-photography-lucknow",
          },
        ]}
      />

      <article className="bg-ivory pb-20 pt-8 md:pb-28 md:pt-12">
        <Container>
          {/* -------------------------------------------------- about, local */}
          <div className="max-w-2xl space-y-5">
            <p className="font-body text-[16px] font-light leading-relaxed text-charcoal/75">
              An Indian wedding in Lucknow is rarely a single day. It runs from
              the roka through the tilak, the haldi and mehndi, the sangeet, the
              wedding itself and the reception — often across several venues and
              both families&rsquo; homes. Click Weds is built for that: a senior
              photographer with you from the first call to the final album, never
              handed to a rotating team, and a calendar kept deliberately short
              so no function is left early to reach the next booking.
            </p>
            <p className="font-body text-[16px] font-light leading-relaxed text-charcoal/75">
              Every wedding is covered two ways at once — a candid photographer on
              the unposed hours and a traditional photographer on the family
              portraits every household asks for — with cinematic and traditional
              film crews alongside them. The edit is done in-house in Lucknow, so
              a gallery shot by four people over three days still reads as one
              wedding.
            </p>
          </div>

          {/* -------------------------------------------------------- services */}
          <h2 className="mt-16 font-display text-3xl text-charcoal md:mt-24 md:text-4xl">
            What we cover
          </h2>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
              <li key={s.key}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-baseline justify-between gap-3 border-b border-charcoal/10 py-3 font-body text-[15px] text-charcoal/80 transition-colors hover:text-champagne"
                >
                  {s.title}
                  <span aria-hidden className="text-charcoal/30">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ---------------------------------------------- featured weddings */}
          {lucknowWeddings.length > 0 && (
            <>
              <h2 className="mt-16 font-display text-3xl text-charcoal md:mt-24 md:text-4xl">
                Recent Lucknow weddings
              </h2>
              <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {lucknowWeddings.map((w, i) => (
                  <li key={w.key}>
                    <Link
                      href={`/weddings/${w.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-charcoal/5">
                        <Image
                          src={
                            img.couples[w.key as keyof typeof img.couples].cover
                          }
                          alt={`${w.couple}'s wedding in Lucknow, photographed by ${brand.name}`}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 90vw"
                          loading={i < 3 ? "eager" : "lazy"}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-3 font-display text-lg italic text-charcoal">
                        {w.couple}
                      </p>
                      <p className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-charcoal/50">
                        Lucknow{w.filmId ? " · Film" : ""}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/weddings">All weddings</Link>
                </Button>
              </div>
            </>
          )}

          {/* -------------------------------------------------------- pricing */}
          <h2 className="mt-16 font-display text-3xl text-charcoal md:mt-24 md:text-4xl">
            Packages &amp; prices
          </h2>
          <p className="mt-4 max-w-2xl font-body text-[16px] font-light leading-relaxed text-charcoal/70">
            Coverage in Lucknow starts at {rupees(startingPrice)} for the wedding
            day and scales to full engagement-to-reception coverage. Every
            package includes a printed album, a cinematic teaser, full-length
            films, social edits and all the raw footage.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p) => (
              <li
                key={p.key}
                className="flex items-baseline justify-between gap-4 border border-charcoal/10 bg-ivory-dark/40 p-5"
              >
                <span className="font-body text-[15px] text-charcoal/80">
                  {p.name}
                </span>
                <span className="shrink-0 font-display text-lg text-charcoal">
                  {rupees(p.offer)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild>
              <Link href="/packages">See all nine packages</Link>
            </Button>
          </div>

          {/* ------------------------------------------------------------ FAQ */}
          <h2
            id="faq"
            className="mt-16 font-display text-3xl text-charcoal md:mt-24 md:text-4xl"
          >
            Common questions
          </h2>
          <dl className="mt-8 max-w-3xl divide-y divide-charcoal/10 border-y border-charcoal/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-xl text-charcoal">{f.q}</dt>
                <dd className="mt-3 font-body text-[15px] font-light leading-relaxed text-charcoal/70">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>

          {/* ------------------------------------------------------------ CTA */}
          <div className="mt-16 border-t border-charcoal/10 pt-12 md:mt-24">
            <p className="font-display text-2xl text-charcoal md:text-3xl">
              Check your date
            </p>
            <p className="mt-3 max-w-xl font-body text-[15px] font-light leading-relaxed text-charcoal/65">
              Tell us the functions you are planning and the dates you are
              holding. We take a limited number of weddings each season.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/#booking">Book Your Date</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/films">Watch the films</Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
