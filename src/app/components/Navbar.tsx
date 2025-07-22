"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaCode,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(current || "");
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-gradient-to-r from-gray-900/5 to-purple-800/90 hover:text-purple-700 flex items-center"
          >
            <FaCode className="mr-2" /> Stephfolio
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-semibold">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-purple-600 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-purple-600" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="https://github.com/Stephy-Crown"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaGithub size={27} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Stephanie-udemezue/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaLinkedin size={27} />
            </Link>
            <Link
              href="udemezuestephanie6@email.com"
              className="hover:text-purple-600"
            >
              <FaEnvelope size={27} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-4 py-2 space-y-2 bg-white shadow-lg">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top" // Adds an accessible label for screen readers
          className="fixed bottom-8 right-8 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
