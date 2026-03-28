import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Experience", "Projects", "Skills", "Contact"];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.5 }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="relative flex justify-center px-6 py-0">

          {/* Centered pill nav — desktop */}
          <div className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "bg-[#0d0d14]/80 border-white/10 backdrop-blur-xl shadow-xl shadow-black/30"
              : "bg-white/5 border-white/8 backdrop-blur-md"
          }`}>
            {links.map((l) => {
              const id = l.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={l}
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  className="relative px-5 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-600/80 to-purple-600/80 shadow-lg shadow-violet-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}>
                    {l}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right — CTA + mobile burger */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400/60 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Hire Me
            </motion.a>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-4 h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-4 h-0.5 bg-white rounded-full block"
              />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl border border-white/10 bg-[#0d0d14]/95 backdrop-blur-xl shadow-2xl p-4 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === l.toLowerCase()
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${active === l.toLowerCase() ? "bg-violet-400" : "bg-zinc-600"}`} />
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
