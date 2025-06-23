import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-5xl mx-auto">
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
        Hello! I'm{" "}
        <span className="text-blue-400 font-semibold">Gautam Kumar</span>, a
        passionate full stack developer with strong expertise in building
        scalable, responsive web applications using modern technologies.
        <br />
        <br />I specialize in the{" "}
        <span className="font-semibold">
          MERN Stack (MongoDB, Express.js, React.js, Node.js)
        </span>
        , delivering full-fledged solutions from backend APIs to elegant
        frontend interfaces.
        <br />
        <br />
        I enjoy working with startups, product teams, and fast-paced
        environments where I can contribute to building real products that solve
        real-world problems.
        <br />
        <br />
        Apart from coding, I love continuous learning, contributing to freelance
        projects, and always stay updated with evolving technologies.
        <br />
        <br />
        My goal is simple —{" "}
        <span className="italic text-blue-300">
          "Build products that create real impact."
        </span>
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
          "Team Collaboration",
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
