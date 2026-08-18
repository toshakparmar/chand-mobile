import Link from "next/link";
import { businessConfig } from "@/config/business";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-2 to-accent shadow-md shadow-accent/20">
        <span className="absolute inset-0 rounded-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
        <span className="font-display text-sm font-bold text-white">CM</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          {businessConfig.shortName}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          Mobile Repair
        </span>
      </span>
    </Link>
  );
}
