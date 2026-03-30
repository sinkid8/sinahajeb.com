"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-mono text-accent-light text-lg font-bold tracking-tight hover:text-white transition-colors"
        >
          sina<span className="text-white">.</span>dev
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-light group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://github.com/sinkid8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-accent/50 text-accent-light text-sm hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 hover:bg-accent/25 text-accent-light text-sm font-medium transition-all duration-200"
          >
            <FiDownload size={13} />
            Resume
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-muted hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/sinkid8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-white transition-colors py-1"
              >
                GitHub ↗
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
