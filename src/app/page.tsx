import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Introduction />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
