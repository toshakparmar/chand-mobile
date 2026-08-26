import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Brands } from "@/components/home/Brands";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RepairProcess } from "@/components/home/RepairProcess";
import { RepairEstimator } from "@/components/home/RepairEstimator";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <WhyChooseUs />
      <RepairProcess />
      <RepairEstimator />
      <Testimonials />
      <FAQ />
    </>
  );
}
