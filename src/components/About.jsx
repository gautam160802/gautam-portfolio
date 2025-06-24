import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          I'm <span className="text-blue-400 font-semibold">Gautam Kumar</span>,
          a passionate full stack developer building modern, scalable, and
          high-performing web applications.
          <br />
          <br />
          My expertise lies in the{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            MERN stack
          </span>{" "}
          (MongoDB, Express.js, React.js, Node.js), delivering high-quality SaaS
          solutions for startups, remote clients, and product companies.
          <br />
          <br />I specialize in{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            full-stack development
          </span>
          ,{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            REST APIs
          </span>
          ,{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            frontend design
          </span>
          ,{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            backend logic
          </span>
          , and{" "}
          <span className="hover:text-blue-400 transition font-semibold">
            problem-solving
          </span>
          .
          <br />
          <br />
          Completed 100xDevs intensive full stack program with multiple live
          projects and freelance client work.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
