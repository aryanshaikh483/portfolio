import FadeSection from "../ui/FadeSection";

const projects = [
  {
    num: "01",
    title: "Pocket Specter",
    subtitle: "AI-Powered Legal Assistant",
    description: "An AI-driven legal assistant simplifying Indian legal processes using NLP. Generates FIRs, legal notices, and RTI applications through a conversational chatbot interface.",
    bullets: ["FIR, legal notice & RTI generation", "Conversational chatbot interface", "Built with FastAPI & MongoDB"],
    tags: ["FastAPI", "MongoDB", "NLP", "Python"],
    accent: "#a78bfa",
    github: "https://github.com/aryanshaikh483",
  },
  {
    num: "02",
    title: "Dynamic Slug Routing",
    subtitle: "URL Architecture for SEO at Scale",
    description: "Robust slug-based routing architecture using React Router v6, enabling clean, crawlable URLs for hundreds of programmatic pages with nested routes and location-based hierarchies.",
    bullets: ["/locations/:locationSlug and /:slug routing", "React Router v6 nested route architecture", "URL normalization & 404 handling"],
    tags: ["React Router v6", "JavaScript", "SEO"],
    accent: "#fb923c",
    github: "https://github.com/aryanshaikh483",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-8 md:px-16 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4 block">03 / Projects</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-16 leading-none tracking-tight">PROJECTS</h2>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <FadeSection key={p.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass glass-lift rounded-2xl p-8 h-full flex flex-col group">
                {/* Accent top bar */}
                <div className="h-0.5 w-16 rounded-full mb-6" style={{ backgroundColor: p.accent }} />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: p.accent }}>{p.subtitle}</p>
                    <h3 className="text-white text-2xl font-black group-hover:text-zinc-300 transition-colors duration-200">{p.title}</h3>
                  </div>
                  <span className="text-6xl font-black leading-none ml-4 shrink-0" style={{ color: `${p.accent}15` }}>{p.num}</span>
                </div>

                <p className="text-zinc-500 text-base leading-relaxed mb-5">{p.description}</p>

                <ul className="flex flex-col gap-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-zinc-500 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 border rounded-lg" style={{ borderColor: `${p.accent}30`, color: p.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors duration-200">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
