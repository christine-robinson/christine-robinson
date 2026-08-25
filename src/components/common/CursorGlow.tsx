import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

/** Soft accent glow that follows the pointer. Desktop + motion-safe only. */
export function CursorGlow() {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    if (reduced || !isDesktop) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced, isDesktop]);

  if (reduced || !isDesktop) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent), transparent 68%)",
      }}
    />
  );
}
