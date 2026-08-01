import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import resume from "../assets/Dinesh_Suwalkya_Software_Engineer_Resume.pdf";
import MagneticButton from "./MagneticButton";

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#DCE2F7] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT - Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#005C55] flex items-center justify-center text-white text-xs font-bold font-heading shadow-sm">
              DS
            </div>
            <a
              href="#home"
              className="text-xl font-bold font-heading tracking-tight text-[#141B2B]"
            >
              Dinesh.dev
            </a>
          </div>

          {/* CENTER - Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors font-medium ${
                  active === link.id
                    ? "text-[#005C55] font-semibold border-b-2 border-[#005C55] pb-1"
                    : "text-[#3E4947] hover:text-[#141B2B]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT - Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#005C55] text-white text-xs font-semibold hover:bg-[#0F766E] transition shadow-sm"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-[#141B2B] p-1"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#FAFAF8] flex flex-col items-center justify-center gap-8 text-lg font-medium text-[#141B2B] z-40 md:hidden">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#005C55] text-white text-sm font-semibold shadow-md"
          >
            Resume
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
