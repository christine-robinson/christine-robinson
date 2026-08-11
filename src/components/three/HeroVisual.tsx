import { Suspense, lazy } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useHydrated, useMediaQuery } from "@/hooks/use-media-query";
import { StaticInfraFallback } from "./StaticInfraFallback";

const InfraScene = lazy(() => import("./InfraScene"));

/**
 * Decides between the full 3D scene, a reduced-quality scene and a
 * lightweight animated SVG illustration. Three.js is only ever
 * downloaded when the 3D path is actually taken.
 */
export function HeroVisual() {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");

  const useThree = hydrated && !reduced && !isMobile;

  return (
    <div
      className="relative aspect-square w-full max-w-xl sm:aspect-[5/4]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-[110px]" />
      {useThree ? (
        <Suspense fallback={<StaticInfraFallback />}>
          <InfraScene animate quality={isTablet ? "low" : "high"} />
        </Suspense>
      ) : (
        <StaticInfraFallback animated={hydrated && !reduced} />
      )}
    </div>
  );
}
