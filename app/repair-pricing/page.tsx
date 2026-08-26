"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Tag,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { RepairEstimator } from "@/components/home/RepairEstimator";
import { businessConfig, waLink, telLink } from "@/config/business";

const popularPricingTable = [
  {
    category: "Apple iPhone",
    models: [
      { name: "iPhone 15 Pro / Max", screen: "₹14,999 - ₹18,499", battery: "₹3,499", backGlass: "₹2,999", port: "₹1,999" },
      { name: "iPhone 14 / 14 Plus", screen: "₹8,999 - ₹11,499", battery: "₹2,999", backGlass: "₹2,499", port: "₹1,799" },
      { name: "iPhone 13 / 13 Pro", screen: "₹6,999 - ₹10,499", battery: "₹2,499", backGlass: "₹2,199", port: "₹1,499" },
      { name: "iPhone 12 / 12 Pro", screen: "₹5,499 - ₹8,999", battery: "₹2,199", backGlass: "₹1,999", port: "₹1,299" },
    ],
  },
  {
    category: "Samsung Galaxy",
    models: [
      { name: "Galaxy S24 / S24 Ultra", screen: "₹13,999 - ₹19,999", battery: "₹2,999", backGlass: "₹2,499", port: "₹1,899" },
      { name: "Galaxy S23 / S23 Ultra", screen: "₹9,999 - ₹14,999", battery: "₹2,499", backGlass: "₹1,999", port: "₹1,599" },
      { name: "Galaxy Z Flip / Fold 5", screen: "₹16,999 - ₹24,999", battery: "₹3,499", backGlass: "₹2,999", port: "₹2,199" },
    ],
  },
  {
    category: "Google Pixel & OnePlus",
    models: [
      { name: "Google Pixel 8 / 8 Pro", screen: "₹8,999 - ₹13,499", battery: "₹2,499", backGlass: "₹2,199", port: "₹1,599" },
      { name: "Google Pixel 7 / 7a", screen: "₹5,999 - ₹8,499", battery: "₹1,999", backGlass: "₹1,799", port: "₹1,399" },
      { name: "OnePlus 12 / 12R", screen: "₹8,499 - ₹11,999", battery: "₹2,499", backGlass: "₹1,999", port: "₹1,499" },
      { name: "OnePlus 11 / 10 Pro", screen: "₹6,499 - ₹9,499", battery: "₹1,999", backGlass: "₹1,699", port: "₹1,299" },
    ],
  },
];

export default function RepairPricingPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-indigo-300/[0.1] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-blue-200/80 text-blue-600 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Tag className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">Transparent Repair Cost Matrix</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Clear, honest pricing. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              Zero hidden fees.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            All prices include OEM grade-A components, master micro-soldering labor, and our certified 1-Year Store Warranty.
          </p>

          {/* Pricing Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              12-Month Guarantee on Parts
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" />
              Free 15-Minute Diagnostic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              No Fix, No Fee Policy
            </span>
          </div>
        </FadeIn>

        {/* Embedded Live Calculator */}
        <div className="mt-12">
          <RepairEstimator />
        </div>

        {/* Popular Devices Pricing Reference Table */}
        <section className="mt-20 sm:mt-28">
          <FadeIn className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Popular Device Repair Benchmarks
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
              Average estimate range based on genuine OEM vs High-Quality Grade-A parts.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {popularPricingTable.map((group) => (
              <div
                key={group.category}
                className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 shadow-sm backdrop-blur-xl"
              >
                <div className="bg-slate-950 px-6 py-3.5 text-white flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold tracking-wide">{group.category}</h3>
                  <span className="font-mono text-[11px] text-blue-300">1-Year Warranty Included</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200/80 bg-slate-50/70 font-mono text-[11px] text-slate-400 uppercase">
                        <th className="py-3 px-6">Model</th>
                        <th className="py-3 px-6">Screen Replacement</th>
                        <th className="py-3 px-6">Battery Replacement</th>
                        <th className="py-3 px-6">Back Glass Repair</th>
                        <th className="py-3 px-6">Charging Port</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                      {group.models.map((m) => (
                        <tr key={m.name} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-4 px-6 font-bold text-slate-950">{m.name}</td>
                          <td className="py-4 px-6 text-blue-600 font-semibold">{m.screen}</td>
                          <td className="py-4 px-6 text-slate-700">{m.battery}</td>
                          <td className="py-4 px-6 text-slate-700">{m.backGlass}</td>
                          <td className="py-4 px-6 text-slate-700">{m.port}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
