import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface ParticleFieldProps {
  count?: number;
}

/** Lightweight CSS particle field — no canvas, negligible cost. */
export function ParticleField({ count = 18 }: ParticleFieldProps) {
  const reduced = usePrefersReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        delay: (i * 1.7) % 12,
        duration: 12 + ((i * 3) % 10),
        size: i % 4 === 0 ? 2.5 : 1.5,
        top: (i * 53) % 100,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-primary/50"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
