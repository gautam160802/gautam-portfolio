import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", color: "from-gray-700 to-gray-900" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Express.js", color: "from-gray-500 to-gray-700" },
  { name: "MongoDB", color: "from-green-600 to-green-800" },
  { name: "TailwindCSS", color: "from-teal-400 to-teal-600" },
  { name: "TypeScript", color: "from-blue-600 to-blue-800" },
  { name: "REST APIs", color: "from-pink-400 to-pink-600" },
  { name: "GitHub", color: "from-gray-600 to-gray-800" },
  { name: "Vercel", color: "from-purple-500 to-purple-700" },
];

function Tech() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-8 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10 text-gray-100 dark:text-gray-200"
      >
        Tech Stack
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl w-full">
        {techStack.map(({ name, color }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`bg-gradient-to-br ${color} rounded-lg shadow-lg p-6 cursor-pointer text-white font-semibold text-lg`}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
