"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/data/site";
import { img } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="bg-ivory py-28 md:py-36" ref={sectionRef}>
      <Container>
        <Reveal className="max-w-2xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
            How We Work
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Our Process
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-charcoal/10 md:left-10">
            <div
              ref={lineRef}
              style={{ transformOrigin: "top" }}
              className="h-full w-full origin-top bg-champagne"
            />
          </div>

          <div className="space-y-20 md:space-y-28">
            {process.map((step) => (
              <Reveal key={step.key} className="relative pl-16 md:pl-28">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-champagne bg-ivory font-display text-sm text-champagne md:left-[1rem] md:h-16 md:w-16 md:text-base">
                  {step.number}
                </span>

                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
                  <div>
                    <h3 className="font-display text-2xl text-charcoal md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md font-body text-[15px] font-light leading-relaxed text-charcoal/65 md:text-base">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative hidden h-32 w-44 overflow-hidden rounded-[2px] md:block">
                    <Image
                      src={img.process[step.key as keyof typeof img.process]}
                      alt={step.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
