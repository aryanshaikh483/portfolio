import { motion } from "framer-motion";
import { useTypingEffect } from "../../hooks/useTypingEffect.js";

export default function Hero() {
  const typed = useTypingEffect([
    "Full-Stack Developer",
    "CSE @ Rizvi College Of Engineering",
    "SEO And Frontend Associate",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Full-bleed photo — right side, fading into dark */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aryan.png"
          alt="Aryan Shaikh"
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-top"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          {/* Name */}
          <h1 className="text-[clamp(3rem,12vw,9rem)] font-black text-white leading-none tracking-tight mb-2">
            ARYAN
          </h1>
          <h1
            className="text-[clamp(3rem,12vw,9rem)] font-black leading-none tracking-tight mb-6"
            style={{ WebkitTextStroke: "2px rgba(124,58,237,0.8)", color: "transparent" }}
          >
            SHAIKH
          </h1>

          {/* Role */}
          <p className="text-zinc-400 text-base tracking-[0.2em] uppercase mb-10 font-medium">
            {typed}<span className="text-violet-400 animate-pulse">_</span>
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mb-16"
          >
            <a
              href="/My_Resume.pdf"
              download
              className="px-7 py-2.5 rounded-sm border border-white/30 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5"
          >
            <a href="https://github.com/aryanshaikh483" target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-200">
              {/* GitHub */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aryan-shaikh-a3aa9b314/" target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors duration-200">
              {/* LinkedIn */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:aryan@example.com"
              className="text-zinc-500 hover:text-white transition-colors duration-200">
              {/* Email */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom available badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 z-10 flex items-center gap-2 text-xs text-zinc-500 tracking-widest uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available for work
      </motion.div>
    </section>
  );
}
