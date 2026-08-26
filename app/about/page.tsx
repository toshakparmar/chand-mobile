import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Award,
  Users,
  Zap,
  Microscope,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { businessConfig, waLink } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us | Chand Mobile Expert",
  description:
    "Learn about Chand Mobile Expert — dedicated master technicians delivering precision smartphone repairs, certified refurbished devices, and instant trade-ins with a 1-Year warranty.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "10,000+", label: "Devices Revived" },
  { value: "99.4%", label: "First-Time Fix Rate" },
  { value: "12 Months", label: "Certified Warranty" },
  { value: "15 Mins", label: "Express Diagnostic" },
];

const pillars = [
  {
    icon: Wrench,
    title: "Factory-Grade Equipment",
    desc: "We utilize industrial laser screen separators, optical microscopes, and thermal imaging cameras for board-level diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "1-Year Certified Warranty",
    desc: "Every component we replace is backed by our comprehensive warranty. If it doesn't perform flawlessly, we replace it for free.",
  },
  {
    icon: Users,
    title: "Master Certified Technicians",
    desc: "Our engineers have over a decade of hands-on experience across Apple, Samsung, Google, and OnePlus motherboards.",
  },
  {
    icon: Zap,
    title: "100% Data Privacy Guarantee",
    desc: "We adhere to strict data security standards — your personal photos, files, and logins remain untouched and protected.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-indigo-300/[0.1] blur-[140px]" />
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-blue-200/80 text-blue-600 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Award className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">About Chand Mobile Expert</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Engineering precision. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              Built on integrity.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Chand Mobile Expert was established with one core mission: to provide fast, factory-grade smartphone repairs and certified pre-owned devices without confusing jargon or inflated prices.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <FadeIn delay={0.1} className="mt-14 sm:mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-3xl border border-slate-200/90 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-3">
                <span className="font-display text-3xl sm:text-5xl font-black text-slate-950">
                  {stat.value}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* 4 Pillars Section */}
        <section className="mt-20 sm:mt-28">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Why thousands trust our lab
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
              We treat every device like our own, adhering to uncompromising repair standards.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200/90 bg-white/80 p-7 sm:p-8 shadow-sm backdrop-blur-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Bar */}
        <FadeIn className="mt-20 sm:mt-24">
          <div className="rounded-[2.5rem] border border-blue-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-12 text-white shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to experience express device care?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Visit our store today for a free diagnostic check or book an appointment online for priority turnaround.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-repair"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Book a Repair</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Get Store Directions</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
