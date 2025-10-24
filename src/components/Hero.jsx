import React, { useEffect, useState } from "react";
import "../App.css";

const words = [
  "My code works... don't ask how. ",
  "Dreams in recursion, wakes up in segfault. ",
  "Not all heroes wear capes, some debug in pajamas. ",
  "Git commit -m 'final_final_final_FIX'",
  "Powered by coffee, chaos, and curly braces. ",
  "Trying to fix one bug, created five more. ",
  "C++ is my love language... and my stress trigger. ",
  "Living proof that Ctrl+Z saves lives. ",
  "Solving problems by googling error messages. ",
  "Coding at 2 AM builds character (and bugs). ",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    if (!reverse && subIndex === words[index].length + 1) {
      setTimeout(() => setReverse(true), 1000);
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-gray-800 text-white px-5 py-20 md:px-28 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-[#00e5a0]">Nishit Luhadia</span>
          </h1>

          <p className="text-orange-400 text-xl font-mono whitespace-wrap">
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </p>

          <p className="text-lg text-gray-300">
            🔥 I'm super passionate about web dev — especially Frontend! 🎨💻
            Love crafting dynamic, aesthetic, and interactive websites that
            actually vibe. Catch me building stuff at hackathons ⚡ and killing
            it in presentations 🎤 — always leveling up my skills!
            <br />
            <span className="text-[#00e5a0]">
              #FrontendDev #WebDevLife #HackathonGrind #CodeAndCreate #TechieVibes
            </span>
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#projects">
              <button className="bg-[#00e5a0] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
                View Projects
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1ThPWG5c_vtDUTTxAYELFxuiukRWPPWkE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent border border-[#00e5a0] text-[#00e5a0] px-6 py-3 rounded-lg font-semibold hover:bg-[#00e5a0] hover:cursor-pointer hover:text-black transition">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Code block */}
        <div className="bg-[#1e293b] border-neutral-500 border text-left text-sm md:text-base rounded-xl shadow-lg shadow-neutral-950 font-mono w-full md:w-[40%]">
          <div className="w-full p-4 bg-[#343f51] rounded-t-xl flex">
            <div className="w-3 h-3 mt-1.5 rounded-full bg-red-400 m-1"></div>
            <div className="w-3 h-3 mt-1.5 rounded-full bg-amber-400 m-1"></div>
            <div className="w-3 h-3 mt-1.5 rounded-full bg-green-400 m-1"></div>
            <p className="ml-3">competitive_programming.cpp</p>
          </div>

          <div className="px-6 pb-6 mt-3">
            <p className="text-gray-400 mb-2">
              // Solving problems, one algorithm at a time
            </p>
            <p className="text-blue-400">
              #include <span className="text-orange-400">&lt;iostream&gt;</span>
            </p>
            <p className="text-blue-400">
              #include <span className="text-orange-400">&lt;algorithm&gt;</span>
            </p>
            <br />

            <p>
              <span className="text-blue-400">int</span>{" "}
              <span className="text-pink-500">main</span>() &#123;
            </p>
            <p className="ml-4">
              <span className="text-blue-400">string</span> passion ={" "}
              <span className="text-yellow-400">
                "competitive programming"
              </span>
              ;
            </p>
            <p className="ml-4">
              <span className="text-pink-500">while</span>(true) &#123;
            </p>
            <p className="ml-8">solve_problems();</p>
            <p className="ml-8">learn_algorithms();</p>
            <p className="ml-8">
              <span className="text-pink-500">if</span>(contest_available()) &#123;
            </p>
            <p className="ml-12">participate();</p>
            <p className="ml-8">&#125;</p>
            <p className="ml-4">&#125;</p>
            <p className="ml-4">
              <span className="text-pink-500">return</span>{" "}
              <span className="text-purple-400">0</span>;
            </p>
            <p>&#125;</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
