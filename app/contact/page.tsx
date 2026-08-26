"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { businessConfig, telLink, waLink } from "@/config/business";
import { toast } from "sonner";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = `${businessConfig.address}, ${businessConfig.city}, ${businessConfig.state} ${businessConfig.zip}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    toast.success("Store address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message received! Our team will get in touch shortly.");
  };

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
            <MapPin className="h-3.5 w-3.5 mr-2 text-blue-600" />
            <span className="font-semibold text-slate-800">Visit &amp; Contact Us</span>
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            We&apos;re here to <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
              help your device.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Drop by our repair center for a free 15-minute diagnostic check. No appointments needed for standard repairs.
          </p>
        </FadeIn>

        {/* 2-Column Contact & Map Grid */}
        <FadeIn delay={0.15} className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-[2.5rem] border border-slate-200/90 bg-white/80 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
            
            {/* Left Contact Info & Map (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Map embed */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <iframe
                  src={businessConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full opacity-90"
                  title="Chand Mobile Store Map"
                />
                <div className="absolute bottom-3 left-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${businessConfig.name} ${businessConfig.address} ${businessConfig.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/80 bg-slate-950/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-md hover:bg-blue-600 transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5 text-blue-400" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Address card */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Store Address
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {businessConfig.address}, {businessConfig.city}, {businessConfig.state} {businessConfig.zip}
                </p>
              </div>

              {/* Working Hours */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Operating Hours
                </span>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  {businessConfig.hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{h.day}</span>
                      <span className="font-mono font-semibold text-slate-900">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Inquiry Form (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-950">
                  Send an Inquiry
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  We reply within 15 minutes during business hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Device &amp; Issue (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. iPhone 14 Pro Cracked Screen"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe what you need help with..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Quick direct contact bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                <a
                  href={waLink("Hi Chand Mobile, I have an inquiry about a device repair.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] py-3 text-xs font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={telLink()}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 py-3 text-xs font-bold text-slate-800 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
