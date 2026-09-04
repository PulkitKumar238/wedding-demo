"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { films, filmsSection } from "@/data/site";
import { img } from "@/data/images";

const posters = img.films;

export function Films() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const film = films[index];

  /*
    Stepping keeps `playing` as it was. Someone who is already watching wants
    the next film to start on its own; someone browsing posters wants to keep
    browsing posters.
  */
  const step = useCallback((delta: number) => {
    setIndex((i) => (i + delta + films.length) % films.length);
  }, []);

  return (
    <section id="films" className="bg-charcoal py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne-light">
              {filmsSection.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
              {filmsSection.title}
            </h2>
          </div>
          <p className="max-w-sm font-body text-[15px] font-light leading-relaxed text-ivory/55">
            {filmsSection.description}
          </p>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          {/*
            Arrow keys move between films, but only while the stage itself holds
            focus — a page-wide key listener would hijack the arrows from anyone
            scrolling the page or filling in the enquiry form further down.
          */}
          <div
            tabIndex={0}
            role="group"
            aria-label={`Wedding films, ${index + 1} of ${films.length}`}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
              if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
            }}
            className="relative outline-none focus-visible:ring-1 focus-visible:ring-champagne/60"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-charcoal-soft shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              {playing ? (
                /*
                  Keyed on the id so stepping tears the old player down instead
                  of leaving the previous film playing underneath. nocookie +
                  rel=0 keeps YouTube from tracking on our behalf or trailing
                  other studios' videos at the end.
                */
                <iframe
                  key={film.id}
                  src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={`${film.title} — ${film.note}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play ${film.title}`}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <Image
                    src={posters[film.id]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-charcoal/20" />

                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-champagne group-hover:bg-champagne md:h-20 md:w-20">
                    <Play
                      size={22}
                      strokeWidth={1.5}
                      className="ml-1 fill-ivory text-ivory transition-colors duration-500 group-hover:fill-charcoal group-hover:text-charcoal"
                    />
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-6 text-left md:p-8">
                    <span className="block font-display text-2xl text-ivory md:text-3xl">
                      {film.title}
                    </span>
                    <span className="mt-1 block font-body text-[12px] uppercase tracking-[0.2em] text-ivory/60">
                      {film.note}
                    </span>
                  </span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous film"
              className="absolute -left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/15 bg-charcoal/80 text-ivory/80 backdrop-blur transition-colors hover:border-champagne hover:text-champagne md:-left-6 lg:-left-8"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next film"
              className="absolute -right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/15 bg-charcoal/80 text-ivory/80 backdrop-blur transition-colors hover:border-champagne hover:text-champagne md:-right-6 lg:-right-8"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between gap-6">
            <p className="font-body text-[12px] uppercase tracking-[0.25em] text-ivory/45">
              <span className="text-champagne-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(films.length).padStart(2, "0")}
            </p>
            <p className="truncate font-body text-[13px] text-ivory/50">
              {film.title}
            </p>
          </div>

          {/* Jump straight to any film. Scrolls on phones rather than shrinking
              seven thumbnails to nothing. */}
          <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1">
            {films.map((f, i) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Play ${f.title}`}
                aria-current={i === index}
                className={`relative aspect-video w-28 shrink-0 overflow-hidden rounded-[2px] transition-all duration-500 sm:w-32 ${
                  i === index
                    ? "opacity-100 ring-1 ring-champagne"
                    : "opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={posters[f.id]}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
