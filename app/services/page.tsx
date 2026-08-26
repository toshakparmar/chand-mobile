import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Wrench,
  Sparkles,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { businessConfig, waLink, telLink } from "@/config/business";

export const metadata: Metadata = {
  title: "Repair Services | Chand Mobile Expert",
  description:
    "Explore our full suite of certified smartphone repairs: screens, batteries, charging ports, motherboards, cameras, water damage and more — all backed by a 1-Year warranty.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-300/[0.1] blur-[140px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-blue-200/80 text-blue-600 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Wrench className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">Master Hardware &amp; Software Lab</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Every repair. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              One certified standard.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            From cracked OLED displays to micro-soldering board faults — our certified technicians restore your device to original factory performance with a 1-Year Store Warranty.
          </p>

          {/* Quick Perks */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              12 Months Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-600" />
              Express 30-Min Repairs
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" />
              100% Genuine OEM Parts
            </span>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <section className="mt-14 sm:mt-20">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.slug}>
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)]">
                    <div>
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-blue-600 shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                          Est. {service.time}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h2>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <BookingDialog
                        trigger={
                          <button className="group flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] py-2.5 text-xs font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-[0.98]">
                            <span>Book Repair</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        }
                      />

                      <a
                        href={waLink(`Hi Chand Mobile, I need a quote for ${service.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Inquiry"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-[#25D366]/10 hover:border-[#25D366] hover:text-[#25D366] text-slate-600 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </section>

        {/* Closing Quick Help Card */}
        <FadeIn className="mt-16 sm:mt-20">
          <div className="rounded-[2.5rem] border border-slate-200/90 bg-white/80 p-8 sm:p-12 text-center shadow-sm backdrop-blur-xl max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-slate-950">
              Not sure which repair your device needs?
            </h3>
            <p className="mt-2 text-sm text-slate-600 font-medium max-w-lg mx-auto">
              Bring your device in for a free 15-minute diagnostic check or chat with our master technicians on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("Hi Chand Mobile, I'm not sure what's wrong with my phone. Can you help diagnose it?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Free Diagnostic Chat</span>
              </a>
              <Link
                href="/repair-pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>View Full Pricing Matrix</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
