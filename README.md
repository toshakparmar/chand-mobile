# Chand Mobile Repair

A modern, high-performance, conversion-optimized mobile repair shop website built with Next.js, React, Tailwind CSS v4, and Framer Motion. 

This project provides a premium user experience featuring smooth glassmorphism UI, a dynamic real-time repair cost estimator, and fully responsive layouts across all devices.

## 🚀 Features

- **Dynamic Repair Estimator**: Instantly calculate repair costs based on device brand, model, repair type, and condition.
- **Glassmorphism UI**: Beautiful, modern styling using backdrop blurs and subtle gradients.
- **Responsive Design**: Flawless experience on mobile, tablet, and desktop devices.
- **Framer Motion Animations**: Smooth page transitions, scroll reveals, and micro-interactions.
- **Config-Driven Architecture**: Easily update business details (phone, email, address, working hours) via a single configuration file (`config/business.ts`).
- **SEO Optimized**: Built on Next.js App Router for optimal performance, fast loading, and search engine visibility.

## 🛠 Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & GSAP
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (Headless Primitives)

## 📁 Folder Structure

```
├── app/                  # Next.js App Router (Pages, Layouts, CSS)
├── components/           # Reusable UI Components
│   ├── animations/       # Framer Motion & GSAP wrappers
│   ├── booking/          # Booking Dialog & Forms
│   ├── home/             # Landing Page Sections (Hero, Estimator, FAQ)
│   ├── layout/           # Global layout elements (Navbar, Footer, Logo)
│   └── ui/               # Base UI components (Buttons, Inputs, Modals)
├── config/               # Global configuration files (business.ts)
├── lib/                  # Utilities, mock data, and pricing logic
└── public/               # Static assets (images, logos)
```

## ⚙️ Setup & Installation

Follow these steps to run the project locally.

1. **Clone the repository**
   ```bash
   git clone https://github.com/toshakparmar/fixpro.git
   cd fixpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Customization

To update the business information, simply edit the `config/business.ts` file. This central configuration file feeds data into the Navbar, Footer, Contact section, and metadata globally.

Pricing data for the estimator can be updated inside `lib/repairPricing.ts`.

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

Built with ❤️ by the Chand Mobile Repair Team.
