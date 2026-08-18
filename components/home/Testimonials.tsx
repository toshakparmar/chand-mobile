"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradients for glassmorphism */}
      <div className="absolute left-0 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-400/[0.08] blur-[100px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <FadeIn>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-2 to-accent text-white shadow-md shadow-accent/20">
                <Quote className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Trusted by our <span className="gradient-text-blue">community.</span>
              </h2>
              <p className="mt-4 text-muted">
                Don&apos;t just take our word for it. Read what our customers have to say about
                their repair experience.
              </p>

              <div className="mt-10 flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-white text-ink shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md hover:shadow-accent/5 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-surface-border bg-white text-ink shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-md hover:shadow-accent/5 active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-300/[0.1] blur-[60px]" />
            <div className="relative">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[active].rating
                      ? "fill-signal text-signal"
                      : "fill-surface-border text-surface-border"
                  }`}
                />
              ))}
            </div>
            <p className="mt-6 font-display text-xl leading-relaxed text-ink sm:text-2xl">
              &quot;{testimonials[active].review}&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-surface to-surface-border text-sm font-semibold text-muted">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <p className="font-display text-base text-ink">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-muted">
                  {testimonials[active].device}
                </p>
              </div>
              </div>
            </div>

            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-gradient-to-r from-accent-2 to-accent"
                      : "w-4 bg-surface-border hover:bg-surface-border/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
