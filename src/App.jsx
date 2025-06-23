import React, { useState, useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { Cursor } from "react-cursor-fx";
import { motion } from "framer-motion";
import ThemeToggle from "./components/ThemeToggle";

// Sections
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 min-h-screen">
      <ParticlesBackground />
      <Cursor
        color="rgba(59,130,246, 0.8)"
        size={30}
        opacity={0.5}
        borderSize={3}
        borderColor="rgba(255,255,255,0.6)"
        transitionTime={0.1}
      />

      <ThemeToggle />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-center space-x-10 py-4 text-base font-medium transition-all duration-300 ${
          scrolled
            ? "bg-black/60 shadow-lg backdrop-blur-sm dark:bg-gray-900/70"
            : "bg-transparent"
        }`}
      >
        {["home", "about", "tech", "projects", "experience", "contact"].map(
          (section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-200 hover:text-white dark:hover:text-blue-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          )
        )}
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center p-8 min-h-screen space-y-8 pt-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text dark:from-blue-300 dark:via-purple-300 dark:to-pink-300"
        >
          Hi, I'm Gautam Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl leading-relaxed"
        >
          Full Stack Developer | MERN Stack | Product Builder | Remote SaaS
          Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-400 dark:text-gray-500 max-w-2xl leading-relaxed italic"
        >
          🚀 Building scalable, high-performance applications for startups, SaaS
          companies, and remote teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "TailwindCSS",
            "TypeScript",
            "REST APIs",
            "GitHub",
            "Vercel",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white/10 border border-white/20 dark:bg-gray-700 dark:border-gray-600 text-sm px-4 py-2 rounded-full text-gray-300 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center mt-8"
        >
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
            Certified MERN Stack Developer
          </p>
          <img
            src="/assets/100xdevs.png"
            alt="100xDevs Certification"
            className="w-32 rounded-md shadow-lg"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 px-6 py-3 rounded font-semibold transition duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/10OFwj8Ggv4B61I5VxgIGvXUxWuNjJycc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition duration-300 transform hover:scale-105"
          >
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <About />
      </motion.section>

      {/* TECH */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <Tech />
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <Projects />
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <Experience />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <Contact />
      </motion.section>

      {/* Back to Top */}
      <a
        href="#home"
        className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 transform hover:scale-110 z-50"
      >
        ↑ Top
      </a>

      {/* Footer */}
      <footer className="bg-black/70 dark:bg-gray-900/70 text-center text-sm text-gray-400 dark:text-gray-500 py-4 mt-12">
        © {new Date().getFullYear()} Gautam Kumar. Built with React and
        TailwindCSS.
      </footer>
    </div>
  );
}

export default App;
