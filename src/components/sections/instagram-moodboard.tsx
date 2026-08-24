import Image from "next/image";
import { InstagramIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/data/site";
import { img } from "@/data/images";

const aspectRatios = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
];

export function InstagramMoodboard() {
  return (
    <section id="journal" className="bg-ivory-dark py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
              The Moodboard
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
              Inspiration, As It Finds Us
            </h2>
          </div>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 font-body text-sm tracking-wide text-charcoal/70 transition-colors hover:text-champagne"
          >
            <InstagramIcon size={18} />
            {brand.instagram}
          </a>
        </Reveal>

        <Reveal className="mt-14 columns-2 gap-3 sm:columns-3 lg:columns-4">
          {img.instagram.map((src, i) => (
            <a
              key={src + i}
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`group relative mb-3 block w-full overflow-hidden rounded-[2px] ${aspectRatios[i % aspectRatios.length]}`}
              style={{ breakInside: "avoid" }}
            >
              <Image
                src={src}
                alt={`Wedding inspiration from ${brand.name}'s Instagram`}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/30">
                <InstagramIcon
                  size={22}
                  className="text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
