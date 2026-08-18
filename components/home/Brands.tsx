"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Marquee } from "@/components/animations/Marquee";
import { brands } from "@/lib/data";

export function Brands() {

  return (
    <section className="border-y border-surface-border/40 bg-surface/30 py-16">
      <FadeIn className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Repairs for the devices you love
        </p>
      </FadeIn>

      <div className="relative mt-8 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse className="[--duration:25s]">
          {brands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-20 w-20 mx-3 items-center justify-center rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md transition-all duration-300 hover:bg-white/60 hover:shadow-lg hover:-translate-y-1"
            >
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-10 w-10 object-contain opacity-70 grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0 hover:opacity-100" />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
