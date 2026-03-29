"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail, FiExternalLink } from "react-icons/fi";

const links = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/sinkid8",
    href: "https://github.com/sinkid8",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "sinahajeb@icloud.com",
    href: "mailto:sinahajeb@icloud.com",
  },
  {
    icon: FiExternalLink,
    label: "Live Project",
    value: "sportscript.app",
    href: "https://sportscript.app",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-bg-card/30">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent-light text-sm mb-3">04. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed">
            I&apos;m actively looking for co-op / internship and full-time opportunities.
            Whether you have a role in mind, a project idea, or just want to chat —
            my inbox is always open.
          </p>

          <a
            href="mailto:sinahajeb@icloud.com"
            className="inline-block px-10 py-4 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1 mb-14"
          >
            Say Hello →
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2.5 text-text-muted hover:text-white transition-colors"
              >
                <Icon size={17} className="text-accent-light group-hover:text-white transition-colors" />
                <span className="text-sm">{value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
