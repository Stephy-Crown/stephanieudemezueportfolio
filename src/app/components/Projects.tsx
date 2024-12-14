import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      title: "Project One 🌟",
      description:
        "A full-stack web application built with Next.js and Node.js",
      image: "/images/project-one.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/project-one",
      github: "https://github.com/username/project-one",
    },
    {
      title: "Project Two 💫",
      description: "Mobile-first e-commerce platform with real-time updates",
      image: "/images/project-two.png",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "/project-two",
      github: "https://github.com/username/project-two",
    },

    {
      title: "Project One 🌟",
      description:
        "A full-stack web application built with Next.js and Node.js",
      image: "/images/project-one.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/project-one",
      github: "https://github.com/username/project-one",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Featured Projects 🎨
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
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Live Demo 🔗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    Source Code 📦
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
