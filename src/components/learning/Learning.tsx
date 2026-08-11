import { BookOpen } from "lucide-react";
import { learning } from "@/data/portfolio";
import { Stagger, StaggerItem } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { cn } from "@/lib/utils";

const LEVEL_STYLES: Record<string, string> = {
  "Hands-on": "border-success/40 text-success",
  Learning: "border-primary/40 text-primary",
  Exploring: "border-border text-muted-foreground",
};

export function Learning() {
  return (
    <Section id="learning" className="py-16 md:py-20">
      <SectionHeading
        index="07"
        eyebrow="Learning & Continuous Improvement"
        title="Areas I Keep Deepening."
        description="Current focus areas rather than credentials — update these as certifications are completed."
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {learning.map((item) => (
          <StaggerItem key={item.topic} className="h-full">
            <article className="panel h-full p-5 transition-colors hover:border-primary/40">
              <BookOpen className="size-4 text-primary" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-medium leading-snug">{item.topic}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.focus}</p>
              <span
                className={cn(
                  "mt-4 inline-block rounded border px-2 py-0.5 font-mono type-micro",
                  LEVEL_STYLES[item.level],
                )}
              >
                {item.level}
              </span>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
