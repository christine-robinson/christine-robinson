import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { MagneticLink } from "@/components/common/MagneticLink";
import { ParticleField } from "@/components/common/ParticleField";
import { HeroVisual } from "@/components/three/HeroVisual";
import { TerminalPanel } from "./TerminalPanel";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <ParticleField />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div initial="hidden" animate="show" custom={0} variants={fade}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-primary backdrop-blur-sm">
              {profile.badge}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
          >
            Building{" "}
            <span className="text-gradient">reliable infrastructure</span> for modern
            applications.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticLink href="#work">
              View My Work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </MagneticLink>
            {profile.resumeAvailable ? (
              <MagneticLink href={profile.resumeUrl} variant="outline" download>
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </MagneticLink>
            ) : null}
            <MagneticLink href="#contact" variant="outline">
              <Mail className="size-4" aria-hidden="true" />
              Let&apos;s Connect
            </MagneticLink>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="status-dot size-1.5 rounded-full bg-success" aria-hidden="true" />
              {profile.availability}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{profile.location}</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fade}
            className="mt-10"
          >
            <TerminalPanel />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
