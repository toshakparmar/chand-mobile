"use client";

import { memo, Suspense, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows, OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";
import { Loader2 } from "lucide-react";

export const DEVICE_CONFIGS = {
  phone: { path: "/models/iphone_17_pro_max.glb", scale: 13, position: [0, -0.7, 0] as const },
  tablet: { path: "/models/ipad_mini_2023.glb", scale: 12, position: [0, -0.8, 0] as const },
  laptop: { path: "/models/apple_macbook_pro.glb", scale: 8, position: [0, -0.8, 0] as const },
};

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/90 bg-white/80 p-5 shadow-xl backdrop-blur-2xl">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle className="text-slate-200/80" strokeWidth="6" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
            <circle
              className="text-blue-600 transition-all duration-300 ease-out"
              strokeWidth="6"
              strokeDasharray={264}
              strokeDashoffset={264 - (264 * progress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42" cx="50" cy="50"
            />
          </svg>
          <Loader2 className="relative z-10 h-5 w-5 animate-spin text-blue-600" />
        </div>
        <div className="flex flex-col items-center whitespace-nowrap">
          <span className="font-display text-base font-bold text-slate-950">{progress.toFixed(0)}%</span>
          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider animate-pulse">Loading 3D Model…</span>
        </div>
      </div>
    </Html>
  );
}

/**
 * Memoized DeviceModel prevents re-mounting the GLTF scene graph
 * unless the device type actually changes. The `clone: true` flag
 * creates a cheap shallow copy so React Three Fiber can safely
 * dispose of the old scene without affecting the cached geometry.
 */
const DeviceModel = memo(function DeviceModel({ type }: { type: keyof typeof DEVICE_CONFIGS }) {
  const config = DEVICE_CONFIGS[type];
  const { scene } = useGLTF(config.path);

  // Clone the scene so each instance gets its own Object3D tree
  // while sharing the underlying BufferGeometry and Material GPU data.
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <primitive object={clonedScene} scale={config.scale} position={config.position} rotation={[0, -Math.PI / 4, 0]} />
    </Float>
  );
});

// Only preload the default model immediately.
// Others load in the background after the initial paint.
useGLTF.preload("/models/iphone_17_pro_max.glb");

// Defer secondary model preloads
if (typeof window !== "undefined") {
  // Use requestIdleCallback (or setTimeout fallback) to preload
  // non-critical models when the browser is idle.
  const deferPreload = (path: string) => {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => useGLTF.preload(path), { timeout: 4000 });
    } else {
      setTimeout(() => useGLTF.preload(path), 3000);
    }
  };
  deferPreload("/models/ipad_mini_2023.glb");
  deferPreload("/models/apple_macbook_pro.glb");
}

/**
 * Memoized Canvas wrapper. Only re-renders when activeDevice changes.
 * Canvas settings are tuned for fast startup:
 *  - frameloop="demand": only re-render when something changes (orbit / float)
 *  - dpr clamped to [1, 1.5] to avoid expensive 2x rendering on high-DPI
 *  - antialias true for visual quality, alpha true for transparent BG
 *  - powerPreference "high-performance" hints the GPU
 */
const HeroCanvas = memo(function HeroCanvas({ activeDevice }: { activeDevice: keyof typeof DEVICE_CONFIGS }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      dpr={[1, 1.5]}
      frameloop="always"
      performance={{ min: 0.5 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Environment preset="city" />
        <DeviceModel type={activeDevice} />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Suspense>
    </Canvas>
  );
});

export default HeroCanvas;
