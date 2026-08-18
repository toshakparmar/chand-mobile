"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 overflow-hidden">
      {/* Background gradients for glassmorphism */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-300/[0.15] blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-300/[0.15] blur-[100px]" />

      <FadeIn className="flex flex-col items-start justify-between md:flex-row md:items-end">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-1.5 backdrop-blur-md">
            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-500">SEC.01 — Services</span>
          </div>
          <h2 className="max-w-xl text-balance font-display text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Everything your device <span className="text-blue-600">needs.</span>
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-500">
            Professional repairs for screens, batteries, charging ports, cameras and more —
            all backed by a one year warranty.
          </p>
        </div>
        <a href="#all-services" className="mt-6 hidden items-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-2.5 font-display text-[14px] font-bold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-md md:flex">
          View all repairs <ArrowRight className="h-4 w-4" />
        </a>
      </FadeIn>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.slug}>
              <div className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border border-white/50 bg-white/30 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="h-5 w-5 text-blue-600" strokeWidth={2.5} />
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-rotate-45 group-hover:text-blue-600" />
                  </div>
                  <h3 className="mt-6 font-display text-[22px] font-bold text-slate-800">{service.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{service.description}</p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-white/40 pt-5">
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400">Timeframe</span>
                    <span className="font-display text-[13px] font-bold text-slate-700">EST. {service.time}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400">Warranty</span>
                    <span className="font-display text-[13px] font-bold text-[#00c853]">12 MONTHS</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
