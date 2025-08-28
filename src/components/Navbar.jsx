import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Hamburger + Close icons

// List of navigation links
const NavLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About me", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact me", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Tracks if user has scrolled down
  const [active, setActive] = useState("home"); // Tracks the currently active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile hamburger menu toggle

  /**
   * Effect 1: Detect scroll to change navbar background
   */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  /**
   * Effect 2: Highlight nav link of the currently visible section
   * Uses IntersectionObserver API for smooth section tracking
   */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // Update active link
            history.replaceState(null, "", `#${entry.target.id}`); // Update URL without reload
          }
        });
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0.2 } // Trigger when ~20% visible
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec)); // Cleanup observer
  }, []);

  /**
   * Handles clicking on a nav link
   * - Updates active state
   * - Closes mobile menu (if open)
   */
  const handleLinkClick = (id) => {
    setActive(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }} // Animate from above
      animate={{ y: 0 }} // Slide down
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ml-6 h-16">
          {/* Brand / Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent cursor-pointer">
            LOGO
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`relative text-sm font-medium group transition-colors duration-300 ${
                  active === link.id
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-500"
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}

            {/* CTA: Hire Me Button */}
            <a
              href="https://linkedin.com/in/shalini-singh-887832251/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(255, 94, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md text-white font-medium gradient-animate bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
              >
                Hire Me
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute w-full transition-all duration-500 ease-in-out 
          ${isMenuOpen ? "top-16 opacity-100 visible backdrop-blur-md" : "-top-96 opacity-0 invisible"} 
          ${scrolled ? "bg-black" : ""}
        `}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-medium transition-colors duration-300 ${
                active === link.id
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-orange-500"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* CTA: Hire Me Button (Mobile) */}
          <a
            href="https://linkedin.com/in/shalini-singh-887832251/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md text-white font-medium gradient-animate bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
            >
              Hire Me
            </motion.button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
