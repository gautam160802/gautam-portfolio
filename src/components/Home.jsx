import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import XIcon from "./XIcon";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
      >
        Hi, I’m <span className="text-blue-500">Gautam Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl max-w-2xl mb-10"
      >
        Full Stack Developer | MERN Stack | Passionate about building scalable
        products 🚀
      </motion.p>

      <div className="flex gap-8 text-4xl">
        <a
          href="https://github.com/gautam160802"
          target="_blank"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
          target="_blank"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Gautam_kum4r"
          target="_blank"
          className="hover:text-blue-400"
        >
          <XIcon size={40} />
        </a>
      </div>
    </div>
  );
}

export default Home;
