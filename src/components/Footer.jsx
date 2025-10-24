import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#00e5a0]">Nishit <span className="text-orange-400">Luhadia</span></h2>
          <p className="text-gray-400 mt-3 text-sm">
            Crafting clean, modern, and scalable web solutions with React,
            Tailwind, and a touch of creativity 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00e5a0]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#00e5a0] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#00e5a0] transition">About</a></li>
            <li><a href="#experience" className="hover:text-[#00e5a0] transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-[#00e5a0] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#00e5a0] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00e5a0]">
            Connect
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#00e5a0]" />
              <a href="mailto:nishit95luhadia1@gmail.com" className="hover:text-[#00e5a0] transition">
                nishit95luhadia1@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-[#00e5a0]" />
              <a href="https://www.linkedin.com/in/nishit-luhadia-0193462a6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5a0] transition">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-5 h-5 text-[#00e5a0]" />
              <a href="https://github.com/nishit-luhadia30" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5a0] transition">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#00e5a0]" />
              <a href="tel:+919876543210" className="hover:text-[#00e5a0] transition">
                +91 7410886350
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-[#00e5a0]">Nishit</span> <span className="text-orange-400">Luhadia</span>. All rights reserved.
      </div>
    </footer>
  );
}