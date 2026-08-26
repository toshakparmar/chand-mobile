# 📱 Chand Mobile Expert — Certified Device Repair, Buy & Sell Hub

A modern, high-performance, conversion-optimized web application for **Chand Mobile Expert** built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Three.js / React Three Fiber**, **Framer Motion**, and **Radix UI**.

This platform delivers an executive-level digital storefront and diagnostic hub featuring interactive 3D device visualizers, an instant trade-in & cashout calculator, a certified refurbished marketplace, transparent repair pricing matrices, priority booking wizards, and full WhatsApp CRM integration.

---

## 🌟 Core Features & Modules

### 1. 🛠️ Complete Multi-Page Suite
- **🏠 Home (`/`)**:
  - Interactive **3D Device Canvas** (Apple iPhone, iPad, MacBook Pro) with smooth orbiting and hardware reflection.
  - **Dynamic Repair Estimator** with live cost calculation for screens, batteries, ports, motherboards, and water damage.
  - **Certified 6-Stage Engineering Process** with animated interactive beam pipelines and modal inspections.
  - **Always-Vibrant Trusted Brands Marquee** supporting Apple, Samsung, Google, OnePlus, Motorola, Xiaomi, etc.
  - **Store Directions & Operating Matrix** with 1-click address copy and Google Maps routing.
- **🛒 Certified Refurbished Store (`/buy` & `/products`)**:
  - Live inventory filtering across Smartphones, Tablets, and MacBooks by brand (Apple, Samsung, Google, OnePlus) and condition (Pristine, Excellent, Good).
  - 32-point inspection specs modal, battery health gauges, warranty badges, and **1-Click WhatsApp Reservation**.
- **💰 Sell & Trade-in Hub (`/sell`)**:
  - 5-step dynamic valuation engine calculating instant cash/UPI payouts vs. Store Upgrade Credit (+8% Bonus).
  - Condition multipliers, box & bill bonuses, and instant WhatsApp quote locking.
- **📊 Transparent Repair Pricing Matrix (`/repair-pricing`)**:
  - Interactive device estimator alongside comprehensive reference tables for all major brands and repair categories.
- **🔧 Repair Services Catalog (`/services`)**:
  - 9 full-service categories with turnaround estimates, warranty indicators, and direct priority appointment booking.
- **🏢 About Us & Certified Workshop Lab (`/about`)**:
  - Store history, quality standards, diagnostic stats (10k+ revived devices, 99.4% fix rate), and workshop equipment showcase.
- **📍 Contact & Directions (`/contact`)**:
  - Interactive inquiry form, embedded Google Maps, direct WhatsApp hotline, and one-tap store phone connectivity.
- **⚡ Dedicated Priority Booking Wizard (`/book-repair`)**:
  - Full-page booking flow with device selection, symptom picker, preferred slot scheduler, and instant confirmation toasts.

---

### 2. 🎨 Glassmorphism & UI Design System
- **Deep Frosted Glassmorphism**: Multi-layered ambient lighting mesh (`bg-white/70`, `backdrop-blur-xl`, `border-white/80`, `shadow-xl`).
- **Unified Button Architecture**:
  - **Primary Actions**: Shimmering brand gradient (`bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600`) with dynamic hover lift (`hover:-translate-y-0.5`) and arrow glide.
  - **Secondary Glass CTAs**: Translucent glass with electric blue border and text hover transitions.
  - **Direct WhatsApp Buttons**: Vibrant emerald tone (`#25D366`) with radiant ambient glow.
- **Executive Loader & Telemetry**:
  - Unconfined, high-resolution official brand logo.
  - Real-time diagnostic telemetry check sequence (`Initializing Diagnostics` → `Connecting Genuine Parts` → `Calibrating Matrix`).
  - Snappy, non-blocking page transition feedback.

---

