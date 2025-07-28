"use client";

import { useState, useEffect } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const inputClass =
    "w-full px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error("EmailJS Public Key is missing. Check .env.local.");
      setStatus("Configuration error. Please contact support.");
      return;
    }
    emailjs.init(publicKey);
    console.log("EmailJS initialized in Contact component");
  }, []);

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (status && status.includes("successfully")) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      return "Please enter a valid name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    if (formData.message.trim().length < 10) {
      return "Please enter a message with at least 10 characters.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;
    const templateKey = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY;

    if (!serviceKey || !templateKey) {
      console.error(
        "EmailJS Service Key or Template Key is missing. Check .env.local."
      );
      setStatus("Configuration error. Please contact support.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");
    console.log("Sending form data:", formData);

    emailjs
      .send(serviceKey, templateKey, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })
      .then(
        (response) => {
          console.log("EmailJS success:", response);
          setStatus("Your message was sent successfully! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS error:", error.text || error);
          setStatus("Sorry, something went wrong. Please try again or contact me directly.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 text-white bg-gradient-to-r from-gray-900/90 to-gray-800/90"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl mb-12">
            I&apos;m excited to discuss new projects, creative ideas, or
            opportunities to collaborate on your vision.
          </p>
          <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`pl-12 ${inputClass}`}
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`pl-12 ${inputClass}`}
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className={inputClass}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
            <button
              type="submit"
              className={`w-full px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold flex justify-center items-center space-x-2 transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully") ? "text-green-500" : "text-red-500"
              }`}
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
