import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Code2 } from "lucide-react";
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
          background: "linear-gradient(to right, #06b6d4, #6366f1)",
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
    <section id="contact" className="py-28 px-6 dark-gradient">
      <div className="max-w-6xl mx-auto space-y-16">

        
        <Toaster
         position="top-right"
        toastOptions={{
        style: {
        background: "#111827",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.1)",
      }
    }}
  />

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4">
            Let’s build something impactful together.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full text-white px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full text-white px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full text-white px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-500 transition"
            />

            {/* Submit Button */}
            <MagneticButton
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-medium transition flex items-center justify-center gap-2
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-90"
                }`}
                >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
        
              </MagneticButton>
          </form>

          {/* Connect Section */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg space-y-8">

            <h3 className="text-2xl font-semibold text-white">
              Connect With Me
            </h3>

            <div className="space-y-6">

              <a
                href="https://github.com/Suwalkya-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
              >
                <FaGithub size={22} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dinesh-suwalkya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
              >
                <FaLinkedin size={22} />
                LinkedIn
              </a>

              <a
                href="https://codolio.com/profile/dinesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
              >
                <Code2 size={22} />
                Codolio
              </a>

              <a
                href="mailto:dineshsuwalkya31@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
              >
                <Mail size={22} />
                dineshsuwalkya31@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* Closing Line */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg md:text-xl font-medium">
            Thanks for visiting my portfolio —
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {" "}I’d love to connect and collaborate!
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;

