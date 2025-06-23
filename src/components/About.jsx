import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function About() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-8 min-h-screen">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
      >
        I’m <span className="text-blue-400 font-semibold">Gautam Kumar</span>, a
        passionate full stack developer.
        <br /> <br />
        My expertise lies in building modern, scalable, and high-performing full
        stack applications using MERN stack (MongoDB, Express.js, React.js,
        Node.js).
        <br /> <br />
        I'm driven by solving real-world problems, building products, working
        with startups, and delivering value to businesses.
        <br /> <br />
        Completed 100xDevs intensive full stack development program with
        multiple live projects.
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
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
