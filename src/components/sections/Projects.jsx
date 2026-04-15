import FadeSection from "../ui/FadeSection";

const projects = [
  {
    num: "01",
    title: "Pocket Specter",
    subtitle: "AI-Powered Legal Assistant",
    description: "An AI-powered legal assistant for Indian law with a conversational chatbot interface. Supports multi-domain legal queries, document analysis via RAG, lawyer discovery, and structured legal guidance using the latest BNS/BNSS 2023 laws.",
    bullets: ["Multi-domain legal Q&A (7 domains)", "Document upload & RAG-based analysis", "Lawyer Connect with LinkedIn profiles"],
    tags: ["Next.js", "Node.js", "MongoDB", "Groq LLM", "Clerk Auth"],
    accent: "#a78bfa",
    github: "https://github.com/aryanshaikh483/Pocket_Specter",
  },
  {
    num: "02",
    title: "Dynamic Slug Routing",
    subtitle: "URL Architecture for SEO at Scale",
    description: "Robust slug-based routing architecture using React Router v6, enabling clean, crawlable URLs for hundreds of programmatic pages with nested routes and location-based hierarchies.",
    bullets: ["/locations/:locationSlug and /:slug routing", "React Router v6 nested route architecture", "URL normalization & 404 handling"],
    tags: ["React Router v6", "JavaScript", "SEO"],
    accent: "#fb923c",
    github: "https://scrapiz.in/",
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
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30` }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${p.accent}30`; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${p.accent}18`; }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open Project
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
