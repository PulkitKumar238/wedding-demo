"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { featuredWeddings } from "@/data/site";
import { img } from "@/data/images";

const sizeClasses: Record<string, string> = {
  large: "col-span-2 row-span-2",
  tall: "col-span-1 row-span-2",
  small: "col-span-1 row-span-1",
};

export function FeaturedWeddings() {
  return (
    <section id="weddings" className="bg-charcoal py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne-light">
              Portfolio
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
              Featured Weddings
            </h2>
          </div>
          <p className="max-w-sm font-body text-[15px] font-light leading-relaxed text-ivory/55">
            A collection of celebrations designed across Rajasthan, Delhi
            NCR, Goa and beyond — each one composed to feel entirely,
            unmistakably their own.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-flow-row-dense grid-cols-2 auto-rows-[160px] gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[220px] md:gap-4"
        >
          {featuredWeddings.map((wedding) => (
            <div
              key={wedding.key}
              className={`${sizeClasses[wedding.size]} group relative overflow-hidden rounded-[2px]`}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img.gallery[wedding.key as keyof typeof img.gallery]}
                  alt={`${wedding.couple} wedding in ${wedding.location}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-lg italic text-ivory md:text-xl">
                  {wedding.couple}
                </p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-ivory/70">
                  {wedding.location}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
