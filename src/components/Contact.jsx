import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Code2, Phone, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#005C55] mb-3 block">
            Expertise & Connection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B]">
            Get In <span className="text-outline">Touch.</span>
          </h2>
          <p className="text-[#3E4947] text-lg mt-3">
            Open for software engineering opportunities, full-stack collaborations, and technical roles.
          </p>
        </div>

        {/* Connect Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#005C55] flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#6E7977] uppercase tracking-wider">Email Address</h3>
                <p className="text-base font-bold font-heading text-[#141B2B] mt-1 break-all">
                  dineshsuwalkya31@gmail.com
                </p>
              </div>
            </div>

            <MagneticButton>
              <a
                href="mailto:dineshsuwalkya31@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005C55] hover:bg-[#0F766E] text-white text-xs font-semibold transition shadow-sm w-fit"
              >
                <span>Send Email</span>
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#005C55] flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#6E7977] uppercase tracking-wider">Phone / WhatsApp</h3>
                <p className="text-base font-bold font-heading text-[#141B2B] mt-1">
                  +91 7023012220
                </p>
              </div>
            </div>

            <MagneticButton>
              <a
                href="tel:+917023012220"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005C55] hover:bg-[#0F766E] text-white text-xs font-semibold transition shadow-sm w-fit"
              >
                <span>Call Now</span>
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#005C55] flex items-center justify-center">
                <FaLinkedin size={22} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#6E7977] uppercase tracking-wider">LinkedIn Profile</h3>
                <p className="text-base font-bold font-heading text-[#141B2B] mt-1">
                  dinesh-suwalkya
                </p>
              </div>
            </div>

            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/dinesh-suwalkya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F1F3FF] border border-[#BDC9C6] text-[#141B2B] text-xs font-semibold transition shadow-sm w-fit"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

          {/* GitHub Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#005C55] flex items-center justify-center">
                <FaGithub size={22} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#6E7977] uppercase tracking-wider">GitHub Profile</h3>
                <p className="text-base font-bold font-heading text-[#141B2B] mt-1">
                  Suwalkya-ji
                </p>
              </div>
            </div>

            <MagneticButton>
              <a
                href="https://github.com/Suwalkya-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F1F3FF] border border-[#BDC9C6] text-[#141B2B] text-xs font-semibold transition shadow-sm w-fit"
              >
                <span>View GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

          {/* Codolio Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4F1] text-[#005C55] flex items-center justify-center">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#6E7977] uppercase tracking-wider">Competitive Coding</h3>
                <p className="text-base font-bold font-heading text-[#141B2B] mt-1">
                  Codolio Profile
                </p>
              </div>
            </div>

            <MagneticButton>
              <a
                href="https://codolio.com/profile/dinesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F1F3FF] border border-[#BDC9C6] text-[#141B2B] text-xs font-semibold transition shadow-sm w-fit"
              >
                <span>View Codolio</span>
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

        </div>

        {/* Footer Closing Note */}
        <div className="mt-16 text-center border-t border-[#DCE2F7] pt-12">
          <p className="text-[#3E4947] text-base font-medium">
            Thanks for visiting —{" "}
            <span className="text-[#005C55] font-semibold">
              I’d love to connect and collaborate!
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
