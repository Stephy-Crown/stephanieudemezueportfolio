export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js"];

  return (
    <section id="skills" className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-xl font-bold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
