import { terminalBlocks } from "@/data/portfolio";

export function TerminalPanel() {
  return (
    <div className="panel w-full max-w-sm overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-3.5 py-2.5">
        <span className="size-2 rounded-full bg-destructive/70" aria-hidden="true" />
        <span className="size-2 rounded-full bg-warning/70" aria-hidden="true" />
        <span className="size-2 rounded-full bg-success/70" aria-hidden="true" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">zsh — example session</span>
      </div>
      <div className="space-y-3 p-4 font-mono text-[12.5px] leading-relaxed">
        {terminalBlocks.map((block) => (
          <div key={block.command} className="space-y-1">
            <p className="text-foreground">
              <span className="text-primary">$</span> {block.command}
            </p>
            {block.rows.map((row) => (
              <p key={row.key} className="flex justify-between gap-6 text-muted-foreground">
                <span>{row.key}</span>
                <span className="text-foreground">{row.value}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <p className="border-t border-border px-4 py-2 font-mono text-[10px] text-muted-foreground">
        Illustrative output — shown as interface, not live cluster data.
      </p>
    </div>
  );
}
