import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import XIcon from "../components/XIcon";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="flex flex-col justify-center items-center text-center p-8 min-h-screen max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-gray-300 mb-10"
      >
        I'm always open to discuss new projects, product ideas, or
        collaborations. Feel free to drop a message below!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full max-w-xl text-left bg-[#334155] p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 text-lg">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#475569] text-white outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#475569] text-white outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded bg-[#475569] text-white outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded w-full"
        >
          Send Message
        </button>
      </motion.form>

      <div className="flex gap-8 text-4xl mt-10">
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
    </div>
  );
}

export default Contact;
