import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl leading-relaxed"
      >
        I’m a Full Stack Developer passionate about building scalable full stack
        applications using modern technologies. I’ve completed MERN stack
        training from 100xDevs and built several professional-level projects
        targeting startups and product companies.
      </motion.p>
    </div>
  );
}

export default About;
