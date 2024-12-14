// // import Link from "next/link";

// // export default function Navbar() {
// //   return (
// //     <nav className="fixed w-full bg-gray-900 text-white py-4 z-10">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <h1 className="text-xl font-bold">[Your Name]</h1>
// //         <div className="space-x-4">
// //           <Link href="#about">About</Link>
// //           <Link href="#skills">Skills</Link>
// //           <Link href="#services">Services</Link>
// //           <Link href="#projects">Projects</Link>
// //           <Link href="#contact">Contact</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="fixed w-full bg-gray-900 text-white py-4 z-10">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <h1 className="text-xl font-bold">[Your Name]</h1>
// //         {/* Hamburger Icon for Mobile */}
// //         <div className="md:hidden">
// //           <button onClick={() => setIsOpen(!isOpen)}>
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //               />
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Full Navbar Links for Larger Screens */}
// //         <div className="hidden md:flex space-x-4">
// //           <Link href="#about">About</Link>
// //           <Link href="#skills">Skills</Link>
// //           <Link href="#services">Services</Link>
// //           <Link href="#projects">Projects</Link>
// //           <Link href="#contact">Contact</Link>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-gray-800">
// //           <Link href="#about" className="block py-2 px-4 text-sm">
// //             About
// //           </Link>
// //           <Link href="#skills" className="block py-2 px-4 text-sm">
// //             Skills
// //           </Link>
// //           <Link href="#services" className="block py-2 px-4 text-sm">
// //             Services
// //           </Link>
// //           <Link href="#projects" className="block py-2 px-4 text-sm">
// //             Projects
// //           </Link>
// //           <Link href="#contact" className="block py-2 px-4 text-sm">
// //             Contact
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Sidebar for Small Screens */}
// //       <nav
// //         className="fixed md:hidden h-full w-64 bg-gray-900 text-white z-10 transition-transform duration-300 transform"
// //         style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
// //       >
// //         <div className="p-6">
// //           <h1 className="text-2xl font-bold mb-8">[Your Name]</h1>
// //           <div className="space-y-4">
// //             <Link href="#about" className="block text-lg">
// //               About
// //             </Link>
// //             <Link href="#skills" className="block text-lg">
// //               Skills
// //             </Link>
// //             <Link href="#services" className="block text-lg">
// //               Services
// //             </Link>
// //             <Link href="#projects" className="block text-lg">
// //               Projects
// //             </Link>
// //             <Link href="#contact" className="block text-lg">
// //               Contact
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hamburger Menu for Mobile */}
// //       <div className="md:hidden fixed top-4 left-4 z-20">
// //         <button onClick={() => setIsOpen(!isOpen)}>
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //             />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Navbar for Larger Screens */}
// //       <nav className="hidden md:flex fixed w-full bg-gray-900 text-white py-4 z-10">
// //         <div className="container mx-auto flex justify-between items-center">
// //           <h1 className="text-xl font-bold">[Your Name]</h1>
// //           <div className="space-x-4">
// //             <Link href="#about">About</Link>
// //             <Link href="#skills">Skills</Link>
// //             <Link href="#services">Services</Link>
// //             <Link href="#projects">Projects</Link>
// //             <Link href="#contact">Contact</Link>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <>
// //       {/* Sidebar for Small Screens */}
// //       <nav
// //         className={`fixed md:hidden h-full w-64 bg-gray-900 text-white z-10 transition-transform duration-300 transform ${
// //           isOpen ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         <div className="p-6">
// //           <h1 className="text-2xl font-bold mb-8">[Your Name]</h1>
// //           <div className="space-y-4">
// //             <Link
// //               href="#about"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-lg"
// //             >
// //               About
// //             </Link>
// //             <Link
// //               href="#skills"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-lg"
// //             >
// //               Skills
// //             </Link>
// //             <Link
// //               href="#services"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-lg"
// //             >
// //               Services
// //             </Link>
// //             <Link
// //               href="#projects"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-lg"
// //             >
// //               Projects
// //             </Link>
// //             <Link
// //               href="#contact"
// //               onClick={() => setIsOpen(false)}
// //               className="block text-lg"
// //             >
// //               Contact
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hamburger Menu for Mobile */}
// //       <div className="md:hidden fixed top-4 left-4 z-20">
// //         <button onClick={() => setIsOpen(!isOpen)}>
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //             />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Navbar for Larger Screens */}
// //       <nav className="hidden md:flex fixed w-full bg-gray-900 text-white py-4 z-10">
// //         <div className="container mx-auto flex justify-between items-center">
// //           <h1 className="text-xl font-bold">[Your Name]</h1>
// //           <div className="space-x-4">
// //             <Link href="#about">About</Link>
// //             <Link href="#skills">Skills</Link>
// //             <Link href="#services">Services</Link>
// //             <Link href="#projects">Projects</Link>
// //             <Link href="#contact">Contact</Link>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Sidebar for Small Screens */}
//       <nav
//         className={`fixed md:hidden h-full w-64 bg-gray-900 text-white z-50 transition-transform duration-300 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-6 flex justify-between ">
//           {/* <div
//         className={`fixed md:hidden h-full w-64 bg-gray-900 text-white z-50 transition-transform duration-300 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       > */}

//           <h1 className="text-2xl font-bold">[Your Name]</h1>
//           {/* X button to close menu */}
//           <button onClick={() => setIsOpen(false)}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="space-y-4 px-6">
//           <Link
//             href="#about"
//             onClick={() => setIsOpen(false)}
//             className="block text-lg"
//           >
//             About
//           </Link>
//           <Link
//             href="#skills"
//             onClick={() => setIsOpen(false)}
//             className="block text-lg"
//           >
//             Skills
//           </Link>
//           <Link
//             href="#services"
//             onClick={() => setIsOpen(false)}
//             className="block text-lg"
//           >
//             Services
//           </Link>
//           <Link
//             href="#projects"
//             onClick={() => setIsOpen(false)}
//             className="block text-lg"
//           >
//             Projects
//           </Link>
//           <Link
//             href="#contact"
//             onClick={() => setIsOpen(false)}
//             className="block text-lg"
//           >
//             Contact
//           </Link>
//         </div>
//       </nav>

//       {/* Hamburger Icon */}

//       <div className="md:hidden fixed top-4 left-4 z-20">
//         <div className="p-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">[Your Name]</h1>
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Navbar for Larger Screens */}
//       <nav className="hidden md:flex fixed w-full bg-gray-900 text-white py-4 z-10">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-xl font-bold">[Your Name]</h1>
//           <div className="space-x-4">
//             <Link href="#about">About</Link>
//             <Link href="#skills">Skills</Link>
//             <Link href="#services">Services</Link>
//             <Link href="#projects">Projects</Link>
//             <Link href="#contact">Contact</Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
            className="text-xl font-bold text-purple-600 hover:text-purple-700"
          >
            👨‍💻 Stephfolio
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? "❌" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              📦 {/* GitHub */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              💼 {/* LinkedIn */}
            </a>
            <a
              href="mailto:example@email.com"
              className="hover:text-purple-600"
            >
              ✉️ {/* Email */}
            </a>
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          ⬆️
        </button>
      )}
    </>
  );
}
