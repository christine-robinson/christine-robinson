import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const LINKS = [
  profile.github
    ? { label: "GitHub", href: profile.github, icon: Github }
    : null,
  profile.linkedin
    ? { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }
    : null,
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
].filter(
  (l): l is { label: string; href: string; icon: typeof Mail } => l !== null,
);

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-foreground">
            Designed &amp; Engineered by {profile.name}.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              aria-label={link.label}
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <link.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
