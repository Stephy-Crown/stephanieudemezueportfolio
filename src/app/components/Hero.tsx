import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center">
      {/* Dynamic background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>{" "}
        {/* Darker gradient */}
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex flex-col items-center md:items-start">
              {/* Welcome badge */}
              <div className="inline-block animate-bounce">
                <span className="text-lg bg-white/10 backdrop-blur px-6 py-3 rounded-full text-purple-200 border border-purple-500/20 flex items-center gap-2">
                  <span className="animate-pulse">👋</span>
                  <span>Welcome to my portfolio</span>
                </span>
              </div>

              {/* Mobile image */}
              <div className="block md:hidden relative w-full max-w-[300px] aspect-square mt-12 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"></div>
                <Image
                  src="/steph2.png"
                  alt="Developer Illustration"
                  layout="fill"
                  objectFit="contain"
                  className="relative z-10 rounded-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Main content */}
              <div className="space-y-6 text-center md:text-left w-full">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Hi, I&apos;m Stephanie Udemezue
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-purple-100">
                  Frontend Web Developer • AI/ML Enthusiast • Problem Solver
                </p>
              </div>

              {/* Description box */}
              <div className="w-full md:w-auto mb-12 p-8 rounded-2xl backdrop-blur bg-white/5 border border-purple-500/20 text-center md:text-left group hover:bg-white/10 transition-all duration-300">
                <p className="text-lg text-purple-100 leading-relaxed">
                  Crafting digital experiences that merge innovation with
                  functionality. With a keen eye for design and a mastery of
                  code, I transform complex challenges into elegant solutions.
                  Ready to bring your vision to life with clean, efficient, and
                  scalable development.
                  <span className="block mt-4 text-purple-300 font-medium">
                    Let&apos;s create something extraordinary together! ✨
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="#projects"
                  className="px-8 py-4 bg-white text-purple-900 rounded-full hover:shadow-lg group transition-all duration-300 font-medium inline-flex items-center justify-center"
                >
                  <span className="flex items-center">
                    View My Work
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-purple-900/30 backdrop-blur border border-purple-500/20 text-white rounded-full hover:bg-purple-900/40 transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Let&apos;s Connect
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop image */}
          <div className="hidden md:block relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl animate-pulse opacity-20"></div>
              <Image
                src="/steph2.png"
                alt="Developer Illustration"
                layout="fill"
                objectFit="contain"
                className="relative z-10 rounded-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
