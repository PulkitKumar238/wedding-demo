import { Hero } from "@/components/sections/hero";
import { BrandStory } from "@/components/sections/brand-story";
import { Experiences } from "@/components/sections/experiences";
import { FeaturedWeddings } from "@/components/sections/featured-weddings";
import { Process } from "@/components/sections/process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramMoodboard } from "@/components/sections/instagram-moodboard";
import { Booking } from "@/components/sections/booking";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Experiences />
      <FeaturedWeddings />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <InstagramMoodboard />
      <Booking />
    </>
  );
}
