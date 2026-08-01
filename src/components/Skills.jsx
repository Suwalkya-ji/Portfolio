import { motion } from "framer-motion";
import { Layout, Code, Server, Cpu, Cloud, Terminal, HeartHandshake } from "lucide-react";

const bentoSkills = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    colSpan: "md:col-span-7 lg:col-span-8",
    bg: "bg-white border border-[#DCE2F7] shadow-sm",
    iconColor: "text-[#005C55]",
    skills: ["React.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Framer Motion", "Material UI", "HTML5 & CSS3", "Component Design Systems", "Responsive UI", "Web Performance Optimization"]
  },
  {
    title: "Core Languages",
    icon: Code,
    colSpan: "md:col-span-5 lg:col-span-4",
    bg: "bg-[#005C55] text-white shadow-md",
    iconColor: "text-white",
    isPrimary: true,
    skills: ["C++", "JavaScript (ES6+)", "SQL"]
  },
  {
    title: "Backend & Databases",
    icon: Server,
    colSpan: "md:col-span-6 lg:col-span-6",
    bg: "bg-white border border-[#DCE2F7] shadow-sm",
    iconColor: "text-[#0051D5]",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "AI API Integration", "MongoDB", "MySQL", "Redis", "Qdrant Vector DB"]
  },
  {
    title: "AI Technologies",
    icon: Cpu,
    colSpan: "md:col-span-6 lg:col-span-6",
    bg: "bg-white border border-[#DCE2F7] shadow-sm",
    iconColor: "text-[#005C55]",
    skills: ["LLMs", "RAG Architecture", "AI APIs", "Vector Embeddings", "Context Retrieval"]
  },
  {
    title: "Cloud & DevTools",
    icon: Cloud,
    colSpan: "md:col-span-6 lg:col-span-6",
    bg: "bg-white border border-[#DCE2F7] shadow-sm",
    iconColor: "text-[#0051D5]",
    skills: ["AWS (EC2, S3)", "Docker", "Git", "GitHub", "GitHub Actions", "Postman", "VS Code", "CI/CD Pipelines"]
  },
  {
    title: "Core & Fundamentals",
    icon: Terminal,
    colSpan: "md:col-span-6 lg:col-span-6",
    bg: "bg-white border border-[#DCE2F7] shadow-sm",
    iconColor: "text-[#005C55]",
    skills: ["BullMQ", "Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks", "SDLC"]
  },
  {
    title: "Soft Skills & Leadership",
    icon: HeartHandshake,
    colSpan: "md:col-span-12 lg:col-span-12",
    bg: "bg-[#E6F4F1] border border-[#005C55]/20 shadow-sm",
    iconColor: "text-[#005C55]",
    isSoft: true,
    skills: ["Leadership", "Teamwork", "Communication", "Problem Solving", "Agile Collaboration", "Code Reviews"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#005C55] mb-3 block">
            Expertise & Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B] max-w-2xl leading-tight">
            Engineering <span className="text-outline">precision</span> into every layer.
          </h2>
          <p className="text-[#3E4947] text-lg mt-4 max-w-xl">
            A comprehensive breakdown of tools, languages, databases, core software engineering concepts, and soft skills.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {bentoSkills.map((card, index) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`${card.colSpan} ${card.bg} p-8 rounded-2xl flex flex-col justify-between transition duration-300`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${card.isPrimary ? 'bg-white/10' : 'bg-[#E6F4F1]'} ${card.iconColor}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold font-heading ${card.isPrimary ? 'text-white' : 'text-[#141B2B]'}`}>
                      {card.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {card.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs font-medium px-4 py-1.5 rounded-full transition ${
                          card.isPrimary
                            ? "bg-white/15 text-white border border-white/20"
                            : card.isSoft
                            ? "bg-white text-[#005C55] border border-[#005C55]/30 font-semibold"
                            : "bg-[#F1F3FF] text-[#3E4947] border border-[#DCE2F7] hover:bg-[#005C55] hover:text-white"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
