import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[80vh] w-full max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg max-w-3xl"
      >
        I am a Full Stack Developer skilled in building scalable web
        applications using MERN stack technologies. Passionate about solving
        real-world problems with clean and maintainable code. Certified MERN
        Stack Developer by 100xDevs. Skilled in Next.js, React, Node.js,
        Express.js, MongoDB, TailwindCSS, and JavaScript.
      </motion.p>
    </div>
  );
}

export default About;
