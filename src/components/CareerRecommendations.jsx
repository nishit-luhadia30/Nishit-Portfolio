import { useState, useEffect } from 'react';
import { Briefcase, TrendingUp, DollarSign, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareerRecommendations = ({ assessmentData, onRecommendationsGenerated, onNext }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI processing and generate recommendations
    const generateRecommendations = () => {
      setLoading(true);

      // Mock AI-generated recommendations based on assessment data
      setTimeout(() => {
        const mockRecommendations = [
          {
            id: 1,
            title: "Full Stack Developer",
            match: 92,
            description: "Build end-to-end web applications using modern frameworks and cloud technologies.",
            skills: ["React", "Node.js", "MongoDB", "AWS"],
            salaryRange: "₹6-15 LPA",
            growth: "High",
            companies: ["TCS", "Infosys", "Wipro", "Startups"],
            timeToEntry: "6-12 months",
            reasoning: "Your programming skills in JavaScript and interest in software development make this an excellent fit."
          },
          {
            id: 2,
            title: "Data Scientist",
            match: 87,
            description: "Analyze complex data to derive insights and build predictive models for business decisions.",
            skills: ["Python", "Machine Learning", "SQL", "Statistics"],
            salaryRange: "₹8-20 LPA",
            growth: "Very High",
            companies: ["Google", "Microsoft", "Flipkart", "Zomato"],
            timeToEntry: "8-15 months",
            reasoning: "Your analytical thinking and interest in AI/ML align perfectly with this growing field."
          },
          {
            id: 3,
            title: "Product Manager",
            match: 78,
            description: "Lead product development from conception to launch, working with cross-functional teams.",
            skills: ["Product Strategy", "Analytics", "Communication", "Agile"],
            salaryRange: "₹10-25 LPA",
            growth: "High",
            companies: ["Swiggy", "Paytm", "Ola", "Byju's"],
            timeToEntry: "12-18 months",
            reasoning: "Your leadership skills and business interest make you suitable for product management roles."
          },
          {
            id: 4,
            title: "UI/UX Designer",
            match: 73,
            description: "Design intuitive and engaging user interfaces for web and mobile applications.",
            skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
            salaryRange: "₹5-12 LPA",
            growth: "Medium-High",
            companies: ["Razorpay", "Freshworks", "Zoho", "Design Studios"],
            timeToEntry: "6-10 months",
            reasoning: "Your creativity and attention to detail would serve you well in design roles."
          },
          {
            id: 5,
            title: "DevOps Engineer",
            match: 69,
            description: "Streamline development and deployment processes using automation and cloud infrastructure.",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
            salaryRange: "₹7-18 LPA",
            growth: "High",
            companies: ["Amazon", "Flipkart", "Myntra", "Tech Startups"],
            timeToEntry: "10-15 months",
            reasoning: "Your technical background and interest in cloud platforms make this a viable option."
          }
        ];

        setRecommendations(mockRecommendations);
        onRecommendationsGenerated(mockRecommendations);
        setLoading(false);
      }, 3000);
    };

    generateRecommendations();
  }, [assessmentData, onRecommendationsGenerated]);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Profile</h2>
            <p className="text-gray-600">Our AI is processing your information to generate personalized career recommendations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="careers" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Career Recommendations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your skills, interests, and background, here are the top career paths tailored for you.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {recommendations.map((career, index) => (
            <div key={career.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Briefcase className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-500">Match Score:</span>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {career.match}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">#{index + 1}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{career.description}</p>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-800 font-medium">Why this fits you:</p>
                <p className="text-sm text-blue-700 mt-1">{career.reasoning}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500">Salary Range</p>
                    <p className="text-sm font-medium">{career.salaryRange}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Growth Potential</p>
                    <p className="text-sm font-medium">{career.growth}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <div>
                    <p className="text-xs text-gray-500">Time to Entry</p>
                    <p className="text-sm font-medium">{career.timeToEntry}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <div>
                    <p className="text-xs text-gray-500">Top Companies</p>
                    <p className="text-sm font-medium">{career.companies.slice(0, 2).join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Key Skills Required:</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>Analyze Skill Gaps</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerRecommendations;