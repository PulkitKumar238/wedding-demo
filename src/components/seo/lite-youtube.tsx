"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * A YouTube facade: the poster frame is shown until someone presses play, and
 * only then is the real iframe mounted. Keeps YouTube off an ordinary page
 * load — no third-party JS, no cookies, no hit to the page's Core Web Vitals —
 * while the surrounding page stays server-rendered for search.
 *
 * Same behaviour as the home page's film carousel, pulled out so the wedding
 * pages and the /films grid can share it.
 */
export function LiteYouTube({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-charcoal-soft">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-charcoal/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-champagne group-hover:bg-champagne md:h-20 md:w-20">
            <Play
              size={22}
              strokeWidth={1.5}
              className="ml-1 fill-ivory text-ivory transition-colors duration-500 group-hover:fill-charcoal group-hover:text-charcoal"
            />
          </span>
        </button>
      )}
    </div>
  );
}
