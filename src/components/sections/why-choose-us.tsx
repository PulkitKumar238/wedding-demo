import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { stats, whyChooseUs } from "@/data/site";
import { img } from "@/data/images";

export function WhyChooseUs() {
  return (
    <section className="relative bg-charcoal py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src={img.statsBackground}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-champagne-light">
            {whyChooseUs.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            {whyChooseUs.title}
          </h2>
          <p className="mt-6 font-body text-[15px] font-light leading-relaxed text-ivory/60 md:text-base">
            {whyChooseUs.description}
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-20 grid grid-cols-2 gap-10 border-y border-ivory/10 py-14 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl text-champagne-light md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 font-body text-[12px] uppercase tracking-[0.16em] text-ivory/60 md:text-[13px]">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal
          stagger
          className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10"
        >
          {whyChooseUs.points.map((point) => (
            <div key={point.title} className="border-t border-ivory/15 pt-6">
              <h3 className="font-display text-xl text-ivory md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-3 font-body text-[14px] font-light leading-relaxed text-ivory/55 md:text-[15px]">
                {point.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
