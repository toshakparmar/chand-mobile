import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { Services } from "@/components/home/Services";
import { Brands } from "@/components/home/Brands";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RepairProcess } from "@/components/home/RepairProcess";
import { RepairShowcase } from "@/components/home/RepairShowcase";
import { SpecialOffer } from "@/components/home/SpecialOffer";
import { RepairEstimator } from "@/components/home/RepairEstimator";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutShop } from "@/components/home/AboutShop";
import { FAQ } from "@/components/home/FAQ";
import { Location } from "@/components/home/Location";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <Brands />
      <WhyChooseUs />
      <RepairProcess />
      <RepairShowcase />
      <SpecialOffer />
      <RepairEstimator />
      <Testimonials />
      <AboutShop />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}
