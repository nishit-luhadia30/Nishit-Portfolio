import React from "react";

const ExperienceCard = ({ role, company, duration, description, skills }) => {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg shadow-black/50 hover:scale-105 hover:shadow-[#00e5a0]/30 transition duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <span className="text-sm text-blue-400">{duration}</span>
      </div>
      <p className="text-gray-300 mb-2">{company}</p>
      <p className="text-gray-400 mb-4">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mt-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-black/40 text-orange-400 rounded-full text-sm font-medium shadow-md hover:bg-orange-400 hover:text-black transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    
    {
      role: "Web Development Internship",
      company: "TechHyaku Pvt. Ltd.",
      duration: "May 2025 - Jun 2025",
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "ChatBot", "Firebase"],
      description:
        "Web Development Intern — built a responsive website using React.js and Tailwind CSS. Developed core components like Kits and Navigation, integrated routing for smooth UX, added a chatbot, and collaborated with the design team for consistent UI/UX.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#13152e] text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;