"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiBook, FiCode } from "react-icons/fi";
import Image from "next/image";

const highlights = [
  {
    icon: FiMapPin,
    label: "Location",
    value: "Vancouver, Canada",
  },
  {
    icon: FiBook,
    label: "Education",
    value: "BSc Computer Science — UBC",
  },
  {
    icon: FiCode,
    label: "Focus",
    value: "Full-Stack · ML · Cybersecurity",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section label */}
        <p className="font-mono text-accent-light text-sm mb-3">01. about me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate from UBC with a passion for
              building things that work at scale. My interests span full-stack web
              development, machine learning, and cybersecurity — and I love
              connecting all three in a single project.
            </p>
            <p>
              My most ambitious project to date is{" "}
              <a
                href="https://sportscript.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-white transition-colors"
              >
                SportScript
              </a>
              , a production-grade NBA player prop prediction engine using
              XGBoost &amp; LightGBM ensembles, a FastAPI backend, and a React/iOS
              frontend — running 24/7 via Cloudflare tunnel with automated daily
              ML pipelines.
            </p>
            <p>
              I also enjoy game development in Unity, contributing to university
              software infrastructure, and constantly expanding my toolkit — whether
              that&apos;s a new language, framework, or security tool.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-accent/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  {label === "Education" ? (
                    <Image src="https://www.ubc.ca/img/ubc-logo-2018-crest-yVERTICAL-blue282.svg" alt="UBC" width={28} height={28} unoptimized />
                  ) : (
                    <Icon size={18} className="text-accent-light" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* GitHub achievements */}
            <div className="p-4 rounded-xl bg-bg-card border border-white/5">
              <p className="text-xs text-text-muted mb-3">GitHub Achievements</p>
              <div className="flex flex-wrap gap-2">
                {["Pull Shark ×2", "Quickdraw", "YOLO"].map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs border border-accent/20"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
