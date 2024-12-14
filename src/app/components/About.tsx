import Image from "next/image";

export default function About() {
  return (
    // Improved About Section
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-medium">About Me</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">
              Passionate about creating impactful solutions
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-2xl transform rotate-6"></div>
              <Image
                src="/1000224919.png"
                alt="John Doe"
                width={600}
                height={500}
                className="relative z-10 rounded-2xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in full-stack development, I
                specialize in building scalable web applications that solve
                real-world problems. My approach combines technical expertise
                with a deep understanding of user experience design.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Problem Solver
                    </h3>
                    <p className="text-gray-600">
                      Transforming complex challenges into elegant solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Fast Learner
                    </h3>
                    <p className="text-gray-600">
                      Always staying current with emerging technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Team Player</h3>
                    <p className="text-gray-600">
                      Collaborative approach to project development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
