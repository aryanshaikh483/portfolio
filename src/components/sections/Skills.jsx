import FadeSection from "../ui/FadeSection";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillGroups = [
  {
    category: "Languages",
    color: "#a78bfa",
    skills: [
      { name: "Python",     logo: `${BASE}/python/python-original.svg` },
      { name: "JavaScript", logo: `${BASE}/javascript/javascript-original.svg` },
      { name: "HTML",       logo: `${BASE}/html5/html5-original.svg` },
      { name: "CSS",        logo: `${BASE}/css3/css3-original.svg` },
      { name: "SQL",        logo: `${BASE}/mysql/mysql-original.svg` },
      { name: "C",          logo: `${BASE}/c/c-original.svg` },
      { name: "C++",        logo: `${BASE}/cplusplus/cplusplus-original.svg` },
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "#fb923c",
    skills: [
      { name: "React",       logo: `${BASE}/react/react-original.svg` },
      { name: "Node.js",     logo: `${BASE}/nodejs/nodejs-original.svg` },
      { name: "Next.js",     logo: `${BASE}/nextjs/nextjs-original.svg` },
      { name: "Pandas",      logo: `${BASE}/pandas/pandas-original.svg` },
      { name: "NumPy",       logo: `${BASE}/numpy/numpy-original.svg` },
    ],
  },
  {
    category: "Databases & Tools",
    color: "#34d399",
    skills: [
      { name: "MongoDB",  logo: `${BASE}/mongodb/mongodb-original.svg` },
      { name: "MySQL",    logo: `${BASE}/mysql/mysql-original.svg` },
      { name: "GitHub",   logo: `${BASE}/github/github-original.svg` },
      { name: "Docker",   logo: `${BASE}/docker/docker-original.svg` },
      { name: "Jupyter",  logo: `${BASE}/jupyter/jupyter-original.svg` },
      { name: "AWS",      logo: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-3 block">
            04 / Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            My{" "}
            <span className="bg-linear-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              tech stack.
            </span>
          </h2>
        </FadeSection>

        <div className="flex flex-col gap-10">
          {skillGroups.map((group, gi) => (
            <FadeSection key={group.category} delay={gi * 0.1}>
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: group.color }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/8 bg-white/3 cursor-default"
                    style={{ transition: "border-color 120ms ease, background-color 120ms ease, transform 120ms ease", willChange: "transform" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <img
                      src={s.logo}
                      alt={s.name}
                      width={26}
                      height={26}
                      className="object-contain"
                      style={{ filter: s.name === "Next.js" || s.name === "GitHub" ? "invert(1)" : "none" }}
                    />
                    <span className="text-base text-zinc-300 font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
