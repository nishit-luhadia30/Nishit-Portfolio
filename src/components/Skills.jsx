import React from "react";
import { FaCode, FaTools, FaProjectDiagram } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 text-white px-6 md:px-40 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technical Skills
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Programming Languages */}
        <div className="bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out md:py-9 rounded-2xl p-6 w-full lg:w-1/3 shadow-lg shadow-gray-900">
          <div className="flex items-center gap-2 mb-4 text-2xl font-semibold">
            <FaCode className="text-green-400" />
            Programming Languages
          </div>
          {/* {["C++", "Python", "C", "JavaScript"].map((lang, idx) => ( */}
            <div className="mb-4">
              <p className="mb-1 text-xl">C++</p>
              <div className="bg-gray-800 h-2 rounded-full">
                <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 h-full rounded-full w-[95%]"></div>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1 text-xl">C</p>
              <div className="bg-gray-800 h-2 rounded-full">
                <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 h-full rounded-full w-[90%]"></div>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1 text-xl">Java</p>
              <div className="bg-gray-800 h-2 rounded-full">
                <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 h-full rounded-full w-[80%]"></div>
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-1 text-xl">Python</p>
              <div className="bg-gray-800 h-2 rounded-full">
                <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 h-full rounded-full w-[90%]"></div>
              </div>
            </div>
          {/* ))} */}
        </div>

        {/* Algorithms & DS */}
        <div className="bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out md:py-9 rounded-2xl p-6 w-full lg:w-1/3 shadow-lg shadow-gray-900">
          <div className="flex items-center gap-2 mb-4 text-2xl font-semibold">
            <FaProjectDiagram className="text-green-400" />
            Algorithms & DS
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Dynamic Programming",
              "Graph Algorithms",
              "Tree Structures",
              "Greedy Algorithms",
              "Bit Manipulation",
              "Array & String",
              "Binary Search",
              "Recursion & Backtracking",
              "Sorting & Searching",
              "Geometry",
            ].map((item, idx) => (
              <span
                key={idx}
                className={`px-3 py-2 rounded-full hover:bg-[#00e5a0] transition duration-300 hover:text-black text-white font-semibold bg-gray-900 text-gray-300"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out md:py-9 rounded-2xl p-6 w-full lg:w-1/3 shadow-lg shadow-gray-900">
          <div className="flex items-center gap-2 mb-4 text-2xl font-semibold">
            <FaTools className="text-green-400" />
            Technologies & Tools
          </div>
          <div className="flex flex-wrap gap-3 mb-24 pb-2">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "SQL",
              "Matplotlib",
              "pandas",
              "NumPy",
            ].map((tool, idx) => (
              <span
                key={idx}
                className={`px-3 py-2 rounded-full hover:bg-[#00e5a0] transition duration-400 hover:text-black text-white font-semibold bg-gray-900 text-gray-300"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
