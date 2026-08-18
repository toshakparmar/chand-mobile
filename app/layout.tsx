import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { businessConfig } from "@/config/business";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${businessConfig.name} | Expert Mobile Device Repair`,
  description: businessConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-transparent text-ink relative`} suppressHydrationWarning>
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
