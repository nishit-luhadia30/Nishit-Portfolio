import { useState } from 'react';
import { ChevronRight, ChevronLeft, User, BookOpen, Heart, MapPin } from 'lucide-react';

const CareerAssessment = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'age', label: 'Age', type: 'number', required: true },
        { name: 'education', label: 'Current Education Level', type: 'select', 
          options: ['12th Grade', 'Undergraduate', 'Graduate', 'Postgraduate'], required: true },
        { name: 'location', label: 'Location (City, State)', type: 'text', required: true }
      ]
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      icon: BookOpen,
      fields: [
        { name: 'programmingLanguages', label: 'Programming Languages (if any)', type: 'multiselect',
          options: ['Python', 'Java', 'JavaScript', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin', 'None'] },
        { name: 'frameworks', label: 'Frameworks/Libraries', type: 'multiselect',
          options: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Flask', 'Spring', 'Express', 'None'] },
        { name: 'databases', label: 'Database Experience', type: 'multiselect',
          options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'None'] },
        { name: 'cloudPlatforms', label: 'Cloud Platforms', type: 'multiselect',
          options: ['AWS', 'Google Cloud', 'Azure', 'Firebase', 'Heroku', 'None'] }
      ]
    },
    {
      id: 'interests',
      title: 'Interests & Preferences',
      icon: Heart,
      fields: [
        { name: 'careerInterests', label: 'Career Areas of Interest', type: 'multiselect',
          options: ['Software Development', 'Data Science', 'AI/ML', 'Cybersecurity', 'Product Management', 
                   'Digital Marketing', 'UI/UX Design', 'DevOps', 'Business Analysis', 'Consulting'] },
        { name: 'workEnvironment', label: 'Preferred Work Environment', type: 'select',
          options: ['Startup', 'Large Corporation', 'Government', 'Freelance', 'Remote Work', 'No Preference'] },
        { name: 'careerGoals', label: 'Short-term Career Goals (1-2 years)', type: 'textarea' }
      ]
    },
    {
      id: 'experience',
      title: 'Experience & Background',
      icon: MapPin,
      fields: [
        { name: 'internships', label: 'Internship Experience', type: 'textarea', 
          placeholder: 'Describe any internships or work experience...' },
        { name: 'projects', label: 'Personal/Academic Projects', type: 'textarea',
          placeholder: 'Describe your key projects...' },
        { name: 'certifications', label: 'Certifications', type: 'text',
          placeholder: 'List any relevant certifications...' },
        { name: 'strengths', label: 'Key Strengths', type: 'multiselect',
          options: ['Problem Solving', 'Leadership', 'Communication', 'Creativity', 'Analytical Thinking', 
                   'Team Collaboration', 'Time Management', 'Adaptability', 'Technical Writing'] }
      ]
    }
  ];

  const handleInputChange = (fieldName, value) => {
    setAnswers(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderField = (field) => {
    const value = answers[field.name] || '';

    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <input
            type={field.type}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required={field.required}
          >
            <option value="">Select an option</option>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      
      case 'multiselect':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {field.options.map(option => (
              <label key={option} className="flex items-center space-x-2 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(value || []).includes(option)}
                  onChange={(e) => {
                    const currentValues = value || [];
                    if (e.target.checked) {
                      handleInputChange(field.name, [...currentValues, option]);
                    } else {
                      handleInputChange(field.name, currentValues.filter(v => v !== option));
                    }
                  }}
                  className="text-indigo-600"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder={field.placeholder}
          />
        );
      
      default:
        return null;
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const Icon = currentQuestionData.icon;

  return (
    <section id="assessment" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{currentQuestionData.title}</h2>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-6">
            {currentQuestionData.fields.map(field => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Generate Recommendations' : 'Next'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssessment;