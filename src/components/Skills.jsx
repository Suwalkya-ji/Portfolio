const skills = [
  "C++",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "DSA",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 dark-gradient">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:-translate-y-2 transition duration-300"
            >
              <p className="text-gray-300 font-medium">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
