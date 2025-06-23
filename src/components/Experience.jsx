import React from "react";
import { motion } from "framer-motion";
import cert100xdevs from "../assets/certificate-100xdevs.png";

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Experience & Certifications
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="bg-[#334155] p-8 rounded-lg shadow-lg text-left mb-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Freelance Experience</h2>
        <p className="mb-6">
          Delivered fully responsive business website for local infrastructure
          client showcasing services and contact features.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="bg-[#334155] p-8 rounded-lg shadow-lg text-left"
      >
        <h2 className="text-2xl font-semibold mb-4">Certification</h2>
        <p className="mb-4">
          ✅ MERN Stack Developer — 100xDevs by Hitesh Choudhary (2024)
        </p>
        <img
          src={cert100xdevs}
          alt="100xDevs Certificate"
          className="rounded-lg shadow-md max-h-[400px] mx-auto"
        />
      </motion.div>
    </div>
  );
}

export default Experience;
