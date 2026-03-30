import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

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
      { threshold: 0.4 }
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5"
      >
        {/* Pill container */}
        <div
          className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60"
              : "bg-[#0a0a0f]/60 backdrop-blur-lg border border-white/12 shadow-lg shadow-black/40"
          }`}
        >
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className="relative px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium transition-colors duration-200 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
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

          {/* Hire Me pill */}
          <a
            href="#contact"
            className="hidden md:flex ml-2 items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-600/80 hover:bg-violet-500 border border-violet-500/40 text-white text-xs font-bold tracking-widest uppercase transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Hire Me
          </a>
        </div>

        {/* Mobile burger — outside pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute right-6 top-5 flex flex-col gap-1.5 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-4 h-px bg-white block" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-4 h-px bg-white block" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-4 h-px bg-white block" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-all duration-200 ${
                  active === l.toLowerCase()
                    ? "bg-white/8 text-white"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {active === l.toLowerCase() && (
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                )}
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
