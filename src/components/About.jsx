import { motion } from "motion/react";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="px-20 md:h-180 lg:h-150 scroll-mt-24 h-300 overflow-hidden"
    >
      {/* Section Heading */}
      <h1 className="text-center text-4xl font-bold mb-2"> About Me</h1>
      <h3 className="text-center text-xl text-[#707070] mb-4">
        Frontend Developer | UI Designer | Content Writer
      </h3>

      {/* Main Container: Splits into image (left) and text (right) on larger screens */}
      <div className="flex flex-col w-full gap-120 md:flex-row md:gap-60 overflow-hidden">
        
        {/* Profile Image Section */}
        <div className="about-img md:w-300 mx-auto w-full md:-mt-8">
          {/* Blurred gradient background behind the image for visual depth */}
          <div
            className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 
                       w-80 h-80 rounded-full mx-auto md:ml-20 blur-3xl absolute"
          ></div>

          {/* Profile Picture with animation on load & hover */}
          <motion.img
            className="absolute w-90 h-120 z-0 md:top-175 mx-auto rounded-full object-cover"
            src="./profile-photo-2.png"
            alt="Shalini Singh"
            initial={{ opacity: 0, y: 50 }} // Fade-in & slide up on entry
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in viewport
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 20px 40px rgba(255, 94, 0, 0.3)", // Adds hover pop effect
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>

        {/* About Text Section */}
        <motion.div
          className="about-text flex flex-col text-justify pt-10 md:pr-20"
          initial={{ opacity: 0, x: 100 }} // Slide in from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Intro Text */}
          <span>
            I’m a passionate
            <span className="text-orange-500 font-semibold"> Frontend Developer </span>
            skilled in
            <span className="text-red-500 font-semibold"> JavaScript, React.js, TailwindCSS, Firebase and Bootstrap </span>
            . I’ve worked on projects like a college community platform, a personal portfolio website, and
            <span className="text-orange-500 font-semibold"> ShantiSpace </span>
            (a mental health app), gaining hands-on experience in building responsive and user-friendly solutions.
          </span>
          <br />

          {/* Secondary Description */}
          <span className="mt-4 mb-8">
            Beyond coding, I enjoy
            <span className="text-red-500 font-semibold"> UI/UX design </span>
            and
            <span className="text-orange-500 font-semibold"> content creation </span>
            , where I combine creativity with technical precision. I’m eager to grow into a
            <span className="text-red-500 font-semibold"> Full-Stack Developer </span>
            and create impactful digital experiences that make a real difference.
          </span>

          {/* Resume Download Button */}
          <a href="/Resume-Shalini_Singh.pdf" download="Shalini_Singh_Resume.pdf">
            <motion.button
              initial={{ opacity: 0, y: 20 }} // Animate button on scroll
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.09 }} // Interactive hover effect
              whileTap={{ scale: 0.95 }} // Button press feedback
              viewport={{ once: false }}
              className="py-3 rounded-md text-white font-medium 
                         bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 
                         overflow-hidden group w-47.5 flex gap-4 mx-auto md:mx-0 px-3 cursor-pointer"
            >
              <FaDownload className="mt-1" />
              <span>Download Resume</span>

              {/* Shine animation overlay on hover */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              ></span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
