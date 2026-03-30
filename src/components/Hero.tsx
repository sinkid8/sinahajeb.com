"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent-light text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Sina{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a5b4fc 100%)",
            }}
          >
            Hajeb
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-muted mb-6 font-light"
        >
          Full-Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;ML Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Cybersecurity Learner
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-text-muted text-base md:text-lg mb-10 leading-relaxed"
        >
          Computer Science student at UBC Okanagan building production-grade apps —
          from ML-powered sports prediction engines to full-stack web platforms.
          Based in Vancouver, Canada.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          <a
            href="https://github.com/sinkid8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="mailto:sinaha8@yahoo.ca"
            className="text-text-muted hover:text-white transition-colors"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
          <a
            href="https://sportscript.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-accent-light/70 hover:text-accent-light border border-accent/20 hover:border-accent/40 px-3 py-1 rounded transition-all duration-200"
          >
            sportscript.app ↗
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
