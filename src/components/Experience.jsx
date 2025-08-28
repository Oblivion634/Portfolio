import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

// Experience data array: each object represents one timeline entry
const experiences = [
  {
    duration: "Jan 2025 - March 2025",
    role: "Junior Frontend Developer Intern - Natural Coders",
    desc: "Contributed to developing and debugging responsive web applications, collaborated on building reusable UI components, and optimized frontend performance for better user experience.",
  },
  {
    duration: "Jun 2024 - July 2024",
    role: "JavaScript Development Intern - Azure Skynet Solutions Pvt. Ltd.",
    desc: "Gained hands-on experience with JavaScript by building interactive features, fixing bugs, and assisting in the integration of dynamic UI components for live projects.",
  },
  {
    duration: "Jan 2024 - Feb 2024",
    role: "Web Development Trainee and Intern - YHills EduTech Pvt. Ltd.",
    desc: "Worked on basic frontend development tasks, practiced responsive design, and implemented foundational features using HTML, CSS, and JavaScript during training and internship.",
  },
  {
    duration: "Feb 2023 - Present",
    role: "Senior Content Developer - MIMIT Malout (CSE Dept.)",
    desc: "Designed engaging graphics and content to enhance the social media presence of the department, managed event promotions, and supported branding initiatives with creative visuals.",
  },
  {
    duration: "2023 - Present",
    role: "Ambassador - Training and Placement Cell, CSE Department (MIMIT)",
    desc: "Acted as a bridge between students and the T&P Cell by managing communication, assisting in placement activities, and contributing to the design of event-related materials.",
  },
  {
    duration: "Jan 2024 - Mar 2024",
    role: "Campus Ambassador - Acmegrade",
    desc: "Promoted Acmegrade’s programs within the student community, built awareness about training opportunities, and enhanced outreach through creative campaigns and student engagement.",
  },
];

// Animation variants for timeline cards
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 }, // Card starts hidden from left
  hiddenRight: { opacity: 0, x: 100 }, // Card starts hidden from right
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Smooth slide-in effect
};

function Experience() {
  return (
    <section
      id="experience"
      className="bg-dark relative overflow-hidden text-white py-10 scroll-mt-17 border-t-amber-500 "
    >
      {/* Background animation (particles) */}
      <ParticleBackground />

      {/* Section Heading */}
      <h1 className="text-center relative text-4xl font-bold mb-12 z-10">
        Experience
      </h1>

      {/* Timeline Container */}
      <div className="relative w-3/4 mx-auto z-10">
        {/* Vertical center line for timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {/* Timeline entries */}
        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`flex items-center ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`} // Alternate sides for each entry
              variants={cardVariants}
              initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"} // Animation direction depends on index
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Duration (left/right side depending on index) */}
              <div className="w-1/2 px-5 flex justify-center">
                <span className="text-gray-400 font-medium">
                  {exp.duration}
                </span>
              </div>

              {/* Connector Dot at timeline center */}
              <div className="w-3 h-3 md:w-6 md:h-6 bg-orange-500 rounded-full border-4 border-dark z-10"></div>

              {/* Experience Card */}
              <motion.div
                className="w-1/2 bg-gray-800 p-4 md:p-6 rounded-lg shadow-md border border-white/10"
                whileHover={{
                  scale: 1.05, // Slight scale-up effect
                  boxShadow: "0px 4px 15px rgba(255, 94, 0, 0.5)", // Glow on hover
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h2 className="text-xl font-semibold mb-2">{exp.role}</h2>
                <p className="text-gray-300 text-sm">{exp.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
