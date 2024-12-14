export default function Contact() {
  return (
    // Contact Section
    <section
      id="contact"
      className="py-24  text-white  bg-gradient-to-r from-gray-900/90 to-gray-800/90"
    >
      {/* bg-gradient-to-r from-purple-600 to-blue-500 */}
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let&apos;s Work Together! 🤝
          </h2>
          <p className="text-xl mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Send Message 📤
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
