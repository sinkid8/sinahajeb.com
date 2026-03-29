"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "SportScript — NBA Prediction Engine",
    description:
      "End-to-end NBA player prop prediction platform running 24/7 in production. Ingests real-time schedules, box scores, and betting odds from multiple providers. Trains per-player/per-stat XGBoost + LightGBM ensembles with ELO ratings and uncertainty-aware value bet detection (A/B/C tiers).",
    tech: ["Python", "FastAPI", "XGBoost", "LightGBM", "React", "Vite", "PostgreSQL", "Docker", "Cloudflare"],
    github: "https://github.com/sinkid8",
    live: "https://sportscript.app",
    featured: true,
    badge: "Production · Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
  },
  {
    name: "TA Allocation System",
    description:
      "Web application for the UBCO Science Department to manage teaching assistant allocations. Streamlines the TA assignment workflow across courses, instructors, and departments — replacing a manual spreadsheet process.",
    tech: ["Full-Stack", "Web App", "University"],
    github: "https://github.com/sinkid8/TA-alloc",
    live: null,
    featured: true,
    badge: "Full-Stack",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  {
    name: "Plagiarism Detector",
    description:
      "Python-based tool that uses NLP techniques to detect text similarity and potential plagiarism. Compares documents using cosine similarity and other string-matching algorithms to flag suspicious content.",
    tech: ["Python", "NLP", "Text Analysis"],
    github: "https://github.com/sinkid8/Plagirism-Detector",
    live: null,
    featured: false,
    badge: "Python · NLP",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  },
  {
    name: "River Raid Remake",
    description:
      "A modern reimagining of the classic Atari River Raid arcade game built in Unity. Features updated visuals, smooth controls, and improved game mechanics while staying true to the original gameplay loop.",
    tech: ["Unity", "C#", "Game Dev"],
    github: "https://github.com/sinkid8/River-Raid-Remake",
    live: null,
    featured: false,
    badge: "Unity · C#",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  },
  {
    name: "Bowling Game (Unity)",
    description:
      "A 3D bowling game developed in Unity for a game development studio course. Implements realistic physics, pin collision, and scoring logic with polished UI and sound design.",
    tech: ["Unity", "C#", "3D Physics"],
    github: "https://github.com/sinkid8/BowlingGame",
    live: null,
    featured: false,
    badge: "Unity · 3D",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    name: "Breakout Game (Studio 5)",
    description:
      "Classic Breakout arcade game rebuilt in Unity as part of a game development series. Features custom shaders, particle effects, and progressive level difficulty.",
    tech: ["Unity", "C#", "Game Dev"],
    github: "https://github.com/sinkid8/Studio5",
    live: null,
    featured: false,
    badge: "Unity · C#",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-mono text-accent-light text-sm mb-3">03. projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What I&apos;ve Built
        </h2>
      </motion.div>

      {/* Featured projects */}
      <div className="space-y-6 mb-14">
        {featured.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-7 rounded-2xl bg-bg-card border border-white/5 hover:border-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/3 transition-colors duration-300 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-light transition-colors p-2 rounded-lg hover:bg-white/5"
                    aria-label="Live site"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent-light/80 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-mono text-text-muted mb-6"
      >
        Other Projects
      </motion.h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {others.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${project.badgeColor}`}
              >
                {project.badge}
              </span>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={17} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-light transition-colors"
                    aria-label="Live site"
                  >
                    <FiExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-white font-semibold mb-2 group-hover:text-accent-light transition-colors">
              {project.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all on GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/sinkid8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-light transition-colors text-sm group"
        >
          <FiGithub size={16} />
          View all repositories on GitHub
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </section>
  );
}
