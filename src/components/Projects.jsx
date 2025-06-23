import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import greenCart from "../assets/green-cart.png";
import quickshow from "../assets/quickshow.png";
import jobPortal from "../assets/job-portal.png";
import infraClient from "../assets/infra-client.png";

function Projects() {
  const projects = [
    {
      title: "Green Cart",
      desc: "Full-stack online grocery store with authentication, product search, admin panel, and full backend CRUD operations.",
      img: greenCart,
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      github: "https://github.com/gautam160802/green-cart",
    },
    {
      title: "QuickShow",
      desc: "Movie ticket booking platform with seat selection, payment gateway integration and admin schedule management.",
      img: quickshow,
      tech: ["React", "Redux", "Node.js", "MongoDB", "Bootstrap"],
      github: "https://github.com/gautam160802/quickshow",
    },
    {
      title: "Job Portal",
      desc: "Job portal with company posting, applicant tracking system, secure login, and full backend management.",
      img: jobPortal,
      tech: ["React", "Node.js", "Express", "MongoDB", "Clerk"],
      github: "https://github.com/gautam160802/job-portal",
    },
    {
      title: "Infra Client Website (Freelance)",
      desc: "Built fully responsive business website for local infrastructure client showcasing services and contact form integration.",
      img: infraClient,
      tech: ["React", "TailwindCSS", "Vercel"],
      github: "https://github.com/gautam160802/infra-client",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 min-h-screen max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-12">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col md:flex-row bg-[#334155] rounded-lg shadow-lg overflow-hidden"
          >
            {/* Text Content */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4">{proj.title}</h2>
              <p className="text-lg mb-6">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.github}
                target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:underline"
              >
                <FaGithub /> View Code
              </a>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={proj.img}
                alt={proj.title}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
