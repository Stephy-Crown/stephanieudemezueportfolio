import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  // FaShoppingCart,
  FaPalette,
  FaUsers,
  FaDatabase,
  FaChartLine,
  // FaUserGraduate,
} from "react-icons/fa";
// import { FaProjectDiagram } from "react-icons/fa"; // Import a project-related icon

export default function Projects() {
  const projects = [
   
    {
    title: "FutureStore AI Admin App",
    description:
      "A modern admin dashboard built with role-based access (Admin, Manager, Support). Features dynamic UI components, seamless CRUD operations, and optimized performance using the Next.js App Router.",
    image: "/futurestore.png", // Update with actual image path
    technologies: ["Next.js", "Redux Toolkit", "React Query", "Tailwind CSS"],
    link: "https://futurestore-admin.vercel.app", // Update with actual link
    github: "", // Add GitHub repo if available
    icon: <FaDatabase className="text-green-600 w-6 h-6" />,
    bgColor: "bg-gradient-to-r from-green-900/90 to-gray-800/90",
  },
  {
    title: "Teamverse",
    description:
      "An open-source gamified team bonding platform enhancing remote collaboration using games and seamless Web3 onboarding via Argent Invisible Wallet. Built with accessible and modern frontend technologies.",
    image: "/teamverse.png", // Update with actual image path
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "TypeScript",
      "Argent Wallet",
    ],
    link: "https://teamverse-frontend.vercel.app", // Replace with actual link
    github: "https://github.com/zintarh/teamverse-frontend", // Add GitHub repo if public
    icon: <FaUsers className="text-blue-600 w-6 h-6" />,
    bgColor: "bg-gradient-to-r from-blue-900/90 to-gray-700/90",
  },
    {
      title: "An Authentication App",
      description:
        "A Next.js authentication application integrated with Clerk for seamless user authentication, providing a secure and login experience.The backend is powered by MongoDB, a NoSQL database, and Mongoose for elegant MongoDB object modeling in Node.js.",

      // image: "/1.png",
      image: "/1-removebg-preview.png",
      technologies: ["Next.js", "Clerk", "MongoDB"],
      link: "https://next-auth-app-s4s1.vercel.app/",
      github: "https://github.com/Stephy-Crown/AuthApp",
      icon: <FaRocket className="text-purple-600 w-6 h-6" />,
      bgColor: "bg-purple-600", // Custom background color
    },
    // {
    //   title: "Ceremonies Website",
    //   description:
    //     "A simple beautiful 3-page wedding officiating website designed with a clean, elegant layout and romantic color scheme to create a welcoming online presence. It features a Home page with services and testimonials, an About page highlighting the officiant's story, and a Contact page to easily book wedding services.",
    //   image: "/beautfulceremony.png",
    //   technologies: ["Next.js", "TalwindCSS"],
    //   link: "https://bcapp.netlify.app/",
    //   github: "",
    //   icon: <FaShoppingCart className="text-purple-600 w-6 h-6" />,
    //   bgColor: "bg-fuchsia-800",
    // },
     {
      title: "StephFolio",
      description:
        "A sleek single page portfolio showcasing my skills, projects, and experiences. Includes a Hero section, a Projects section  that highlights my work with descriptions and visuals, and a Contact section for inquiries. It is designed with a clean layout and responsive design for a seamless user experience across devices.",
      image: "/stephfolo.png",
      technologies: ["Next.js", "Figma", "TalwindCSS"],
      link: "https://stephanieudemezueportfolio.vercel.app",
      github: "https://github.com/Stephy-Crown/stephanieudemezueportfolio",
      icon: <FaPalette className="text-purple-600 w-6 h-6" />,
      bgColor: "bg-gradient-to-r from-gray-900/90 to-purple-800/90",
    },
//     {
//   title: "Student Admission Portal Dashboard",
//   // title: "Student Admission Portal & Admin Dashboard",
//   description:
//     "A comprehensive school admission portal with an intuitive user dashboard for applicants and an admin panel for managing applications, admissions, and user data. Features include form submission, status tracking, secure login, and CRUD operations.",
//   image: "/admission-portal.png", // Update with actual image path
//   technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
//   link: "https://schooladmission-dashboard.vercel.app", // Replace with actual link
//   github: "", // Add GitHub repo if available
//   icon: <FaUserGraduate className="text-yellow-600 w-6 h-6" />,
//   bgColor: "bg-gradient-to-r from-yellow-700/90 to-gray-900/90",
// },

    {
      title: "IMDB Movie Clone App",
      description:
        "A minimalist movie database app with a sleek toggle black-and-white theme. Features a powerful search bar for finding movies instantly and  to keep users updated on new movies. It combines simplicity with functionality, offering a clean user experience focused on discovering and exploring films.",
      image: "/mdb.png",
      technologies: ["Next.js", "Figma", "TailwindCSS"],
      link: "https://imdb-clone-app-v1.vercel.app/",
      github: "https://github.com/Stephy-Crown/IMDb-Clone-App",
      icon: <FaPalette className="text-purple-600 w-6 h-6" />,
      bgColor: "bg-orange-700",
    },
    {
      title: "BlogLab",
      description:
        "A dynamic and user-friendly blog platform where users can add, edit, and view blogs. The app features a clean interface with a responsive design, allowing users to share their thoughts seamlessly. Includes a form for adding blog posts, a blog listing page, and individual blog detail pages for an engaging reading and writing experience.",
      image: "/bloglab.png",
      technologies: ["React", "CSS"],
      link: "https://stephy-blog.vercel.app/",
      github: "https://github.com/Stephy-Crown/Stephy-Blog",
      icon: <FaPalette className="text-purple-600 w-6 h-6" />,
      bgColor: "bg-pink-600",
    },
    // {
    //   title: "Budget Tracker App",
    //   description:
    //     "A simple yet powerful app designed to help users track their income and expenses. The app features a clean, intuitive interface with options to add transactions, categorize expenses, and visualize spending trends. Users can set budget limits, monitor financial goals, and stay on top of their financial health, all within a user-friendly and responsive design.",
    //   image: "/tracer.png",
    //   technologies: ["Javascript", "HTML", "CSS"],
    //   link: "https://budget-tracker-app-ebon.vercel.app/",
    //   github: "https://github.com/Stephy-Crown/Budget-Tracker-App",
    //   icon: <FaPalette className="text-purple-600 w-6 h-6" />,
    //   bgColor: "bg-green-600",
    // },
    {
  title: "MoneySense – AI-Powered Fintech App",
  description:
    "A financial planning web platform built with AI assistance. Features include smart budgeting tools, personalized dashboards, and real-time analytics, developed using Next.js and deployed with CI/CD pipelines.",
  image: "/moneysense.png", // Update with actual image path
  technologies: ["Next.js", "Chart.js", "Recharts", "Tailwind CSS", "TypeScript"],
  link: "https://moneysense-nine.vercel.app/", // Update with actual link
  github: "", // Add GitHub repo if available
  icon: <FaChartLine className="text-blue-600 w-6 h-6" />,
  bgColor: "bg-gradient-to-r from-blue-900/90 to-gray-800/90",
},
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center space-x-4">
          {/* Icon for projects */}
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden pb-3"
            >
              {/* className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden ${project.bgColor}`} */}
              <div
                className={`relative overflow-hidden aspect-video ${project.bgColor}`}
              >
                <h1 className="text-center text-white font-bold pb-10 mt-1">
                  {project.title}
                </h1>
               
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-95 transition-transform duration-500"
                />
               
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    passHref
                    className="flex items-center text-purple-600 hover:text-purple-700"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    passHref
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
