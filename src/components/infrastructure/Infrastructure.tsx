import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { infraNodes } from "@/data/portfolio";
import type { InfraNode } from "@/types/portfolio";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type Tone = "primary" | "violet" | "success";

const TONE_ACTIVE: Record<Tone, string> = {
  primary: "border-primary/70 bg-primary/10 text-primary",
  violet: "border-violet/70 bg-violet/10 text-violet",
  success: "border-success/70 bg-success/10 text-success",
};

function Node({
  node,
  tone,
  state,
  onFocusNode,
  describedById,
}: {
  node: InfraNode;
  tone: Tone;
  state: "idle" | "active" | "related" | "dimmed";
  onFocusNode: (id: string | null) => void;
  describedById?: string;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onFocusNode(node.id)}
      onMouseLeave={() => onFocusNode(null)}
      onFocus={() => onFocusNode(node.id)}
      onBlur={() => onFocusNode(null)}
      aria-describedby={state === "active" ? describedById : undefined}
      className={cn(
        "w-full rounded-md border border-border bg-surface-2/60 px-3 py-2.5 text-left font-mono text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60",
        state === "active" && TONE_ACTIVE[tone],
        state === "related" && "border-primary/40 text-foreground",
        state === "dimmed" && "opacity-35",
      )}
    >
      {node.label}
    </button>
  );
}

function Connector({ active, animate }: { active: boolean; animate: boolean }) {
  return (
    <svg className="mx-auto my-0.5 block h-4 w-4" viewBox="0 0 16 16" aria-hidden="true">
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        stroke="var(--color-primary)"
        strokeOpacity={active ? 0.9 : 0.35}
        strokeWidth={active ? 1.5 : 1}
      />
      {active && animate ? (
        <motion.circle
          r="1.6"
          cx="8"
          fill="var(--color-primary)"
          initial={{ cy: 0, opacity: 0 }}
          animate={{ cy: 16, opacity: [0, 1, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
      ) : null}
    </svg>
  );
}

export function Infrastructure() {
  const [focused, setFocused] = useState<string | null>(null);
  const reduced = usePrefersReducedMotion();

  const byColumn = useMemo(
    () => ({
      delivery: infraNodes.filter((n) => n.column === "delivery"),
      platform: infraNodes.filter((n) => n.column === "platform"),
      aws: infraNodes.filter((n) => n.column === "aws"),
    }),
    [],
  );

  const activeNode = focused ? (infraNodes.find((n) => n.id === focused) ?? null) : null;
  const related = new Set(activeNode?.connects ?? []);

  const stateFor = (id: string): "idle" | "active" | "related" | "dimmed" => {
    if (!focused) return "idle";
    if (id === focused) return "active";
    if (related.has(id)) return "related";
    return "dimmed";
  };

  const delivery = byColumn.delivery;

  return (
    <Section id="infrastructure">
      <SectionHeading
        index="05"
        eyebrow="Infrastructure"
        title="How a Commit Becomes Production Traffic."
        description="Hover or focus any component to highlight what it connects to. The delivery path runs down the centre, with cluster platform components and AWS infrastructure around it."
      />

      <Reveal className="mt-12">
        <div className="panel relative overflow-hidden p-5 sm:p-8">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
            <div className="order-2 lg:order-1">
              <p className="font-mono type-label text-violet">AWS Infrastructure</p>
              <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-1">
                {byColumn.aws.map((node) => (
                  <Node
                    key={node.id}
                    node={node}
                    tone="violet"
                    state={stateFor(node.id)}
                    onFocusNode={setFocused}
                    describedById="infra-detail"
                  />
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="font-mono type-label text-primary">Delivery Path</p>
              <ol className="mt-5">
                {delivery.map((node, i) => {
                  const next = delivery[i + 1];
                  const edgeActive =
                    !!focused &&
                    !!next &&
                    (focused === node.id || focused === next.id) &&
                    (node.connects.includes(next.id) || next.connects.includes(node.id));
                  return (
                    <li key={node.id}>
                      <Node
                        node={node}
                        tone="primary"
                        state={stateFor(node.id)}
                        onFocusNode={setFocused}
                        describedById="infra-detail"
                      />
                      {next ? <Connector active={edgeActive} animate={!reduced} /> : null}
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="order-3">
              <p className="font-mono type-label text-success">Cluster Platform</p>
              <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-1">
                {byColumn.platform.map((node) => (
                  <Node
                    key={node.id}
                    node={node}
                    tone="success"
                    state={stateFor(node.id)}
                    onFocusNode={setFocused}
                    describedById="infra-detail"
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            id="infra-detail"
            role="status"
            aria-live="polite"
            className="relative mt-8 min-h-[64px] rounded-md border border-border bg-background/60 p-4"
          >
            {activeNode ? (
              <>
                <p className="font-mono text-xs text-primary">{activeNode.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activeNode.tooltip}
                </p>
                <p className="mt-2 font-mono type-badge text-muted-foreground">
                  Connected to:{" "}
                  {activeNode.connects
                    .map((id) => infraNodes.find((n) => n.id === id)?.label ?? id)
                    .join(" · ")}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Hover or tab through a component to see what it does and what it connects to.
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
