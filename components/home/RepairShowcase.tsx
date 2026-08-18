"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { showcase } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function RepairShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <FadeIn className="max-w-xl">
        <Badge>SEC.04 — Showcase</Badge>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Real damage. <span className="gradient-text-blue">Real recoveries.</span>
        </h2>
      </FadeIn>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map((item) => (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl border border-surface-border/40 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="relative flex h-52 items-center overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                  variants={{ hover: { opacity: 0 } }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900/60 p-6 text-center transition-opacity duration-300 backdrop-blur-[2px]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wide text-white/80">Before</span>
                  <p className="font-display text-sm text-white font-medium">{item.before}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={{ hover: { opacity: 1 } }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-accent/80 p-6 text-center transition-opacity duration-300 backdrop-blur-[2px]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wide text-white/80">After</span>
                  <p className="font-display text-sm text-white font-medium">{item.after}</p>
                </motion.div>
              </div>
              <div className="flex items-center justify-between border-t border-surface-border/40 px-5 py-4">
                <h3 className="font-display text-sm text-ink">{item.title}</h3>
                <ArrowRight className="h-4 w-4 text-muted-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
