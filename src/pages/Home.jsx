import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About"


const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen dark-gradient overflow-x-hidden"
      onMouseMove={(e) =>
        setPos({ x: e.clientX, y: e.clientY })
      }
    >
      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
        }}
      />

      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
