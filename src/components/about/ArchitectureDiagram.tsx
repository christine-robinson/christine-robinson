const LAYERS: { title: string; items: string[] }[] = [
  { title: "Delivery", items: ["GitHub", "Actions", "ArgoCD"] },
  { title: "Platform", items: ["EKS", "Helm", "Karpenter"] },
  { title: "Foundation", items: ["VPC", "IAM", "Terraform"] },
  { title: "Signals", items: ["Prometheus", "Grafana", "Loki"] },
];

export function ArchitectureDiagram() {
  return (
    <div className="panel relative overflow-hidden p-5">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
          PLATFORM LAYERS
        </p>
        <div className="mt-5 space-y-3">
          {LAYERS.map((layer, i) => (
            <div key={layer.title} className="relative">
              <div className="rounded-md border border-border bg-surface-2/60 p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{layer.title}</p>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    L{LAYERS.length - i}
                  </span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border/70 bg-background/50 px-2 py-0.5 font-mono text-[10.5px] text-primary/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < LAYERS.length - 1 ? (
                <svg
                  className="mx-auto my-1 block h-3 w-4"
                  viewBox="0 0 16 12"
                  aria-hidden="true"
                >
                  <line
                    x1="8"
                    y1="0"
                    x2="8"
                    y2="12"
                    stroke="var(--color-primary)"
                    strokeOpacity="0.5"
                    strokeWidth="1"
                    className="flow-line"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
