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
      description: `
        A full-featured e-commerce grocery platform where users can browse products, add to cart, securely checkout using Stripe, and track their orders.
        Admin dashboard enables product, order, and user management. Built with complete authentication, responsive UI, and optimized for performance.`,
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "TailwindCSS",
      ],
      github: "https://github.com/gautam160802/greencart",
      live: "",
      image: greencartImg,
      featured: true,
      status: "Live Project",
    },
    {
      title: "QuickShow (Movie Ticket Booking App)",
      description: `
        A dynamic movie ticket booking application with features like real-time movie search, showtime filtering, seat selection, payment integration (Razorpay), and user authentication. 
        Admin panel allows show and movie management. Entire UI is optimized for mobile and desktop experience.`,
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "TailwindCSS",
      ],
      github: "https://github.com/gautam160802/quickshow",
      live: "",
      image: quickshowImg,
      status: "In Progress",
    },
    {
      title: "Job Portal (Full Stack Job Board)",
      description: `
        A scalable job board platform that enables recruiters to post jobs, manage applications, and track applicants. Job seekers can browse and apply for jobs, with filters and application status tracking.
        Authentication is handled by Clerk and error tracking through Sentry. The design is mobile-first and production-ready.`,
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Sentry",
        "TailwindCSS",
      ],
      github: "https://github.com/gautam160802/jobportal",
      live: "",
      image: jobportalImg,
      status: "Live Project",
    },
    {
      title: "Infra Client Website (Freelance Project)",
      description: `
        Delivered a professional and responsive business website for a real infrastructure company. 
        The site highlights services, company profile, project gallery, and contact details. 
        Delivered to the client with pixel-perfect design, SEO optimization, and high performance.`,
      tech: ["React", "TailwindCSS", "Responsive Web Design", "Deployment"],
      github: "https://github.com/gautam160802/infraclient",
      live: "",
      image: infraImg,
      status: "Freelance Delivery",
    },
  ];

  return (
    <div className="relative flex flex-col items-center p-8 min-h-screen">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-black/20 dark:bg-white/5 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-400/30 transition-shadow"
          >
            {project.featured && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold z-10 shadow-lg">
                🌟 Featured
              </div>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover object-center"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200"
                  >
                    Live Demo
                  </a>
                )}
                <span className="text-xs px-3 py-1 bg-white/10 text-gray-400 rounded-full">
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
