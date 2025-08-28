// Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ShantiSpace-Mental Health and Wellness Platform",
    img: "/project1.png",
    desc: "A full-stack mental wellness platform offering personalized mental health screening, calming UI, and community support.",
    tech: ["React", "Firebase", "Gemini API", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "https://shantispace.netlify.app/",
    github: "https://github.com/Oblivion634/Shanti-Space",
  },
  {
    title: "Wasabi Restaurant WebPage",
    img: "/project2.png",
    desc: "A stylish website for a restaurant with menu details, online booking, and contact features. Developed using React JS.",
    tech: ["React", "Bootstrap", "JavaScript"],
    live: "#",
    github: "https://github.com/Oblivion634/Wasabi-Restaurant",
  },
  {
    title: "College Forum Website",
    img: "/project3.png",
    desc: "Developed a College Forum Website with separate Admin and Student Dashboards, enhancing engagement and collaboration.",
    tech: ["JavaScript", "HTML5", "CSS3", "Firebase"],
    live: "https://oblivion634.github.io/CollegeForumWebsite/",
    github: "https://github.com/Oblivion634/CollegeForumWebsite",
  },
  {
    title: "Digital Studios Webpage",
    img: "/project4.png",
    desc: "Developed a website for a hypothetical Digital Photography Brand using HTML, CSS, JavaScript and Bootstrap.",
    tech: ["JavaScript", "HTML5", "Bootstrap", "CSS3"],
    live: "https://oblivion634.github.io/MajorProject-Yhills/",
    github: "https://github.com/Oblivion634/MajorProject-Yhills",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section
      id="projects"
      className="relative text-white py-10 overflow-hidden scroll-mt-15 bg-black"
    >
      {/* Section Heading */}
      <h1 className="text-center text-5xl font-bold mb-12 relative z-10">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="relative flex flex-wrap justify-center gap-10 px-10 z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative group w-80 min-h-[300px] flex flex-col 
              rounded-xl overflow-hidden shadow-lg 
              bg-gray-800/40 backdrop-blur-lg border border-white/10 cursor-pointer"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            onClick={() => toggleOverlay(i)} // 👈 Mobile Tap Handler
          >
            {/* Project Image */}
            <img
              src={project.img}
              onError={(e) => (e.target.src = "/fallback.png")}
              alt={project.title}
              className="w-full h-75 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title (always visible at bottom) */}
            <div className="absolute bottom-0 w-full bg-black/50 p-3 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
            </div>

            {/* Overlay: Show on hover (desktop) OR click (mobile) */}
            <div
              className={`absolute inset-0 bg-black/95 backdrop-blur-md 
                flex flex-col justify-between 
                transition-all duration-500 p-5
                ${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"}
              `}
            >
              {/* Project Description */}
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-3">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-orange-500 rounded text-sm hover:bg-orange-600"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border border-orange-500 rounded text-sm hover:bg-orange-500 hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
