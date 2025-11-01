import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CertificateCard = ({ title, issuer, date, description, skills, link, credentialId }) => {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg shadow-black/50 hover:scale-105 hover:shadow-[#00e5a0]/30 transition duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-green-400 to-orange-400 p-2 rounded-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300">{issuer}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-4">{description}</p>

      {credentialId && (
        <div className="mb-4">
          <span className="text-sm text-gray-500">Credential ID: </span>
          <span className="text-sm text-gray-300 font-mono">{credentialId}</span>
        </div>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-black/40 text-orange-400 rounded-full text-sm font-medium shadow-md hover:bg-orange-400 hover:text-black transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* View Certificate Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition duration-300"
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Internship",
      issuer: "",
      date: "May 2025 - Jun 2025",
      description: "Web Development Intern — built a responsive website using React.js and Tailwind CSS. Developed core components like Kits and Navigation, integrated routing for smooth UX, added a chatbot, and collaborated with the design team for consistent UI/UX.",
      skills: ["JavaScript", "React.js", "TailwindCSS", "Responsive Design", "Chatbot", "Firebase"],
      link: "https://drive.google.com/file/d/1_9cOUZDEiP5ID8Uoe9wqO-3ex2VkX-Ew/view?usp=sharing",
      credentialId: "TH-2023-03-INT-006"
    },
    {
      title: "Smart AR Shopping Assistant",
      issuer: "Balu Chaturvedula, SVP & Country Head",
      date: "2025",
      description: "Walmart Global Tech Hackathon Built a next-gen shopping web app with AR previews, voice assistant, and SmartPath™ — a route optimization feature using A* and TSP algorithms. Included stock management, cart handling, and immersive product interactions via@google/model-viewer",
      skills: ["TypeScript", "React.js", "Vite", "AR", "A*", "TSP"],
      link: "https://drive.google.com/file/d/1YYfK9wASjfh0NAUbibDM_wcDQZ7VbP0G/view?usp=sharing",
      credentialId: "Sparkathon-converge"
    },
    {
      title: " Be10x - AI tools",
      issuer: "Aditya Goenka & Aditya Kachave",
      date: "20-07-2025",
      description: "1-day workshop on AI Tools, where I explored various modern AI applications and learned how to effectively utilize them across different tasks. The session focused on understanding the functionalities of popular AI tools, along with hands-on practice in crafting optimized prompts for enhanced output.",
      skills: ["Grok.ai", "Genspark.ai", "Napkin.ai", "NotebookLM", "Screener.in", "Claude.ai", "Julius.ai"],
      link: "https://drive.google.com/file/d/1wjNaTmwErkUzXzM0MFsEi0B6ejUNQZGb/view?usp=sharing",
      credentialId: "UC-REACT-2025-NL"
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-gray-800 text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications & Achievements
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-[#1e293b] rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Continuous Learning Journey</h3>
          <p className="text-gray-300 text-lg mb-6">
            I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to mastering both fundamental concepts 
            and cutting-edge tools in software development.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-gray-400">Certifications Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-400">Hours of Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Skills Acquired</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;