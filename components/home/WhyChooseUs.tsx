"use client";

import { ShieldCheck, Wrench, Receipt, Zap, BadgeCheck, Lock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { whyUs } from "@/lib/data";

const icons = [Wrench, BadgeCheck, Receipt, Zap, ShieldCheck, Lock];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 overflow-hidden">
      {/* Background gradients — CSS-only (no JS overhead) */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/[0.1] blur-[120px] animate-[orb-pulse_8s_ease-in-out_infinite]" />
      <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.08] blur-[120px] animate-[orb-pulse_10s_ease-in-out_1s_infinite]" />

      <FadeIn className="mb-10 flex flex-col items-start sm:mb-14 max-w-5xl">
        <div>
          <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-md px-3.5 py-1">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Why Choose Us
          </Badge>
          <h2 className="font-display text-[2.5rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Built on precision,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
              backed by trust.
            </span>
          </h2>
          <p className="mt-4 max-w-4xl text-[1.125rem] leading-normal text-slate-600 font-medium whitespace-normal lg:whitespace-nowrap">
            Factory-grade parts, board-level micro-soldering precision, and a certified 1-Year warranty on every repair.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:gap-8">
        <FadeIn className="relative h-[350px] w-full lg:h-auto">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl group">
            <div className="h-full w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-inner relative flex items-center justify-center">
              {/* Scale iframe to crop out top/bottom UI controls since Sketchfab free tier forces some UI */}
              <iframe
                title="Phone Repair Animation"
                loading="lazy"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/16f16124a4824551a527e6054b09b87e/embed?autostart=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_controls=0&ui_stop=0&ui_animations=0&scrollwheel=0"
                className="absolute inset-0 h-[120%] w-[110%] -left-[5%] -top-[10%] max-w-none border-0 object-cover"
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/70 px-5 py-3 shadow-xl backdrop-blur-2xl pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
              <p className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-500">Warranty</p>
              <p className="font-display text-base font-bold text-slate-900">Active — 12 months</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={item.title} className="h-full">
                  <Card className="group flex h-full flex-col items-start p-4">
                    <CardHeader className="p-0 mb-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardTitle className="text-[15px]">{item.title}</CardTitle>
                      <CardDescription className="mt-0.5 text-[12.5px]">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
