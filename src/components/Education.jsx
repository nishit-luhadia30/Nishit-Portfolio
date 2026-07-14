import React from "react";
import { BookOpen, Award, MapPin, Users, TrendingUp, ChevronRight } from "lucide-react";
import dpsImage from "../images/dps image.jpeg";
import lnmiitImage from "../images/lnmiit image.jpeg";

const Education = () => {
  const educationData = [
    {
      level: "10th Grade",
      schoolName: "Delhi Public School (DPS), Udaipur",
      board: "CBSE",
      location: "Udaipur, Rajasthan",
      year: "2021",
      result: "Pass",
      percentage: "91.0%",
      details: "Strong foundation in all subjects with exceptional performance in mathematics and science.",
      color: "from-green-400 to-emerald-500",
      bgImage: dpsImage
    },
    {
      level: "12th Grade",
      schoolName: "Delhi Public School (DPS), Udaipur",
      board: "CBSE",
      location: "Udaipur, Rajasthan",
      year: "2021 - 2023",
      result: "Pass",
      percentage: "86.2%",
      details: "Science stream (Physics, Chemistry, Mathematics) with strong preparation for JEE entrance.",
      color: "from-orange-400 to-yellow-500",
      bgImage: dpsImage
    },
    {
      level: "B.Tech",
      schoolName: "LNMIIT Jaipur",
      board: "LNMIIT",
      location: "Jaipur, Rajasthan",
      year: "2023 - 2027",
      result: "Pursuing",
      percentage: "7.5+ CGPA",
      details: "Computer and Communication Engineering with focus on full-stack development and DSA.",
      color: "from-blue-400 to-cyan-500",
      bgImage: lnmiitImage
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#13152e] text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Education
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      {/* Arrow-wise Horizontal Flow */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
          {educationData.map((edu, index) => (
            <React.Fragment key={index}>
              {/* Education Card */}
              <div className="flex-1 min-w-0">
                <div className={`${edu.color} p-1 rounded-xl shadow-lg`}>
                  <div 
                    className="rounded-[10px] p-5 h-full bg-cover bg-center group relative overflow-hidden"
                    style={{ backgroundImage: `url(${edu.bgImage})` }}
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
                    
                    <div className="relative z-10">
                    {/* Year Badge */}
                    <div className="inline-block bg-black/40 px-3 py-1 rounded-full mb-3">
                      <span className="text-xs font-semibold text-gray-300">{edu.year}</span>
                    </div>

                    {/* Icon & Level */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`bg-gradient-to-r ${edu.color} p-2 rounded-lg`}>
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{edu.level}</h3>
                    </div>

                    {/* School Name */}
                    <p className="text-sm font-semibold text-gray-300 mb-2">{edu.schoolName}</p>

                    {/* Score */}
                    <div className="mb-3 p-3 bg-black/50 rounded-lg border border-gray-700/50">
                      <div className="text-xs text-white mb-1">Score / GPA</div>
                      <div className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                        {edu.percentage}
                      </div>
                    </div>

                    {/* Location & Board */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-white">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white">
                        <Award className="w-3 h-3" />
                        <span>{edu.board}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <p className="text-xs text-white leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector (hidden on last item) */}
              {index < educationData.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 px-2">
                  <div className="flex flex-col items-center">
                    <ChevronRight className="w-6 h-6 text-green-400 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Mobile Arrow (shown only on mobile, below card) */}
              {index < educationData.length - 1 && (
                <div className="flex md:hidden justify-center w-full py-2">
                  <div className="text-green-400 animate-pulse">↓</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="bg-[#1e293b] rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-green-400 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Academic Journey Overview
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10th</div>
              <div className="text-gray-400">91.0%</div>
              <div className="text-sm text-gray-500 mt-1">Strong Start</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">12th</div>
              <div className="text-gray-400">86.2%</div>
              <div className="text-sm text-gray-500 mt-1">JEE Preparation</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">JEE Mains</div>
              <div className="text-gray-400">96.5 %tile</div>
              <div className="text-sm text-gray-500 mt-1">Advanced Qualified</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">B.Tech</div>
              <div className="text-gray-400">7.5+ CGPA</div>
              <div className="text-sm text-gray-500 mt-1">Currently Pursuing</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Extracurriculars</h4>
                  <p className="text-sm text-gray-400">
                    Active participation in programming clubs, hackathons, science olympiads, and tech competitions throughout my educational journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Recognitions</h4>
                  <p className="text-sm text-gray-400">
                    Merit certificates, subject excellence awards, and contest victories across all educational levels demonstrate consistent academic excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
