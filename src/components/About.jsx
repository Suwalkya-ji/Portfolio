import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 dark-gradient">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Hi, I’m Dinesh Suwalkya a B.Tech graduate in Electrical Engineering
            and a Full Stack Developer focused on building scalable, production ready web applications.
          </p>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js),
            with strong emphasis on backend architecture, REST API design,
            secure authentication systems, and performance optimization.
          </p>

         <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Backed by solid knowledge of Data Structures & Algorithms (C++),
            I approach engineering problems with a system oriented mindset
            prioritizing efficiency, scalability, and clean, maintainable code.
        </p>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I thrive in engineering environments that encourage continuous learning,
            strong team collaboration, and building scalable, high impact digital products.
          </p>
        </motion.div>

        {/* Two Main Blocks */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Expertise */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-indigo-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Core Technical Expertise
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li>• Full Stack MERN Development</li>
              <li>• REST API Design & Scalable Backend Architecture</li>
              <li>• JWT Authentication & Role Based Access Control</li>
              <li>• Database Design, Indexing & Query Optimization</li>
              <li>• Real Time Systems & Third Party Integrations</li>
              <li>• Performance Optimization & Cloud Deployment</li>
              <li>• Modular, Scalable & Maintainable Code Practices</li>
            </ul>

          </motion.div>

          {/* Career Focus */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-indigo-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Roles I’m Targeting
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li>• Full Stack Developer</li>
              <li>• Backend Engineer</li>
              <li>• Software Engineer</li>
            </ul>


            <div className="mt-8 p-6 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <p className="text-sm text-indigo-300 leading-relaxed">
                Actively seeking opportunities to build scalable products,
                improve system performance, and contribute to high impact
                engineering teams.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
