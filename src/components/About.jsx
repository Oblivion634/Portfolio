import { motion } from "motion/react";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 sm:px-10 lg:px-20 overflow-x-hidden py-10"
    >
      {/* Section Heading */}
      <h1 className="text-center text-4xl font-bold mb-2">About Me</h1>
      <h3 className="text-center text-xl text-[#707070] mb-8">
        Frontend Developer | UI Designer | Content Writer
      </h3>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-10 md:gap-16">
        {/* Profile Image Section */}
        <div className="about-img relative isolate flex-shrink-0">
          {/* Blurred halo (always centered behind the image) */}
          <div
            className="absolute inset-0 flex items-center justify-center -z-10"
            aria-hidden="true"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 blur-3xl opacity-60"></div>
          </div>

          <motion.img
            src="./profile-photo-2.png"
            alt="Shalini Singh"
            className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl object-contain block transform-gpu will-change-transform shadow-lg bg-transparent p-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 20px 40px rgba(255, 94, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>

        {/* About Text Section */}
        <motion.div
          className="about-text flex-1 flex flex-col text-justify md:pr-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.25 }}
        >
          <p>
            I’m a passionate
            <span className="text-orange-500 font-semibold">
              {" "}
              Frontend Developer{" "}
            </span>
            skilled in
            <span className="text-red-500 font-semibold">
              {" "}
              JavaScript, React.js, TailwindCSS, Firebase and Bootstrap{" "}
            </span>
            . I’ve worked on projects like a college community platform, a
            personal portfolio website, and
            <span className="text-orange-500 font-semibold"> ShantiSpace </span>
            (a mental health app), gaining hands-on experience in building
            responsive and user-friendly solutions.
          </p>

          <p className="mt-4 mb-8">
            Beyond coding, I enjoy
            <span className="text-red-500 font-semibold"> UI/UX design </span>
            and
            <span className="text-orange-500 font-semibold">
              {" "}
              content creation{" "}
            </span>
            , where I combine creativity with technical precision. I’m eager to
            grow into a
            <span className="text-red-500 font-semibold">
              {" "}
              Full-Stack Developer{" "}
            </span>
            and create impactful digital experiences that make a real
            difference.
          </p>

          {/* Resume Download Button */}
          <a
            href="/Shalini_Singh_Resume.pdf"
            download="Shalini_Singh_Resume.pdf"
            className="w-fit mx-auto md:mx-0"
          >
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              viewport={{ once: false }}
              className="relative overflow-hidden group inline-flex items-center gap-3 px-4 py-3
                         rounded-md text-white font-medium
                         bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
            >
              <FaDownload className="shrink-0" />
              <span>Download Resume</span>

              {/* Shine animation overlay on hover */}
              <span
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-r from-white/20 via-transparent to-white/20
                           -translate-x-full group-hover:translate-x-full
                           transition-transform duration-700"
              />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
