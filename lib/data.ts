import {
  Smartphone,
  BatteryCharging,
  Plug,
  Camera,
  Volume2,
  Droplets,
  Layers,
  Cpu,
  CircuitBoard,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  description: string;
  time: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    description: "Cracked or unresponsive display swapped with precision-fit parts.",
    time: "30–45 min",
    icon: Smartphone,
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    description: "Restore all-day battery life with genuine-grade cells.",
    time: "20–30 min",
    icon: BatteryCharging,
  },
  {
    slug: "charging-port-repair",
    name: "Charging Port Repair",
    description: "Fix loose connections and ports that won't hold a charge.",
    time: "25–40 min",
    icon: Plug,
  },
  {
    slug: "camera-repair",
    name: "Camera Repair",
    description: "Blurry, cracked or dead camera modules replaced and calibrated.",
    time: "30–50 min",
    icon: Camera,
  },
  {
    slug: "speaker-microphone",
    name: "Speaker & Microphone",
    description: "Restore call clarity and speaker output to factory spec.",
    time: "25–35 min",
    icon: Volume2,
  },
  {
    slug: "water-damage",
    name: "Water Damage",
    description: "Full diagnostic clean and corrosion treatment for liquid exposure.",
    time: "24–48 hrs",
    icon: Droplets,
  },
  {
    slug: "back-glass-repair",
    name: "Back Glass Repair",
    description: "Shattered rear panel replaced without disturbing internals.",
    time: "40–60 min",
    icon: Layers,
  },
  {
    slug: "software-performance",
    name: "Software & Performance",
    description: "Diagnostics, optimization and OS troubleshooting for a faster device.",
    time: "20–30 min",
    icon: Cpu,
  },
  {
    slug: "motherboard-repair",
    name: "Motherboard Repair",
    description: "Board-level micro-soldering for the faults others turn away.",
    time: "48–72 hrs",
    icon: CircuitBoard,
  },
];

export const brands = [
  { name: "Apple", logo: "https://cdn.simpleicons.org/apple" },
  { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung" },
  { name: "OnePlus", logo: "https://cdn.simpleicons.org/oneplus" },
  { name: "Google Pixel", logo: "https://cdn.simpleicons.org/google" },
  { name: "Xiaomi", logo: "https://cdn.simpleicons.org/xiaomi" },
  { name: "Oppo", logo: "https://cdn.simpleicons.org/oppo" },
  { name: "Vivo", logo: "https://cdn.simpleicons.org/vivo" },
  { name: "Huawei", logo: "https://cdn.simpleicons.org/huawei" },
  { name: "Nokia", logo: "https://cdn.simpleicons.org/nokia" },
  { name: "Motorola", logo: "https://cdn.simpleicons.org/motorola" },
];

export const whyUs = [
  {
    title: "Expert Technicians",
    description: "Experienced professionals who know your device inside out.",
  },
  {
    title: "Quality Parts",
    description: "Reliable replacement components backed by quality assurance.",
  },
  {
    title: "Transparent Pricing",
    description: "Know exactly what you're paying before we repair.",
  },
  {
    title: "Fast Turnaround",
    description: "Most common repairs completed the same day.",
  },
  {
    title: "Repair Warranty",
    description: "One year of peace of mind after every repair.",
  },
  {
    title: "Data Privacy",
    description: "Your personal data stays private, always.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Book Your Repair",
    description: "Tell us what's wrong with your device online or by phone.",
  },
  {
    step: "02",
    title: "Free Diagnosis",
    description: "Our technician identifies the exact issue at no cost.",
  },
  {
    step: "03",
    title: "Approve the Quote",
    description: "Get transparent pricing before any work begins.",
  },
  {
    step: "04",
    title: "Expert Repair",
    description: "Our technician repairs your device with precision.",
  },
  {
    step: "05",
    title: "Quality Check",
    description: "Every function is tested before your device leaves the bench.",
  },
  {
    step: "06",
    title: "Pick Up & Enjoy",
    description: "Get your device back in perfect working condition.",
  },
];

export const showcase = [
  { title: "Cracked Screen", before: "Shattered display", after: "Flawless glass, restored", image: "/images/showcase/cracked.jpg" },
  { title: "Battery Replacement", before: "Draining in hours", after: "Full-day battery life", image: "/images/showcase/battery.jpg" },
  { title: "Charging Port", before: "No connection", after: "Reliable, fast charging", image: "/images/showcase/charging.jpg" },
  { title: "Back Glass", before: "Fractured rear panel", after: "Seamless factory finish", image: "/images/showcase/backglass.jpg" },
  { title: "Camera Lens", before: "Blurred, cracked lens", after: "Crystal clear shots", image: "/images/showcase/camera.jpg" },
  { title: "Water Damage", before: "Unresponsive after spill", after: "Fully functional again", image: "/images/showcase/water.jpg" },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    device: "iPhone 14 Pro",
    rating: 5,
    review:
      "Got my iPhone screen replaced in less than an hour. The service was fast, professional and the pricing was transparent.",
  },
  {
    name: "Simran Kaur",
    device: "Samsung Galaxy S23",
    rating: 5,
    review:
      "My phone wouldn't charge at all. They diagnosed it in minutes and had it working again the same day.",
  },
  {
    name: "Rohan Verma",
    device: "OnePlus 11",
    rating: 5,
    review:
      "Dropped my phone in water and thought it was gone for good. FixPro brought it back to life, camera and all.",
  },
  {
    name: "Priya Nair",
    device: "Google Pixel 8",
    rating: 5,
    review:
      "Transparent quote, genuine parts, and a warranty I actually trust. This is now my go-to repair shop.",
  },
  {
    name: "Karan Malhotra",
    device: "iPhone 13",
    rating: 5,
    review:
      "Battery was barely lasting half a day. Replaced it in thirty minutes and it feels like a new phone.",
  },
];

export const faqs = [
  {
    question: "What devices do you repair?",
    answer:
      "We repair smartphones from Apple, Samsung, OnePlus, Google Pixel, Xiaomi, Oppo, Vivo, Realme, Motorola and Nothing, covering nearly every current and recent model.",
  },
  {
    question: "How long does a repair take?",
    answer:
      "Most common repairs, like screens and batteries, are completed within 30–60 minutes. Complex repairs such as water damage or motherboard work may take 24–72 hours.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes. Every repair is backed by a one year warranty covering parts and workmanship.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome, but booking online guarantees a technician is ready for your device and reduces wait time.",
  },
  {
    question: "Are replacement parts genuine?",
    answer:
      "We use high-grade, quality-assured components, and genuine parts where available. Every part is covered by our warranty.",
  },
  {
    question: "Will my data be safe?",
    answer:
      "Absolutely. We never access your personal data, and repairs are performed with strict privacy protocols in place.",
  },
  {
    question: "How much does screen replacement cost?",
    answer:
      "Pricing depends on your device's brand and model. Use our repair estimator above for an instant, transparent quote.",
  },
  {
    question: "Do you offer same-day repairs?",
    answer:
      "Yes, most screen, battery, port and speaker repairs are completed the same day, often within the hour.",
  },
  {
    question: "Can I get a free diagnosis?",
    answer:
      "Every repair starts with a free, no-obligation diagnosis so you know exactly what's wrong before you commit.",
  },
];

export const stats = [
  { value: "10K+", label: "Devices Repaired" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "1 Year", label: "Repair Warranty" },
];