### 3. 🚀 Performance & Architecture
- **Granular Home Section Chunking**: All below-the-fold components (`Services`, `WhyChooseUs`, `RepairProcess`, `RepairEstimator`, `Testimonials`, `FAQ`) are code-split via `next/dynamic` with lightweight placeholder skeletons, minimizing initial bundle size, Total Blocking Time (TBT), and First Contentful Paint (FCP).
- **Non-Blocking 3D Hardware Chunking**:
  - Three.js Canvas dynamically loaded on client-side (`ssr: false`).
  - Primary device model (`iPhone 17 Pro Max`) preloaded on boot; secondary models (`iPad`, `MacBook`) deferred via `requestIdleCallback`.
  - Memoized scene graph cloning and clamped Device Pixel Ratio (`dpr={[1, 1.5]}`) preventing GPU bottlenecks and layout shifts.
- **Hardware-Accelerated CSS Ambient Glows**: Replaced continuous JS animation loops (`motion.div`) with hardware-accelerated CSS keyframe animations (`orb-pulse`, `orb-drift`), freeing up main thread execution.
- **Strict Data Scroll Compatibility**: Scoped `html[data-scroll-behavior="smooth"]` eliminating Next.js route transition scroll warnings.
- **Async Asset Optimization**: Native lazy-loading (`loading="lazy"`), async image decoding (`decoding="async"`), and iframe lazy-loading across all media elements.
- **Global Command Search (`Cmd + K` / `Ctrl + K`)**: Comprehensive modal search indexing all device models, repair services, trade-in calculator, and support pages.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14+ (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Glassmorphism |
| **3D Graphics** | [Three.js](https://threejs.org/) / [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) / [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Components** | [Radix UI](https://www.radix-ui.com/) / [Magic UI](https://magicui.design/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |

---

## 📁 Project Structure

```
├── app/
│   ├── about/              # About us & certified lab showcase
│   ├── book-repair/        # Dedicated priority repair booking page
│   ├── buy/                # Certified refurbished store
│   ├── contact/            # Store directions, map & inquiry form
│   ├── products/           # Products storefront redirect / alias
│   ├── repair-pricing/     # Comprehensive repair pricing matrix
│   ├── sell/               # Sell / trade-in cash valuation calculator
│   ├── services/           # Services catalog with turnaround estimates
│   ├── globals.css         # Glassmorphism tokens & design utilities
│   ├── layout.tsx          # Root layout with ambient lighting & navigation
│   └── loading.tsx         # Route transition loading fallback
├── components/
│   ├── animations/         # Framer Motion & Beam wrappers
│   ├── booking/            # Priority booking modal dialog
│   ├── home/               # Hero, 3D Canvas, Estimator, Process, Brands, FAQ
│   ├── layout/             # Navbar, Footer, CommandMenu, InitialLoader
│   └── ui/                 # Unified Button, Card, Dialog, Badge, Select
├── config/
│   └── business.ts         # Centralized configuration (contact, hours, links)
├── lib/
│   ├── data.ts             # Service catalog & FAQ data
│   ├── productsData.ts     # Certified refurbished inventory database
│   └── sellPricingData.ts  # Trade-in valuation calculation engine
└── public/
    ├── images/             # Brand logos & showcase assets
    └── models/             # 3D GLTF/GLB models (iPhone, iPad, MacBook)
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/toshakparmar/fixpro.git
cd fixpro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🔧 Business Configuration

All contact details, social channels, store addresses, working hours, and WhatsApp preset messages are centralized in [`config/business.ts`](file:///d:/Freelancing%20Projects/chand-mobile/config/business.ts).

To customize your business information:
```typescript
export const businessConfig = {
  name: "Chand Mobile",
  phone: "+91 98765 43210",
  email: "support@chandmobile.com",
  address: "Shop No. 12, Main Market",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "380001",
  workingHours: "10:00 AM - 9:00 PM (All 7 Days)",
  // ...
};
```

---

## 📄 License & Ownership

Developed with pride for **Chand Mobile Expert**. All rights reserved.
