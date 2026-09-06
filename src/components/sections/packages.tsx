"use client";

import { useState } from "react";
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

export function Packages() {
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
          {packages.map((pkg) => (
            <PackageCard key={pkg.key} pkg={pkg} />
          ))}
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

function PackageCard({ pkg }: { pkg: (typeof packages)[number] }) {
  const [open, setOpen] = useState(false);
  const saving = pkg.list ? pkg.list - pkg.offer : 0;

  return (
    <Reveal className="flex h-full flex-col border border-charcoal/10 bg-ivory-dark/40 p-6 md:p-7">
      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-champagne">
        {pkg.code}
      </p>
      <h3 className="mt-2 font-display text-2xl leading-tight text-charcoal">
        {pkg.name}
      </h3>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {pkg.covers.map((c) => (
          <span
            key={c}
            className="rounded-full border border-charcoal/15 px-2.5 py-1 font-body text-[11px] tracking-wide text-charcoal/60"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-3xl text-charcoal">
          {rupees(pkg.offer)}
        </span>
        {pkg.list && (
          <span className="font-body text-[15px] text-charcoal/35 line-through">
            {rupees(pkg.list)}
          </span>
        )}
      </div>
      <p className="mt-1 font-body text-[12px] tracking-wide text-charcoal/45">
        {pkg.list ? `You save ${rupees(saving)}` : "Fixed price"}
      </p>

      <div className="mt-6 space-y-3 border-t border-charcoal/10 pt-6">
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

      {/* Deliverables run long and are near-identical between packages, so they
          stay folded away until someone is actually comparing. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-6 flex items-center gap-2 self-start font-body text-[12px] uppercase tracking-[0.16em] text-charcoal/55 transition-colors hover:text-charcoal"
      >
        <Plus
          size={13}
          className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
        {open ? "Hide what you get" : "What you get"}
      </button>

      {open && (
        <div className="mt-5 space-y-4">
          <ul className="space-y-2">
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
        </div>
      )}

      <a
        href={buildWhatsAppPackageUrl(pkg.name)}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-auto block pt-7"
      >
        <span className="block rounded-full border border-charcoal/25 py-3 text-center font-body text-[12px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory">
          Enquire about this
        </span>
      </a>
    </Reveal>
  );
}
