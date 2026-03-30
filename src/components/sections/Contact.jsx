import { useState } from "react";
import FadeSection from "../ui/FadeSection";

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity — ${form.role || "Role"} at ${form.company || "Company"}`);
    const body = encodeURIComponent(
      `Hi Aryan,\n\nMy name is ${form.name}.\n\nCompany: ${form.company}\nRole / Opportunity: ${form.role}\n\n${form.message}\n\nLooking forward to connecting.`
    );
    window.location.href = `mailto:aryanshaikh483@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <span className="text-xs font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4 block">05 / Contact</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tight">LET'S WORK</h2>
          <h2 className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tight"
            style={{ WebkitTextStroke: "2px rgba(124,58,237,0.7)", color: "transparent" }}>
            TOGETHER.
          </h2>
          <p className="text-zinc-500 text-lg mb-16 max-w-lg">
            Open to internships, collaborations & AI/software roles. Fill in the details and hit send.
          </p>
        </FadeSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form card */}
          <FadeSection delay={0.1} direction="left">
            <div className="glass rounded-2xl p-8 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-400 uppercase tracking-widest">Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-zinc-400 uppercase tracking-widest">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-400 uppercase tracking-widest">Role / Opportunity</label>
                  <input name="role" value={form.role} onChange={handleChange} placeholder="Frontend Intern, Full-Stack Dev..." className={inputClass} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-zinc-400 uppercase tracking-widest">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." rows={5} required className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  className={`mt-2 w-full py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-200 ${
                    sent
                      ? "bg-green-600 text-white"
                      : "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-lg hover:shadow-violet-500/25"
                  }`}
                >
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Email Client Opened
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeSection>

          {/* Info card */}
          <FadeSection delay={0.2} direction="right">
            <div className="glass rounded-2xl p-8 h-full flex flex-col gap-10">
              <div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-3">Email</p>
                <a href="mailto:aryanshaikh483@gmail.com" className="text-white text-base hover:text-violet-400 transition-colors duration-200">
                  aryanshaikh483@gmail.com
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-3">Location</p>
                <p className="text-white text-base">Mumbai, Maharashtra</p>
              </div>

              <div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-5">Socials</p>
                <div className="flex flex-col gap-3">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/aryan-shaikh-a3aa9b314/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200 group">
                    <div className="w-9 h-9 rounded-lg bg-[#0077b5] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors duration-200">LinkedIn</p>
                      <p className="text-zinc-500 text-xs">Aryan Shaikh</p>
                    </div>
                    <svg className="ml-auto text-zinc-600 group-hover:text-white transition-colors duration-200" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/aryanshaikh483" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 group">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-zinc-300 transition-colors duration-200">GitHub</p>
                      <p className="text-zinc-500 text-xs">aryanshaikh483</p>
                    </div>
                    <svg className="ml-auto text-zinc-600 group-hover:text-white transition-colors duration-200" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
