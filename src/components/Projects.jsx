import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import studyAdda from "../assets/studyAdda.png"
import voxTalk from "../assets/voxTalk.png"
import QuickStay from "../assets/QuickStay.png"
import MagneticButton from "./MagneticButton";

const projects = [
  {
    title: "StudyAdda – Online Learning Web Application",
    description:
      "A full stack MERN based edtech platform enabling course creation, enrollment, and secure payments with role based access control for students and instructors. Built scalable REST APIs with secure authentication and optimized UI performance.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Cloudinary", "Razorpay", "MongoDB Atlas"],
    github: "https://github.com/Suwalkya-ji/StudyAdda",
    live: "https://study-adda-mu.vercel.app/",
    image: studyAdda,
  },
  {
    title: "VoxTalk – Real-Time Language Learning & Chat Platform",
    description:
      "VoxTalk is a real time language learning platform that enables users to connect, chat, and practice via live video sessions. Built with the MERN stack and Stream SDKs, it ensures secure authentication and smooth, scalable real time communication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "GetStream.io (Chat & Video SDK)", "TanStack Query", "Tailwind CSS", "DaisyUI", "Lucide React (Animated Icons)", "REST APIs"],
    github: "https://github.com/Suwalkya-ji/Voxtalk",
    live: "https://voxtalk.netlify.app/login",
    image: voxTalk,
  },
  {
    title: "QuickStay – Hotel Booking Web Application",
    description:
      "A full stack hotel booking system allowing users to browse hotels, book rooms, and manage reservations. Developed RESTful APIs with secure authentication and admin controls for property management.",
    tech: [ "React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Clerk Auth", "REST APIs"],
    github: "https://github.com/Suwalkya-ji/QuickStay",
    live: "https://quick-stay-virid.vercel.app/",
    image: QuickStay,
  }  
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 px-6 dark-gradient">
      <div className="max-w-6xl mx-auto text-center space-y-16">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-border"
            >
              <div
                onClick={() => setSelected(project)}
                className="cursor-pointer bg-[#111118] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-indigo-500/20 transition duration-500"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 text-left space-y-4">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <MagneticButton>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition"
                          >
                          GitHub
                        </a>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-90 transition"
                          >
                          Live Demo
                        </a>
                      </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111118] max-w-xl w-full rounded-2xl p-8 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {selected.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <MagneticButton>
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition"
                      >
                      GitHub
                    </a>
                </MagneticButton>

                <MagneticButton>
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-90 transition"
                      >
                      Live Demo
                    </a>
                </MagneticButton>
              </div>

                <MagneticButton>
                  <button
                    onClick={() => setSelected(null)}
                    className=" cursor-pointer mt-6 text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition text-gray-400 hover:text-white"
                    >
                    Close
                  </button>
                </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
