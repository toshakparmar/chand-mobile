"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Tablet,
  Laptop,
  ArrowRight,
  MessageCircle,
  Star,
  Zap,
  Filter,
  Check,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import {
  refurbishedProducts,
  type DeviceCategory,
  type RefurbishedProduct,
} from "@/lib/productsData";
import { businessConfig, waLink, telLink } from "@/config/business";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function BuyPage() {
  const [category, setCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedCondition, setSelectedCondition] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<RefurbishedProduct | null>(null);

  const filteredProducts = useMemo(() => {
    return refurbishedProducts.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchBrand = selectedBrand === "all" || p.brand === selectedBrand;
      const matchCondition = selectedCondition === "all" || p.condition === selectedCondition;
      const matchSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.storage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchBrand && matchCondition && matchSearch;
    });
  }, [category, selectedBrand, selectedCondition, searchQuery]);

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
        <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.12] blur-[140px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-300/[0.1] blur-[140px]" />
      </div>

      {/* Hero Header */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-5 bg-white/80 border-blue-200/80 text-blue-600 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">Certified Refurbished Store</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Flagship devices. <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              Unbeatable prices.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            100% genuine pre-owned smartphones, iPads, and MacBooks. Tested across 32 rigorous
            hardware diagnostics and backed by our comprehensive 1-Year Store Warranty.
          </p>

          {/* Value Props Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              12 Months Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <RotateCcw className="h-4 w-4 text-blue-600" />
              7-Day Replacement Policy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600" />
              32-Point Quality Inspected
            </span>
          </div>
        </FadeIn>

        {/* Filter Controls Bar */}
        <FadeIn delay={0.1} className="mt-12 sm:mt-16">
          <div className="rounded-3xl border border-slate-200/90 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                {[
                  { id: "all", label: "All Products", icon: Sparkles },
                  { id: "phones", label: "Smartphones", icon: Smartphone },
                  { id: "tablets", label: "iPads & Tablets", icon: Tablet },
                  { id: "laptops", label: "MacBooks", icon: Laptop },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = category === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setCategory(tab.id)}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                        active
                          ? "bg-slate-950 text-white shadow-md shadow-slate-950/10"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-blue-400" : "text-slate-400"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Brand & Condition Selectors */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Brand:</span>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs"
                  >
                    <option value="all">All Brands</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google">Google</option>
                    <option value="OnePlus">OnePlus</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Condition:</span>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs"
                  >
                    <option value="all">All Conditions</option>
                    <option value="Like New">Like New (10/10)</option>
                    <option value="Excellent">Excellent (9/10)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Product Inventory Grid */}
        <section className="mt-10 sm:mt-12">
          {filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center bg-white/50 backdrop-blur-md">
              <Smartphone className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-display text-lg font-bold text-slate-800">No matching devices found</h3>
              <p className="text-sm text-slate-500 mt-1">Try resetting filters to see our full available stock.</p>
              <button
                onClick={() => {
                  setCategory("all");
                  setSelectedBrand("all");
                  setSelectedCondition("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.originalPrice - product.price) / product.originalPrice) * 100
                );

                return (
                  <div
                    key={product.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)]"
                  >
                    <div>
                      {/* Top Header Badge Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            product.condition === "Like New"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {product.condition}
                        </span>

                        {product.tag && (
                          <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                            {product.tag}
                          </span>
                        )}
                      </div>

                      {/* Device Visual Thumbnail */}
                      <div className="relative flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 p-4 group-hover:bg-blue-50/40 transition-colors">
                        <div className="flex flex-col items-center justify-center text-center">
                          <Smartphone className="h-24 w-24 text-slate-700 group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
                          <span className="mt-2 font-mono text-xs font-bold text-slate-500">
                            {product.storage} · {product.color}
                          </span>
                        </div>

                        {/* Battery Health Badge */}
                        <div className="absolute bottom-2 right-2 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold text-emerald-600 shadow-xs border border-slate-200/80">
                          {product.batteryHealth} Health
                        </div>
                      </div>

                      {/* Title & Pricing */}
                      <div className="mt-4">
                        <div className="flex items-center gap-1 text-amber-500 text-xs">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span className="font-bold text-slate-800">{product.rating}</span>
                          <span className="text-slate-400">({product.reviewsCount})</span>
                        </div>

                        <h3 className="mt-1 font-display text-lg font-bold text-slate-900 leading-snug">
                          {product.name}
                        </h3>

                        {/* Pricing Lockup */}
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="font-display text-2xl font-black text-slate-950">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-slate-400 line-through font-medium">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="rounded-md bg-emerald-100/80 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
                            {discount}% OFF
                          </span>
                        </div>

                        {/* Key Specs Pills */}
                        <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-600">
                          <span className="rounded-md bg-slate-100 px-2 py-0.5">{product.specs.display.split(" ")[0]}</span>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5">{product.specs.ram} RAM</span>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5">{product.storage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                      <a
                        href={waLink(
                          `Hi Chand Mobile, I am interested in buying the certified refurbished ${product.name} (${product.storage}, ${product.color}) priced at ₹${product.price}. Is it available in stock?`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] py-3 text-xs font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Reserve on WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="group flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <span>View 32-Point Specs</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 32-Point Guarantee Banner */}
        <FadeIn className="mt-20 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-200/80 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-12 text-white shadow-2xl">
            <div className="absolute right-0 top-0 h-64 w-64 bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold text-blue-300 border border-blue-400/30">
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                The Chand Mobile Certified Standard
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Every pre-owned device comes with a 100% functional guarantee.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Before any phone enters our showcase, master engineers inspect battery chemistry, logic board traces, OLED calibration, TrueTone, Face ID, and waterproofing seals.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-all active:scale-95"
                >
                  <span>Visit Store &amp; Inspect in Person</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/sell"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all active:scale-95"
                >
                  <span>Trade-In Old Phone for Cash</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Product Details Modal Dialog */}
      <Dialog open={selectedProduct !== null} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-xl p-6 sm:p-8 rounded-[2rem]">
          {selectedProduct && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200">
                    {selectedProduct.condition}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">{selectedProduct.batteryHealth} Health</span>
                </div>
                <DialogTitle className="font-display text-2xl font-bold text-slate-950">
                  {selectedProduct.name} ({selectedProduct.storage})
                </DialogTitle>
                <DialogDescription className="text-slate-600">
                  Color: {selectedProduct.color} · Warranty: {selectedProduct.warranty}
                </DialogDescription>
              </DialogHeader>

              {/* Specs Breakdown */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-xs sm:text-sm space-y-2">
                  <div className="flex justify-between pb-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Display</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.specs.display}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Processor</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.specs.processor}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Camera</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.specs.camera}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">RAM / Memory</span>
                    <span className="font-semibold text-slate-900">{selectedProduct.specs.ram}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Benefits
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
                    {selectedProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons inside modal */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex gap-3">
                <a
                  href={waLink(
                    `Hi Chand Mobile, I would like to reserve the certified ${selectedProduct.name} (${selectedProduct.storage}) for ₹${selectedProduct.price}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Reserve on WhatsApp</span>
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
