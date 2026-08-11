import type {
  CaseStudy,
  ExperienceItem,
  InfraNode,
  LearningItem,
  Metric,
  NavItem,
  Note,
  SkillCategory,
  SocialLink,
  ToolchainStage,
} from "@/types/portfolio";

/**
 * ─────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT.
 * Every string the UI renders comes from this file.
 * No metrics are invented here — add real numbers only if you
 * can back them up. Qualitative wording is used by default.
 * Fields marked [EDIT] are placeholders you should replace.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Christine Robinson S",
  brand: "christine.dev",
  role: "DevOps / Cloud Engineer",
  badge: "DEVOPS / CLOUD ENGINEER · 3+ YEARS",
  availability: "Open to opportunities",
  headline: "Building Reliable Infrastructure for Modern Applications.",
  subheadline:
    "DevOps / Cloud Engineer focused on AWS, Kubernetes, Infrastructure as Code, CI/CD, GitOps, observability, and production automation.",
  experience: "3+ Years",
  location: "Bengaluru, India",
  email: "christinerobinson.dev@gmail.com",
  github: "https://github.com/christine-robinson",
  linkedin: "https://www.linkedin.com/in/christine-robinson-s/",
  /** Place resume.pdf in /public and flip this to true. */
  resumeUrl: "/resume.pdf",
  resumeAvailable: false,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

/**
 * Illustrative terminal output — presented as portfolio UI, not as a
 * claim about a live cluster. Keep it realistic and metric-free.
 */
export const terminalBlocks: {
  command: string;
  rows: { key: string; value: string }[];
}[] = [
  {
    command: "kubectl get pods -A",
    rows: [
      { key: "platform", value: "Running" },
      { key: "monitoring", value: "Running" },
      { key: "ingress", value: "Running" },
    ],
  },
  {
    command: "terraform validate",
    rows: [{ key: "configuration", value: "Success" }],
  },
  {
    command: "argocd app list",
    rows: [{ key: "sync status", value: "Synced" }],
  },
];

export const metrics: Metric[] = [
  { value: "3+", label: "Years Experience" },
  { value: "AWS", label: "Cloud Platform" },
  { value: "Kubernetes", label: "Orchestration" },
  { value: "GitOps", label: "Delivery Model" },
];

export const about = {
  title: "Engineering Systems, Not Just Deployments.",
  paragraphs: [
    "I work on the layer applications depend on: AWS accounts and networking, EKS clusters, the pipelines that ship to them, and the dashboards and alerts that tell us when something is off.",
    "Most of my day is spent making infrastructure reproducible — Terraform and Terragrunt for what AWS runs, Helm and ArgoCD for what the cluster runs, GitHub Actions for everything in between. If a change can't be reviewed in a pull request, it usually shouldn't happen.",
    "The rest is operations: tracing a failing deploy, tuning autoscaling, tightening IAM, and turning noisy incidents into monitoring that catches the problem earlier next time.",
  ],
  focus: [
    "Cloud infrastructure",
    "Kubernetes",
    "Infrastructure as Code",
    "CI/CD",
    "GitOps",
    "Observability",
    "Automation",
    "Production operations",
  ],
};

