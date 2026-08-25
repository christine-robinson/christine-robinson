export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

/** A role. Keep `impact` to 2–4 concise, scannable bullets. */
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  impact: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ArchitectureNode {
  label: string;
  description: string;
}

/** A named vertical flow rendered as A → B → C inside a case study. */
export interface ArchitectureFlow {
  title: string;
  steps: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  architecture: ArchitectureNode[];
  flows?: ArchitectureFlow[];
  decisions: string[];
  outcome: string;
  technologies: string[];
  link?: string;
}

export type InfraColumn = "delivery" | "platform" | "aws";

export interface InfraNode {
  id: string;
  label: string;
  tooltip: string;
  column: InfraColumn;
  /** ids of directly connected nodes — drives hover highlighting */
  connects: string[];
}

export interface ToolchainStage {
  stage: string;
  tools: string[];
  description: string;
}

export type LearningLevel = "Hands-on" | "Learning" | "Exploring";

export interface LearningItem {
  topic: string;
  focus: string;
  level: LearningLevel;
}

export interface Note {
  title: string;
  excerpt: string;
  tags: string[];
  status: "Coming soon" | "Published";
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "file";
}
