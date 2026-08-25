import { Building2, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="3+ Years of Production Infrastructure Work"
        description="Roles, scope and the engineering areas each one covered."
      />

      <ol className="relative mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
        {experience.map((role, i) => (
          <li key={role.company} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[1.65rem] top-7 size-2.5 rounded-full sm:-left-[2.9rem] ${
                role.current
                  ? "status-dot bg-primary"
                  : "bg-muted-foreground/60"
              }`}
            />
            <Reveal delay={i * 0.05}>
              <article className="panel p-6 transition-colors hover:border-primary/35 sm:p-7">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {role.role}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2
                          className="size-3.5 text-primary"
                          aria-hidden="true"
                        />
                        {role.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {role.location}
                      </span>
                    </p>
                  </div>
                  <span className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono type-badge text-muted-foreground">
                    {role.period}
                  </span>
                </header>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>

                <h4 className="mt-6 font-mono type-label text-primary">
                  Impact
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {role.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-primary/70"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 font-mono type-label text-muted-foreground">
                  Technology
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border/70 bg-surface-2/50 px-2 py-1 font-mono type-badge text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
