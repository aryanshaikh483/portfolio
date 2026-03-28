import FadeSection from "../ui/FadeSection";

const projects = [
  {
    num: "01",
    title: "Pocket Specter",
    subtitle: "AI-Powered Legal Assistant",
    description:
      "An AI-driven legal assistant simplifying Indian legal processes using NLP. Generates FIRs, legal notices, and RTI applications through a conversational chatbot interface.",
    bullets: [
      "FIR, legal notice & RTI generation",
      "Conversational chatbot interface",
      "Built with FastAPI & MongoDB",
    ],
    tags: ["FastAPI", "MongoDB", "NLP", "Python"],
    accent: "#fb923c",
    github: "https://github.com/aryanshaikh483",
  },
  {
    num: "02",
    title: "Dynamic Slug Routing System",
    subtitle: "URL Architecture for SEO at Scale",
    description:
      "Built a robust slug-based routing architecture using React Router v6, enabling clean, crawlable URLs for hundreds of programmatic pages. Supports nested routes and location-based hierarchies.",
    bullets: [
      "/locations/:locationSlug and /:slug routing",
      "React Router v6 nested route architecture",
      "URL normalization & 404 handling",
      "SEO-friendly URL structures",
    ],
    tags: ["React Router v6", "JavaScript", "URL Slugs"],
    accent: "#34d399",
    github: "https://github.com/aryanshaikh483",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-3 block">
            03 / Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Things I've{" "}
            <span className="bg-linear-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>
        </FadeSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeSection key={p.title} delay={i * 0.08}>
              <div className="glass glass-lift group relative flex flex-col rounded-2xl overflow-hidden h-full">
                {/* Accent top bar */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(400px at 0% 0%, ${p.accent}12, transparent 65%)` }}
                />

                <div className="relative flex flex-col flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: p.accent }}>
                        {p.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">{p.title}</h3>
                    </div>
                    <span className="text-3xl font-black shrink-0 ml-3 leading-none" style={{ color: `${p.accent}25` }}>
                      {p.num}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{p.description}</p>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-6">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-zinc-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: p.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Footer — tags + link */}
                  <div className="mt-auto pt-4 border-t border-white/6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md border font-medium"
                          style={{ borderColor: `${p.accent}30`, color: p.accent, backgroundColor: `${p.accent}0d` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-200 shrink-0"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
