import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function Experience() {
  return (
    <div className="relative flex flex-col justify-center items-center p-8 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-center text-gray-100 dark:text-gray-200"
      >
        Experience
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="mb-12 p-6 bg-black/40 dark:bg-gray-900/40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-2 text-blue-400 dark:text-blue-300">
            Infra Client Website (Freelance)
          </h2>
          <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
            Developed a professional, fully responsive business website for a
            client in the infrastructure industry. Implemented modern React with
            TailwindCSS styling and ensured cross-device compatibility.
          </p>
          <ul className="list-disc list-inside text-gray-400 dark:text-gray-500">
            <li>React, TailwindCSS, Responsive Design</li>
            <li>Custom UI components and animations</li>
            <li>SEO best practices and accessibility</li>
            <li>Deployed and maintained client site</li>
          </ul>
        </div>

        <div className="p-6 bg-black/40 dark:bg-gray-900/40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-2 text-blue-400 dark:text-blue-300">
            100xDevs Full Stack Developer Certification
          </h2>
          <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
            Successfully completed the 100xDevs intensive full stack development
            bootcamp. Gained hands-on experience building multiple projects
            using MERN stack technologies with best practices in authentication,
            deployment, and product delivery.
          </p>
          <ul className="list-disc list-inside text-gray-400 dark:text-gray-500">
            <li>Full Stack Web Development</li>
            <li>Authentication & Authorization</li>
            <li>REST API Development</li>
            <li>Deployment with Vercel & Heroku</li>
            <li>Version control with GitHub</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
