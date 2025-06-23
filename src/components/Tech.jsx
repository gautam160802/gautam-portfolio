import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Vercel",
  "JWT",
  "REST API",
];

export default function Tech() {
  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-24 px-6 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 border border-blue-400 rounded-full text-blue-300 bg-white/10 backdrop-blur-sm"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
