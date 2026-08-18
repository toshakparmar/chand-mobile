"use client";

import { ShieldCheck, Smartphone, Star, Clock } from "lucide-react";
import { Counter } from "@/components/animations/Counter";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

const icons = [Smartphone, Star, ShieldCheck, Clock];

export function TrustStats() {
  return (
    <section className="relative border-y border-surface-border/40 bg-gradient-to-r from-surface/50 via-white to-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={stat.label} className="text-center lg:text-left">
                <div className="flex flex-col items-center gap-3 lg:flex-row">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light/50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                      <Counter value={stat.value} />
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
