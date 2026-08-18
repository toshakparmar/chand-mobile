import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Location } from "@/components/home/Location";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${businessConfig.name} — visit our shop, call, WhatsApp, or book a repair online.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="mx-auto max-w-3xl px-5 pb-4 text-center sm:px-8">
        <FadeIn>
          <Badge>Get In Touch</Badge>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            We&apos;re ready when you are.
          </h1>
        </FadeIn>
      </section>
      <Location />
    </div>
  );
}
