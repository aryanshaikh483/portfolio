export default function NoiseBg() {
    return (
      <svg className="fixed inset-0 w-full h-full opacity-[0.03] z-0">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    );
  }