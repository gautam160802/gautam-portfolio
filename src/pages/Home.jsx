import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[80vh] w-full max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Gautam Kumar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mb-8"
      >
        Building modern scalable full stack applications that create real-world
        impact
      </motion.p>

      <div className="flex gap-4 mb-8">
        <a
          href="https://drive.google.com/file/d/10OFwj8Ggv4B61I5VxgIGvXUxWuNjJycc/view?usp=sharing"
          target="_blank"
        >
          <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition">
            View Resume
          </button>
        </a>
        <a href="#contact">
          <button className="px-6 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition">
            Contact Me
          </button>
        </a>
      </div>

      <div className="flex gap-6 text-3xl">
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
    </div>
  );
}

export default Home;
