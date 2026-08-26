"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Marquee } from "@/components/animations/Marquee";
import { Badge } from "@/components/ui/badge";
import { brands } from "@/lib/data";

export function Brands() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/50 py-12">
      {/* Background gradients for glassmorphism */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/[0.1] blur-[100px]"
      />

      <FadeIn className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-md px-3.5 py-1">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Trusted Brands
        </Badge>
        <h3 className="font-display text-[2rem] font-bold tracking-tight text-slate-900 sm:text-4xl">
          We repair the devices you <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">love.</span>
        </h3>
      </FadeIn>

      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse className="[--duration:35s]">
          {brands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="group flex h-24 w-32 mx-4 items-center justify-center rounded-[1.5rem] border border-white/80 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={52}
                height={52}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-xs"
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent" />
      </div>
    </section>
  );
}
