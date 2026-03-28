import { motion } from "framer-motion";
import FadeSection from "../ui/FadeSection";

const links = [
  {
    label: "Email",
    value: "aryanshaikh483@gmail.com",
    href: "mailto:aryanshaikh483@gmail.com?subject=Opportunity%20to%20Connect&body=Hi%20Aryan,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,",
    color: "#a78bfa",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Aryan Shaikh",
    href: "https://www.linkedin.com/in/aryan-shaikh-a3aa9b314/",
    color: "#60a5fa",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="28" height="28" alt="LinkedIn" />,
  },
  {
    label: "GitHub",
    value: "aryanshaikh483",
    href: "https://github.com/aryanshaikh483",
    color: "#fb923c",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="28" height="28" alt="GitHub" style={{ filter: "invert(1)" }} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-3 block">
            05 / Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Let's work{" "}
            <span className="bg-linear-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
              together.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto">
            Open to internships, collaborations & AI/software roles.
          </p>
        </FadeSection>

        <FadeSection delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-4">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${
                  l.label === "Email"
                    ? "border-[#a78bfa]/40 bg-[#a78bfa]/5"
                    : "border-white/8 bg-white/3"
                }`}
                style={{ transition: "border-color 120ms ease, background-color 120ms ease, transform 120ms ease, box-shadow 120ms ease", willChange: "transform" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span>{l.icon}</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">{l.label}</span>
                <span className="text-base font-medium transition" style={{ color: l.color }}>
                  {l.value}
                </span>
              </a>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
