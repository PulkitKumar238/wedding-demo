"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Plus, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { booking, brand, ceremonyOptions, OTHER_CEREMONY } from "@/data/site";
import { buildWhatsAppUrl, type Ceremony } from "@/lib/whatsapp";
import { img } from "@/data/images";

type Status = "idle" | "submitting" | "success" | "error";

type CeremonyRow = {
  id: number;
  /** Selected option, or OTHER_CEREMONY when the couple names their own. */
  name: string;
  /** Free text, only used when `name` is OTHER_CEREMONY. */
  customName: string;
  date: string;
};

const inputClass =
  "w-full border-b border-ivory/25 bg-transparent py-3 font-body text-[15px] text-ivory placeholder:text-ivory/40 focus:border-champagne focus:outline-none";

// [color-scheme:dark] keeps the native calendar icon and picker legible. The
// browser draws them for a light background by default, which makes them
// all but invisible against this section.
const dateClass = `${inputClass} [color-scheme:dark]`;

const selectClass = `${inputClass} cursor-pointer appearance-none pr-7`;

const labelClass =
  "mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40";

let nextId = 1;
const emptyRow = (): CeremonyRow => ({
  id: nextId++,
  name: "",
  customName: "",
  date: "",
});

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [rows, setRows] = useState<CeremonyRow[]>(() => [emptyRow()]);

  const updateRow = (id: number, patch: Partial<CeremonyRow>) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const removeRow = (id: number) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const addRow = () => setRows((prev) => [...prev, emptyRow()]);

  /** A ceremony already picked in another row shouldn't be offered again. */
  const takenElsewhere = (id: number, option: string) =>
    option !== OTHER_CEREMONY &&
    rows.some((r) => r.id !== id && r.name === option);

  const toCeremonies = (): Ceremony[] =>
    rows
      .filter((r) => r.name)
      .map((r) => ({
        label: r.name === OTHER_CEREMONY ? r.customName : r.name,
        date: r.date,
      }))
      .filter((c) => c.label.trim());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const payload = {
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      location: fields.location,
      message: fields.message,
      ceremonies: toCeremonies(),
    };

    const url = buildWhatsAppUrl(payload);
    setWhatsAppUrl(url);

    // Opened before the fetch on purpose: a window opened after an await has
    // lost the user activation from the click, and popup blockers reject it.
    // If the browser blocks it anyway, the success panel offers the same link.
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setRows([emptyRow()]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src={img.bookingSide}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
      </div>

      <Container className="relative grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne-light">
            {booking.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl md:text-[3.4rem]">
            {booking.title}
          </h2>
          <p className="mt-6 max-w-md font-body text-[15px] font-light leading-relaxed text-ivory/60 md:text-base">
            {booking.description}
          </p>

          <div className="mt-12 space-y-4 border-t border-ivory/15 pt-8">
            <p className="font-body text-sm text-ivory/70">
              <span className="text-ivory/40">Email — </span>
              <a href={`mailto:${brand.email}`} className="hover:text-champagne">
                {brand.email}
              </a>
            </p>
            <p className="font-body text-sm text-ivory/70">
              <span className="text-ivory/40">Phone — </span>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-champagne">
                {brand.phoneDisplay}
              </a>
            </p>
            <p className="font-body text-sm text-ivory/70">
              <span className="text-ivory/40">Atelier — </span>
              {brand.address}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-start justify-center border border-champagne/30 p-10">
              <p className="font-display text-2xl text-ivory">
                Thank you — your enquiry has been received.
              </p>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-ivory/60">
                WhatsApp should have opened with your details already drafted —
                just press send. If it did not open, use the button below.
              </p>
              <Button variant="primary" size="sm" className="mt-8" asChild>
                <a href={whatsAppUrl} target="_blank" rel="noreferrer noopener">
                  Open WhatsApp
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-body text-sm text-ivory/50 underline underline-offset-4 transition-colors hover:text-champagne"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className={labelClass}>Full Name</label>
                <input name="name" required className={inputClass} placeholder="Ananya Rathore" />
              </div>
              <div className="sm:col-span-1">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className={labelClass}>Phone</label>
                <input name="phone" className={inputClass} placeholder="+91 98765 43210" />
              </div>
              <div className="sm:col-span-1">
                <label className={labelClass}>Desired Location</label>
                <input
                  name="location"
                  className={inputClass}
                  placeholder="Jaipur, Udaipur, Goa, Delhi NCR..."
                />
              </div>

              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>Ceremonies &amp; Dates</legend>
                <p className="mb-4 font-body text-[13px] font-light text-ivory/45">
                  Add each ceremony you are planning and the day it falls on.
                  Leave a date blank if it is not settled yet.
                </p>

                <div className="space-y-3">
                  {rows.map((row, index) => (
                    <div key={row.id} className="rounded-[2px] border border-ivory/10 p-4">
                      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,10rem)_auto] sm:items-center">
                        <div className="relative">
                          <select
                            value={row.name}
                            onChange={(e) => updateRow(row.id, { name: e.target.value })}
                            aria-label={`Ceremony ${index + 1}`}
                            className={selectClass}
                          >
                            <option value="" className="bg-charcoal text-ivory">
                              Select a ceremony
                            </option>
                            {ceremonyOptions.map((option) => (
                              <option
                                key={option}
                                value={option}
                                disabled={takenElsewhere(row.id, option)}
                                className="bg-charcoal text-ivory"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ivory/40"
                          />
                        </div>

                        <input
                          type="date"
                          value={row.date}
                          onChange={(e) => updateRow(row.id, { date: e.target.value })}
                          aria-label={`Date for ceremony ${index + 1}`}
                          className={dateClass}
                        />

                        <button
                          type="button"
                          onClick={() => removeRow(row.id)}
                          disabled={rows.length === 1}
                          aria-label={`Remove ceremony ${index + 1}`}
                          className="justify-self-start p-2 text-ivory/40 transition-colors hover:text-champagne disabled:pointer-events-none disabled:opacity-30 sm:justify-self-center"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {row.name === OTHER_CEREMONY && (
                        <input
                          value={row.customName}
                          onChange={(e) => updateRow(row.id, { customName: e.target.value })}
                          required
                          aria-label={`Name of ceremony ${index + 1}`}
                          className={`${inputClass} mt-3`}
                          placeholder="Name this ceremony"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {rows.length < ceremonyOptions.length && (
                  <button
                    type="button"
                    onClick={addRow}
                    className="mt-3 flex w-full items-center justify-center gap-2 border border-dashed border-ivory/25 py-3 font-body text-[11px] uppercase tracking-[0.16em] text-ivory/60 transition-colors hover:border-champagne hover:text-champagne"
                  >
                    <Plus size={14} />
                    Add a ceremony
                  </button>
                )}
              </fieldset>

              <div className="sm:col-span-2">
                <label className={labelClass}>Tell us about your celebration</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Share your vision, guest count, and anything else we should know..."
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 font-body text-sm text-red-300">{errorMessage}</p>
              )}

              <div className="sm:col-span-2 mt-2">
                <Button
                  type="submit"
                  variant="outline-light"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : booking.cta}
                </Button>
                <p className="mt-4 font-body text-[13px] font-light text-ivory/45">
                  Sending opens WhatsApp with your details already drafted.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
