import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

import greencartImg from "../assets/greencart.png";
import quickshowImg from "../assets/quickshow.png";
import jobportalImg from "../assets/jobportal.png";
import infraImg from "../assets/infrawebsite.png";

function Projects() {
  const projectData = [
    {
      title: "Green Cart (Online Grocery Store)",
      description:
        "Full online grocery platform with secure payments, authentication, cart, and admin dashboard.",
      tech: "React, Node.js, Express.js, MongoDB, Stripe, TailwindCSS",
      github: "https://github.com/gautam160802/greencart",
      image: greencartImg,
    },
    {
      title: "QuickShow (Movie Ticket Booking)",
      description:
        "Movie ticket booking app with search, seat selection, and payment integration.",
      tech: "React, Node.js, Express.js, MongoDB, Razorpay",
      github: "https://github.com/gautam160802/quickshow",
      image: quickshowImg,
    },
    {
      title: "Job Portal App",
      description:
        "Job portal with recruiter dashboard, job posting, filters, applications and authentication.",
      tech: "React, Node.js, Express.js, MongoDB, Clerk, Sentry",
      github: "https://github.com/gautam160802/jobportal",
      image: jobportalImg,
    },
    {
      title: "Infra Client Website (Freelance)",
      description:
        "Professional business website for infrastructure industry client.",
      tech: "React, TailwindCSS, Responsive Design",
      github: "https://github.com/gautam160802/infraclient",
      image: infraImg,
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center p-8 min-h-screen">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        My Projects
      </motion.h1>

      {projectData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16 max-w-5xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-[500px] rounded-lg shadow-lg"
          />
          <div className="text-left max-w-md">
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="mb-4">
              <span className="font-semibold">Tech Stack:</span> {project.tech}
            </p>
            <a
              href={project.github}
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Code
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
