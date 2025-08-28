import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import { motion } from "motion/react";

function SocialMediaIcons() {
  // Motion animation variants for icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20 }, // Initially invisible and shifted down
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2, // Stagger effect (each icon appears after the other)
        duration: 0.5,
        ease: "easeOut" 
      },
    }),
  };

  return (
    <div className="social-links flex gap-4 z-10">
      {/* Social media links with icons */}
      {[
        {
          href: "https://linkedin.com/in/shalini-singh-887832251/",
          Icon: FaLinkedin,
          Hover: "hover:text-blue-500",       // Hover text color
          BorderHover: "hover:border-blue-500", // Hover border color
        },
        {
          href: "https://github.com/Oblivion634",
          Icon: FaGithub,
          Hover: "hover:text-gray-200",
          BorderHover: "hover:border-gray-200",
        },
        {
          href: "https://discord.com/users/1279145932654645280",
          Icon: FaDiscord,
          Hover: "hover:text-purple-500",
          BorderHover: "hover:border-purple-500",
        },
        {
          href: "https://t.me/believer345",
          Icon: FaTelegram,
          Hover: "hover:text-cyan-500",
          BorderHover: "hover:border-cyan-500",
        },
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          // Animation setup
          variants={iconVariants}
          custom={i} // Pass index to stagger animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Triggers animation when 30% in view
          // Base styles + hover effect
          className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 transition ${item.BorderHover}`}
        >
          {/* Render social icon */}
          <item.Icon className={`text-gray-300 ${item.Hover}`} />
        </motion.a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
