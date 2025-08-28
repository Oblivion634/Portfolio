import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";

/**
 * Footer Component
 * ----------------
 * Renders a responsive footer with:
 *  - Left: Copyright
 *  - Center: Navigation links
 *  - Right: Social media icons
 *
 * Tech:
 *  - React
 *  - TailwindCSS for styling
 *  - react-icons for social icons
 */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Dynamic Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Shalini Singh | Made with ❤️ using React & Tailwind
        </p>

        {/* Center Section - Navigation Links */}
        <div className="flex gap-6 text-sm">
          {/* Internal anchor links for smooth navigation */}
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#skills" className="hover:text-orange-500">Skills</a>
          <a href="#projects" className="hover:text-orange-500">Projects</a>
          <a href="#experience" className="hover:text-orange-500">Experience</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shalini-singh-887832251/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-gray-300 hover:text-blue-500 text-lg" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Oblivion634"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-gray-300 hover:text-white text-lg" />
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/users/1279145932654645280"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="text-gray-300 hover:text-purple-500 text-lg" />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/believer345"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram className="text-gray-300 hover:text-cyan-400 text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
