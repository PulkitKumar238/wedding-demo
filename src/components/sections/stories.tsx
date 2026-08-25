"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { stories, storiesSection } from "@/data/site";
import { img } from "@/data/images";

export function Stories() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // 2px of slack: sub-pixel scroll positions never land exactly on the edge.
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncEdges();
    track.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    return () => {
      track.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
    };
  }, [syncEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section id="stories" className="overflow-hidden bg-ivory-dark py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
              {storiesSection.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
              {storiesSection.title}
            </h2>
            <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-charcoal/65">
              {storiesSection.description}
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous stories"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-champagne hover:text-champagne disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next stories"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-champagne hover:text-champagne disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </Container>

      {/*
        The track bleeds past the container so cards run to the screen edge,
        with matching padding either side to keep the first and last aligned
        with the heading above.
      */}
      <ul
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 md:px-12 lg:px-20"
      >
        {stories.map((story, index) => (
          <li
            key={story.key}
            className="w-[78vw] shrink-0 snap-start sm:w-[52vw] md:w-[38vw] lg:w-[28vw] xl:w-[22vw]"
          >
            <figure className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-charcoal/5">
                <Image
                  src={img.stories[story.key as keyof typeof img.stories]}
                  alt={`${story.couple}'s wedding in ${story.location}`}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 768px) 38vw, (min-width: 640px) 52vw, 78vw"
                  /*
                    Only the first card is fetched up front. Every other card
                    sits outside the viewport, so the browser holds its image
                    back until it is scrolled towards.
                  */
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-xl italic text-charcoal md:text-2xl">
                  {story.couple}
                </p>
                <p className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-charcoal/50">
                  {story.location}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
