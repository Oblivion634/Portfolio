// ParticleBackground.jsx
// Component to render animated floating particles as a background effect.
// Uses Framer Motion for smooth floating + twinkling animation.

import React from "react";
import { motion } from "framer-motion";

// Generate random particle data (position, size, delay) once
// This avoids recalculating on every render
const particles = Array.from({ length: 40 }, () => ({
  left: `${Math.random() * 100}%`,   // random horizontal position
  top: `${Math.random() * 100}%`,    // random vertical position
  size: Math.random() * 10 + 3,      // random particle size (3px - 13px)
  delay: Math.random() * 5,          // staggered start for natural motion
}));

function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          // Each particle is a blurred, semi-transparent orange circle
          className="absolute rounded-full bg-orange-400 opacity-70 blur-[2px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          // Animate particle movement + twinkling effect
          animate={{
            y: [0, -30, 0],             // floating up & down
            opacity: [0.4, 0.8, 0.4],   // twinkle fade in & out
          }}
          transition={{
            duration: 6 + Math.random() * 4, // variable speed per particle
            repeat: Infinity,                // loop forever
            ease: "easeInOut",               // smooth floating motion
            delay: p.delay,                  // stagger start
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;
