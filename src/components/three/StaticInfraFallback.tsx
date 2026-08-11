import { cn } from "@/lib/utils";

interface Props {
  animated?: boolean;
}

const NODES = [
  { x: 200, y: 60, label: "LB" },
  { x: 60, y: 150, label: "CI" },
  { x: 340, y: 150, label: "OBS" },
  { x: 110, y: 300, label: "NODE" },
  { x: 290, y: 300, label: "DB" },
];

/** Lightweight SVG infrastructure illustration used on mobile / reduced motion. */
export function StaticInfraFallback({ animated = true }: Props) {
  return (
    <svg
      viewBox="0 0 400 380"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a cloud infrastructure topology"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="190" r="130" fill="url(#core-glow)" />

      {NODES.map((n) => (
        <line
          key={`l-${n.label}`}
          x1="200"
          y1="190"
          x2={n.x}
          y2={n.y}
          stroke="var(--color-primary)"
          strokeOpacity="0.4"
          strokeWidth="1"
          className={cn(animated && "flow-line")}
        />
      ))}

      <g>
        <circle
          cx="200"
          cy="190"
          r="46"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
        <circle
          cx="200"
          cy="190"
          r="30"
          fill="none"
          stroke="var(--color-violet)"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
        <text
          x="200"
          y="194"
          textAnchor="middle"
          className="fill-primary font-mono"
          fontSize="11"
        >
          EKS
        </text>
      </g>

      {NODES.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 26}
            y={n.y - 14}
            width="52"
            height="28"
            rx="6"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="fill-muted-foreground font-mono"
            fontSize="9"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
