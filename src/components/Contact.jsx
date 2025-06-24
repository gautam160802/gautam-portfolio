import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiX } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace
        "your_template_id", // Replace
        form.current,
        "your_public_key" // Replace
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.text);
          setResult("success");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setResult("error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Let's Connect
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {/* Left Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-lg text-gray-400">Reach me anytime 👇</p>

          <div className="flex gap-8 text-4xl text-blue-400">
            <a
              href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Gautam_kum4r"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <SiX />
            </a>
            <a
              href="https://github.com/gautam160802"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Or email me directly:{" "}
            <a
              href="mailto:gk17318@gmail.com"
              className="text-blue-400 hover:underline"
            >
              gk17318@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg p-8 border border-blue-500/20 shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              required
              className="w-full px-4 py-3 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91-xxxxxxx"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Result Message */}
          {result === "success" && (
            <p className="mt-4 text-green-400 text-center">
              Message sent successfully! ✅
            </p>
          )}
          {result === "error" && (
            <p className="mt-4 text-red-400 text-center">
              Something went wrong ❌
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
