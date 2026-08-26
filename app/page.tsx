import { Hero } from "@/components/home/Hero";
import { Brands } from "@/components/home/Brands";
import dynamic from "next/dynamic";

/**
 * Below-the-fold sections are lazy-loaded via next/dynamic.
 * This splits each section into its own chunk, so the initial JS bundle
 * only includes Hero + Brands (above the fold). The remaining sections
 * load in parallel as the user scrolls, dramatically reducing TTI and TBT.
 */
const Services = dynamic(() => import("@/components/home/Services").then(m => ({ default: m.Services })), {
  loading: () => <SectionSkeleton />,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })), {
  loading: () => <SectionSkeleton />,
});
const RepairProcess = dynamic(() => import("@/components/home/RepairProcess").then(m => ({ default: m.RepairProcess })), {
  loading: () => <SectionSkeleton />,
});
const RepairEstimator = dynamic(() => import("@/components/home/RepairEstimator").then(m => ({ default: m.RepairEstimator })), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => <SectionSkeleton />,
});
const FAQ = dynamic(() => import("@/components/home/FAQ").then(m => ({ default: m.FAQ })), {
  loading: () => <SectionSkeleton />,
});

/** Lightweight placeholder skeleton shown while sections stream in */
function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="space-y-6 animate-pulse">
        <div className="h-4 w-24 rounded-full bg-slate-200/60" />
        <div className="h-10 w-3/4 rounded-2xl bg-slate-200/50" />
        <div className="h-6 w-1/2 rounded-xl bg-slate-200/40" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 rounded-3xl bg-slate-200/30" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Critical above-the-fold: statically imported */}
      <Hero />
      <Brands />

      {/* Lazy-loaded below-the-fold sections */}
      <Services />
      <WhyChooseUs />
      <RepairProcess />
      <RepairEstimator />
      <Testimonials />
      <FAQ />
    </>
  );
}
