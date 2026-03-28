import { motion } from "framer-motion";
import FadeSection from "../ui/FadeSection";

const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
      </svg>
    ),
    title: "B.E. Computer Engineering", sub: "Rizvi College of Engineering, 2026"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    title: "AWS Academy Graduate", sub: "Cloud Foundations — Apr 2025"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    title: "Hackathon — Webcade 2024", sub: "St. John College of Engineering, Sept 2024"
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.6">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "SQL Query Optimization", sub: "Simplilearn SkillUp — Apr 2025"
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-3 block">
            01 / About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Who I am &amp;{" "}
            <span className="bg-linear-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              what I do.
            </span>
          </h2>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <FadeSection delay={0.1}>
            <div className="glass glass-lift h-full rounded-2xl p-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-5">
                <span className="text-white font-semibold">Aryan Amjad Shaikh</span> — CSE student at{" "}
                <span className="text-violet-400">Rizvi College of Engineering</span>.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-5">
                Skilled in <span className="text-white">SEO and full-stack development</span>.
                I build data-driven and AI-powered solutions to real-world problems.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                Exploring <span className="text-orange-400">cloud computing & DevOps</span>.
                Open to Full Stack Development and SEO roles.
              </p>
            </div>
          </FadeSection>

          {/* Education & Certs */}
          <FadeSection delay={0.2}>
            <div className="grid grid-cols-1 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="glass flex items-start gap-4 p-4 rounded-xl"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)"; e.currentTarget.style.backgroundColor = "rgba(139,92,246,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.backgroundColor = ""; }}
                >
                  <span className="mt-0.5 shrink-0">{h.icon}</span>
                  <div>
                    <div className="text-white text-base font-semibold">{h.title}</div>
                    <div className="text-zinc-500 text-sm mt-0.5">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
