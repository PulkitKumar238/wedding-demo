import { Hero } from "@/components/sections/hero";
import { BrandStory } from "@/components/sections/brand-story";
import { Experiences } from "@/components/sections/experiences";
import { FeaturedWeddings } from "@/components/sections/featured-weddings";
import { Process } from "@/components/sections/process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Stories } from "@/components/sections/stories";
import { Booking } from "@/components/sections/booking";

// The Instagram moodboard ("Inspiration, As It Finds Us") is retired from the
// page but kept whole — component, images and photos are all still in the
// repo. To bring it back, uncomment the import and the element below.
// import { InstagramMoodboard } from "@/components/sections/instagram-moodboard";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <BrandStory />
      <Experiences />
      <FeaturedWeddings />
      <Process />
      <WhyChooseUs />
      <Stories />
      {/* <InstagramMoodboard /> */}
      <Booking />
    </>
  );
}
