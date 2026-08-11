import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Work } from "@/components/work/Work";
import { Infrastructure } from "@/components/infrastructure/Infrastructure";
import { Toolchain } from "@/components/toolchain/Toolchain";
import { Learning } from "@/components/learning/Learning";
import { Notes } from "@/components/notes/Notes";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CursorGlow } from "@/components/common/CursorGlow";
import { profile } from "@/data/portfolio";

const TITLE = `${profile.name} | DevOps / Cloud Engineer`;
const DESCRIPTION =
  "DevOps / Cloud Engineer with 3+ years of experience working with AWS, Kubernetes, Infrastructure as Code, CI/CD, GitOps and observability.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressCountry: "IN",
          },
          sameAs: [profile.github, profile.linkedin].filter(Boolean),
          knowsAbout: [
            "AWS",
            "Kubernetes",
            "Terraform",
            "Terragrunt",
            "CI/CD",
            "GitOps",
            "Observability",
            "Infrastructure as Code",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-dvh">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Infrastructure />
        <Toolchain />
        <Learning />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
