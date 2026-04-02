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

const softwareSkills = [
  { name: "React",   logo: `${BASE}/react/react-original.svg`,   level: 85 },
  { name: "Node.js", logo: `${BASE}/nodejs/nodejs-original.svg`, level: 75 },
  { name: "Python",  logo: `${BASE}/python/python-original.svg`, level: 80 },
  { name: "MongoDB", logo: `${BASE}/mongodb/mongodb-original.svg`, level: 70 },
  { name: "Next.js", logo: `${BASE}/nextjs/nextjs-original.svg`, level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-8 md:px-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4 block">
            04 / Skills
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-20 leading-none tracking-tight">
            TECH STACK
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left — software skills with bars */}
          <FadeSection delay={0.1} direction="left">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-white mb-6">Software Skills</h3>
              <div className="flex flex-col gap-5">
                {softwareSkills.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <img src={s.logo} alt={s.name} width={20} height={20} className="object-contain"
                        style={{ filter: s.name === "Next.js" ? "invert(1)" : "none" }} />
                      <span className="text-zinc-400 text-sm">{s.name}</span>
                    </div>
                    <div className="h-0.5 w-full bg-white/10 rounded-full">
                      <div className="h-full rounded-full bg-violet-500" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-white mt-10 mb-4">Personal Skills</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Creative Thinking", desc: "Turning ideas into visually appealing and functional solutions" },
                  { title: "Team Collaboration", desc: "Working effectively with others to build and ship great products" },
                  { title: "Organizational Skills", desc: "Managing tasks, priorities, and time with clarity and structure" },
                ].map((s) => (
                  <li key={s.title} className="flex flex-col gap-1">
                    <span className="text-white text-sm font-semibold">{s.title}</span>
                    <span className="text-zinc-500 text-sm leading-relaxed">{s.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeSection>

          {/* Middle — all skill logos grouped */}
          <FadeSection delay={0.2}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col gap-8">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-bold tracking-[0.25em] uppercase mb-4" style={{ color: group.color }}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((s) => (
                      <div key={s.name} className="glass glass-lift flex items-center gap-2 px-3 py-2 rounded-xl cursor-default">
                        <img src={s.logo} alt={s.name} width={22} height={22} className="object-contain"
                          style={{ filter: s.name === "Next.js" || s.name === "GitHub" ? "invert(1)" : "none" }} />
                        <span className="text-sm text-zinc-300 font-medium">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Right — what can I do */}
          <FadeSection delay={0.3} direction="right">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-white mb-6">What Can I Do?</h3>
              <ul className="flex flex-col gap-3 mb-10">
                {[
                  "Full-Stack Web Development",
                  "REST API Design & Integration",
                  "Database Design — SQL & NoSQL",
                  "SEO & Frontend Optimization",
                  "Data Analysis with Python",
                  "Cloud Deployment — AWS",
                ].map((item) => (
                  <li key={item} className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-white mb-4">Certifications</h3>
              <ul className="flex flex-col gap-3 mb-10">
                {["SQL Query Optimization-Simplilearn", "AWS Cloud Practitioner"].map((c) => (
                  <li key={c} className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-white mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Gaming", "Sketching", "Cricket"].map((h) => (
                  <span key={h} className="glass px-3 py-1.5 rounded-xl text-sm text-zinc-400">{h}</span>
                ))}
              </div>
            </div>
          </FadeSection>

        </div>
      </div>
    </section>
  );
}
