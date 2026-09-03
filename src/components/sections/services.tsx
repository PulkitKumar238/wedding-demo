"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";
import { img } from "@/data/images";

const imageMap = img.services;

export function Services() {
  return (
    <section id="services" className="bg-ivory-dark py-28 md:py-36">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
            What We Do
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-charcoal/65 md:text-base">
            Everything a wedding needs, kept under one roof — shot, edited, and
            delivered by the same team. Book the whole thing or only the part
            you are missing.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2px]"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={imageMap[service.key as keyof typeof imageMap]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl text-ivory md:text-2xl">
                  {service.title}
                </h3>
                <motion.p
                  variants={{
                    rest: { opacity: 0, height: 0, marginTop: 0 },
                    hover: { opacity: 1, height: "auto", marginTop: 10 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden font-body text-[13px] font-light leading-relaxed text-ivory/80"
                >
                  {service.description}
                </motion.p>
              </div>

              <div className="absolute inset-0 border border-ivory/0 transition-colors duration-500 group-hover:border-ivory/25" />
            </motion.div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
