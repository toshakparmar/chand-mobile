"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { businessConfig, telLink } from "@/config/business";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function Location() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <FadeIn className="text-center">
        <Badge>SEC.08 — Contact</Badge>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          We&apos;re here to <span className="gradient-text-blue">help.</span>
        </h2>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-3xl border border-surface-border/60 bg-white shadow-xl shadow-accent/5 lg:grid-cols-2">
        {/* Map */}
        <div className="relative h-[400px] w-full bg-surface-2 lg:h-auto">
          <iframe
            src={businessConfig.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full opacity-90"
          />
        </div>

        {/* Contact Info */}
        <div className="p-8 sm:p-12 lg:p-16">
          <h3 className="font-display text-2xl font-semibold text-ink">
            Visit our repair center
          </h3>
          <p className="mt-2 text-muted">
            Drop by for a free diagnosis. No appointment necessary for standard repairs.
          </p>

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-light/50 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-medium text-ink">Address</p>
                <p className="mt-2 text-sm text-muted">
                  {businessConfig.address}
                  <br />
                  {businessConfig.city}, {businessConfig.state}{" "}
                  {businessConfig.zip}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-light/50 text-accent">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-medium text-ink">Hours</p>
                <div className="mt-2 space-y-2.5 text-sm text-muted">
                  {businessConfig.hours.map((h) => (
                    <div key={h.day} className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="font-medium text-ink/80">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-surface-border/60" />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(businessConfig.phone);
                  toast.success("Phone number copied!", { description: businessConfig.phone });
                }}
                className="group flex flex-1 items-center gap-3 rounded-2xl border border-surface-border bg-surface p-4 transition-all hover:border-accent hover:bg-accent-light/20 hover:shadow-md hover:shadow-accent/5 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:text-accent">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted">Call us</p>
                  <p className="truncate font-display text-sm font-medium text-ink">
                    {businessConfig.phone}
                  </p>
                </div>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(businessConfig.email);
                  toast.success("Email copied!", { description: businessConfig.email });
                }}
                className="group flex flex-1 items-center gap-3 rounded-2xl border border-surface-border bg-surface p-4 transition-all hover:border-accent hover:bg-accent-light/20 hover:shadow-md hover:shadow-accent/5 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:text-accent">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted">Email us</p>
                  <p className="truncate font-display text-sm font-medium text-ink">
                    {businessConfig.email}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
