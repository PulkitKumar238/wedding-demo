"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { booking, brand } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { img } from "@/data/images";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border-b border-ivory/25 bg-transparent py-3 font-body text-[15px] text-ivory placeholder:text-ivory/40 focus:border-champagne focus:outline-none";

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const url = buildWhatsAppUrl(data);
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
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
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
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Full Name
                </label>
                <input name="name" required className={inputClass} placeholder="Ananya Rathore" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Phone
                </label>
                <input name="phone" className={inputClass} placeholder="+91 98765 43210" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Wedding Date
                </label>
                <input name="weddingDate" type="text" className={inputClass} placeholder="e.g. November 2027" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Desired Location
                </label>
                <input
                  name="location"
                  className={inputClass}
                  placeholder="Jaipur, Udaipur, Goa, Delhi NCR..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block font-body text-[11px] uppercase tracking-[0.16em] text-ivory/40">
                  Tell us about your celebration
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Share your vision, the ceremonies you are planning, guest count, and any dates you're considering..."
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
