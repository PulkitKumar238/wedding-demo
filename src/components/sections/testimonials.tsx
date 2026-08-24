"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/site";
import { img } from "@/data/images";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  // overflow-x-hidden on the section: the slide transition translates the
  // quote by +/-40px, and without clipping that overhang widens the page and
  // flashes a horizontal scrollbar on phones each time the carousel advances.
  return (
    <section
      id="testimonials"
      className="overflow-x-hidden bg-ivory-dark py-28 md:py-36"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
            Client Love
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Words From Our Couples
          </h2>
        </Reveal>

        <div className="relative mt-16 min-h-[380px] md:mt-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.key}
              custom={direction}
              initial={{ opacity: 0, x: 40 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * direction }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-8 text-center md:gap-10"
            >
              <Quote className="h-8 w-8 text-champagne" strokeWidth={1.2} />

              <p className="max-w-3xl font-display text-2xl italic leading-snug text-charcoal md:text-3xl lg:text-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-champagne/40">
                  <Image
                    src={img.testimonials[current.key as keyof typeof img.testimonials]}
                    alt={current.names}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-body text-sm font-medium tracking-wide text-charcoal">
                    {current.names}
                  </p>
                  <p className="mt-1 font-body text-[13px] text-charcoal/50">
                    {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-champagne hover:text-champagne"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.key}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-champagne" : "w-1.5 bg-charcoal/20"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-champagne hover:text-champagne"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
