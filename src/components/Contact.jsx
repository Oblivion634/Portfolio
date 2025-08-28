import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";

function Contact() {
  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="bg-dark relative text-white mt-10 scroll-mt-24 px-30"
    >
      {/* Decorative blurred background circles */}
      <div className="absolute bg-amber-300/30 z-0 w-100 rounded-full right-2 mt-35 h-3/5 blur-3xl"></div>
      <div className="absolute bg-amber-300/30 z-0 w-100 rounded-full mt-35 h-3/5 blur-3xl"></div>

      {/* Section Heading */}
      <motion.h1
        className="text-center text-4xl font-bold mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-center text-gray-400 mb-12"
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Let’s work together! Fill out the form or reach me directly.
      </motion.p>

      {/* Main Container: Contact Form (left) + Contact Info (right) */}
      <div className="flex flex-col md:flex-row gap-20 max-w-6xl mx-auto">
        
        {/* Left Side: Contact Form */}
        <motion.div
          className="md:w-1/2 bg-gray-800/40 p-8 rounded-xl backdrop-blur-lg border border-white/10"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <form className="flex flex-col gap-6">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-900 border border-gray-600 text-white 
                         focus:outline-none focus:border-orange-500"
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-900 border border-gray-600 text-white 
                         focus:outline-none focus:border-orange-500"
            />
            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-md bg-gray-900 border border-gray-600 text-white 
                         focus:outline-none focus:border-orange-500"
            ></textarea>

            {/* Submit Button with motion effects */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 rounded-md text-white font-medium 
                         bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 
                         hover:scale-105 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side: Contact Information */}
        <motion.div
          className="md:w-1/2 flex flex-col text-center items-center md:text-left md:items-start justify-center gap-6"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Info Heading */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="text-gray-400">You can also reach me directly:</p>
          </div>

          {/* Email & Phone */}
          <div>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:shalinisingh06032004@gmail.com">
                shalinisingh06032004@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+916202201224">+91 62022 01224</a>
            </p>
          </div>

          {/* Social Media Icons Component */}
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
