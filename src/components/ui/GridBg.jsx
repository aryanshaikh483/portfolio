export default function GridBg() {
    return (
      <div
        className="fixed inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,252,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,252,212,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    );
  }