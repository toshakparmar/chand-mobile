import { businessConfig } from "@/config/business";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-2 to-accent shadow-2xl shadow-accent/30">
        <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-2xl border-2 border-dashed border-white/50" />
        <span className="font-display text-3xl font-bold text-white">
          {businessConfig.shortName.substring(0, 2)}
        </span>
      </div>
      
      <div className="mt-6 flex flex-col items-center">
        <h2 className="font-display text-xl font-bold tracking-tight text-ink">
          {businessConfig.name}
        </h2>
        <div className="mt-4 flex gap-1.5">
          <div className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
