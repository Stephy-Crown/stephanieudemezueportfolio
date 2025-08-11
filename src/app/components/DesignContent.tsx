"use client";
import Link from "next/link";

const DesignContent = () => {
  return (
    <section id="design-content" className="relative bg-gray-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
          Design & Content Creation
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto">
          My contributions to the X community, featuring graphics designed in Canva and engaging content to share tech tips, promote tech programs, and inspire mentorship.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="rounded-xl p-6 hover:shadow-xl transition-all group border border-purple-200/50 hover:-translate-y-2 hover:border-purple-400 transform bg-gray-800/60 backdrop-blur-sm">
            <img
              src="/mentor desgn.jpg"
              alt="Promotional graphic for X community mentorship campaign"
              className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">X Community Graphic</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Designed a promotional graphic using Canva for an X community campaign, driving engagement.
            </p>
            <Link
              href="https://x.com/she_buidls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm sm:text-base"
              aria-label="View X community graphic on X"
            >
              View Profile on X
            </Link>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6 hover:shadow-xl transition-all group border border-purple-200/50 hover:-translate-y-2 hover:border-purple-400 transform bg-gray-800/60 backdrop-blur-sm">
            <img
              src="/desgntps.jpg"
              alt="Infographic with JavaScript debugging tips"
              className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Tech Tip Infographic</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Designed a striking Canva infographic with JavaScript debugging tips, earning likes on X with its bold, clear visuals.
            </p>
            <Link
              href="https://x.com/she_buidls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm sm:text-base"
              aria-label="View tech tip infographic on X"
            >
              View Profile on X
            </Link>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-6 hover:shadow-xl transition-all group border border-purple-200/50 hover:-translate-y-2 hover:border-purple-400 transform bg-gray-800/60 backdrop-blur-sm">
            <img
              src="/techtp.jpg"
              alt="Content series graphic for X community"
              className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Content Series</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Developed a series of posts with Canva visuals for the X community, boosting interaction.
            </p>
            <Link
              href="https://x.com/she_buidls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm sm:text-base"
              aria-label="View content series on X profile"
            >
              View Profile on X
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignContent;