import { motion } from "framer-motion";
import { useTypingEffect } from "../../hooks/useTypingEffect.js";

const stats = [
  { num: "2+", label: "Years of coding" },
  { num: "2+", label: "AI Projects" },
  { num: "2", label: "Certifications" },
];

export default function Hero() {
  const typed = useTypingEffect([
    "Full-Stack Developer",
    "CSE @ Rizvi College Of Engineering",
    "Seo And Frontend Associate"
  ]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-md p-8 md:p-12 shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(124,58,237,0.12), 0 0 40px rgba(249,115,22,0.06)" }}
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">

            {/* Left — photo card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="shrink-0 w-full md:w-64"
            >
              <div className="rounded-2xl border border-white/10 bg-white/6 p-5 text-center">
                {/* Avatar placeholder */}
                <div className="w-40 h-40 mx-auto rounded-2xl bg-linear-to-br from-violet-600/40 to-orange-500/30 border border-white/10 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-6xl">👤</span>
                </div>
                <h2 className="text-white font-bold text-xl">Aryan Shaikh</h2>
                <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                  CSE Student &amp; AI/ML enthusiast
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/aryan-shaikh-a3aa9b314/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/aryanshaikh483" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-200">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" alt="GitHub" style={{ filter: "invert(1)" }} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Available for Work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3"
              >
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Aryan Shaikh
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-zinc-300 mb-5 h-8"
              >
                <span className="text-violet-400">&gt;</span> {typed}
                <span className="text-orange-400 animate-pulse">_</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                CSE student at Rizvi College — building AI-powered solutions and scalable web systems.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8 mb-8"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-violet-400">{s.num}</div>
                    <div className="text-sm text-zinc-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <a href="#contact"
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25">
                  Contact Me
                </a>
                <a href="#projects"
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-orange-500/30 transition-all duration-200">
                  View Projects →
                </a>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
