"use client";

import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background gradients for glassmorphism */}
      <div className="absolute left-0 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
          orientation="vertical"
          className="w-full relative"
        >
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div className="flex flex-col justify-center">
              <FadeIn>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_8px_20px_rgb(37,99,235,0.3)]">
                  <Quote className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-[3rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.75rem]">
                  Trusted by our{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
                    community.
                  </span>
                </h2>
                <p className="mt-6 max-w-lg text-[1.125rem] leading-[1.7] text-slate-600 font-medium">
                  Don&apos;t just take our word for it. Read what our customers have to say about
                  their repair experience.
                </p>
              </FadeIn>
            </div>

            <div className="relative">
              <CarouselContent className="h-[320px] -mt-1 sm:h-[300px]">
                {testimonials.map((testimonial, i) => (
                  <CarouselItem key={i} className="pt-1 basis-full">
                    <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-transparent p-8 sm:p-12">
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-300/[0.1] blur-[60px]" />
                      <div className="relative flex h-full flex-col justify-between z-10">
                        <div>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-5 w-5 ${idx < testimonial.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "fill-slate-200 text-slate-200"
                                  }`}
                              />
                            ))}
                          </div>
                          <p className="mt-6 font-display text-xl leading-relaxed text-slate-800 sm:text-2xl font-medium">
                            &quot;{testimonial.review}&quot;
                          </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-lg font-bold text-blue-700">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-display text-base font-semibold text-slate-900">
                              {testimonial.name}
                            </p>
                            <p className="text-sm font-medium text-slate-500">
                              {testimonial.device}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] active:scale-95" />
            <CarouselNext className="static translate-x-0 translate-y-0 h-14 w-14 rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] active:scale-95" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
