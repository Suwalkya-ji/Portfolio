import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#005C55] mb-3 block">
            Background & Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B]">
            About <span className="text-outline">Me.</span>
          </h2>

          <p className="mt-6 text-[#3E4947] text-lg leading-relaxed">
            Hi, I’m <span className="text-[#141B2B] font-semibold">Dinesh Suwalkya</span>, a Software Engineer & Full Stack Developer (MERN) with experience building scalable RESTful APIs, optimizing database performance, and integrating AI capabilities into production applications.
          </p>

          <p className="mt-4 text-[#3E4947] text-base leading-relaxed">
            I hold a B.Tech in Electrical Engineering from Jaipur Engineering College & Research Centre (CGPA: 8.20/10). Backed by solid knowledge of Data Structures & Algorithms (C++), I approach engineering problems with a system-oriented mindset focused on scalability, clean code, and user impact.
          </p>
        </motion.div>

        {/* Three Grid Blocks */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Education */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-white border border-[#DCE2F7] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#141B2B]">
                  Education
                </h3>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-semibold text-[#141B2B]">
                  B.Tech in Electrical Engineering
                </h4>
                <p className="text-[#3E4947] text-sm">
                  Jaipur Engineering College & Research Centre
                </p>
                <p className="text-[#6E7977] text-xs font-mono">
                  2020 – 2024
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F4F1] border border-[#005C55]/20 text-[#005C55] text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" /> CGPA: 8.20 / 10
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Technical Expertise */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-white border border-[#DCE2F7] shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#141B2B]">
                Core Expertise
              </h3>
            </div>

            <ul className="space-y-2.5 text-[#3E4947] text-sm leading-relaxed">
              <li>• Full Stack MERN Development</li>
              <li>• Modern React.js Component Architecture</li>
              <li>• Responsive UI & Framer Motion Animations</li>
              <li>• Scalable REST API & Backend Design</li>
              <li>• AI Integration (RAG, LLMs, Vector DBs)</li>
              <li>• Database Optimization & Query Indexing</li>
              <li>• State Management (Redux & TanStack Query)</li>
            </ul>
          </motion.div>

          {/* Roles Targeted */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-white border border-[#DCE2F7] shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#141B2B]">
                  Target Roles
                </h3>
              </div>

              <ul className="space-y-3 text-[#141B2B] text-sm font-semibold">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#005C55]" />
                  Software Engineer
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0051D5]" />
                  Full Stack Developer (MERN)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                  Frontend Engineer / UI Developer
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Backend Engineer
                </li>
              </ul>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#E6F4F1] border border-[#005C55]/20">
              <p className="text-xs text-[#005C55] font-medium leading-relaxed">
                Actively seeking software engineering roles to build scalable, high-impact applications.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
