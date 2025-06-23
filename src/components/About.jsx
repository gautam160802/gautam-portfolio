import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function About() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-8 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6 text-gray-100 dark:text-gray-200"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl text-gray-300 dark:text-gray-400 leading-relaxed mb-10 max-w-3xl"
      >
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          I’m{" "}
          <span className="text-blue-400 dark:text-blue-300 font-semibold">
            Gautam Kumar
          </span>
          , a passionate full stack developer.
          <br /> <br />
          My expertise lies in building modern, scalable, and high-performing
          full stack applications using MERN stack (MongoDB, Express.js,
          React.js, Node.js).
          <br /> <br />
          I'm driven by solving real-world problems, building products, working
          with startups, and delivering value to businesses.
          <br /> <br />
          Completed 100xDevs intensive full stack development program with
          multiple live projects.
        </p>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-400 dark:text-gray-500">
          My mission is to craft pixel-perfect frontends and robust backends
          that solve real-world problems. I love learning new technologies and
          constantly improving to deliver high-quality products for fast-moving
          teams.
        </p>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {[
          "Full Stack Development",
          "REST APIs",
          "Frontend Design",
          "Backend Logic",
          "Authentication",
          "Deployment",
          "Problem Solving",
        ].map((skill, i) => (
          <span
            key={i}
            className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-full text-lg cursor-pointer transition-colors duration-300 hover:bg-pink-500"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
