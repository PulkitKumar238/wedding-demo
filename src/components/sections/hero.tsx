"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/site";
import { img } from "@/data/images";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Anyone who has asked their OS for less motion gets the poster frame held
  // still rather than a looping film behind the headline.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /*
      React sets `muted` as a property but does not always render it as an
      attribute, and iOS checks the attribute before it will autoplay at all.
      Setting both here costs nothing and removes the doubt.
    */
    video.muted = true;
    video.setAttribute("muted", "");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const play = () => {
      if (reduced.matches) return;
      void video.play().catch(() => {
        /* autoplay refused — the poster frame stands in */
      });
    };

    const apply = () => {
      if (reduced.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        play();
      }
    };

    /*
      `loop` alone is not enough on a phone. Low Power Mode, battery saver and
      backgrounding all pause the element, and once paused nothing restarts it —
      which is why it played through once and then stopped. So: restart on end,
      resume whenever the tab comes back, and try again when the hero scrolls
      back into view.
    */
    const onEnded = () => {
      video.currentTime = 0;
      play();
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && video.paused) play();
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    apply();
    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisible);
    reduced.addEventListener("change", apply);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisible);
      reduced.removeEventListener("change", apply);
    };
  }, []);

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
      className="relative w-full overflow-hidden bg-charcoal md:flex md:h-[100svh] md:items-end"
    >
      {/*
        Ten seconds cut from the studio's own wedding film. Muted and
        playsInline so mobile browsers will autoplay it at all; the poster
        frame carries the hero on its own if they refuse.

        On a phone the film sits in the flow at its own 16:9, so the whole
        frame is visible rather than a quarter of it, and the headline sits
        underneath on charcoal. From md up it goes back behind the headline,
        full bleed. Overlaying the text on a portrait screen is what pushed
        the copy up into the navbar.
      */}
      <div
        ref={imageRef}
        className="relative aspect-video w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-[center_35%]"
          poster={img.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={img.heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/40 md:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-charcoal/30 via-transparent to-transparent md:block" />

      <Container className="relative z-10 py-12 md:py-0 md:pb-28">
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

      <div className="hero-scroll pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-2 md:bottom-8 md:flex md:gap-3">
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
