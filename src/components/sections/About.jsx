import { motion } from "framer-motion";
import FadeSection from "../ui/FadeSection";

const highlights = [
  { icon: "🎓", title: "B.E. Computer Engineering", sub: "Rizvi College of Engineering, 2026" },
  { icon: "☁️", title: "AWS Academy Graduate", sub: "Cloud Foundations — Apr 2025" },
  { icon: "🏆", title: "Hackathon — Webcade 2024", sub: "St. John College of Engineering, Sept 2024" },
  { icon: "📊", title: "SQL Query Optimization", sub: "Simplilearn SkillUp — Apr 2025" },
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
            <div className="h-full rounded-2xl border border-white/8 bg-white/3 p-8">
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
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3"
                  style={{ transition: "border-color 120ms ease, background-color 120ms ease" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)"; e.currentTarget.style.backgroundColor = "rgba(139,92,246,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.backgroundColor = ""; }}
                >
                  <span className="text-2xl mt-0.5">{h.icon}</span>
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
