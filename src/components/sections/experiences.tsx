"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/data/site";
import { img } from "@/data/images";

const imageMap = img.experiences;

export function Experiences() {
  return (
    <section id="experiences" className="bg-ivory-dark py-28 md:py-36">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
            What We Design
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Signature Wedding Experiences
          </h2>
          <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-charcoal/65 md:text-base">
            From the roka to the vidai, every ceremony in an Indian wedding
            carries its own mood, its own palette, and its own rituals. We
            design each one with the same rigor — never templated, never
            repeated.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.key}
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
                  src={imageMap[exp.key as keyof typeof imageMap]}
                  alt={exp.title}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl text-ivory md:text-2xl">
                  {exp.title}
                </h3>
                <motion.p
                  variants={{
                    rest: { opacity: 0, height: 0, marginTop: 0 },
                    hover: { opacity: 1, height: "auto", marginTop: 10 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden font-body text-[13px] font-light leading-relaxed text-ivory/80"
                >
                  {exp.description}
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
