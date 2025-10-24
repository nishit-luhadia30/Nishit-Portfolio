import { Trophy, Medal, Star } from "lucide-react";

const CPStats = () => {
  const platforms = [
    { id: 1, name: "Codeforces", rating: "Newbie, 933", short: "CF", link: "https://codeforces.com/profile/Nishit_Luhadia" },
    { id: 2, name: "LeetCode", rating: "1,407,487 Rank😁", short: "LC" , link: "https://leetcode.com/u/nishit_luhadia/" },
    { id: 3, name: "GeeksForGeeks", rating: "1665 Ranking", short: "GG" , link: "https://www.geeksforgeeks.org/user/nishit95lvkp8/" },
  ];

  const contests = [
    // {
    //   id: 1,
    //   title: "DevUP Programming Contest",
    //   achievement: "1st Place",
    //   date: "March 2025",
    //   icon: <Medal className="text-yellow-400 w-8 h-8" />,
    // },
    
  ];

  return (
    <section
      id="cpstats"
      className="bg-gray-800 text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Competitive Programming Stats
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
      </h2>

      {/* Platforms */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-md mb-12">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-6 text-green-400">
          <Trophy className="w-6 h-6" /> Platforms
        </h3>
        <div className="space-y-4">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between bg-[#080b12] p-4 rounded-xl hover:scale-105 hover:bg-[#1e293b] transition duration-300 shadow"
            >
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-600 text-white font-bold px-3 py-2 rounded-lg">
                            {p.short}
                        </div>
                        <span className="font-medium">{p.name}</span>
                    </div>
                    <span className="text-gray-300">{p.rating}</span>
                </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contests */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contests.map((c) => (
          <div
            key={c.id}
            className="bg-[#192230] p-6 rounded-2xl text-center shadow-md hover:scale-105 hover:bg-[#334155] transition duration-300"
          >
            <div className="flex justify-center mb-4">{c.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{c.title}</h4>
            <p className="text-gray-300">{c.achievement}</p>
            <p className="text-sm text-gray-400 mt-2">{c.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CPStats;