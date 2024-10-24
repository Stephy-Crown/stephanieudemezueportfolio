export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "#",
      img: "/project1.png",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      link: "#",
      img: "/project2.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
