import FadeSection from "../ui/FadeSection";

const experiences = [
  {
    role: "SEO & Frontend Associate",
    company: "Scrapiz",
    type: "Internship",
    period: "Feb 2026 – Present",
    location: "Mumbai, Maharashtra · Remote",
    description: "SEO strategy and frontend optimization — improving search visibility, keyword reach, page scalability, and overall user experience.",
    tags: ["Front-End Development", "SEO"],
    current: true,
  },
];

const education = [
  { degree: "B.E. Computer Science & Engineering", school: "Rizvi College of Engineering", period: "2022 – 2026" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-8 md:px-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4 block">02 / Experience</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-16 leading-none tracking-tight">EXPERIENCE</h2>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience card */}
          <FadeSection delay={0.1} direction="left">
            <div className="glass rounded-2xl p-8 h-full">
              {experiences.map((e) => (
                <div key={e.role}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-white/5 flex items-center justify-center">
                      <img src="/scrapiz.svg" alt="Scrapiz" width="56" height="56" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <h3 className="text-white text-xl font-bold">{e.role}</h3>
                        {e.current && (
                          <span className="flex items-center gap-1.5 text-sm text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-violet-400 text-sm font-medium">{e.company} · {e.type}</p>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">{e.period} · {e.location}</p>
                  <p className="text-zinc-400 text-base leading-relaxed mb-5">{e.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="text-sm px-3 py-1 border border-violet-500/20 text-violet-400 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Education + stats card */}
          <FadeSection delay={0.2} direction="right">
            <div className="glass rounded-2xl p-8 h-full flex flex-col gap-8">
              <div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">Education</p>
                {education.map((e) => (
                  <div key={e.degree} className="border-b border-white/5 pb-6">
                    <p className="text-zinc-500 text-sm tracking-widest uppercase mb-2">{e.period}</p>
                    <h4 className="text-white text-xl font-bold mb-1">{e.degree}</h4>
                    <p className="text-zinc-500 text-base">{e.school}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-2">
                {[
                  { num: "3+", label: "Years Coding" },
                  { num: "2",  label: "Projects" },
                  { num: "2",  label: "Certifications" },
                ].map((s, i) => (
                  <FadeSection key={s.label} delay={0.35 + i * 0.08}>
                    <div>
                      <div className="text-5xl font-black text-white mb-2">{s.num}</div>
                      <div className="text-zinc-600 text-xs tracking-widest uppercase">{s.label}</div>
                    </div>
                  </FadeSection>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
