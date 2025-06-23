import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function Experience() {
  const experienceData = [
    {
      title: "100xDevs MERN Stack Program",
      description:
        "Completed full stack program with live projects, problem-solving, and mentorship.",
      duration: "2024",
      image: "https://via.placeholder.com/500x300?text=100xDevs",
    },
    {
      title: "Freelance Client - Infra Industry Website",
      description:
        "Delivered professional responsive client website for infrastructure business.",
      duration: "Freelance Project",
      image: "https://via.placeholder.com/500x300?text=Freelance",
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
        Experience & Certifications
      </motion.h1>

      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16 max-w-5xl"
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full md:w-[500px] rounded-lg shadow-lg"
          />
          <div className="text-left max-w-md">
            <h2 className="text-3xl font-semibold mb-4">{exp.title}</h2>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <p>
              <span className="font-semibold">Duration:</span> {exp.duration}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;
