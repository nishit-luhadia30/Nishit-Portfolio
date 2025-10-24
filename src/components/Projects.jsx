import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import decen from "../images/decen.png";

const projects = [
  {
    title: " Smart AR Shopping Assistant",
    description:
      " Built a next-gen shopping web app with AR previews, voice assistant, and SmartPath™ — a route optimization feature using A* and TSP algorithms. Included stock management, cart handling, and immersive product interactions via @google/model-viewer",
    icon: "📈",
    tech: ["TypeScript", "React.js", "Vite", "AR", "A* Algorithm", "TSP Algorithm"],
    github: "https://github.com/nishit-luhadia30/Walmart-Global-Tech-Hackathon",
    demo: "/will-host-soon",
  },
  {
    title: "Internship Project",
    description:
      "Worked as a Web Development Intern, building a fully responsive website using React.js, Tailwind CSS, and modern frontend libraries. Developed key components like Kits and Navigation, integrated routing for a smooth UX, and collaborated with the design team for consistent UI/UX.",
    icon: "💼",
    tech: ["React.js", "Tailwind CSS", "Chatbot", "Firebase", "React-router"],
    github: "https://github.com/nishit-luhadia30/Internship-TechHyaku",
    demo: "https://internship-tech-hyaku.vercel.app/",
  },
  {
    title: "Decentralized Den",
    description:
      "Decentralized Den is a community-driven hub built for the next generation of the internet — where blockchain, decentralization, anduser ownership take center stage. Whether you're a crypto enthusiast, developer, or just Web3-curious, Decentralized Den offers aspace to learn, build, and connect.",
    icon: "💰",
    tech: ["React.js", "Express.js", "Node.js", "Web3.js", "React-router", "Solidity", "MongoDB", "Firebase", "MetaMask"],
    github: "https://github.com/nishit-luhadia30/Decentralized_Den",
    demo: "https://decentralized-den.vercel.app/",
  },
  {
    title: "Budget Planner Web App",
    description:
      "A smart and responsive web app that helps users manage their monthly budgets efficiently. It allows multiple users to log in securely, add and track their expenses, view total spending, remaining balance, and category-wise breakdowns. Users can also export their reports in CSV and PDF formats for easy record-keeping. Built with a React frontend, Node.js + Express backend, and MongoDB database, it’s a full-stack solution for smarter money management.",
    icon: "💰",
    tech: ["React.js", "Express.js", "Node.js", "Web3.js", "React-router", "Solidity", "MongoDB", "Firebase", "MetaMask"],
    github: "https://github.com/nishit-luhadia30/Budget-planner",
    demo: "https://budget-planner-pink.vercel.app/",
  },
  {
    title: "Generative AI HackToSkills",
    description:
      "CareerAI is an AI-powered career advisor for Indian students that provides personalized career path recommendations, skill gap analysis, and curated learning resources. Built with React + Tailwind, Supabase, and Google Generative AI, it features 24/7 chatbot support, an interactive dashboard, and Indian job market insights — all in a responsive, production-ready web app.",
    icon: "💰",
    tech: ["React.js", "React-router", "@google/generative-ai", "@supabase/supabase-js", "Local Storage", "Node.js", "React-Context-API", "Custom hooks"],
    github: "https://github.com/nishit-luhadia30/GenAI",
    demo: "https://gen-ai-henna.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#13152e] text-white px-6 md:px-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#1e293b] p-6 rounded-2xl shadow-md flex flex-col gap-4"
          >
            {/* Top gradient border */}
            <div className="absolute top-0 left-3 w-[95%] h-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-t-2xl"></div>

            {/* Icon & Links */}
            <div className="flex justify-between items-center">
              <div className="bg-[#00e5a0] p-2 rounded-lg text-xl">{project.icon}</div>
              <div className="flex gap-2 text-white">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-[#00e5a0] transition duration-300" />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="hover:text-[#00e5a0] transition duration-300" />
                </a>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-black text-orange-400 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
