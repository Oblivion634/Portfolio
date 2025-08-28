import { motion } from "framer-motion";

/**
 * FloatingBackground Component
 * ----------------------------
 * Renders floating icons as animated background elements.
 * Each icon "floats" up and down in a loop for a subtle motion effect.
 *
 * Props:
 *  - icons: Array of objects [{ x, y, icon }]
 *      - x: horizontal position (string, e.g., "20%")
 *      - y: vertical position (string, e.g., "40%")
 *      - icon: JSX element (e.g., <YourIcon />)
 */
function FloatingBackground({ icons }) {
  return (
    // Container covers entire section, sits behind main content
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          // Style: faint, desaturated, positioned absolutely
          className="absolute text-gray-400 opacity-10 grayscale"
          style={{ left: item.x, top: item.y }}
          // Animation: vertical floating loop
          animate={{
            y: ["0px", "30px", "0px"], // float up & down
          }}
          transition={{
            duration: 6 + (i % 5), // slightly different speed per icon
            repeat: Infinity, // infinite loop
            ease: "easeInOut", // smooth animation
          }}
          viewport={{ once: false }} // ensures animation continues on scroll
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingBackground;
