import { Clock } from "lucide-react";
import { notes } from "@/data/portfolio";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";

export function Notes() {
  return (
    <Section id="notes">
      <SectionHeading
        index="08"
        eyebrow="Engineering Notes"
        title="Writing About the Systems I Run."
        description="Planned technical notes on Kubernetes, Terraform, GitOps and observability. Links will be added as each one is published."
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => {
          const published = note.status === "Published" && note.href;
          const Wrapper = published ? "a" : "div";
          return (
            <StaggerItem key={note.title} className="h-full">
              <Wrapper
                {...(published
                  ? { href: note.href, target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="panel group flex h-full flex-col p-5 transition-all duration-300 hover:border-primary/40"
              >
                <h3 className="text-sm font-medium leading-snug">{note.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  {note.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border/70 px-1.5 py-0.5 font-mono type-micro text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded border border-border/70 px-1.5 py-0.5 font-mono type-micro text-muted-foreground">
                    {published ? null : <Clock className="size-3" aria-hidden="true" />}
                    {note.status}
                  </span>
                </div>
              </Wrapper>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
