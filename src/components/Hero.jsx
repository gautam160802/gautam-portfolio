import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-0 max-w-4xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-transparent bg-clip-text mb-6"
      >
        Hi, I’m <span className="text-blue-400">Gautam Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed"
      >
        Full Stack Developer | MERN Stack | Product Builder | Remote SaaS
        Solutions
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="italic text-gray-400 max-w-lg mx-auto mb-10"
      >
        🚀 Building scalable, high-performance applications for startups, SaaS
        companies, and remote teams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto"
      >
        {[
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "TailwindCSS",
          "TypeScript",
          "REST APIs",
          "GitHub",
          "Vercel",
        ].map((tech) => (
          <span
            key={tech}
            className="bg-white/10 border border-white/20 text-sm px-5 py-2 rounded-full text-gray-300 hover:bg-blue-600 hover:border-blue-500 cursor-default transition"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded shadow-lg font-semibold transition transform hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded shadow-lg font-semibold transition transform hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href="https://drive.google.com/file/d/10OFwj8Ggv4B61I5VxgIGvXUxWuNjJycc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded shadow-lg font-semibold transition transform hover:scale-105"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
