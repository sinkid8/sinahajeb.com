"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "Bash", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Django", "REST APIs", "WebSockets", "APScheduler"],
  },
  {
    category: "Data & ML",
    skills: ["XGBoost", "LightGBM", "Pandas", "NumPy", "MLflow", "Alembic", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Vercel", "AWS ECS", "Cloudflare", "GitHub Actions", "Linux", "macOS launchd"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "Security & Tools",
    skills: ["Kali Linux", "Wireshark", "Burp Suite", "Git", "Unity", "Unreal Engine", "Capacitor"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent-light text-sm mb-3">02. skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-6 rounded-2xl bg-bg-card border border-white/5 hover:border-accent/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-accent-light mb-4 font-mono">
                {group.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 text-xs hover:bg-accent/15 hover:text-accent-light transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
