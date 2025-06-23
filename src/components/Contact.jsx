import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import XIcon from "./XIcon";

function Contact() {
  return (
    <div className="relative flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-gray-900 dark:to-gray-800 text-white">
      {/* Text Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          GautamK.
        </h1>
      </motion.div>

      {/* Section Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-6 tracking-wide"
      >
        Let's Connect
      </motion.h1>

      {/* Sub email */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-400 mb-10"
      >
        Drop me a message at:
        <span className="text-blue-400 ml-2">gk17318@gmail.com</span>
      </motion.p>

      {/* Social Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-10 mb-14"
      >
        <a
          href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center transition"
        >
          <FaLinkedin className="text-4xl text-gray-300 group-hover:text-blue-500 transition duration-300" />
          <span className="text-sm mt-2 group-hover:text-blue-300">
            LinkedIn
          </span>
        </a>
        <a
          href="https://x.com/Gautam_kum4r"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center transition"
        >
          <XIcon className="text-4xl text-gray-300 group-hover:text-blue-500 transition duration-300" />
          <span className="text-sm mt-2 group-hover:text-blue-300">
            X (Twitter)
          </span>
        </a>
        <a
          href="https://github.com/gautam160802"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center transition"
        >
          <FaGithub className="text-4xl text-gray-300 group-hover:text-blue-500 transition duration-300" />
          <span className="text-sm mt-2 group-hover:text-blue-300">GitHub</span>
        </a>
      </motion.div>

      {/* Beautiful Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl space-y-6"
      >
        <div>
          <label className="block mb-2 text-blue-300 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-300 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-300 font-semibold">
            Phone No
          </label>
          <input
            type="tel"
            placeholder="+91 1234567890"
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-300 font-semibold">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700 text-white resize-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:brightness-110 text-white font-bold rounded-md transition text-lg"
        >
          Submit
        </button>
      </motion.form>

      <p className="mt-8 text-sm text-gray-500 text-center">
        Or email directly at{" "}
        <a
          href="mailto:gk17318@gmail.com"
          className="text-blue-400 hover:underline"
        >
          gk17318@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
