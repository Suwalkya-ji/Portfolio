import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "./MagneticButton";
import resume from "../assets/Dinesh_Suwalkya_Software_Engineer_Resume.pdf";
import { useState } from "react";


const Hero = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });


  return (
    <section
        id="home"
        onMouseMove={(e) =>
          setPosition({ x: e.clientX, y: e.clientY })
        }
        className="relative min-h-screen flex items-center justify-center px-6 dark-gradient overflow-hidden"
      >


      {/* Floating Gradient Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        {/* Cursor Spotlight */}
        <div
          className="pointer-events-none absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl transition-all duration-200"
          style={{
            left: position.x - 250,
            top: position.y - 250,
          }}
        />




      {/* Subtle Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full -z-10" />

      <div className="text-center max-w-4xl space-y-10">

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="animated-name bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Dinesh Suwalkya
          </span>
          <br />

          {/* Underline Animation */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute left-0 -bottom-3 h-1 w-full origin-left bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          />
        </motion.h1>

        {/* Typing Role Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full Stack Developer (MERN)",
              2000,
              "Backend Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable web systems, REST APIs, and responsive user interfaces
          with strong foundations in Data Structures & Algorithms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 flex-wrap pt-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-90 transition text-white font-medium"
            >
              See Projects
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              View Resume
            </a>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
