"use client";

import { useEffect, useState } from "react";
import { Check, Gift, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  addOns,
  hourlyServices,
  packageTerms,
  packages,
  packagesSection,
} from "@/data/site";
import { buildWhatsAppPackageUrl } from "@/lib/whatsapp";

/** ₹1,35,000 — Indian grouping, which is what the quotations use. */
const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/**
 * How many cards sit on a row, matching the grid's own breakpoints. Expanding
 * one card alone left the rest of its row stretched to the open card's height
 * and empty, so the whole row opens together — which means knowing how wide
 * the row currently is.
 */
function useColumns() {
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const xl = window.matchMedia("(min-width: 1280px)");
    const md = window.matchMedia("(min-width: 768px)");
    const sync = () => setCols(xl.matches ? 3 : md.matches ? 2 : 1);

    sync();
    xl.addEventListener("change", sync);
    md.addEventListener("change", sync);
    return () => {
      xl.removeEventListener("change", sync);
      md.removeEventListener("change", sync);
    };
  }, []);

  return cols;
}

export function Packages() {
  const cols = useColumns();
  /*
    The open package is tracked by key rather than by row number, so the right
    row stays open when the window crosses a breakpoint and the rows re-form.
  */
  const [openKey, setOpenKey] = useState<string | null>(null);
  const openIndex = openKey ? packages.findIndex((p) => p.key === openKey) : -1;
  const openRow = openIndex >= 0 ? Math.floor(openIndex / cols) : -1;

  return (
    <section id="packages" className="bg-ivory py-24 md:py-36">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
            {packagesSection.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            {packagesSection.title}
          </h2>
          <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-charcoal/65 md:text-base">
            {packagesSection.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => {
            const open = Math.floor(i / cols) === openRow;
            return (
              <PackageCard
                key={pkg.key}
                pkg={pkg}
                open={open}
                onToggle={() => setOpenKey(open ? null : pkg.key)}
              />
            );
          })}
        </div>

        {/*
          The add-ons live below every package rather than inside each card:
          page two is identical in all nine quotations, so repeating it nine
          times would only make the cards longer.
        */}
        <Reveal className="mt-16 md:mt-24">
          <h3 className="font-display text-2xl text-charcoal md:text-3xl">
            Add-On Services
          </h3>
          <p className="mt-3 font-body text-[15px] font-light text-charcoal/60">
            Available with any package above.
          </p>

          <ul className="mt-8 grid gap-px overflow-hidden rounded-[2px] bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <li
                key={a.name}
                className="flex items-baseline justify-between gap-4 bg-ivory p-5"
              >
                <span className="font-body text-[15px] text-charcoal/80">
                  {a.name}
                </span>
                <span className="shrink-0 font-display text-lg text-charcoal">
                  {rupees(a.price)}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display text-2xl text-charcoal md:text-3xl">
            By the Hour
          </h3>
          <p className="mt-3 font-body text-[15px] font-light text-charcoal/60">
            For a single function, or to add a second shooter to one you have
            already booked.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-charcoal/15">
                  {["Service", "Duration", "Price"].map((h) => (
                    <th
                      key={h}
                      className="pb-3 font-body text-[11px] uppercase tracking-[0.2em] text-charcoal/45"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hourlyServices.map((s) => (
                  <tr key={s.name} className="border-b border-charcoal/10">
                    <td className="py-4 font-body text-[15px] text-charcoal/85">
                      {s.name}
                    </td>
                    <td className="py-4 font-body text-[14px] text-charcoal/55">
                      {s.unit}
                    </td>
                    <td className="py-4 font-display text-[17px] text-charcoal">
                      ₹{s.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="group mt-14 border-t border-charcoal/10 pt-6">
            <summary className="cursor-pointer list-none font-body text-[12px] uppercase tracking-[0.2em] text-charcoal/50 transition-colors hover:text-charcoal">
              Terms &amp; Conditions
              <span className="ml-2 inline-block transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-5 space-y-2.5">
              {packageTerms.map((t) => (
                <li
                  key={t}
                  className="font-body text-[14px] font-light leading-relaxed text-charcoal/60"
                >
                  {t}
                </li>
              ))}
            </ul>
          </details>
        </Reveal>
      </Container>
    </section>
  );
}

function PackageCard({
  pkg,
  open,
  onToggle,
}: {
  pkg: (typeof packages)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const saving = pkg.list ? pkg.list - pkg.offer : 0;

  /*
    Nine packages, each with up to five ceremonies of crew and six
    deliverables, ran to half a phone screen apiece. Collapsed, a card is now
    just the name and the price — the name already lists the ceremonies, so the
    chips that used to sit here only said it twice. The whole header is the
    toggle, which gives a thumb something to hit, and the same one card works
    on a phone and on a desktop.
  */
  return (
    <Reveal className="flex h-full flex-col border border-charcoal/10 bg-ivory-dark/40">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start gap-4 p-5 text-left md:p-6"
      >
        <span className="min-w-0 flex-1">
          <span className="block font-body text-[11px] uppercase tracking-[0.2em] text-champagne">
            {pkg.code}
          </span>
          <span className="mt-1.5 block font-display text-xl leading-tight text-charcoal md:text-2xl">
            {pkg.name}
          </span>
        </span>

        <span className="shrink-0 text-right">
          <span className="block font-display text-2xl leading-none text-charcoal md:text-[28px]">
            {rupees(pkg.offer)}
          </span>
          {pkg.list ? (
            <span className="mt-1.5 block font-body text-[13px] text-charcoal/35 line-through">
              {rupees(pkg.list)}
            </span>
          ) : (
            <span className="mt-1.5 block font-body text-[11px] tracking-wide text-charcoal/45">
              Fixed price
            </span>
          )}
        </span>
      </button>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        tabIndex={-1}
        className="flex items-center gap-2 px-5 pb-5 font-body text-[11px] uppercase tracking-[0.16em] text-charcoal/50 transition-colors hover:text-charcoal md:px-6 md:pb-6"
      >
        <Plus
          size={12}
          className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
        {open ? "Hide details" : "See what's included"}
        {pkg.list ? (
          <span className="ml-auto font-body text-[11px] normal-case tracking-normal text-champagne">
            Save {rupees(saving)}
          </span>
        ) : null}
      </button>

      {open && (
        <div className="space-y-5 border-t border-charcoal/10 px-5 py-5 md:px-6">
          <div className="space-y-3">
            {pkg.crew.map((c) => (
              <div key={c.ceremony}>
                <p className="font-body text-[12px] uppercase tracking-[0.14em] text-charcoal/70">
                  {c.ceremony}
                </p>
                <p className="mt-1 font-body text-[13px] font-light leading-relaxed text-charcoal/55">
                  {c.people.join(" · ")}
                  {"note" in c && c.note ? ` — ${c.note.toLowerCase()}` : ""}
                </p>
              </div>
            ))}
          </div>

          <ul className="space-y-2 border-t border-charcoal/10 pt-5">
            {pkg.deliverables.map((d) => (
              <li key={d} className="flex gap-2.5">
                <Check
                  size={14}
                  className="mt-0.5 shrink-0 text-champagne"
                  strokeWidth={2}
                />
                <span className="font-body text-[13px] font-light leading-relaxed text-charcoal/65">
                  {d}
                </span>
              </li>
            ))}
          </ul>

          {pkg.complimentary.length > 0 && (
            <div className="border-t border-charcoal/10 pt-4">
              <p className="flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.18em] text-charcoal/50">
                <Gift size={13} className="text-champagne" /> Complimentary
              </p>
              <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-charcoal/60">
                {pkg.complimentary.join(" · ")}
              </p>
            </div>
          )}

          <a
            href={buildWhatsAppPackageUrl(pkg.name)}
            target="_blank"
            rel="noreferrer noopener"
            className="block rounded-full border border-charcoal/25 py-3 text-center font-body text-[12px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
          >
            Enquire about this
          </a>
        </div>
      )}
    </Reveal>
  );
}
