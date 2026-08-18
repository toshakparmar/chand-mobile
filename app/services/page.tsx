import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Repair Services",
  description:
    "Explore every repair service offered at FixPro Mobile — screens, batteries, charging ports, cameras, water damage and more, all backed by a one year warranty.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <FadeIn>
          <Badge>All Services</Badge>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Every repair, one warranty.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            From cracked screens to board-level faults — {businessConfig.name} covers the
            full range of smartphone repairs, backed by a {businessConfig.warranty.toLowerCase()} warranty.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <div className="hud-frame group relative flex h-full flex-col rounded-2xl border border-surface-border bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/50">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface-2 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <h2 className="mt-5 font-display text-lg text-ink">{service.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wide text-accent">
                    Est. {service.time}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeIn className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-surface-border bg-surface/40 p-10 text-center">
          <h2 className="font-display text-2xl text-ink">Not sure which repair you need?</h2>
          <p className="max-w-md text-muted">
            Book a free diagnosis and our technicians will identify the exact issue before
            any work begins.
          </p>
          <BookingDialog trigger={<Button size="lg">Get Free Diagnosis</Button>} />
        </FadeIn>
      </section>
    </div>
  );
}
