import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { caseStudies } from "@/data/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { TiltCard } from "@/components/common/TiltCard";

function FlowChain({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, i) => (
        <span key={step + i} className="flex items-center gap-1.5">
          <span className="rounded border border-primary/30 bg-primary/5 px-2 py-1 font-mono type-badge text-primary">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="font-mono type-micro text-muted-foreground">
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

function Details({ study }: { study: CaseStudy }) {
  return (
    <div className="mt-5 space-y-5 rounded-md border border-border bg-background/50 p-4">
      <div>
        <p className="font-mono type-label text-muted-foreground">Architecture</p>
        <ol className="mt-3 space-y-2">
          {study.architecture.map((node, i) => (
            <li key={node.label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {i < study.architecture.length - 1 ? (
                  <span className="my-1 w-px flex-1 bg-primary/25" aria-hidden="true" />
                ) : null}
              </div>
              <div className="pb-2">
                <p className="font-mono text-xs text-primary">{node.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {node.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {study.flows?.length ? (
        <div className="space-y-3">
          {study.flows.map((flow) => (
            <div key={flow.title}>
              <p className="font-mono type-label text-muted-foreground">{flow.title}</p>
              <div className="mt-2">
                <FlowChain steps={flow.steps} />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div>
        <p className="font-mono type-label text-violet">Engineering decisions</p>
        <ul className="mt-2.5 space-y-1.5">
          {study.decisions.map((d) => (
            <li key={d} className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground">
              <span
                className="mt-1.5 size-1 shrink-0 rounded-full bg-violet/70"
                aria-hidden="true"
              />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono type-label text-success">Outcome</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{study.outcome}</p>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-study-${study.id}`;

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <TiltCard className="h-full" intensity={4}>
        <article className="panel flex h-full flex-col p-6 transition-colors hover:border-primary/40">
          <p className="font-mono type-badge text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">{study.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.tagline}</p>

          <dl className="mt-5 space-y-3 text-sm">
            <div>
              <dt className="font-mono type-label text-violet">Problem</dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{study.problem}</dd>
            </div>
            <div>
              <dt className="font-mono type-label text-primary">Approach</dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{study.approach}</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border/70 bg-surface-2/50 px-2 py-1 font-mono type-badge text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2/40 px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:border-primary/60 focus-visible:outline-none"
            >
              {open ? "Hide details" : "View architecture & outcome"}
              <ChevronDown
                className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <Details study={study} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </article>
      </TiltCard>
    </Reveal>
  );
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="04"
        eyebrow="Selected Engineering Work"
        title="Case Studies from Production Infrastructure."
        description="Engineering case studies based on infrastructure, DevOps and cloud work — the problem, the approach taken, and how the system was put together."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </Section>
  );
}
