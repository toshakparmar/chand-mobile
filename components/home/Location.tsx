"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { businessConfig, telLink, waLink } from "@/config/business";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function Location() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${businessConfig.address}, ${businessConfig.city}, ${businessConfig.state} ${businessConfig.zip}`;
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    toast.success("Store address copied to clipboard!", { description: fullAddress });
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(businessConfig.phone);
    setCopiedPhone(true);
    toast.success("Phone number copied!", { description: businessConfig.phone });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessConfig.name} ${businessConfig.address} ${businessConfig.city}`
  )}`;

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-400/[0.08] blur-[130px]" />
      <div className="absolute left-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.06] blur-[120px]" />

      {/* Section Header */}
      <FadeIn className="text-center relative z-10 max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-md px-3.5 py-1 border-blue-200/80 shadow-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="font-semibold text-slate-800">SEC.08 — Visit &amp; Contact</span>
        </Badge>

        <h2 className="font-display text-[2.25rem] leading-[1.15] font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
          Visit our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm inline-block">
            repair center.
          </span>
        </h2>
        <p className="mt-4 text-[1.125rem] leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
          Drop in for a free diagnostic check — walk-ins welcome, zero appointment needed, or connect with our team directly.
        </p>
      </FadeIn>

      {/* Main Glassmorphic Showcase Grid */}
      <FadeIn delay={0.15}>
        <div className="relative z-10 mt-12 sm:mt-16 overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white/90 p-3 sm:p-4 shadow-[0_20px_50px_rgba(37,99,235,0.06)] backdrop-blur-xl">
          <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-slate-100 bg-gradient-to-br from-white to-slate-50/80 lg:grid-cols-12">
            
            {/* Map Column (6 cols on lg) */}
            <div className="relative min-h-[380px] sm:min-h-[440px] w-full bg-slate-100 lg:col-span-6 lg:min-h-full">
              <iframe
                src={businessConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full opacity-90"
                title="Chand Mobile Store Location Map"
              />

              {/* Map Floating Badges */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Store Open Today
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/80 bg-slate-900/90 px-4 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-[1.02] active:scale-95"
                >
                  <Navigation className="h-4 w-4 text-blue-400" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="h-3 w-3 opacity-60 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Details & Interactive Contact Hub (6 cols on lg) */}
            <div className="p-6 sm:p-10 lg:col-span-6 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Store Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                      {businessConfig.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-blue-600">
                      {businessConfig.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                    Walk-ins Welcome
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Address Block with 1-Click Copy */}
                  <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200/70 p-4 shadow-sm transition-all hover:border-blue-200">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Store Address
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 px-2 py-0.5 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          {copiedAddress ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-slate-800 leading-relaxed">
                        {businessConfig.address}, {businessConfig.city}, {businessConfig.state} {businessConfig.zip}
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours Matrix */}
                  <div className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200/70 p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Opening Schedule
                      </p>
                      <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
                        {businessConfig.hours.map((h) => (
                          <div key={h.day} className="flex items-center justify-between">
                            <span className="font-medium text-slate-700">{h.day}</span>
                            <span className="font-mono font-semibold text-slate-900">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Guarantee Badges */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-slate-200/70 shadow-xs">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>1-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-slate-200/70 shadow-xs">
                    <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>15-Min Free Diagnosis</span>
                  </div>
                </div>
              </div>

              {/* Direct Interactive Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={telLink()}
                  onClick={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.preventDefault();
                      handleCopyPhone();
                    }
                  }}
                  className="flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 active:scale-95 text-center"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <div className="text-left">
                    <p className="font-mono text-[10px] uppercase text-slate-400 leading-none">
                      {copiedPhone ? "Copied!" : "Call Us"}
                    </p>
                    <p className="text-xs sm:text-sm font-bold leading-tight mt-0.5">{businessConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={waLink("Hi Chand Mobile, I would like to inquire about visiting your store for a device repair.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] px-4 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <div className="text-left">
                    <p className="font-mono text-[10px] uppercase text-white/80 leading-none">Instant Chat</p>
                    <p className="text-xs sm:text-sm font-bold leading-tight mt-0.5">WhatsApp Store</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
