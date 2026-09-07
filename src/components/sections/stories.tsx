"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { stories, storiesSection } from "@/data/site";
import { img } from "@/data/images";

export function Stories() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  /*
    Shift + wheel scrolls the track sideways. Most browsers already map that
    gesture onto a horizontal scroller, but not every mouse and trackpad gets
    there, so it is handled explicitly. The page keeps its own scroll whenever
    the track has nothing further to give in that direction.
  */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e: WheelEvent) => {
      if (!e.shiftKey || e.deltaY === 0) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const next = track.scrollLeft + e.deltaY;
      if ((next <= 0 && e.deltaY < 0) || (next >= maxScroll && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      track.scrollLeft = next;
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  /*
    Click-and-drag with a mouse. Touch and trackpad already scroll the track
    natively, so pointerType is filtered to mouse only — hijacking touch would
    break the momentum scrolling phones give for free.
  */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      // Snapping fights a drag in progress; it is restored on release.
      track.style.scrollSnapType = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 3) track.setPointerCapture(e.pointerId);
      track.scrollLeft = startScroll - delta;
    };

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      track.style.scrollSnapType = "";
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("pointerleave", endDrag);
    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-champagne hover:text-champagne disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="stories" className="bg-ivory-dark py-24 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
              {storiesSection.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
              {storiesSection.title}
            </h2>
            <p className="mt-5 font-body text-[15px] font-light leading-relaxed text-charcoal/65">
              {storiesSection.description}
            </p>
            <Link
              href="/weddings"
              className="mt-6 inline-block font-body text-[12px] uppercase tracking-[0.2em] text-champagne transition-opacity hover:opacity-70"
            >
              View all weddings →
            </Link>
          </div>

          {/* Phones swipe the track directly, so the arrows would only be
              clutter down there. */}
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous stories"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className={arrowClass}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next stories"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className={arrowClass}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        {/* The track lives inside the Container so the first card lines up with
            the heading above it, and the last is clipped by the same gutter —
            which reads as "there is more this way". */}
        <ul
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-14"
        >
          {stories.map((story, index) => (
            <li
              key={story.key}
              className="w-[72vw] shrink-0 snap-start sm:w-[46vw] md:w-[34vw] lg:w-[26vw] xl:w-[21vw]"
            >
              <figure className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`See all photographs from ${story.couple}'s wedding`}
                  className="relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-[2px] bg-charcoal/5"
                >
                  <Image
                    src={img.couples[story.key as keyof typeof img.couples].cover}
                    alt={`${story.couple}'s wedding in ${story.location}`}
                    fill
                    sizes="(min-width: 1280px) 21vw, (min-width: 1024px) 26vw, (min-width: 768px) 34vw, (min-width: 640px) 46vw, 72vw"
                    /*
                      Only the first card is fetched up front. Every other card
                      sits outside the viewport, so the browser holds its image
                      back until it is scrolled towards.
                    */
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="select-none object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-charcoal/70 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-ivory">
                      View gallery
                    </span>
                  </span>
                </button>
                <figcaption className="mt-4">
                  <p className="font-display text-lg italic text-charcoal md:text-xl">
                    {story.couple}
                  </p>
                  <p className="mt-1 font-body text-[10px] uppercase tracking-[0.14em] text-charcoal/50 md:text-[11px]">
                    {story.location}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>

      {openIndex !== null && (
        <CoupleGallery
          storyIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}

/*
  Everything one couple's gallery needs, over the page rather than on a route of
  its own: the frame in view, arrows and keys to move through it, and a strip to
  jump around. Same shape as the portfolio lightbox and the film viewer, so the
  three read as one idea rather than three.
*/
function CoupleGallery({
  storyIndex,
  onClose,
}: {
  storyIndex: number;
  onClose: () => void;
}) {
  const story = stories[storyIndex];
  const shots = img.couples[story.key as keyof typeof img.couples].gallery;
  const [shot, setShot] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const step = useCallback(
    (delta: number) => setShot((i) => (i + delta + shots.length) % shots.length),
    [shots.length]
  );

  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, step]);

  /*
    The strip does not follow the photo on its own: step past the fifth or sixth
    frame and the marker walks off the right-hand edge while the strip sits
    still. Centre the active thumbnail instead, every time the photo changes.
  */
  useEffect(() => {
    const strip = stripRef.current;
    const active = strip?.children[shot] as HTMLElement | undefined;
    if (!strip || !active) return;

    // Measured off bounding rects, not offsetLeft: the strip is not a
    // positioned element, so offsetLeft would be relative to the dialog and
    // the target would land far to the right of the thumbnail.
    const stripBox = strip.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    const within = activeBox.left - stripBox.left + strip.scrollLeft;

    strip.scrollTo({
      left: within - strip.clientWidth / 2 + activeBox.width / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [shot]);

  /* Click-and-drag the strip. Touch and trackpad already scroll it natively. */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let dragging = false;
    let moved = 0;
    let startX = 0;
    let startScroll = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startScroll = strip.scrollLeft;
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      strip.scrollLeft = startScroll - dx;
      if (moved > 4) e.preventDefault();
    };
    const up = () => {
      if (!dragging) return;
      dragging = false;
      // A drag that travelled must not also select the thumbnail under it.
      if (moved > 4) {
        strip.dataset.dragged = "1";
        window.setTimeout(() => delete strip.dataset.dragged, 0);
      }
    };

    strip.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      strip.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${story.couple} — wedding gallery`}
      data-lenis-prevent
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 bg-charcoal/90 p-5 backdrop-blur-sm md:p-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-[min(92vw,1100px)] items-baseline justify-between gap-4"
      >
        <div>
          <p className="font-display text-xl text-ivory md:text-2xl">
            {story.couple}
          </p>
          <p className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-ivory/45">
            {story.location} — {shot + 1} of {shots.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="shrink-0 font-body text-[11px] uppercase tracking-[0.25em] text-ivory/70 transition-colors hover:text-ivory"
        >
          Close
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[64vh] w-full max-w-[min(92vw,1100px)] flex-1 items-center justify-center"
      >
        <Image
          key={shots[shot]}
          src={shots[shot]}
          alt={`${story.couple}, photograph ${shot + 1}`}
          width={1400}
          height={1400}
          sizes="(min-width: 768px) 92vw, 100vw"
          priority
          className="max-h-[64vh] w-auto max-w-full rounded-[2px] object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
        />

        {/*
          The frames on either side are fetched as soon as this one is shown.
          Without it, every step forward lands on a photograph the browser has
          never asked for and the frame is empty until it arrives — which reads
          as the button not working.
        */}
        <div aria-hidden className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
          {[shot - 1, shot + 1].map((n) => {
            const i = (n + shots.length) % shots.length;
            return (
              <Image
                key={shots[i]}
                src={shots[i]}
                alt=""
                width={1400}
                height={1400}
                sizes="(min-width: 768px) 92vw, 100vw"
                loading="eager"
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous photograph"
          className="absolute left-1 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-ivory/80 backdrop-blur transition-colors hover:bg-charcoal hover:text-ivory md:left-2"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photograph"
          className="absolute right-1 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-ivory/80 backdrop-blur transition-colors hover:bg-charcoal hover:text-ivory md:right-2"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div
        ref={stripRef}
        onClick={(e) => e.stopPropagation()}
        className="no-scrollbar flex w-full max-w-[min(92vw,1100px)] cursor-grab gap-2 overflow-x-auto overscroll-x-contain active:cursor-grabbing"
      >
        {shots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              if (stripRef.current?.dataset.dragged) return;
              setShot(i);
            }}
            aria-label={`Photograph ${i + 1}`}
            aria-current={i === shot}
            className={`relative aspect-square w-14 shrink-0 overflow-hidden rounded-[2px] transition-all duration-300 sm:w-16 ${
              i === shot ? "opacity-100 ring-1 ring-champagne" : "opacity-40 hover:opacity-75"
            }`}
          >
            <Image src={src} alt="" fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
