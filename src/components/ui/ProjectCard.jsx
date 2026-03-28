import { motion } from "framer-motion";

export default function ProjectCard({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-6 transition-all duration-300"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${project.glow}, transparent 70%)`,
        }}
      />

      {/* Number */}
      <span className="text-5xl font-bold opacity-10 absolute top-4 right-6">
        {project.num}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#63fcd4] transition">
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs uppercase tracking-widest mb-3"
        style={{ color: project.accent }}
      >
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      {/* Bullet Points */}
      <ul className="mb-4 space-y-1">
        {project.bullets.map((point, idx) => (
          <li key={idx} className="text-gray-400 text-sm flex gap-2">
            <span
              className="w-1.5 h-1.5 mt-2 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              borderColor: `${project.accent}40`,
              color: project.accent,
              backgroundColor: `${project.accent}15`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-xs px-4 py-2 rounded-lg font-semibold"
            style={{
              backgroundColor: project.accent,
              color: "#080c12",
            }}
          >
            Live →
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-xs px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/10"
          >
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}