import React from "react";
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
import { motion } from "motion/react"; // Framer Motion for animations
import FloatingBackground from "./FloatingBackground"; // Animated floating tech icons
import SocialMediaIcons from "./SocialMediaIcons"; // Social media buttons

function HeroSection() {
  // Animation for sliding in from left (used for intro text)
  const sideSlide = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Animation for sliding up from bottom (used for main heading)
  const bottomSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, duration: 0.6, ease: "easeOut" },
    },
  };

  // Floating background icons with positions (decorative elements)
  const floatingIcons = [
    { icon: <FaReact size={60} />, x: "4%", y: "9%" },
    { icon: <FaJsSquare size={55} />, x: "93%", y: "38%" },
    { icon: <FaCss3Alt size={50} />, x: "28%", y: "-4%" },
    { icon: <FaHtml5 size={65} />, x: "80%", y: "-5%" },
    { icon: <FaGithub size={45} />, x: "90%", y: "-3%" },
    { icon: <FaBootstrap size={55} />, x: "90%", y: "68%" },
    { icon: <SiFirebase size={55} />, x: "6%", y: "25%" },
    { icon: <SiMongodb size={55} />, x: "89%", y: "16%" },
    { icon: <SiCplusplus size={55} />, x: "2%", y: "65%" },
    { icon: <SiFigma size={55} />, x: "6%", y: "87%" },
    { icon: <SiCanva size={60} />, x: "95%", y: "85%" },
    { icon: <SiTailwindcss size={55} />, x: "17%", y: "-7%" },
  ];

  return (
    <section
      id="home"
      // Full hero section: flexbox layout, responsive design
      className="w-full flex-col bg-dark h-270 flex px-25 pt-10 scroll-mt-24 overflow-hidden relative md:flex-row md:h-screen"
    >
      {/* -------- LEFT SECTION (Text + Buttons) -------- */}
      <div className="left-section text-center items-center overflow-hidden md:items-start flex flex-col gap-8 w-full md:w-1/2 md:text-left">
        {/* Blurred glowing background circle */}
        <div className="absolute inset-0 bg-amber-300/30 z-0 w-100 rounded-full mx-30 mt-10 h-2/5 blur-3xl md:ml-20 md:h-3/5"></div>

        {/* Intro Text with Animation */}
        <div className="text-[#707070] text-xl">
          {/* "Hi I am" text slides from left */}
          <motion.h4
            custom={0}
            variants={sideSlide}
            initial="hidden"
            animate="visible"
            viewport={{ once: false }}
            className="mb-2"
          >
            Hi I am{" "}
          </motion.h4>

          {/* Name with delayed animation */}
          <motion.h4
            custom={1}
            variants={sideSlide}
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.3 }}
            className=" font-bold"
          >
            Shalini Singh{" "}
          </motion.h4>
        </div>

        {/* Main Heading (slides from bottom) */}
        <motion.h1
          custom={2}
          variants={bottomSlide}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          FrontEnd Web Developer
        </motion.h1>

        {/* Social Media Icons */}
        <SocialMediaIcons />

        {/* Action Buttons */}
        <div className="buttons flex gap-8 mt-6">
          {/* WhatsApp Contact Button */}
          <a href="https://wa.me/916202201224" target="_blank" aria-label="Chat on WhatsApp">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative px-6 py-3 rounded-md text-white font-medium 
               bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
            >
              <span className="relative z-10">Get in Touch</span>
            </motion.button>
          </a>

          {/* Resume Download Button */}
          <motion.a
            href="/Resume-Shalini_Singh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 border border-gray-400 text-gray-200 rounded-md font-medium"
          >
            <span className="relative z-10">View Resume</span>
          </motion.a>
        </div>
      </div>

      {/* -------- RIGHT SECTION (Profile Image) -------- */}
      <div className="right-section w-full md:w-1/2">
        <div className="relative mt-30 mx-auto md:mt-10 md:ml-20 w-76 h-76 md:w-96 md:h-96 rounded-full bg-white/4 flex items-center justify-center shadow-2xl">
          {/* Gradient glow behind profile image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-3xl opacity-30"></div>

          {/* Floating Profile Image */}
          <motion.img
            src="/profile-photo.png"
            alt="Shalini Singh"
            loading="lazy"
            className="w-[120%] object-cover -translate-y-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* -------- FLOATING BACKGROUND ICONS -------- */}
      <FloatingBackground icons={floatingIcons} />
    </section>
  );
}

export default HeroSection;
