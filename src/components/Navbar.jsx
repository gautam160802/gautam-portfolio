import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4
        ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        } text-white`}
    >
      <a
        href="#home"
        className="text-2xl font-bold tracking-wide hover:text-blue-400"
      >
        Gautam Kumar
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 font-semibold text-lg">
        {["home", "about", "tech", "projects", "experience", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-400 transition"
                onClick={() => setMobileOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 bg-[#0f172a] w-2/3 h-full shadow-lg transform transition-transform duration-300 md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col mt-8 space-y-6 px-6 text-xl font-semibold">
          {["home", "about", "tech", "projects", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="block hover:text-blue-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
