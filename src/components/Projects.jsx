import React from "react";
import { motion } from "framer-motion";
import greenCart from "../assets/green-cart.png";
import quickshow from "../assets/quickshow.png";
import jobPortal from "../assets/job-portal.png";
import infraClient from "../assets/infra-client.png";

function Projects() {
  const projects = [
    {
      title: "Green Cart",
      desc: "Full-stack online grocery store with secure authentication, product search, responsive UI, and admin panel.",
      img: greenCart,
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    },
    {
      title: "QuickShow",
      desc: "Movie ticket booking platform with seat selection, payment integration, and schedule management.",
      img: quickshow,
      tech: ["React", "Redux", "Node.js", "MongoDB", "Bootstrap"],
    },
    {
      title: "Job Portal",
      desc: "Job portal where companies post jobs, candidates apply, with secure auth and full application tracking.",
      img: jobPortal,
      tech: ["React", "Node.js", "Express", "MongoDB", "Clerk"],
    },
    {
      title: "Infra Client Website (Freelance)",
      desc: "Business website for infrastructure company showcasing services, testimonials, and contact system.",
      img: infraClient,
      tech: ["React", "TailwindCSS", "Vercel"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#334155] p-4 rounded-lg shadow-lg text-left"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded mb-4 object-cover h-60 w-full"
            />
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-lg mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
