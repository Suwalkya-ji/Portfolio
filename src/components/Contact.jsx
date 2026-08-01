import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Code2, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully 🚀", {
        duration: 3000,
        style: {
          background: "#005C55",
          color: "#fff",
        },
      });

      e.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#FAFAF8] border-t border-[#DCE2F7]">
      <div className="max-w-7xl mx-auto space-y-16">

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#141B2B",
              color: "#fff",
              border: "1px solid #DCE2F7",
            }
          }}
        />

        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#005C55] mb-3 block">
            Expertise & Connection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#141B2B]">
            Get In <span className="text-outline">Touch.</span>
          </h2>
          <p className="text-[#3E4947] text-lg mt-3">
            Let’s build something impactful together.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm"
          >
            <div>
              <label className="block text-xs font-semibold text-[#141B2B] uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full text-[#141B2B] px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#BDC9C6] focus:outline-none focus:border-[#005C55] transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#141B2B] uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full text-[#141B2B] px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#BDC9C6] focus:outline-none focus:border-[#005C55] transition text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#141B2B] uppercase tracking-wider mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full text-[#141B2B] px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#BDC9C6] focus:outline-none focus:border-[#005C55] transition text-sm"
              />
            </div>

            {/* Submit Button */}
            <MagneticButton
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-full font-medium transition text-sm text-white flex items-center justify-center gap-2 shadow-md
                ${loading
                  ? "bg-[#6E7977] cursor-not-allowed"
                  : "bg-[#005C55] hover:bg-[#0F766E]"
                }`}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </MagneticButton>
          </form>

          {/* Connect Details Section */}
          <div className="bg-white p-8 rounded-2xl border border-[#DCE2F7] shadow-sm space-y-8">

            <h3 className="text-2xl font-bold font-heading text-[#141B2B]">
              Connect With Me
            </h3>

            <div className="space-y-6">

              <a
                href="https://github.com/Suwalkya-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#3E4947] hover:text-[#005C55] transition font-medium"
              >
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7977]">GitHub</div>
                  <div className="text-sm font-semibold text-[#141B2B]">github.com/Suwalkya-ji</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dinesh-suwalkya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#3E4947] hover:text-[#005C55] transition font-medium"
              >
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7977]">LinkedIn</div>
                  <div className="text-sm font-semibold text-[#141B2B]">linkedin.com/in/dinesh-suwalkya</div>
                </div>
              </a>

              <a
                href="https://codolio.com/profile/dinesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#3E4947] hover:text-[#005C55] transition font-medium"
              >
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7977]">Codolio</div>
                  <div className="text-sm font-semibold text-[#141B2B]">codolio.com/profile/dinesh</div>
                </div>
              </a>

              <a
                href="mailto:dineshsuwalkya31@gmail.com"
                className="flex items-center gap-4 text-[#3E4947] hover:text-[#005C55] transition font-medium"
              >
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7977]">Email</div>
                  <div className="text-sm font-semibold text-[#141B2B]">dineshsuwalkya31@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+917023012220"
                className="flex items-center gap-4 text-[#3E4947] hover:text-[#005C55] transition font-medium"
              >
                <div className="p-3 rounded-xl bg-[#E6F4F1] text-[#005C55]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7977]">Phone</div>
                  <div className="text-sm font-semibold text-[#141B2B]">+91 7023012220</div>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* Closing Line */}
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
