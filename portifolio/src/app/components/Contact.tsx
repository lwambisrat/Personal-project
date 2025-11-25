"use client";

import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact"className="bg-transparent text-white py-20 px-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Thank you for visiting!</h2>
      <p className="text-gray-300 mb-8">Let’s Connect</p>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/lwam-bisrat-b8a148338/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-red-700 px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
        >
          <FaLinkedin className="text-blue-400 text-xl" />
          <span>Lwam Bisrat</span>
        </a>

        {/* Email */}
        <a
          href="mailto:lwambsrat@gmail.com"
          className="border-2 border-red-700 px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
        >
          <FaEnvelope className="text-red-400 text-xl" />
          <span>lwambsrat@gmail.com</span>
        </a>

        {/* Twitter (X) */}
        <a
          href="https://x.com/BisratLwam20838"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-red-700 px-6 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
        >
          <FaXTwitter className="text-white text-xl" />
          <span>Lwam Bisrat</span>
        </a>
      </div>
    </section>
  );
}
