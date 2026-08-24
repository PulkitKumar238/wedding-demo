import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brandStory } from "@/data/site";
import { img } from "@/data/images";

export function BrandStory() {
  return (
    <section id="story" className="relative bg-ivory py-28 md:py-40">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          <Reveal className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
              <Image
                src={img.brandStoryCouple}
                alt="Bride in a red lehenga and groom in an ivory sherwani beneath a floral mandap"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden aspect-[4/5] w-2/5 overflow-hidden border-8 border-ivory shadow-xl sm:block md:-right-10">
              <Image
                src={img.brandStoryHands}
                alt="Close up of a ring being placed on a mehendi-covered hand"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col justify-center md:order-2">
            <Reveal>
              <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne">
                {brandStory.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-[3.4rem]">
                {brandStory.title}
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 space-y-5">
              {brandStory.paragraphs.map((p) => (
                <p
                  key={p}
                  className="font-body text-[15px] font-light leading-relaxed text-charcoal/70 md:text-base"
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.25}>
              <blockquote className="mt-10 border-l border-champagne pl-6 font-display text-xl italic leading-snug text-charcoal/90 md:text-2xl">
                &ldquo;{brandStory.closingLine}&rdquo;
              </blockquote>
              <p className="mt-5 font-body text-sm tracking-wide text-charcoal/50">
                — {brandStory.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
