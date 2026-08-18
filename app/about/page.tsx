import type { Metadata } from "next";
import { ShieldCheck, Wrench, Users2, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessConfig.name} — certified technicians, quality parts and a warranty-backed repair process built on transparency.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Wrench,
    title: "Hands-on expertise",
    description:
      "Every technician is trained on the latest device architectures, from micro-soldering to modern glass bonding.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty you can trust",
    description: `Every repair is backed by our ${businessConfig.warranty.toLowerCase()} warranty covering parts and workmanship.`,
  },
  {
    icon: Users2,
    title: "Built around you",
    description:
      "Transparent pricing, honest timelines, and clear communication from diagnosis to pickup.",
  },
  {
    icon: Award,
    title: "Quality-assured parts",
    description:
      "We source components that meet strict quality standards, tested before every install.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8">
        <FadeIn>
          <Badge>Our Story</Badge>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            More than a repair shop.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            We believe your phone deserves the same care and precision that went into
            building it. {businessConfig.name} was founded on a simple idea: repairs
            should be fast, honest, and done right the first time.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-2xl border border-surface-border bg-surface/60 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-2 text-accent">
                  <v.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-base text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.1} className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-surface-border bg-surface/40 p-10 text-center sm:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-ink">{businessConfig.devicesRepaired}</p>
            <p className="mt-1 font-mono text-[11px] uppercase text-muted">Devices Repaired</p>
          </div>
          <div>
            <p className="font-display text-3xl text-ink">{businessConfig.rating}/5</p>
            <p className="mt-1 font-mono text-[11px] uppercase text-muted">Customer Rating</p>
          </div>
          <div>
            <p className="font-display text-3xl text-ink">{businessConfig.satisfaction}</p>
            <p className="mt-1 font-mono text-[11px] uppercase text-muted">Satisfaction</p>
          </div>
          <div>
            <p className="font-display text-3xl text-ink">{businessConfig.warranty}</p>
            <p className="mt-1 font-mono text-[11px] uppercase text-muted">Warranty</p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
