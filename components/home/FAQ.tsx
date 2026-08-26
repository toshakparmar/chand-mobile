"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/config/business";

export function FAQ() {
  const featuredFaqs = faqs.slice(0, 5);

  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background ambient gradient glow */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-300/[0.08] blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-300/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: FAQS */}
          <FadeIn delay={0.15} className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {featuredFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-[1.5rem] border border-slate-200/50 bg-white/60 px-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] backdrop-blur-xl relative overflow-hidden group transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
                  <AccordionTrigger className="font-display text-[1.125rem] font-bold text-slate-800 hover:no-underline hover:text-blue-600">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[1rem] leading-[1.7] text-slate-600 font-medium pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          {/* Right Column: Heading, Subheading, CTAs */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-md px-3.5 py-1">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              FAQ
            </Badge>

            <h2 className="font-display text-[3rem] leading-[1.1] font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[3.25rem]">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
                questions.
              </span>
            </h2>

            <p className="mt-5 text-[1.125rem] leading-relaxed text-slate-600 font-medium">
              Everything you need to know about our repair procedures, warranties, turnaround times, and pricing.
            </p>

            {/* Quick Action Links */}
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/faq"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] hover:bg-[100%_0] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:scale-[0.98] text-center"
              >
                <span>View All FAQs ({faqs.length})</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={waLink("Hi Chand Mobile, I have a question regarding a repair.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 active:scale-[0.98] text-center"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
