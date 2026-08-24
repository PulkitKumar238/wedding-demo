"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/site";
import { img } from "@/data/images";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.22 },
        { scale: 1, duration: 3.2, ease: "power2.out" }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.4
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 },
          0.6
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          1.3
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          1.5
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          1.9
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex h-[100svh] w-full items-end overflow-hidden bg-charcoal"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={img.heroMain}
          alt="Bride and groom walking through their vidai as guests look on, lit by warm evening light"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-transparent" />

      <Container className="relative z-10 pb-32 md:pb-28">
        <p className="hero-eyebrow font-body text-[12px] uppercase tracking-[0.35em] text-champagne-light md:text-[13px]">
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,9vw,6.5rem)] leading-[1.03] text-ivory">
          {hero.heading.map((line) => (
            <span key={line} className="hero-line block overflow-hidden">
              {line}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle mt-8 max-w-md font-body text-base font-light leading-relaxed text-ivory/80 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="hero-cta mt-10">
          <Button variant="outline-light" asChild>
            <a href="#booking">{hero.cta}</a>
          </Button>
        </div>
      </Container>

      <div className="hero-scroll pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 md:bottom-8 md:gap-3">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-ivory/60">
          {hero.scrollLabel}
        </span>
        <span className="relative h-8 w-px overflow-hidden bg-ivory/20 md:h-12">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-line_1.8s_ease-in-out_infinite] bg-champagne-light" />
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}
