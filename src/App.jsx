import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="sticky top-0 bg-[#1e293b] bg-opacity-80 backdrop-blur-md flex justify-center flex-wrap items-center space-x-6 py-4 text-lg font-semibold shadow-md z-50">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link to="/experience" className="hover:text-blue-400 transition">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
