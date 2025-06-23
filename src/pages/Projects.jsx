import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Green Cart",
    description:
      "Online grocery store with full stack ecommerce features including authentication, product management, and payments.",
    link: "#",
  },
  {
    name: "QuickShow",
    description:
      "Movie Ticket booking app with seat selection, payment integration, and fully responsive UI.",
    link: "#",
  },
  {
    name: "Job Portal",
    description:
      "Full stack job portal app with recruiter dashboard, job listings, and application tracking system.",
    link: "#",
  },
  {
    name: "Freelance Infra Industry Website",
    description:
      "Custom built website for a local infrastructure business showcasing their services and projects.",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[80vh]">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-[#334155] rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank">
              <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                View Project
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
