import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

const CPStats = () => {
  const [platforms, setPlatforms] = useState([
    {
      id: 1,
      name: "Codeforces",
      rating: "Loading...",
      short: "CF",
      link: "https://codeforces.com/profile/Nishit_Luhadia",
    },
    {
      id: 2,
      name: "LeetCode",
      rating: "1541 Rating",
      short: "LC",
      link: "https://leetcode.com/u/nishit_luhadia/",
    },
    {
      id: 3,
      name: "GeeksForGeeks",
      rating: "Solves Problems",
      short: "GFG",
      link: "https://www.geeksforgeeks.org/user/nishit95lvkp8/",
    },
  ]);

  useEffect(() => {
    const fetchCF = async () => {
      try {
        const res = await fetch(
          "https://codeforces.com/api/user.info?handles=Nishit_Luhadia"
        );
        const data = await res.json();
        const user = data.result[0];

        setPlatforms((prev) =>
          prev.map((p) =>
            p.name === "Codeforces"
              ? {
                  ...p,
                  rating: `${user.rank}, ${user.rating}`,
                }
              : p
          )
        );
      } catch (err) {
        console.error("CF error:", err);
      }
    };

    const fetchLC = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/nishit_luhadia"
        );
        const data = await res.json();

        setPlatforms((prev) =>
          prev.map((p) =>
            p.name === "LeetCode"
              ? {
                  ...p,
                  rating: `Rank ${data.ranking}`,
                }
              : p
          )
        );
      } catch (err) {
        console.error("LC error:", err);
      }
    };

    fetchCF();
    fetchLC();
  }, []);

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
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full"
              >
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
    </section>
  );
};

export default CPStats;