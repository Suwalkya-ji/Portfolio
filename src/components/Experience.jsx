import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Zap, Users } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Netparam Technologies Pvt. Ltd.",
    location: "Jaipur",
    period: "03/2025 – 04/2026",
    status: "Current / Recent Role",
    bullets: [
      "Designed and maintained 30+ RESTful APIs in Node.js and Express.js for authentication, business workflows, and data integration, supporting production applications used by 500+ active users.",
      "Cut average API response time from 1.8s to 450ms (75% improvement) by optimizing MongoDB queries, adding strategic indexing, and eliminating redundant data calls.",
      "Built reusable, modular React components to standardize UI patterns and speed up feature development cycles.",
      "Owned the complete feature lifecycle: design, integration, testing, debugging, deployment, and production support, collaborating in Agile teams with code reviews and CI/CD pipelines.",
      "Used AI-assisted development tools to speed up debugging, automate repetitive tasks, and evaluate new engineering workflows."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header with Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#DCE2F7]">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#005C55] mb-3 block">
              Professional Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B]">
              Career <span className="text-outline">Architecture.</span>
            </h2>
            <p className="text-[#3E4947] text-lg mt-4 leading-relaxed">
              Designing scalable RESTful APIs, optimizing database query performance, and shipping robust full-stack features in Agile engineering teams.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="flex items-center gap-6 pt-4 lg:pt-0">
            <div className="flex flex-col items-start lg:items-end">
              <span className="text-3xl font-bold font-heading text-[#141B2B] flex items-center gap-1.5">
                <Zap className="w-5 h-5 text-[#005C55]" />
                30+
              </span>
              <span className="text-xs text-[#3E4947] font-medium uppercase tracking-wider mt-1">REST APIs</span>
            </div>

            <div className="w-px h-10 bg-[#DCE2F7]" />

            <div className="flex flex-col items-start lg:items-end">
              <span className="text-3xl font-bold font-heading text-[#005C55] flex items-center gap-1.5">
                <TrendingUp className="w-5 h-5" />
                75%
              </span>
              <span className="text-xs text-[#3E4947] font-medium uppercase tracking-wider mt-1">API Speedup</span>
            </div>

            <div className="w-px h-10 bg-[#DCE2F7]" />

            <div className="flex flex-col items-start lg:items-end">
              <span className="text-3xl font-bold font-heading text-[#0051D5] flex items-center gap-1.5">
                <Users className="w-5 h-5" />
                500+
              </span>
              <span className="text-xs text-[#3E4947] font-medium uppercase tracking-wider mt-1">Active Users</span>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 md:p-10 border border-[#DCE2F7] hover:shadow-xl transition duration-500 shadow-sm"
            >
              {/* Left Accent Bar on Hover */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#005C55] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#E6F4F1] border border-[#005C55]/20 flex items-center justify-center text-[#005C55] flex-shrink-0">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#141B2B] group-hover:text-[#005C55] transition">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-[#3E4947] flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#005C55]" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F4F1] border border-[#005C55]/20 text-[#005C55] text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {exp.status}
                    </div>
                    <h4 className="text-2xl font-bold font-heading text-[#141B2B] pt-1">{exp.role}</h4>
                    <p className="text-xs font-mono text-[#3E4947] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#005C55]" />
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Right Bullet Points Column */}
                <div className="lg:col-span-8 space-y-4 lg:pl-8 lg:border-l lg:border-[#DCE2F7]">
                  <h4 className="text-xs font-semibold text-[#3E4947] uppercase tracking-widest mb-4">
                    Impact & Key Achievements
                  </h4>
                  <ul className="space-y-4 text-[#3E4947] leading-relaxed text-sm md:text-base">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#005C55] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
