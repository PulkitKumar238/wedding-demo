import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbNode, graph, pageMeta, absoluteUrl, ORG_ID } from "@/lib/seo";
import { servicePages, serviceBySlug } from "@/data/pages";
import { packages, brand } from "@/data/site";
import { img } from "@/data/images";

const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return pageMeta({
    title: s.metaTitle,
    description: s.summary,
    path: `/services/${s.slug}`,
    images: [img.services[s.key as keyof typeof img.services]],
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const related = s.relatedPackages
    .map((key) => packages.find((p) => p.key === key))
    .filter((p): p is (typeof packages)[number] => Boolean(p));

  const serviceNode = {
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.summary,
    provider: { "@id": ORG_ID },
    areaServed: "Lucknow, Uttar Pradesh, India",
    url: absoluteUrl(`/services/${s.slug}`),
    ...(related.length
      ? {
          offers: related.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: String(p.offer),
            priceCurrency: "INR",
            url: absoluteUrl("/packages"),
          })),
        }
      : {}),
  };

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
          serviceNode
        )}
      />

      <PageHeader
        eyebrow="Wedding Services"
        title={s.title}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: s.title, href: `/services/${s.slug}` },
        ]}
      />

      <article className="bg-ivory pb-20 pt-8 md:pb-28 md:pt-12">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="max-w-2xl space-y-5">
              {s.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="font-body text-[16px] font-light leading-relaxed text-charcoal/75"
                >
                  {p}
                </p>
              ))}
              <p className="font-body text-[13px] uppercase tracking-[0.16em] text-charcoal/45">
                {s.title} · {brand.serviceArea}
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-charcoal/5 md:sticky md:top-28 md:self-start">
              <Image
                src={img.services[s.key as keyof typeof img.services]}
                alt={`${s.title} by ${brand.name}`}
                fill
                sizes="(min-width: 768px) 34vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-charcoal/10 pt-12 md:mt-24">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                Packages that include this
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <li
                    key={p.key}
                    className="flex flex-col justify-between border border-charcoal/10 bg-ivory-dark/40 p-5"
                  >
                    <div>
                      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-champagne">
                        {p.code}
                      </p>
                      <p className="mt-1.5 font-display text-xl leading-tight text-charcoal">
                        {p.name}
                      </p>
                    </div>
                    <p className="mt-4 font-display text-2xl text-charcoal">
                      {rupees(p.offer)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/packages">See all packages</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#booking">Enquire</Link>
                </Button>
              </div>
            </div>
          )}

          <div className="mt-14 md:mt-20">
            <Link
              href="/services"
              className="font-body text-[12px] uppercase tracking-[0.18em] text-charcoal/50 transition-colors hover:text-charcoal"
            >
              ← All services
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
