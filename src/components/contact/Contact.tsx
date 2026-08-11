import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, FileText, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  profile.linkedin
    ? { label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin, icon: Linkedin }
    : null,
  profile.github
    ? { label: "GitHub", value: "See the code", href: profile.github, icon: Github }
    : null,
  profile.resumeAvailable
    ? { label: "Resume", value: "Download PDF", href: profile.resumeUrl, icon: FileText }
    : null,
].filter((c): c is { label: string; value: string; href: string; icon: typeof Mail } => c !== null);

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const result = contactSchema.safeParse({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    // No backend wired up: open the user's mail client with the message.
    const subject = encodeURIComponent(`Portfolio enquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client…");
    form.reset();
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none";

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            index="09"
            eyebrow="Contact"
            title="Let's Build Reliable Systems."
            description="Have a project, infrastructure challenge, or engineering opportunity? Let's talk."
          />

          <Reveal delay={0.08} className="mt-8 grid gap-3 sm:grid-cols-2">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="panel group flex items-center gap-3 p-4 transition-colors hover:border-primary/40"
              >
                <span className="rounded-md border border-border bg-background/60 p-2 text-primary">
                  <channel.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono type-label text-muted-foreground">
                    {channel.label.toUpperCase()}
                  </span>
                  <span className="block truncate text-sm text-foreground/90 group-hover:text-primary">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <form onSubmit={handleSubmit} noValidate className="panel space-y-4 p-6 sm:p-7">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono type-label text-muted-foreground"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={100}
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn(fieldClass, errors.name && "border-destructive/70")}
              />
              {errors.name ? (
                <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono type-label text-muted-foreground"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                autoComplete="email"
                placeholder="you@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={cn(fieldClass, errors.email && "border-destructive/70")}
              />
              {errors.email ? (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono type-label text-muted-foreground"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell me about the infrastructure challenge you're working on."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(fieldClass, "resize-none", errors.message && "border-destructive/70")}
              />
              {errors.message ? (
                <p id="message-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="glow-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {sent ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              Send Message
            </button>
            <p className="text-center type-badge text-muted-foreground">
              Submitting opens your email client — no data is stored.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
