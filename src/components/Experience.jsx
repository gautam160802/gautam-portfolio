import React from "react";
import { motion } from "framer-motion";
import infraImg from "../assets/infrawebsite.png";
import devsImg from "../assets/100xdevs.png";

function Experience() {
  const experienceData = [
    {
      title: "MERN Stack Certification",
      organization: "100xDevs",
      description:
        "Completed full stack program with live projects, problem-solving, mentorship & real-world backend system designs.",
      duration: "2024",
      image: devsImg,
    },
    {
      title: "Infra Client Website (Freelance)",
      organization: "Private Infra Client",
      description:
        "Delivered full responsive business website for infrastructure industry client as remote freelance contract.",
      duration: "2024",
      image: infraImg,
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center p-8 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Experience & Certifications
      </motion.h1>

      <div className="relative border-l-2 border-blue-400 pl-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="mb-16 flex gap-8 items-center"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-40 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-blue-300">
                {exp.organization} • {exp.duration}
              </p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
