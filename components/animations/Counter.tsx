"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Counter({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : null;
  const prefix = numeric !== null ? value.slice(0, value.indexOf(numericMatch![0])) : "";
  const suffix = numeric !== null ? value.slice((numericMatch!.index ?? 0) + numericMatch![0].length) : "";

  useEffect(() => {
    if (!inView || numeric === null) return;
    let raf: number;
    const start = performance.now();
    const decimals = numericMatch![0].includes(".") ? 1 : 0;

    function tick(now: number) {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = numeric! * eased;
      setDisplay(current.toFixed(decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
