import { Hero } from "@/components/sections/hero";
import { Films } from "@/components/sections/films";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Packages } from "@/components/sections/packages";
import { Process } from "@/components/sections/process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Stories } from "@/components/sections/stories";
import { Booking } from "@/components/sections/booking";

// The Instagram moodboard ("Inspiration, As It Finds Us") is retired from the
// page but kept whole — component, images and photos are all still in the
// repo. To bring it back, uncomment the import and the element below.
// import { InstagramMoodboard } from "@/components/sections/instagram-moodboard";

// The brand story ("Our Story") gave up this slot to the films. It is kept
// whole too — component, copy in data/site.ts and both photographs are all
// still here. To bring it back, uncomment the import and the element below,
// and restore the { label: "Our Story", href: "#story" } entry in `nav`.
// import { BrandStory } from "@/components/sections/brand-story";

export default function Home() {
  return (
    <>
      <Hero />
      <Stories />
      <Films />
      {/* <BrandStory /> */}
      <Testimonials />
      <Services />
      <Portfolio />
      <Packages />
      <Process />
      <WhyChooseUs />
      {/* <InstagramMoodboard /> */}
      <Booking />
    </>
  );
}
