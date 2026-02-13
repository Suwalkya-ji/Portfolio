import { motion } from "framer-motion";
import {useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState("home");

    useEffect(() => {
      const sections = document.querySelectorAll("section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { threshold: 0.6 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, []);


  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

          {/* LEFT - Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent"
            >
              Dinesh.dev
            </a>
          </div>

          {/* CENTER - Nav Links */}
          <div className="hidden md:flex justify-center gap-10 text-gray-300">

            <a
               href="#home"
               className = {`transition ${
                            active === "home"
                            ? "text-white border-b-2 border-indigo-400 pb-1"
                            : "text-gray-300 hover:text-white"
                }`}
            >
              Home
            </a>

            <a
               href="#about"
               className = {`transition ${
                            active === "about"
                            ? "text-white border-b-2 border-indigo-400 pb-1"
                            : "text-gray-300 hover:text-white"
                }`}
            >
              About
            </a>
            
            <a
               href="#skills"
               className = {`transition ${
                            active === "skills"
                            ? "text-white border-b-2 border-indigo-400 pb-1"
                            : "text-gray-300 hover:text-white"
                }`}
            >
              Skills
            </a>

            <a
               href="#projects"
               className = {`transition ${
                            active === "projects"
                            ? "text-white border-b-2 border-indigo-400 pb-1"
                            : "text-gray-300 hover:text-white"
                }`}
            >
              Projects
            </a>

            <a
               href="#contact"
               className = {`transition ${
                            active === "contact"
                            ? "text-white border-b-2 border-indigo-400 pb-1"
                            : "text-gray-300 hover:text-white"
                }`}
            >
              Contact
            </a>

            
          </div>

          {/* RIGHT - Hire Me */}
          <div className="hidden md:flex justify-end">
            <MagneticButton>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-medium hover:opacity-90 transition"
              >
                Hire Me
                <MdKeyboardDoubleArrowDown className="text-lg" />
              </a>
            </MagneticButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex justify-end col-span-2">
            <button
              onClick={() => setOpen(!open)}
              className="text-white"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-xl text-white z-40 md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
          >
            Hire Me
            <MdKeyboardDoubleArrowDown />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
