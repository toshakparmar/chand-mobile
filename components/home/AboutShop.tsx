"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutShop() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeIn>
            <Badge>SEC.06 — About</Badge>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Local experts. <span className="gradient-text-blue">Premium service.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              We&apos;re a team of certified technicians dedicated to extending the life of your
              devices. With state-of-the-art diagnostic tools and premium replacement parts,
              we ensure every repair meets factory standards.
            </p>

            <StaggerGroup className="mt-8 space-y-4">
              {[
                "Certified Level 3 Technicians",
                "OEM Quality Parts Guaranteed",
                "Clean Room Repair Environment",
                "Data Privacy & Security Protocols",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-display text-base text-ink">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-2 group">
              <Image 
                src="/images/about_shop_exterior.jpg" 
                alt="Modern Phone Repair Shop" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 50vw, 33vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 p-2.5 shadow-lg shadow-black/5 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                <p className="font-display text-xl font-bold text-accent sm:text-2xl">10k+</p>
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted sm:text-[10px]">Repairs<br className="sm:hidden"/> Completed</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 sm:mt-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-2 group">
              <Image 
                src="/images/repair_showcase_motherboard.jpg" 
                alt="Micro-soldering motherboard repair" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 50vw, 33vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 p-2.5 shadow-lg shadow-black/5 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                <p className="font-display text-xl font-bold text-accent sm:text-2xl">5+</p>
                <p className="font-mono text-[9px] uppercase tracking-wide text-muted sm:text-[10px]">Years<br className="sm:hidden"/> Experience</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
