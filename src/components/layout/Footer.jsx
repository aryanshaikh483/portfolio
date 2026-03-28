export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 px-6 text-center">
      <p className="text-zinc-600 text-xs">
        © {new Date().getFullYear()} Aryan Amjad Shaikh
        {" · "}
        <span className="text-violet-500/60">CSE @ Rizvi College of Engineering</span>
      </p>
    </footer>
  );
}
