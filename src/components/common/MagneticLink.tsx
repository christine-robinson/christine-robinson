import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Variant = "primary" | "outline" | "ghost";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  download?: boolean;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 glow-ring",
  outline:
    "hairline bg-surface/40 text-foreground hover:border-primary/50 hover:text-primary backdrop-blur-sm",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function MagneticLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  ariaLabel,
  download,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduced ? {} : { x, y }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.a>
  );
}
