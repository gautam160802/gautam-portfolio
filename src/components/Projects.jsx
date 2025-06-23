import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Green Cart",
      desc: "Full-stack online grocery store with secure authentication, product search, responsive UI, and admin panel for inventory management.",
    },
    {
      title: "QuickShow",
      desc: "Complete movie ticket booking platform with seat selection, payment gateway integration, and schedule management for admins.",
    },
    {
      title: "Job Portal",
      desc: "Full-stack job portal where companies post jobs, candidates apply, with secure authentication and full application tracking system.",
    },
    {
      title: "Freelance Infra Client Website",
      desc: "Developed fully responsive website for local infrastructure business showcasing services, client testimonials, and contact form integration.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Projects
      </motion.h1>

      <div className="grid gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#334155] p-6 rounded-lg shadow-lg text-left"
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-lg">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
