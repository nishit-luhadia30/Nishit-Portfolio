import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#00e5a0] cursor-pointer">
          Nishit <span className="text-orange-400">Luhadia</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-[#00e5a0] transition">Home</a>
          <a href="#about" className="hover:text-[#00e5a0] transition">About</a>
          <a href="#experience" className="hover:text-[#00e5a0] transition">Experience</a>
          <a href="#projects" className="hover:text-[#00e5a0] transition">Projects</a>
          <a href="#cpstats" className="hover:text-[#00e5a0] transition">CP-Stats</a>
          <a href="#skills" className="hover:text-[#00e5a0] transition">Skills</a>
          <a href="#contact" className="hover:text-[#00e5a0] transition">Contact</a>
        </nav>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ThPWG5c_vtDUTTxAYELFxuiukRWPPWkE/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="bg-transparent border border-[#00e5a0] text-[#00e5a0] px-5 py-2 rounded-lg font-semibold hover:bg-[#00e5a0] hover:text-black transition cursor-pointer">
            Resume
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-[#00e5a0] transition">Home</a>
          <a href="#about" className="block hover:text-[#00e5a0] transition">About</a>
          <a href="#experience" className="block hover:text-[#00e5a0] transition">Experience</a>
          <a href="#projects" className="block hover:text-[#00e5a0] transition">Projects</a>
          <a href="#cpstats" className="block hover:text-[#00e5a0] transition">CP-Stats</a>
          <a href="#skills" className="block hover:text-[#00e5a0] transition">Skills</a>
          <a href="#contact" className="block hover:text-[#00e5a0] transition">Contact</a>
          <a
            href="https://drive.google.com/file/d/1ThPWG5c_vtDUTTxAYELFxuiukRWPPWkE/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-transparent border border-[#00e5a0] text-[#00e5a0] px-5 py-2 rounded-lg font-semibold hover:bg-[#00e5a0] hover:text-black transition cursor-pointer">
              Resume
            </button>
          </a>
        </div>
      )}
    </header>
  );
}
