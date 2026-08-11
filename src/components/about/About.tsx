import { Check } from "lucide-react";
import { about, metrics } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title={about.title} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Stagger className="mt-8 flex flex-wrap gap-2">
            {about.focus.map((item) => (
              <StaggerItem key={item}>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/50 px-2.5 py-1.5 font-mono text-xs text-muted-foreground">
                  <Check className="size-3 text-primary" aria-hidden="true" />
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="panel h-full p-4 transition-colors hover:border-primary/40">
                  <p className="text-xl font-semibold tracking-tight text-primary">{m.value}</p>
                  <p className="mt-1 font-mono type-badge tracking-wide text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <ArchitectureDiagram />
        </Reveal>
      </div>
    </Section>
  );
}
