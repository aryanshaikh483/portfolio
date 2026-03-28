import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
