"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Wrench, Receipt, Zap, BadgeCheck, Lock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { MagicCard } from "@/components/animations/MagicCard";
import { whyUs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const icons = [Wrench, BadgeCheck, Receipt, Zap, ShieldCheck, Lock];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 overflow-hidden">
      {/* Background gradients for glassmorphism */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/[0.1] blur-[120px]" />
      <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.08] blur-[120px]" />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="relative">
          <div className="relative lg:sticky lg:top-28 mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-surface-border/60 bg-surface shadow-xl shadow-accent/10 group">
            <Image
              src="/images/quality_repair_tools.jpg"
              alt="High quality professional repair tools"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/40 bg-white/30 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl">
              <p className="font-display text-[10px] font-bold uppercase tracking-widest text-white/90">Warranty</p>
              <p className="font-display text-base font-bold text-white">Active — 12 months</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <Badge>SEC.02 — Why Us</Badge>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Repair done <span className="gradient-text-blue">right.</span>
          </h2>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={item.title} className="h-full">
                  <MagicCard className="flex h-full flex-row items-start gap-4 p-6 rounded-[2rem] border border-white/60 bg-white/40 shadow-sm backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                    <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-800">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </MagicCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
