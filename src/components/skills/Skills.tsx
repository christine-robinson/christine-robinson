import {
  Activity,
  Box,
  Cloud,
  Code2,
  GitBranch,
  Shield,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  box: Box,
  code: Code2,
  gitbranch: GitBranch,
  activity: Activity,
  shield: Shield,
  terminal: Terminal,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The Stack I Build and Operate With."
        description="A working ecosystem of tools — cloud, orchestration, automation, delivery, observability and security."
      />

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
        {skillCategories.map((category) => {
          const Icon = ICONS[category.icon] ?? Box;
          return (
            <StaggerItem key={category.name} className="h-full">
              <article className="panel group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-md border border-border bg-background/60 p-2 text-primary transition-colors group-hover:border-primary/40">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-medium tracking-tight">{category.name}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-border/70 bg-surface-2/50 px-2 py-1 font-mono type-badge text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
