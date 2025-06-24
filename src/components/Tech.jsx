import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

function Tech() {
  const techStack = [
    { name: "React", icon: <FaReact className="text-sky-400" size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={50} /> },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400" size={50} />,
    },
    { name: "Express", icon: <SiExpress className="text-white" size={50} /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={50} />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-300" size={50} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" size={50} />,
    },
    { name: "GitHub", icon: <FaGithub className="text-white" size={50} /> },
    { name: "Vercel", icon: <SiVercel className="text-white" size={50} /> },
    {
      name: "Database",
      icon: <FaDatabase className="text-yellow-300" size={50} />,
    },
  ];

  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="flex flex-col items-center space-y-3 hover:scale-110 transition"
          >
            {tech.icon}
            <span className="text-sm text-gray-300">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Tech;
