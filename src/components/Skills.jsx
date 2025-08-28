// Skills.jsx
// -----------------------------------------------------------------------------
// A skills showcase section with animated skill bars and icons. 
// Uses `framer-motion` for smooth animations and `react-icons` for icons.
// -----------------------------------------------------------------------------

import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiFirebase,
  SiMongodb,
  SiCplusplus,
  SiFigma,
  SiCanva,
  SiTailwindcss,
} from "react-icons/si";

import { motion } from "motion/react";

// -----------------------------------------------------------------------------
// Skills Data
// Each skill object contains:
// - name: Skill name
// - icon: React icon component
// - level: Proficiency percentage
// - colorFrom & colorTo: Gradient colors for skill bar
// -----------------------------------------------------------------------------
const skills = [
  {
    name: "React",
    icon: <FaReact size={28} className="text-cyan-400" />,
    level: "80%",
    colorFrom: "#06b6d4",
    colorTo: "#3b82f6",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={28} className="text-yellow-400" />,
    level: "85%",
    colorFrom: "#facc15",
    colorTo: "#f59e0b",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={28} className="text-orange-500" />,
    level: "100%",
    colorFrom: "#f97316",
    colorTo: "#dc2626",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={28} className="text-blue-600" />,
    level: "100%",
    colorFrom: "#2563eb",
    colorTo: "#0ea5e9",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={28} className="text-blue-400" />,
    level: "80%",
    colorFrom: "#0ea5e9",
    colorTo: "#38bdf8",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={28} className="text-purple-600" />,
    level: "90%",
    colorFrom: "#a855f7",
    colorTo: "#6b21a8",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={28} className="text-yellow-500" />,
    level: "65%",
    colorFrom: "#facc15",
    colorTo: "#f97316",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={28} className="text-green-500" />,
    level: "60%",
    colorFrom: "#22c55e",
    colorTo: "#16a34a",
  },
  {
    name: "C++",
    icon: <SiCplusplus size={28} className="text-blue-500" />,
    level: "75%",
    colorFrom: "#2563eb",
    colorTo: "#1e3a8a",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} className="text-gray-300" />,
    level: "85%",
    colorFrom: "#374151",
    colorTo: "#9ca3af",
  },
  {
    name: "Figma",
    icon: <SiFigma size={28} className="text-pink-500" />,
    level: "70%",
    colorFrom: "#ec4899",
    colorTo: "#db2777",
  },
  {
    name: "Canva",
    icon: <SiCanva size={28} className="text-[#3969E7]" />,
    level: "75%",
    colorFrom: "#60a5fa",
    colorTo: "#3969E7",
  },
];

// -----------------------------------------------------------------------------
// Skills Component
// Displays a section with skill cards, each having:
// - Icon + Name
// - Animated skill bar with gradient fill
// - Percentage label
// Background has glowing blurred circles for effect.
// -----------------------------------------------------------------------------
function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 relative py-16 md:py-12 min-h-screen mx-auto overflow-hidden bg-black"
    >
      {/* Background Gradient + Blurred Circles */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-black rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-500 rounded-full blur-[130px] opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
      </div>

      {/* Section Heading */}
      <h1 className="text-5xl text-center font-extrabold relative z-10">
        My Skills
      </h1>

      {/* Skill Cards Grid */}
      <div className="skill-icons flex flex-wrap relative z-10 justify-center w-full gap-6 px-10 mt-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 w-[220px] bg-gray-800/60 rounded-lg shadow-md hover:shadow-orange-500/20 transition"
          >
            {/* Icon + Skill Name */}
            <div className="flex items-center gap-2 mb-2">
              {skill.icon}
              <span className="text-white font-medium text-sm">
                {skill.name}
              </span>
            </div>

            {/* Skill Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }} // Starts empty
                whileInView={{ width: skill.level }} // Fills when in view
                transition={{ duration: 1 }}
                viewport={{ once: false }} // Animates again on re-scroll
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(to right, ${skill.colorFrom}, ${skill.colorTo})`,
                }}
              />
            </div>

            {/* Percentage Text */}
            <span className="text-xs text-gray-400 mt-1 block">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
