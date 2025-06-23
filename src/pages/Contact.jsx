import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[80vh] w-full max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg mb-6 max-w-xl"
      >
        I'm actively looking for full stack developer opportunities. Feel free
        to reach out to me through my LinkedIn or GitHub profiles, or simply
        send me an email.
      </motion.p>

      <div className="flex gap-8 text-4xl mb-6">
        <a href="https://github.com/gautam160802" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="bg-[#334155] p-4 rounded-lg shadow-lg">
        <p>
          Email:{" "}
          <a href="mailto:gk17318@gmail.com" className="text-blue-400">
            gk17318@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
