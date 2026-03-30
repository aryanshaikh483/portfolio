export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white text-sm font-black tracking-widest uppercase">AS</span>
        <p className="text-zinc-700 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Aryan Amjad Shaikh
        </p>
        <p className="text-zinc-700 text-xs tracking-widest uppercase">
          CSE @ Rizvi College
        </p>
      </div>
    </footer>
  );
}
