import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  // Common class names for form inputs
  const inputClass =
    "w-full px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none";

  return (
    <section
      id="contact"
      className="py-24 text-white bg-gradient-to-r from-gray-900/90 to-gray-800/90"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <form className="max-w-lg mx-auto space-y-6">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className={`pl-12 ${inputClass}`}
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className={`pl-12 ${inputClass}`}
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className={inputClass}
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold flex justify-center items-center space-x-2"
            >
              <FaPaperPlane />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
