import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import Nishit from "../images/nishit_bg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#13152e] text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-start gap-12">
        {/* Left Section - Text */}
        <div className="flex-1 space-y-6 text-gray-300 text-lg animate-fadeIn">
          <p>
            Hey, I'm{" "}
            <span className="text-white font-semibold">Nishit Luhadia</span> — 
            currently vibing through my B.Tech in Computer and Communication Engineering 
            at LNMIIT, Jaipur (Class of 2027). I cracked JEE, landed here with dreams and 
            caffeine, and now spend most of my time building cool stuff, debugging 
            questionable code, and geeking out over tech. Whether it's web dev, 
            electronics, or some random idea at 2 AM — I'm all in. I'm always exploring 
            the “what ifs” of tech, turning side projects into full-blown builds, and 
            constantly leveling up. Failures? Just plot twists in the story, tbh.
          </p>
          <p>
            I'm into full-stack dev (React + Node.js gang ✌️), IoT setups with ESP32, and 
            writing code that somehow works (don't ask how, it just does 😅). I speak 
            fluent C, C++, Python, and Java, and when I'm not coding, I'm probably 
            brainstorming features for a project or making sleek UI with Tailwind. I've 
            built responsive sites, connected sensors to the cloud, and even made a smart 
            lab system that can lowkey think for itself. Logic, caffeine, late-night 
            commits, and shipping projects — that's the vibe. And the best part? I'm just 
            getting started.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-10">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-3xl font-bold text-green-400">300+</p>
              <p className="text-sm text-gray-400 mt-1">Problems Solved</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-3xl font-bold text-green-400">10+</p>
              <p className="text-sm text-gray-400 mt-1">Contests Participated</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-3xl font-bold text-green-400">4+</p>
              <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Right Section - Card */}
        <div className="bg-[#1e293b] rounded-2xl p-8 text-center shadow-xl w-full md:w-[300px] animate-fadeInUp">
          <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-amber-100 border-4 border-green-100">
            <img
              src={Nishit}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-white">Nishit Luhadia</h3>
          <p className="text-gray-400 text-sm mb-4">Competitive Programmer</p>

          <div className="flex items-center justify-center gap-2 text-orange-400 mb-2">
            <FaMapMarkerAlt />
            <span className="text-gray-300 text-sm">Udaipur</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-orange-400">
            <FaGraduationCap />
            <span className="text-gray-300 text-sm">
              Computer Science (B.Tech)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;