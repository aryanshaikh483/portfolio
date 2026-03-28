import { useState } from "react";
import FadeSection from "../ui/FadeSection";

const socials = [
  {
    label: "LinkedIn",
    value: "/in/aryan-shaikh",
    href: "https://www.linkedin.com/in/aryan-shaikh-a3aa9b314/",
    color: "#60a5fa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#60a5fa">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "aryanshaikh483",
    href: "https://github.com/aryanshaikh483",
    color: "#e4e4e7",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#e4e4e7">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/6 transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", role: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity — ${form.role || "Role"} at ${form.company || "Company"}`);
    const body = encodeURIComponent(
      `Hi Aryan,\n\nMy name is ${form.name}.\n\nCompany: ${form.company}\nRole / Opportunity: ${form.role}\n\n${form.message}\n\nLooking forward to connecting.`
    );
    window.location.href = `mailto:aryanshaikh483@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-2xl mx-auto">
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
          <p className="text-zinc-400 text-base mb-10">
            Open to internships, collaborations & AI/software roles. Fill in the details and hit send.
          </p>
        </FadeSection>

        <FadeSection delay={0.12}>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)" }} />

            <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 uppercase tracking-widest">Role / Opportunity</label>
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="Frontend Intern, Full-Stack Dev, Freelance..."
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about the opportunity..."
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center gap-2"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                </svg>
                Send
              </button>
            </form>

            {/* Divider + socials */}
            <div className="border-t border-white/6 mx-8 mb-6" />
            <div className="px-8 pb-8">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Or find me on</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-lift flex items-center gap-3 px-4 py-3 rounded-xl flex-1"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      {s.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs text-zinc-500">{s.label}</div>
                      <div className="text-sm font-medium truncate" style={{ color: s.color }}>{s.value}</div>
                    </div>
                    <svg className="ml-auto shrink-0 text-zinc-600" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
