import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, ShoppingCart, GraduationCap, Hotel, MessageSquare } from "lucide-react";
import BuildPilot from "../assets/BuildPilot.png";
import DealsKart from "../assets/DealsKart.png";
import studyAdda from "../assets/studyAdda.png";
import QuickStay from "../assets/QuickStay.png";
import voxTalk from "../assets/voxTalk.png";
import MagneticButton from "./MagneticButton";

const projects = [
  {
    number: "01",
    category: "AI & FULL STACK",
    icon: Sparkles,
    title: "BuildPilot – AI-Powered Full-Stack Website Builder",
    description:
      "AI-powered website builder converting natural language prompts into production-ready React applications.\nFeatures live preview, Monaco Editor, Sandpack integration, RAG with Qdrant Vector DB, and BullMQ/Redis async pipelines.",
    tech: ["React.js", "Node.js", "LLMs", "RAG", "Qdrant Vector DB", "BullMQ", "Redis", "Monaco Editor", "Sandpack"],
    github: "https://github.com/Suwalkya-ji/BuildPilot",
    live: "https://buildpilot.hopto.org/",
    image: BuildPilot,
  },
  {
    number: "02",
    category: "E-COMMERCE PLATFORM",
    icon: ShoppingCart,
    title: "Dealskart – Full Stack E-Commerce Platform",
    description:
      "Full stack e-commerce platform supporting product discovery, cart, checkout, and order management for 500+ listings.\nIntegrated JWT authentication, Razorpay payment gateway, and inventory validation with MongoDB aggregation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "REST APIs"],
    github: "https://github.com/Suwalkya-ji/",
    live: "https://dealkarts.in/",
    image: DealsKart,
  },
  {
    number: "03",
    category: "EDTECH PLATFORM",
    icon: GraduationCap,
    title: "StudyAdda – EdTech Learning Platform",
    description:
      "EdTech learning platform for online course management with separate student and instructor portals.\nIntegrated an AI-powered doubt solving tutor within course player, role-based dashboards, 20+ REST APIs, and Razorpay.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Tutor", "JWT", "Razorpay", "Cloudinary"],
    github: "https://github.com/Suwalkya-ji/StudyAdda",
    live: "https://study-adda-mu.vercel.app/",
    image: studyAdda,
  },
  {
    number: "04",
    category: "HOTEL BOOKING PLATFORM",
    icon: Hotel,
    title: "QuickStay – Hotel Booking Web Application",
    description:
      "Hotel booking platform enabling users to search and book rooms online while allowing owners to manage listings.\nFeatures booking clash prevention, live revenue analytics admin dashboard, and Clerk auth with webhooks.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Clerk Auth", "Webhooks", "Cloudinary"],
    github: "https://github.com/Suwalkya-ji/QuickStay",
    live: "https://quick-stay-virid.vercel.app/",
    image: QuickStay,
  },
  {
    number: "05",
    category: "REAL-TIME CHAT & LEARNING",
    icon: MessageSquare,
    title: "VoxTalk – Real-Time Language Learning & Chat Platform",
    description:
      "Real-time language learning platform enabling users to connect, chat, and practice via live video sessions.\nBuilt with MERN stack, Stream SDKs, and TanStack Query for smooth, scalable real-time communication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stream SDK", "TanStack Query", "Tailwind CSS"],
    github: "https://github.com/Suwalkya-ji/Voxtalk",
    live: "https://voxtalk.netlify.app/login",
    image: voxTalk,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-8 border-b border-[#DCE2F7]">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#005C55] mb-3 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B] leading-none">
              Engineering <br />
              <span className="text-outline">Digital Excellence.</span>
            </h2>
          </div>

          <p className="text-[#3E4947] text-base md:text-lg max-w-md border-l-2 border-[#005C55] pl-4">
            A curated collection of production-grade applications focusing on system performance, scalability, and intuitive UX.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const CategoryIcon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Screenshot Container */}
                <div className="w-full lg:w-5/12 max-w-md group relative rounded-2xl overflow-hidden shadow-md border border-[#DCE2F7] bg-[#141B2B] transition duration-500 hover:shadow-xl flex-shrink-0">
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700 block"
                    />
                  </div>
                </div>

                {/* Content & Details */}
                <div className="w-full lg:w-7/12 flex flex-col items-start space-y-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#005C55] tracking-wider font-semibold">
                    <CategoryIcon className="w-4 h-4" />
                    <span>{project.number} / {project.category}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#141B2B] leading-snug">
                    {project.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-[#3E4947] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#F1F3FF] border border-[#DCE2F7] text-[#141B2B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-3">
                    <MagneticButton>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-[#005C55] hover:bg-[#0F766E] transition text-white text-sm font-medium flex items-center gap-2 shadow-sm"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </MagneticButton>

                    <MagneticButton>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-white hover:bg-[#F1F3FF] border border-[#BDC9C6] text-[#141B2B] transition text-sm font-medium flex items-center gap-2 shadow-sm"
                      >
                        <Github className="w-4 h-4 text-[#3E4947]" />
                        <span>GitHub</span>
                      </a>
                    </MagneticButton>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* See More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-12 text-center flex flex-col items-center gap-3 border-t border-[#DCE2F7]"
        >
          <MagneticButton>
            <a
              href="https://github.com/Suwalkya-ji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#005C55] hover:bg-[#0F766E] text-white font-medium text-sm md:text-base shadow-md transition transform hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5 text-white" />
              <span>See More Projects on GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </MagneticButton>
          <p className="text-xs text-[#3E4947] font-mono">
            Explore 15+ repositories and technical experiments.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
