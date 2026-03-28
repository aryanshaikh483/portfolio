import { motion } from "framer-motion";
import FadeSection from "../ui/FadeSection";

const experiences = [
  {
    role: "SEO & Frontend Associate",
    company: "Scrapiz",
    type: "Internship",
    period: "Feb 2026 – Present",
    duration: "2 mos",
    location: "Mumbai, Maharashtra · Remote",
    description:
      "SEO strategy and frontend optimization — improving search visibility, keyword reach, page scalability, and overall user experience.",
    tags: ["Front-End Development", "SEO"],
    accent: "#a78bfa",
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-3 block">
            02 / Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Where I've{" "}
            <span className="bg-linear-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              worked.
            </span>
          </h2>
        </FadeSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/40 via-violet-500/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((e, i) => (
              <FadeSection key={e.role} delay={i * 0.1}>
                <div className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-violet-500 bg-[#0d0d14] shadow-lg shadow-violet-500/30" />
                    {e.current && (
                      <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse mt-1" />
                    )}
                  </div>

                  <div className="glass glass-slide rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-4">
                        {/* Company logo */}
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-md">
                          <img src="/scrapiz.svg" alt="Scrapiz" width="48" height="48" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-white text-xl font-bold">{e.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[#2ea82e] font-semibold text-base">{e.company}</span>
                            <span className="text-zinc-600">·</span>
                            <span className="text-zinc-500 text-sm">{e.type}</span>
                          </div>
                        </div>
                      </div>

                      {e.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-zinc-500 mb-4">
                      <span>{e.period} · {e.duration}</span>
                      <span>{e.location}</span>
                    </div>

                    <p className="text-zinc-300 text-base leading-relaxed mb-4">
                      {e.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="text-sm px-3 py-1 rounded-lg border"
                          style={{
                            borderColor: `${e.accent}30`,
                            color: e.accent,
                            backgroundColor: `${e.accent}10`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
