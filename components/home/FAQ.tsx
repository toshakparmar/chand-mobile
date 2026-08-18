"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradients for glassmorphism */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.08] blur-[100px]" />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <Badge>SEC.07 — FAQ</Badge>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Common <span className="gradient-text-blue">Questions.</span>
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know about our repair services, warranties, and pricing.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-[1.5rem] border border-white/60 bg-white/40 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
                <AccordionTrigger className="font-display font-bold text-slate-800">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
