import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
        id: 1,
        label: "nishit95luhadia1@gmail.com",
        href: "mailto:nishit95luhadia1@gmail.com",
        icon: <Mail className="w-6 h-6 text-white" />,
    },
    {
        id: 2,
        label: "www.linkedin.com/in/nishit-luhadia/",
        href: "https://www.linkedin.com/in/nishit-luhadia-0193462a6/",
        icon: <Linkedin className="w-6 h-6 text-white" />,
    },
    {
        id: 3,
        label: "github.com/nishit-luhadia30",
        href: "https://github.com/nishit-luhadia30",
        icon: <Github className="w-6 h-6 text-white" />,
    },
    {
        id: 4,
        label: "+91 74108 86350",
        href: "tel:+917410886350",
        icon: <Phone className="w-6 h-6 text-white" />,
    }

  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Get In Touch
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Let’s Connect!</h3>
          <div className="space-y-4">
            {contacts.map((c) => (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-xl transition transform hover:scale-105 hover:bg-[#334155] hover:shadow-lg duration-300"
              >
                <div className="bg-green-500 p-2 rounded-lg">{c.icon}</div>
                <span className="text-sm md:text-base break-all">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-gray-400 text-sm md:text-base">
            I’m always excited to discuss new opportunities, collaborate on
            interesting projects, or just chat about algorithms and competitive
            programming.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:h-9/12 md:relative md:top-12 justify-center bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <Mail className="w-10 h-10 text-orange-400 mb-4 animate-bounce" />
          <p className="text-sm text-gray-300">
            Drop me a line anytime at
          </p>
          <a
            href="mailto:nishit95luhadia1@gmail.com"
            className="mt-2 text-orange-400 font-medium hover:underline"
          >
            nishit95luhadia1@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;