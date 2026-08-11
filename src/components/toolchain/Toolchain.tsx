import { toolchain } from "@/data/portfolio";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";

export function Toolchain() {
  return (
    <Section id="toolchain" className="py-16 md:py-20">
      <SectionHeading index="06" eyebrow="Toolchain" title="The Delivery Pipeline, End to End." />

      <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7" stagger={0.06}>
        {toolchain.map((stage, i) => (
          <StaggerItem key={stage.stage} className="h-full">
            <div className="panel relative h-full p-4 transition-colors hover:border-primary/40">
              <span className="font-mono type-micro text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 font-mono type-label text-primary">{stage.stage}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stage.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {stage.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-border/70 bg-surface-2/50 px-1.5 py-0.5 font-mono type-micro text-foreground/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {i < toolchain.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute right-[-11px] top-1/2 hidden h-px w-[10px] bg-primary/50 lg:block"
                />
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
