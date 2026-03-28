import { motion } from "framer-motion";
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/8 bg-white/3 p-7 overflow-hidden transition-all duration-300 hover:border-white/15"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(300px at 0% 0%, ${p.accent}18, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-black opacity-10 text-white">{p.num}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  Code →
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-1" style={{ color: p.accent }}>
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">{p.subtitle}</p>
              <p className="text-zinc-300 text-base leading-relaxed mb-5">{p.description}</p>

              <ul className="space-y-1.5 mb-5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-zinc-400 text-base">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-lg border"
                    style={{ borderColor: `${p.accent}30`, color: p.accent, backgroundColor: `${p.accent}10` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
