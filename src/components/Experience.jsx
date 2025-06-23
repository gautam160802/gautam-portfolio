import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import cert100xdevs from "../assets/certificate-100xdevs.png";
import infraClient from "../assets/infra-client.png";

function Experience() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10"
      >
        Experience & Certifications
      </motion.h1>

      <div className="flex flex-col gap-12">
        {/* Freelance Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row bg-[#334155] rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">
              Freelance — Infra Client Website
            </h2>
            <p className="text-lg mb-6">
              Developed fully responsive website for a local infrastructure
              company including service showcase, client testimonials, and
              integrated contact form. Delivered live deployed solution for
              business growth.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                TailwindCSS
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Vercel
              </span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={infraClient}
              alt="Infra Client"
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row bg-[#334155] rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Certification</h2>
            <p className="text-lg mb-4">
              MERN Stack Developer — 100xDevs by Hitesh Choudhary (2024)
            </p>
          </div>
          <div className="flex-1">
            <img
              src={cert100xdevs}
              alt="100xDevs Certificate"
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
