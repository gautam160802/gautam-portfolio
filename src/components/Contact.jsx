import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function Contact() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-8 min-h-screen">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
      >
        Interested in working together? Reach out to me through any platform
        below!
      </motion.p>

      <div className="flex flex-col gap-6">
        <a
          href="mailto:gk17318@gmail.com"
          className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition"
        >
          gk17318@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
          target="_blank"
          className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://x.com/Gautam_kum4r"
          target="_blank"
          className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          Connect on X (Twitter)
        </a>
      </div>
    </div>
  );
}

export default Contact;
