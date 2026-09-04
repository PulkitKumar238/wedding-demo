"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { img } from "@/data/images";

const photos = img.portfolio;

/** Pixels per second the rail creeps along on its own. */
const DRIFT = 28;

export function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const held = useRef(false);

  /*
    The rail is a real horizontal scroller, so trackpads, touch and shift-wheel
    all work for free. The drift on top of that is a position this effect owns
    and writes out every frame.

    It has to own it: at 28px/s a frame advances well under a pixel, and the
    browser snaps `scrollLeft` to whole device pixels on read-back — so
    `scrollLeft += 0.47` reads back as 0 and the rail never moves at all. The
    fractional part only survives in a variable of our own.

    The list is rendered twice: once the position passes the halfway mark it is
    wound back by exactly one copy, which lands on an identical frame and so
    reads as an endless loop rather than a jump back to the start.
  */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    let pos = track.scrollLeft;

    const step = (now: number) => {
      // Clamped so a backgrounded tab does not resume with one huge jump.
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      // Anything else that moved the rail — a drag, a wheel, a finger — wins.
      // Read-back snapping is under a pixel, so only a real move trips this.
      if (Math.abs(track.scrollLeft - pos) > 1.5) pos = track.scrollLeft;

      const half = track.scrollWidth / 2;
      if (!held.current && half > 0) {
        pos += DRIFT * dt;
        if (pos >= half) pos -= half;
        track.scrollLeft = pos;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Click-and-drag on a mouse. Touch already scrolls the rail natively. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let moved = 0;
    let startX = 0;
    let startScroll = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      held.current = true;
    };

    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      track.scrollLeft = startScroll - dx;
      if (moved > 4) e.preventDefault();
    };

    const up = () => {
      if (!dragging) return;
      dragging = false;
      held.current = false;
      // A drag that travelled must not also register as a click on a tile.
      if (moved > 4) track.dataset.dragged = "1";
      window.setTimeout(() => delete track.dataset.dragged, 0);
    };

    track.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      track.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const open = useCallback((i: number) => {
    if (trackRef.current?.dataset.dragged) return;
    setLightbox(i);
  }, []);

  /* The rail holds still while the lightbox is up. */
  useEffect(() => {
    if (lightbox === null) return;
    held.current = true;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      held.current = false;
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section id="portfolio" className="overflow-hidden bg-charcoal py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne-light">
              Selected Work
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
              Portfolio
            </h2>
          </div>
          <p className="max-w-sm font-body text-[15px] font-light leading-relaxed text-ivory/55">
            Eighty-three frames from weddings across Uttar Pradesh and beyond.
            Drag the rail, or open any frame to see it whole.
          </p>
        </Reveal>


        {/* The rail lives inside the Container, like the stories track: the
            first frame lines up with the heading above it, and the last is
            clipped by the same gutter rather than by the window edge. */}
        <Reveal className="mt-16">
          <div
            ref={trackRef}
            onMouseEnter={() => (held.current = true)}
            onMouseLeave={() => (held.current = false)}
            className="no-scrollbar flex gap-3 overflow-x-auto overscroll-x-contain md:gap-4"
          >
            {/* Rendered twice so the wrap-around lands on an identical frame. */}
            {[0, 1].map((copy) =>
              photos.map((photo, i) => (
                <button
                  key={`${copy}-${photo.tile}`}
                  type="button"
                  onClick={() => open(i)}
                  aria-label={`Open wedding photograph ${i + 1} of ${photos.length}`}
                  className="group relative h-[260px] w-[195px] shrink-0 cursor-pointer overflow-hidden rounded-[2px] sm:h-[320px] sm:w-[240px] lg:h-[400px] lg:w-[300px]"
                >
                  {/* The tile is already 3:4, so the slot width is the whole
                      story and these numbers are the real tile widths. */}
                  <Image
                    src={photo.tile}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 240px, 195px"
                    draggable={false}
                    className="select-none object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
                </button>
              ))
            )}
          </div>
        </Reveal>
      </Container>

      {lightbox !== null && (
        <Lightbox
          index={lightbox}
          onClose={() => setLightbox(null)}
          onStep={(d) =>
            setLightbox((i) => ((i ?? 0) + d + photos.length) % photos.length)
          }
        />
      )}
    </section>
  );
}

/*
  The frame sits on the same charcoal the section already uses, dimmed rather
  than blacked out, and is deliberately smaller than the viewport so the page
  stays visible around it. `object-contain` inside a capped box is what lets a
  portrait and a landscape both arrive whole.
*/
function Lightbox({
  index,
  onClose,
  onStep,
}: {
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio photograph"
      data-lenis-prevent
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/80 p-6 backdrop-blur-sm animate-[lightbox-in_0.25s_ease-out] md:p-12"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[80vh] max-w-[min(88vw,1000px)] items-center justify-center"
      >
        <Image
          src={photos[index].full}
          alt={`Wedding photograph ${index + 1} of ${photos.length}`}
          width={1600}
          height={1600}
          sizes="(min-width: 768px) 88vw, 100vw"
          priority
          className="h-auto max-h-[80vh] w-auto max-w-full rounded-[2px] object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-11 right-0 font-body text-[11px] uppercase tracking-[0.25em] text-ivory/70 transition-colors hover:text-ivory"
        >
          Close
        </button>

        <button
          type="button"
          onClick={() => onStep(-1)}
          aria-label="Previous photograph"
          className="absolute -left-4 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-ivory/80 backdrop-blur transition-colors hover:text-ivory md:-left-16"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => onStep(1)}
          aria-label="Next photograph"
          className="absolute -right-4 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/70 text-ivory/80 backdrop-blur transition-colors hover:text-ivory md:-right-16"
        >
          →
        </button>
      </div>

      <style jsx>{`
        @keyframes lightbox-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
