import React from "react";
import { motion } from "framer-motion";
import greencartImg from "../assets/greencart.png";
import quickshowImg from "../assets/quickshow.png";
import jobportalImg from "../assets/jobportal.png";
import infraImg from "../assets/infrawebsite.png";

function Projects() {
  const projects = [
    {
      title: "Green Cart (Online Grocery Store)",
      description:
        "Fully functional grocery e-commerce platform with product management, secure payment integration, user authentication, shopping cart, and admin dashboard.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "TailwindCSS",
      ],
      image: greencartImg,
      github: "https://github.com/gautam160802/greencart",
    },
    {
      title: "QuickShow (Movie Ticket Booking)",
      description:
        "Movie ticket booking platform with seat selection, payment integration, movie search, and booking management system.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      image: quickshowImg,
      github: "https://github.com/gautam160802/quickshow",
    },
    {
      title: "Job Portal App",
      description:
        "A complete job portal where recruiters can post jobs, filter applicants, and candidates can apply with authentication, dashboard, and tracking system.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Clerk", "Sentry"],
      image: jobportalImg,
      github: "https://github.com/gautam160802/jobportal",
    },
    {
      title: "Infra Client Website (Freelance)",
      description:
        "Professional responsive business website designed for a real infrastructure company client as a freelance project.",
      tech: ["React", "TailwindCSS", "Responsive Design"],
      image: infraImg,
      github: "https://github.com/gautam160802/infraclient",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-[500px] rounded-lg shadow-lg"
            />
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 border border-blue-400 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                View Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
