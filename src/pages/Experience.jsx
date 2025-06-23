import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 min-h-[80vh] w-full max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Experience & Certifications
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl bg-[#334155] p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <p className="mb-6">
          Currently building multiple full stack projects and open to remote
          full stack developer roles in startups and product companies.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <p>
          ✅ MERN Stack Developer —{" "}
          <strong>100xDevs by Hitesh Choudhary</strong>
        </p>
      </motion.div>
    </div>
  );
}

export default Experience;
