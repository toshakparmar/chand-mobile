import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { businessConfig, waLink } from "@/config/business";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${businessConfig.name}`,
  description: `Find answers to common questions about phone repairs, warranty coverage, turnaround times, and pricing at ${businessConfig.name}.`,
};

export default function FAQPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-300/[0.12] blur-[140px]" />
      <div className="absolute right-1/4 bottom-20 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-300/[0.08] blur-[130px]" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Navigation breadcrumb back */}
        <FadeIn className="mb-6">
          <Link
            href="/#faq"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </FadeIn>

        {/* Page Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 bg-white/70 backdrop-blur-md px-3.5 py-1.5 shadow-sm border-slate-200">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Help Center & Knowledge Base
          </Badge>
          <h1 className="font-display text-[2.75rem] leading-tight font-bold tracking-tighter text-slate-950 sm:text-5xl lg:text-[4rem]">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm pb-1 inline-block">
              questions.
            </span>
          </h1>
          <p className="mt-4 text-[1.125rem] leading-normal text-slate-600 font-medium">
            Everything you need to know about our repair services, turnaround times, warranties, and pricing.
          </p>
        </FadeIn>

        {/* All FAQs Accordion */}
        <FadeIn delay={0.15} className="mt-12 sm:mt-14">
          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-all-${i}`}
                className="rounded-2xl border border-slate-200/80 bg-white/75 px-6 backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left font-display text-[1.05rem] sm:text-[1.125rem] font-semibold text-slate-900 hover:no-underline hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[0.95rem] sm:text-[1rem] leading-relaxed text-slate-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Need More Assistance Banner */}
          <div className="mt-14 rounded-3xl border border-slate-200/90 bg-white/80 p-8 text-center backdrop-blur-xl shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-slate-600 font-medium max-w-md mx-auto">
              Our technicians are ready to assist you with quick diagnostic queries and repair quotes.
            </p>
            <a
              href={waLink("Hi Chand Mobile, I have a question about repairing my phone.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat with Technician on WhatsApp</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
