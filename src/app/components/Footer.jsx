import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-blue-100 py-6">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Tagline */}
        <p className="text-gray-700 mb-4">
          © {currentYear} Stephanie Udemezue. All rights reserved
        </p>
        <p className="mb-5">Building impactful web experiences. </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
