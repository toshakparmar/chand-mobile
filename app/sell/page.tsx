"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Banknote,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Check,
  Building2,
  Truck,
  MessageCircle,
  Phone,
  HelpCircle,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import {
  tradeInCatalog,
  calculateTradeInValue,
  type PhysicalCondition,
  type FunctionalStatus,
} from "@/lib/sellPricingData";
import { businessConfig, waLink, telLink } from "@/config/business";
import { toast } from "sonner";

export default function SellPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("Apple");
  const availableModels = tradeInCatalog[selectedBrand] ?? [];

  const [selectedModelName, setSelectedModelName] = useState<string>(
    availableModels[0]?.name ?? ""
  );

  const currentModel = useMemo(() => {
    return availableModels.find((m) => m.name === selectedModelName) ?? availableModels[0];
  }, [availableModels, selectedModelName]);

  const [selectedStorage, setSelectedStorage] = useState<string>(
    currentModel?.storages[0]?.label ?? ""
  );

  const [condition, setCondition] = useState<PhysicalCondition>("Flawless / Like New");
  const [functional, setFunctional] = useState<FunctionalStatus>("All Functional");
  const [hasBoxAndBill, setHasBoxAndBill] = useState<boolean>(true);

  // Re-sync storage when brand/model changes
  const basePrice = useMemo(() => {
    const matchedStorage =
      currentModel?.storages.find((s) => s.label === selectedStorage) ??
      currentModel?.storages[0];
    return matchedStorage?.basePrice ?? 30000;
  }, [currentModel, selectedStorage]);

  const valuation = useMemo(() => {
    return calculateTradeInValue(basePrice, condition, functional, hasBoxAndBill);
  }, [basePrice, condition, functional, hasBoxAndBill]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    const models = tradeInCatalog[brand] ?? [];
    if (models.length > 0) {
      setSelectedModelName(models[0].name);
      setSelectedStorage(models[0].storages[0].label);
    }
  };

  const handleModelChange = (modelName: string) => {
    setSelectedModelName(modelName);
    const found = availableModels.find((m) => m.name === modelName);
    if (found && found.storages.length > 0) {
      setSelectedStorage(found.storages[0].label);
    }
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.1] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-emerald-200/80 text-emerald-700 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Banknote className="h-3.5 w-3.5 mr-2 text-emerald-600" />
            <span className="font-semibold text-slate-800">Instant Trade-in &amp; Cash Payout</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Sell your old phone. <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Get paid in 15 minutes.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Get the highest market valuation for your old smartphone. Free doorstep verification or instant cash at our repair center.
          </p>

          {/* Quick Perks */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Instant UPI / Cash Transfer
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              100% Data Erasure Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-indigo-600" />
              Free Doorstep Inspection
            </span>
          </div>
        </FadeIn>

        {/* Interactive Valuation Matrix */}
        <FadeIn delay={0.15} className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-8 rounded-[2.5rem] border border-slate-200/90 bg-white/80 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.04)] backdrop-blur-2xl lg:grid-cols-12 lg:gap-12">
            
            {/* Left Controls Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  1. Select Brand &amp; Model
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mb-4">
                  Choose your device specification accurately for guaranteed payout.
                </p>

                {/* Brand Tabs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(tradeInCatalog).map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => handleBrandChange(brand)}
                      className={`rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                        selectedBrand === brand
                          ? "bg-slate-950 text-white shadow-md"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>

                {/* Model and Storage Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Model
                    </label>
                    <select
                      value={selectedModelName}
                      onChange={(e) => handleModelChange(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-xs"
                    >
                      {availableModels.map((m) => (
                        <option key={m.name} value={m.name}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Storage Variant
                    </label>
                    <div className="flex gap-2">
                      {currentModel?.storages.map((s) => (
                        <button
                          key={s.label}
                          type="button"
                          onClick={() => setSelectedStorage(s.label)}
                          className={`flex-1 rounded-2xl py-3 text-xs sm:text-sm font-bold transition-all ${
                            selectedStorage === s.label
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Condition Assessment */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  2. Physical Condition
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {[
                    { id: "Flawless / Like New", desc: "No scratches, mint condition (10/10)" },
                    { id: "Minor Scratches (Good)", desc: "Light pocket scuffs on frame (9/10)" },
                    { id: "Heavy Scratches / Dents", desc: "Visible signs of deep usage (7/10)" },
                    { id: "Cracked Glass", desc: "Broken back glass or cracked outer glass" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCondition(item.id as PhysicalCondition)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        condition === item.id
                          ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                          : "border-slate-200/80 bg-white hover:border-slate-300"
                      }`}
                    >
                      <p className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        {item.id}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Functional Status */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  3. Functional Status
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {[
                    { id: "All Functional", desc: "FaceID, Camera, Battery & Display 100% working" },
                    { id: "Battery Degraded (<80%)", desc: "Phone needs battery service" },
                    { id: "Camera / FaceID Faulty", desc: "Camera blurry or FaceID disabled" },
                    { id: "Touch / Display Issue", desc: "Lines on screen or touch unresponsive" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFunctional(item.id as FunctionalStatus)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        functional === item.id
                          ? "border-blue-500 bg-blue-50/50 shadow-sm"
                          : "border-slate-200/80 bg-white hover:border-slate-300"
                      }`}
                    >
                      <p className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        {item.id}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Box & Bill bonus checkbox */}
                <label className="mt-4 flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasBoxAndBill}
                    onChange={(e) => setHasBoxAndBill(e.target.checked)}
                    className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-slate-800">Original Box &amp; Bill available</span>
                    <span className="ml-2 font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md text-[10px]">
                      +₹{Math.round(basePrice * 0.05).toLocaleString("en-IN")} Extra Bonus
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Right Quote Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-[2rem] border border-emerald-200/90 bg-gradient-to-b from-emerald-50/70 to-teal-50/40 p-6 sm:p-8 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-200/60">
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-emerald-800 tracking-wider">
                      Live Valuation
                    </span>
                    <h4 className="font-display text-xl font-bold text-slate-950 mt-0.5">
                      {selectedModelName}
                    </h4>
                  </div>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                    {selectedStorage}
                  </span>
                </div>

                {/* Quote Payout Options */}
                <div className="mt-6 space-y-4">
                  {/* Option 1: Instant Cash Transfer */}
                  <div className="rounded-2xl border-2 border-emerald-500 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Instant Cash / UPI Payout
                      </span>
                      <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        Guaranteed
                      </span>
                    </div>
                    <div className="mt-2 font-display text-3xl sm:text-4xl font-black text-slate-950">
                      ₹{valuation.cashEstimate.toLocaleString("en-IN")}
                    </div>
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      Paid instantly to your Bank / UPI account on device handover.
                    </p>
                  </div>

                  {/* Option 2: Store Upgrade Credit */}
                  <div className="rounded-2xl border border-indigo-200 bg-white/80 p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-900">
                        Store Trade-In Credit (+8% Bonus)
                      </span>
                      <Sparkles className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="mt-1 font-display text-2xl font-black text-indigo-700">
                      ₹{valuation.storeCreditEstimate.toLocaleString("en-IN")}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Use towards any new or certified refurbished phone upgrade.
                    </p>
                  </div>
                </div>

                {/* Guarantee checkmarks */}
                <div className="mt-6 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Free Doorstep Pickup Across the City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Zero Negotiation on Verified Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Instant Certified Handover Receipt</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-emerald-200/60 space-y-2.5">
                <a
                  href={waLink(
                    `Hi Chand Mobile, I want to sell my ${selectedBrand} ${selectedModelName} (${selectedStorage}, ${condition}, ${functional}). The estimated valuation is ₹${valuation.cashEstimate}. Please arrange pickup or store drop.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98] text-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Lock Quote on WhatsApp</span>
                </a>

                <a
                  href={telLink()}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98] text-center"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>Call Store for Instant Payout</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3-Step Simple Process */}
        <section className="mt-20 sm:mt-28">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
              How selling your phone works
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
              A hassle-free 3-step process without awkward bargaining or delays.
            </p>
          </FadeIn>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Get Instant Online Quote",
                desc: "Select your exact smartphone model, condition, and storage to generate your guaranteed valuation.",
              },
              {
                step: "02",
                title: "Free Pickup or Store Visit",
                desc: "Choose free doorstep technician inspection or walk directly into our repair center anytime.",
              },
              {
                step: "03",
                title: "Instant Cash Transfer",
                desc: "After a quick 5-minute hardware check, funds are transferred instantly to your Bank / UPI account.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl"
              >
                <span className="font-mono text-2xl font-black text-emerald-600">{st.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{st.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
