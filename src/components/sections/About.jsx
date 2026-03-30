import FadeSection from "../ui/FadeSection";

const highlights = [
  { year: "2022–2026", title: "B.E. Computer Engineering",  sub: "Rizvi College of Engineering" },
  { year: "Apr 2025",  title: "AWS Academy Graduate",       sub: "Cloud Foundations" },
  { year: "Sept 2024", title: "Hackathon — Webcade 2024",   sub: "St. John College of Engineering" },
  { year: "Apr 2025",  title: "SQL Query Optimization",     sub: "Simplilearn SkillUp" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-8 md:px-16 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4 block">01 / About</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-16 leading-none tracking-tight">ABOUT</h2>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio card */}
          <FadeSection delay={0.1} direction="left">
            <div className="glass rounded-2xl p-8 h-full">
              <p className="text-white text-2xl font-bold mb-5">Aryan Amjad Shaikh</p>
              <p className="text-zinc-300 text-base leading-relaxed mb-4">
                CSE student at <span className="text-violet-400">Rizvi College of Engineering</span>, Mumbai.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-4">
                Skilled in SEO and full-stack development. I build data-driven and AI-powered solutions to real-world problems.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                Exploring cloud computing & DevOps. Open to Full Stack Development and SEO roles.
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2">
                <p className="text-zinc-500 text-sm">Mumbai, Maharashtra</p>
                <p className="text-zinc-500 text-sm">aryanshaikh483@gmail.com</p>
              </div>
            </div>
          </FadeSection>

          {/* Timeline card */}
          <FadeSection delay={0.2} direction="right">
            <div className="glass rounded-2xl p-8 h-full">
              <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">Education & Achievements</p>
              {highlights.map((h, i) => (
                <FadeSection key={h.title} delay={0.25 + i * 0.08}>
                  <div className="flex gap-8 py-5 border-b border-white/5 last:border-0 group">
                    <span className="text-zinc-600 text-sm w-24 shrink-0 pt-0.5">{h.year}</span>
                    <div>
                      <div className="text-white text-base font-semibold group-hover:text-violet-400 transition-colors duration-200 mb-1">{h.title}</div>
                      <div className="text-zinc-500 text-sm">{h.sub}</div>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
