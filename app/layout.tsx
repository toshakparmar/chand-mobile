import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { InitialLoader } from "@/components/layout/InitialLoader";
import { businessConfig } from "@/config/business";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: `${businessConfig.name} | Expert Mobile Device Repair`,
  description: businessConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/logo/app-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-transparent text-ink relative`} suppressHydrationWarning>
        <NextTopLoader color="#2563eb" height={3} shadow="0 0 10px #2563eb,0 0 5px #4f46e5" showSpinner={false} />
        <InitialLoader />
        {/* Global Ambient Background for Glassmorphism */}
        <div className="fixed inset-0 -z-50 bg-[#f8fafc]">
          <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-300/[0.15] blur-[120px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full bg-emerald-300/[0.1] blur-[120px]" />
          <div className="absolute left-[60%] top-[40%] h-[40vw] w-[40vw] rounded-full bg-indigo-300/[0.1] blur-[120px]" />
        </div>

        <Navbar />
        <main className="relative z-0">{children}</main>
        <Footer />
        <MobileBottomBar />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
