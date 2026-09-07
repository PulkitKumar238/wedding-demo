import Link from "next/link";
import { Container } from "@/components/ui/container";

/**
 * The top of every route that is not the home page: a visible breadcrumb (which
 * matches the BreadcrumbList in the page's JSON-LD), an eyebrow, the H1, and an
 * optional standfirst. Clears the fixed navbar the same way `/packages` does.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: { name: string; href: string }[];
}) {
  const trail = [{ name: "Home", href: "/" }, ...crumbs];

  return (
    <div className="bg-ivory pt-32 md:pt-28">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-[11px] uppercase tracking-[0.18em] text-charcoal/45">
            {trail.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i < trail.length - 1 ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-charcoal"
                  >
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-charcoal/70">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl pt-8 md:pt-12">
          {eyebrow && (
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-[3.4rem]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 font-body text-[16px] font-light leading-relaxed text-charcoal/70">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