/** Verified career history. Refine individual bullets freely. */
export const experience: ExperienceItem[] = [
  {
    role: "Senior DevOps Engineer",
    company: "Signeasy",
    location: "Bengaluru, India",
    period: "July 2025 – Present",
    current: true,
    summary:
      "Working on AWS cloud infrastructure, Kubernetes platform operations and GitOps-based delivery for production workloads.",
    impact: [
      "Managed AWS infrastructure through Terraform and Terragrunt, keeping environments reproducible and reviewable.",
      "Operated production EKS workloads — autoscaling with Karpenter, ingress through Kong, releases through Helm and ArgoCD.",
      "Maintained observability with Prometheus, Grafana and Loki, and supported troubleshooting of production issues.",
      "Worked on pipeline security and access hygiene using Trivy, SonarQube and scoped IAM permissions.",
    ],
    technologies: [
      "AWS",
      "EKS",
      "Terraform",
      "Terragrunt",
      "Helm",
      "ArgoCD",
      "Karpenter",
      "Kong",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Energetics AI",
    location: "Chennai, India",
    period: "May 2023 – June 2025",
    summary:
      "Supported cloud infrastructure, containerised workloads and automated delivery pipelines across environments.",
    impact: [
      "Provisioned and maintained AWS infrastructure with Terraform instead of manual console changes.",
      "Containerised services with Docker and deployed them to Kubernetes using Helm.",
      "Automated build and release workflows with GitHub Actions and Jenkins, including quality and vulnerability gates.",
      "Set up metrics and log collection with Prometheus, Grafana and Loki to give teams visibility into their services.",
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "SonarQube",
      "Trivy",
      "Prometheus",
      "Grafana",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud",
    description: "AWS infrastructure design and day-to-day operations",
    icon: "cloud",
    skills: ["AWS", "EKS", "EC2", "S3", "CloudFront", "Route53", "ACM", "EBS", "EFS"],
  },
  {
    name: "Containers & Orchestration",
    description: "Packaging, scheduling and scaling workloads",
    icon: "box",
    skills: ["Docker", "Kubernetes", "Helm", "Karpenter", "Cluster Autoscaler", "Kong"],
  },
  {
    name: "Infrastructure as Code",
    description: "Reproducible, reviewed, versioned infrastructure",
    icon: "code",
    skills: ["Terraform", "Terragrunt"],
  },
  {
    name: "CI/CD & GitOps",
    description: "Automated delivery from commit to cluster",
    icon: "gitbranch",
    skills: ["GitHub Actions", "ArgoCD", "Jenkins"],
  },
  {
    name: "Observability",
    description: "Metrics, logs and actionable alerting",
    icon: "activity",
    skills: ["Prometheus", "Grafana", "Loki"],
  },
  {
    name: "Security",
    description: "Scanning in the pipeline and least-privilege access",
    icon: "shield",
    skills: ["SonarQube", "Trivy", "IAM"],
  },
  {
    name: "Programming & Automation",
    description: "Automation, tooling and glue code",
    icon: "terminal",
    skills: ["Python", "Bash", "TypeScript"],
  },
  {
    name: "Developer Tools",
    description: "Daily engineering environment",
    icon: "wrench",
    skills: ["Git", "GitHub", "Linux"],
  },
];

/**
 * Engineering case studies drawn from professional work — not
 * independent commercial products.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "eks-platform",
    title: "EKS Platform on AWS",
    tagline:
      "Running application workloads on EKS with infrastructure, delivery and observability defined in code.",
    problem:
      "Application teams needed a consistent place to run services across environments, without hand-configured clusters or one-off changes made directly against AWS.",
    approach:
      "Worked on an EKS setup described entirely in Terraform and Terragrunt, with workloads packaged as Helm charts and delivered by ArgoCD. Karpenter handles node capacity, Kong handles ingress, and Prometheus, Grafana and Loki cover metrics and logs.",
    architecture: [
      {
        label: "Terraform / Terragrunt",
        description: "Environment-scoped modules with isolated state",
      },
      { label: "AWS", description: "VPC, subnets, IAM, DNS, certificates and storage" },
      { label: "AWS EKS", description: "Managed control plane with private worker networking" },
      {
        label: "Kubernetes workloads",
        description: "Services deployed as versioned Helm releases",
      },
      { label: "Ingress (Kong)", description: "Routing, TLS termination and traffic policy" },
      { label: "Application", description: "The workload serving end users" },
    ],
    flows: [
      {
        title: "Infrastructure",
        steps: [
          "Infrastructure as Code",
          "AWS",
          "EKS",
          "Kubernetes workloads",
          "Ingress",
          "Application",
        ],
      },
      {
        title: "Delivery",
        steps: [
          "GitHub",
          "GitHub Actions",
          "Quality / Security",
          "Container image",
          "ArgoCD",
          "EKS",
        ],
      },
      { title: "Metrics", steps: ["EKS", "Prometheus", "Grafana"] },
      { title: "Logs", steps: ["EKS", "Loki", "Grafana"] },
    ],
    decisions: [
      "Terragrunt to keep environments DRY while isolating Terraform state",
      "Karpenter for node provisioning so capacity follows actual pod demand",
      "ArgoCD as the single deployment path instead of ad-hoc kubectl applies",
      "IRSA for pod-level AWS permissions rather than node-wide roles",
    ],
    outcome:
      "Environments can be recreated from code, deployments follow one reviewable path, and cluster and application behaviour is visible in shared dashboards.",
    technologies: [
      "AWS",
      "EKS",
      "Terraform",
      "Terragrunt",
      "Helm",
      "ArgoCD",
      "Karpenter",
      "Kong",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
  {
    id: "gitops-delivery",
    title: "GitOps Delivery Pipeline",
    tagline: "Commit to cluster through automated build, quality and security gates.",
    problem:
      "Releases depended on manual steps and local tooling, which made them slow to repeat and inconsistent between environments.",
    approach:
      "Implemented a pipeline where GitHub Actions builds and tests each change, SonarQube and Trivy gate quality and vulnerabilities, images are published to a registry, and ArgoCD reconciles the declared state into the cluster.",
    architecture: [
      { label: "GitHub", description: "Source of truth for application code and manifests" },
      { label: "GitHub Actions", description: "Build, test and package on every change" },
      {
        label: "SonarQube / Trivy",
        description: "Code quality gate and image vulnerability scanning",
      },
      { label: "Container registry", description: "Versioned, immutable images" },
      { label: "ArgoCD", description: "Continuous reconciliation from Git" },
      { label: "AWS EKS", description: "Rolling deployment into the target cluster" },
    ],
    decisions: [
      "Pull-based delivery so cluster credentials never live in CI",
      "Image digests over mutable tags for traceable rollouts",
      "Security and quality checks placed before publishing, not after",
      "Environment promotion through pull requests, so changes stay auditable",
    ],
    outcome:
      "Shipping became a reviewable, repeatable workflow, and rollbacks are a Git operation rather than a manual recovery exercise.",
    technologies: [
      "GitHub Actions",
      "ArgoCD",
      "SonarQube",
      "Trivy",
      "Docker",
      "Helm",
      "Kubernetes",
    ],
  },
  {
    id: "iac-automation",
    title: "Infrastructure as Code Automation",
    tagline: "Standardised AWS environments composed from reusable Terraform modules.",
    problem:
      "Environments drifted apart because pieces of infrastructure were created by hand at different times by different people.",
    approach:
      "Standardised networking, compute, identity, storage, DNS and delivery into reusable Terraform modules, composed per environment with Terragrunt and reviewed through plan output on every pull request.",
    architecture: [
      { label: "VPC", description: "Multi-AZ networking with public and private subnet tiers" },
      { label: "EKS", description: "Cluster module with managed add-ons" },
      { label: "IAM", description: "Scoped roles and IRSA bindings" },
      { label: "S3 / EBS / EFS", description: "Object, block and shared file storage" },
      { label: "CloudFront / Route53 / ACM", description: "Edge delivery, DNS and certificates" },
    ],
    decisions: [
      "Versioned modules so environments upgrade deliberately",
      "Remote state with locking and per-environment isolation",
      "Tagging and naming conventions enforced in code",
      "Terraform plan reviewed on every pull request before apply",
    ],
    outcome:
      "New environments are composed from known-good modules, and infrastructure changes are reviewed the same way application changes are.",
    technologies: ["Terraform", "Terragrunt", "AWS", "IAM", "Route53", "CloudFront", "S3"],
  },
  {
    id: "observability",
    title: "Observability for Kubernetes Workloads",
    tagline: "Metrics, logs and dashboards available by default for every service.",
    problem:
      "Debugging production issues meant checking individual pods and scattered logs, which slowed down troubleshooting.",
    approach:
      "Deployed Prometheus, Grafana and Loki with Helm, wired workloads into metric scraping and log shipping, and built shared dashboards and alerts around service behaviour.",
    architecture: [
      { label: "Prometheus", description: "Scrapes cluster and workload metrics" },
      { label: "Loki", description: "Aggregates container logs with label-based queries" },
      { label: "Grafana", description: "Shared dashboards for metrics and logs" },
      { label: "Alerting", description: "Routing by severity and service ownership" },
    ],
    decisions: [
      "Alert on user-visible symptoms rather than raw resource noise",
      "Dashboards provisioned as code so they survive cluster changes",
      "Log retention tiers to keep storage predictable",
      "One place to correlate metrics and logs during an incident",
    ],
    outcome:
      "Issues are investigated from dashboards and log queries instead of ad-hoc pod inspection, which shortens the path from alert to root cause.",
    technologies: ["Prometheus", "Grafana", "Loki", "Helm", "Kubernetes"],
  },
];

/** Interactive architecture graph. `connects` drives hover highlighting. */
export const infraNodes: InfraNode[] = [
  // Delivery path
  {
    id: "developer",
    label: "Developer",
    tooltip: "Writes code and opens a pull request — the entry point to every change.",
    column: "delivery",
    connects: ["github"],
  },
  {
    id: "github",
    label: "GitHub",
    tooltip: "Source of truth for application code, Helm charts and manifests.",
    column: "delivery",
    connects: ["developer", "actions"],
  },
  {
    id: "actions",
    label: "GitHub Actions",
    tooltip: "Builds, tests and packages the workload on every change.",
    column: "delivery",
    connects: ["github", "scanning"],
  },
  {
    id: "scanning",
    label: "SonarQube / Trivy",
    tooltip: "Code quality gate and container image vulnerability scanning.",
    column: "delivery",
    connects: ["actions", "registry"],
  },
  {
    id: "registry",
    label: "Container Registry",
    tooltip: "Stores versioned, immutable container images.",
    column: "delivery",
    connects: ["scanning", "argocd"],
  },
  {
    id: "argocd",
    label: "ArgoCD",
    tooltip: "Reconciles the cluster with the state declared in Git.",
    column: "delivery",
    connects: ["registry", "eks"],
  },
  {
    id: "eks",
    label: "AWS EKS",
    tooltip: "Managed Kubernetes control plane running application workloads.",
    column: "delivery",
    connects: [
      "argocd",
      "workloads",
      "karpenter",
      "kong",
      "prometheus",
      "loki",
      "vpc",
      "ebs",
      "efs",
    ],
  },
  {
    id: "workloads",
    label: "Kubernetes Workloads",
    tooltip: "Deployments, services and jobs serving application traffic.",
    column: "delivery",
    connects: ["eks", "kong", "users"],
  },
  {
    id: "users",
    label: "Users",
    tooltip: "Traffic reaching the application through DNS, CDN and ingress.",
    column: "delivery",
    connects: ["workloads", "route53", "cloudfront", "alb"],
  },

  // Platform around the cluster
  {
    id: "karpenter",
    label: "Karpenter",
    tooltip: "Provisions and consolidates nodes based on pending pod demand.",
    column: "platform",
    connects: ["eks"],
  },
  {
    id: "kong",
    label: "Kong",
    tooltip: "Ingress gateway handling routing, TLS and traffic policy.",
    column: "platform",
    connects: ["eks", "workloads", "alb"],
  },
  {
    id: "prometheus",
    label: "Prometheus",
    tooltip: "Scrapes and stores metrics from the cluster and workloads.",
    column: "platform",
    connects: ["eks", "grafana"],
  },
  {
    id: "loki",
    label: "Loki",
    tooltip: "Aggregates container logs with label-based queries.",
    column: "platform",
    connects: ["eks", "grafana"],
  },
  {
    id: "grafana",
    label: "Grafana",
    tooltip: "Dashboards for metrics and logs in one place.",
    column: "platform",
    connects: ["prometheus", "loki"],
  },

  // AWS infrastructure
  {
    id: "vpc",
    label: "VPC",
    tooltip: "Multi-AZ networking with segmented public and private subnets.",
    column: "aws",
    connects: ["eks", "alb"],
  },
  {
    id: "route53",
    label: "Route53",
    tooltip: "DNS records resolving traffic to the edge and load balancer.",
    column: "aws",
    connects: ["users", "cloudfront", "alb"],
  },
  {
    id: "alb",
    label: "ALB",
    tooltip: "Distributes inbound traffic to the ingress gateway and terminates TLS.",
    column: "aws",
    connects: ["kong", "route53", "vpc", "users"],
  },
  {
    id: "cloudfront",
    label: "CloudFront",
    tooltip: "Edge caching for static assets and cached responses.",
    column: "aws",
    connects: ["route53", "s3", "users"],
  },
  {
    id: "s3",
    label: "S3",
    tooltip: "Object storage for assets, artifacts and backups.",
    column: "aws",
    connects: ["cloudfront"],
  },
  {
    id: "ebs",
    label: "EBS",
    tooltip: "Block storage for stateful pods through the CSI driver.",
    column: "aws",
    connects: ["eks"],
  },
  {
    id: "efs",
    label: "EFS",
    tooltip: "Shared file storage for workloads that need it across nodes.",
    column: "aws",
    connects: ["eks"],
  },
];

export const toolchain: ToolchainStage[] = [
  {
    stage: "Code",
    tools: ["GitHub"],
    description: "Version control, reviews and branch protection.",
  },
  {
    stage: "Build",
    tools: ["GitHub Actions"],
    description: "Reproducible builds on every commit.",
  },
  { stage: "Test", tools: ["GitHub Actions"], description: "Automated checks as a release gate." },
  {
    stage: "Security",
    tools: ["SonarQube", "Trivy"],
    description: "Quality gates and vulnerability scanning.",
  },
  { stage: "Containerize", tools: ["Docker"], description: "Minimal, immutable container images." },
  {
    stage: "Deploy",
    tools: ["ArgoCD", "Kubernetes"],
    description: "GitOps reconciliation into the cluster.",
  },
  {
    stage: "Observe",
    tools: ["Prometheus", "Grafana", "Loki"],
    description: "Metrics, logs, dashboards and alerts.",
  },
];

/** No certifications are claimed here. Update levels as they change. */
export const learning: LearningItem[] = [
  { topic: "AWS", focus: "Networking, IAM and cost-aware architecture", level: "Hands-on" },
  {
    topic: "Kubernetes",
    focus: "Cluster operations, scheduling and troubleshooting",
    level: "Hands-on",
  },
  {
    topic: "Terraform",
    focus: "Module design, state strategy and drift management",
    level: "Hands-on",
  },
  {
    topic: "Cloud Architecture",
    focus: "Reliability and multi-environment design patterns",
    level: "Learning",
  },
  {
    topic: "DevOps Practices",
    focus: "Platform engineering and developer experience",
    level: "Exploring",
  },
];

/** Planned writing. Set status to "Published" and add href when live. */
export const notes: Note[] = [
  {
    title: "Kubernetes in Production",
    excerpt: "What actually breaks in production clusters, and the guardrails that prevent it.",
    tags: ["Kubernetes", "Reliability"],
    status: "Coming soon",
  },
  {
    title: "Terraform Module Boundaries",
    excerpt: "Where to split modules, how to isolate state, and review workflows that scale.",
    tags: ["Terraform", "IaC"],
    status: "Coming soon",
  },
  {
    title: "Pull-based GitOps Delivery",
    excerpt: "Why the cluster should pull from Git instead of CI pushing credentials around.",
    tags: ["GitOps", "ArgoCD"],
    status: "Coming soon",
  },
  {
    title: "Scaling Nodes with Karpenter",
    excerpt: "Provisioning and consolidation behaviour, and what to watch when tuning it.",
    tags: ["Kubernetes", "AWS"],
    status: "Coming soon",
  },
  {
    title: "Observability Worth Paging For",
    excerpt: "Designing metrics and alerts around symptoms instead of dashboards nobody reads.",
    tags: ["Prometheus", "Grafana"],
    status: "Coming soon",
  },
  {
    title: "Security Gates in CI",
    excerpt: "Adding scanning to pipelines without turning delivery into a bottleneck.",
    tags: ["Security", "CI/CD"],
    status: "Coming soon",
  },
];
