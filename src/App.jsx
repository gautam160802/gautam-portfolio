import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="tech" className="py-24">
          <Tech />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <ThemeToggle />
    </div>
  );
}

export default App;
