import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Freelance Web Developer (Infra Client Website)",
      duration: "Jan 2024 - Mar 2024",
      description:
        "Built and delivered a full professional responsive business website for a real infrastructure company client. Managed end-to-end design, development, deployment and client support.",
      tech: ["React", "TailwindCSS", "Responsive Design", "SEO Optimization"],
    },
    {
      title: "100xDevs - Full Stack MERN Certification",
      duration: "Completed in 2024",
      description:
        "Completed intensive hands-on full stack MERN training program led by 100xDevs with multiple live industry-level projects built from scratch.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
        "Full Stack Architecture",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Experience & Certifications
      </motion.h2>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
            className="p-6 rounded-lg bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-sm text-blue-400 mb-4">{exp.duration}</p>
            <p className="text-gray-400 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 border border-blue-400 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
