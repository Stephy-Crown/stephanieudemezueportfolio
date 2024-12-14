import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  FaShoppingCart,
  FaPalette,
} from "react-icons/fa";
// import { FaProjectDiagram } from "react-icons/fa"; // Import a project-related icon

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with Next.js and Node.js",
      image: "/images/project-one.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/project-one",
      github: "https://github.com/username/project-one",
      icon: <FaRocket className="text-purple-600 w-6 h-6" />,
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time updates",
      image: "/images/project-two.png",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "/project-two",
      github: "https://github.com/username/project-two",
      icon: <FaShoppingCart className="text-purple-600 w-6 h-6" />,
    },
    {
      title: "Project Three",
      description: "An innovative design project for modern web experiences",
      image: "/images/project-three.png",
      technologies: ["React", "Figma", "CSS"],
      link: "/project-three",
      github: "https://github.com/username/project-three",
      icon: <FaPalette className="text-purple-600 w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center space-x-4">
          {/* Icon for projects */}
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
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
