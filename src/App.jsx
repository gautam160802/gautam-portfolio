import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { Cursor } from "react-cursor-fx";
import XIcon from "./components/XIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Components imported as sections
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <ParticlesBackground />
      <Cursor
        color="rgba(59,130,246, 0.8)"
        size={30}
        opacity={0.5}
        borderSize={3}
        borderColor="rgba(255,255,255,0.6)"
        transitionTime={0.1}
      />

      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-opacity-50 bg-black z-50 flex justify-center space-x-10 py-4 text-lg font-semibold backdrop-blur-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center p-8 min-h-screen"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6"
        >
          Hi, I'm Gautam Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
        >
          Full Stack Developer | MERN Stack | Product Builder | Remote SaaS
          Solutions
        </motion.p>

        <div className="flex gap-8 text-4xl mb-8">
          <a
            href="https://github.com/gautam160802"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gautam-kumar-336a5221b/"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Gautam_kum4r"
            target="_blank"
            className="hover:text-blue-400"
          >
            <XIcon size={40} />
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-semibold transition hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded font-semibold animate-pulse"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/10OFwj8Ggv4B61I5VxgIGvXUxWuNjJycc/view?usp=sharing"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition"
          >
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience">
        <Experience />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
