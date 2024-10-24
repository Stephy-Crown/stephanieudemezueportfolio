export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white text-center px-4"
    >
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-gray-700 text-white rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-gray-700 text-white rounded-lg"
        />
        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full p-4 bg-gray-700 text-white rounded-lg"
        ></textarea>
        <button className="py-3 px-6 bg-blue-600 rounded-full hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
