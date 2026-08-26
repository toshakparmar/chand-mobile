"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { FadeIn } from "@/components/animations/FadeIn";
import { services } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 overflow-hidden">
      {/* Background gradients for glassmorphism */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-300/[0.15] blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-300/[0.15] blur-[100px]"
      />

      <FadeIn className="flex flex-col items-start justify-between md:flex-row md:items-end">
        <div>
          <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-md px-3.5 py-1">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Our Services
          </Badge>
          <h2 className="font-display text-[3rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Everything your device{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
              needs.
            </span>
          </h2>
          <p className="mt-6 max-w-2lg text-[1.125rem] leading-[1.7] text-slate-600 font-medium">
            Professional repairs for screens, batteries, charging ports, cameras and more all backed by a one year warranty.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-end gap-6 md:mt-0">
          <a
            href="/services"
            className="group hidden relative overflow-hidden items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 px-7 py-3 font-bold text-sm text-slate-800 shadow-xs backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 active:scale-[0.98] md:flex"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </FadeIn>

      <div className="relative mt-14">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6 pt-4 pb-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <CarouselItem
                  key={service.slug}
                  className="pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={`/images/showcase/${service.slug === 'screen-replacement' ? 'cracked.jpg' :
                          service.slug === 'battery-replacement' ? 'battery.jpg' :
                            service.slug === 'charging-port-repair' ? 'charging.jpg' :
                              service.slug === 'back-glass-repair' ? 'backglass.jpg' :
                                service.slug === 'camera-repair' ? 'camera.jpg' :
                                  service.slug === 'water-damage' ? 'water.jpg' :
                                    service.slug === 'speaker-microphone' ? 'speaker.jpg' :
                                      service.slug === 'software-performance' ? 'software.jpg' :
                                        service.slug === 'motherboard-repair' ? 'motherboard.jpg' :
                                          'cracked.jpg'
                          }`}
                        alt={service.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-xl group-hover:opacity-60"
                      />
                      {/* Dark overlay for initial text readability */}
                      <div className="absolute inset-0 bg-slate-900/40 transition-opacity duration-500 group-hover:opacity-0" />

                      {/* Ultra-premium dark glass overlay on hover */}
                      <div className="absolute inset-0 bg-slate-900/85 opacity-0 backdrop-blur-2xl transition-all duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/20 opacity-0 rounded-[2.5rem] transition-all duration-500 group-hover:opacity-100 z-30 pointer-events-none" />
                    </div>

                    {/* Initial Centered State */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0 group-hover:pointer-events-none">
                      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-90">
                        <Icon className="h-9 w-9" strokeWidth={1.5} />
                      </span>
                      <h3 className="font-display text-[28px] font-bold text-white drop-shadow-md">{service.name}</h3>
                    </div>

                    {/* Hover Details State */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 opacity-0 transition-all duration-500 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                      <div>
                        <div className="flex items-start justify-between">
                          <span className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 shadow-[0_4px_10px_rgb(0,0,0,0.2)] transition-transform duration-500 hover:scale-105 backdrop-blur-md">
                            <Icon className="h-6 w-6 text-blue-400" strokeWidth={2.5} />
                          </span>
                          <a href="/book-repair" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95">
                            <ArrowRight className="h-5 w-5 -rotate-45 transition-transform duration-300" />
                          </a>
                        </div>
                        <div className="mt-8">
                          <h3 className="font-display text-[24px] font-bold text-white tracking-tight drop-shadow-sm">{service.name}</h3>
                          <p className="mt-3 text-[15px] leading-relaxed text-slate-300 font-medium">{service.description}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-md">
                        <div className="flex flex-col">
                          <span className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400">Timeframe</span>
                          <span className="font-display text-[14px] font-bold text-white">EST. {service.time}</span>
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div className="flex flex-col items-end">
                          <span className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400">Warranty</span>
                          <span className="font-display text-[14px] font-bold text-emerald-400">12 MONTHS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-10 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] active:scale-95" />
            <CarouselNext className="static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] active:scale-95" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
