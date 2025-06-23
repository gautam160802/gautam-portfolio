import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import XIcon from "../components/XIcon";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Gautam Kumar</h1>
        <p className="text-xl text-gray-300 mb-4">
          Full Stack Developer | MERN Stack | Product Builder | Problem Solver
        </p>

        <div className="flex gap-8 justify-center text-4xl mb-4">
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

        <div className="flex gap-4 justify-center">
          <a
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded font-semibold"
          >
            Get In Touch
          </a>
          <a
            href="https://drive.google.com/file/d/10OFwj8Ggv4B61I5VxgIGvXUxWuNjJycc/view?usp=sharing"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-10 max-w-3xl"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a passionate Full Stack Developer with hands-on experience
          building scalable web applications using React, Node.js, Express, and
          MongoDB. I enjoy solving complex problems, collaborating in startup
          environments, and continuously learning new technologies.
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mb-10 max-w-4xl"
      >
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Vercel",
            "Framer Motion",
          ].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
