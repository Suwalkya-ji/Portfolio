import { motion } from "framer-motion";
import { Code2, ArrowRight, FileText, Terminal as TerminalIcon, Layout, Server } from "lucide-react";
import resume from "../assets/Dinesh_Suwalkya_Software_Engineer_Resume.pdf";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center px-6 pt-32 pb-20 bg-[#FAFAF8] overflow-hidden"
    >
      {/* Design Ambient Blur */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#005C55]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#0051D5]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start gap-6 z-10"
        >
          {/* Big Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-[#141B2B] tracking-tight leading-none">
              Dinesh <span className="text-[#005C55] italic">Suwalkya</span>
            </h1>
            
            {/* Title below Name */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E6F4F1] rounded-full text-[#005C55] border border-[#005C55]/20 text-xs md:text-sm font-semibold tracking-wide">
              <Code2 className="w-4 h-4 text-[#005C55]" />
              <span>Software Engineer | Full Stack Developer (MERN)</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-[#141B2B] leading-tight tracking-tight pt-1">
            Building <span className="text-[#005C55] italic">pixel-perfect</span> UIs & scalable web backends.
          </h2>

          {/* Subtext */}
          <p className="text-[#3E4947] text-lg leading-relaxed max-w-xl">
            Software Engineer specializing in modern React interfaces, state management, and robust RESTful APIs. Crafting seamless user experiences backed by high-performance backend architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton>
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#005C55] hover:bg-[#0F766E] transition text-white font-medium text-sm flex items-center gap-2 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-white text-[#141B2B] border border-[#BDC9C6] hover:bg-[#F1F3FF] transition text-sm font-medium flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#3E4947]" />
                <span>Resume</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* RIGHT VISUAL: DUAL TABS IDE WORKSPACE & TERMINAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-xl">
            {/* IDE Window Shell */}
            <div className="w-full bg-[#141B2B] border border-[#3E4947]/40 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition duration-500">
              
              {/* Interactive Tabs Header */}
              <div className="h-10 bg-[#0F1420] flex items-center px-4 justify-between border-b border-[#3E4947]/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  
                  {/* File Tabs */}
                  <div className="flex items-center gap-1 ml-4 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab("frontend")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition ${
                        activeTab === "frontend"
                          ? "bg-[#141B2B] text-[#80D5CB] font-semibold border-t border-[#80D5CB]"
                          : "text-[#BDC9C6]/60 hover:text-[#BDC9C6]"
                      }`}
                    >
                      <Layout className="w-3 h-3" />
                      AppUI.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab("backend")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition ${
                        activeTab === "backend"
                          ? "bg-[#141B2B] text-[#80D5CB] font-semibold border-t border-[#80D5CB]"
                          : "text-[#BDC9C6]/60 hover:text-[#BDC9C6]"
                      }`}
                    >
                      <Server className="w-3 h-3" />
                      apiService.js
                    </button>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#80D5CB] bg-[#005C55]/30 px-2 py-0.5 rounded border border-[#005C55]/40 hidden sm:inline">
                  {activeTab === "frontend" ? "React + Framer" : "Node.js + REST"}
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-6 font-mono text-xs md:text-sm text-[#EDF0FF] leading-relaxed overflow-x-auto min-h-[190px]">
                {activeTab === "frontend" ? (
                  <pre className="space-y-1">
                    <code>
                      <span className="text-[#80D5CB]">export const</span>{" "}
                      <span className="text-[#9CF2E8]">DashboardUI</span> = ({"{"} <span className="text-[#FFB95F]">data</span> {"}"}) =&gt; {"{\n"}
                      {"  "}<span className="text-[#80D5CB]">return</span> ({"\n"}
                      {"    "}&lt;<span className="text-[#FFB95F]">motion.div</span> initial=&#123;&#123; opacity: 0 &#125;&#125; animate=&#123;&#123; opacity: 1 &#125;&#125;&gt;{"\n"}
                      {"      "}&lt;<span className="text-[#9CF2E8]">ResponsiveNavbar</span> active="home" /&gt;{"\n"}
                      {"      "}&lt;<span className="text-[#9CF2E8]">InteractiveCards</span> items=&#123;data.projects&#125; /&gt;{"\n"}
                      {"    "}&lt;/<span className="text-[#FFB95F]">motion.div</span>&gt;{"\n"}
                      {"  "});{"\n"}
                      {"}"};
                    </code>
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <code>
                      <span className="text-[#80D5CB]">async function</span>{" "}
                      <span className="text-[#9CF2E8]">processQueue</span>(<span className="text-[#FFB95F]">job</span>) {"{\n"}
                      {"  "}<span className="text-[#80D5CB]">const</span> data = job.data;{"\n"}
                      {"  "}<span className="text-[#80D5CB]">const</span> result = <span className="text-[#80D5CB]">await</span> Qdrant.<span className="text-[#9CF2E8]">search</span>({"{\n"}
                      {"    "}vector: data.embedding, limit: <span className="text-[#FFB95F]">5</span>{"\n"}
                      {"  }"});{"\n"}
                      {"  "}<span className="text-[#80D5CB]">return</span> <span className="text-[#9CF2E8]">formatResponse</span>(result);{"\n"}
                      {"}"}
                    </code>
                  </pre>
                )}
              </div>
            </div>

            {/* Floating Terminal Widget */}
            <div className="absolute -bottom-6 -left-6 w-72 bg-[#00201D] border border-[#80D5CB]/30 rounded-xl shadow-2xl p-4 hidden sm:block transform -rotate-1 hover:rotate-0 transition duration-300">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#80D5CB]/20">
                <TerminalIcon className="w-3.5 h-3.5 text-[#80D5CB]" />
                <span className="text-[10px] text-[#80D5CB]/70 font-mono">zsh — portfolio</span>
              </div>
              <div className="font-mono text-[11px] space-y-1">
                <div className="text-[#80D5CB]">➜ portfolio git commit</div>
                <div className="text-[#9CF2E8]">[main] 40+ modular React components</div>
                <div className="text-[#BDC9C6] text-[10px]">✔ Lighthouse 95+ UI score</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
