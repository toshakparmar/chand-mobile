"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { processSteps } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function RepairProcess() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      ctx = gsap.context(() => {
        if (!lineRef.current) return;
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          }
        );
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradients for glassmorphism */}
      <div className="absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-300/[0.1] blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-xl">
          <Badge>SEC.03 — Process</Badge>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Simple from <span className="gradient-text-blue">start to finish.</span>
          </h2>
        </FadeIn>

        <div className="relative mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-4">
          {/* Progress line — only on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-surface-border/60 lg:block">
            <div
              ref={lineRef}
              className="h-full origin-left bg-gradient-to-r from-accent to-accent/40"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {processSteps.map((step) => (
            <FadeIn key={step.step} delay={parseInt(step.step) * 0.08} className="relative h-full">
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-md lg:items-start lg:gap-0 lg:bg-transparent lg:border-none lg:shadow-none lg:backdrop-blur-none lg:p-0 lg:hover:bg-transparent lg:hover:shadow-none">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-display text-[15px] font-bold text-white shadow-md shadow-blue-900/20">
                  {step.step}
                </span>
                <div className="text-center lg:mt-6 lg:text-left">
                  <h3 className="font-display text-lg font-bold text-slate-800">{step.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
