import { useState } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI career advisor. I can help you with resume tips, course suggestions, interview preparation, and career guidance. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "How do I write a good resume?",
    "What skills should I learn for data science?",
    "How to prepare for technical interviews?",
    "Best programming courses for beginners?",
    "How to switch careers to tech?"
  ];

  const generateBotResponse = (userMessage) => {
    const responses = {
      resume: "Here are key resume tips for Indian students:\n\n• Keep it to 1-2 pages maximum\n• Include relevant projects and internships\n• Highlight technical skills prominently\n• Use action verbs (developed, implemented, optimized)\n• Include measurable achievements\n• Tailor it for each job application\n• Get it reviewed by seniors or mentors",
      
      skills: "For data science, focus on these skills in order:\n\n1. **Programming**: Python (pandas, numpy, matplotlib)\n2. **Statistics & Math**: Descriptive/inferential statistics\n3. **Machine Learning**: scikit-learn, basic algorithms\n4. **Data Visualization**: Matplotlib, Seaborn, Plotly\n5. **SQL**: Database querying and management\n6. **Tools**: Jupyter notebooks, Git, Excel\n\nStart with Python and statistics, then gradually add ML concepts.",
      
      interview: "Technical interview preparation strategy:\n\n• **Coding Practice**: Solve problems on LeetCode, HackerRank\n• **System Design**: Learn basics of scalable systems\n• **Projects**: Be ready to explain your projects in detail\n• **Behavioral Questions**: Prepare STAR method responses\n• **Company Research**: Know the company's products and culture\n• **Mock Interviews**: Practice with friends or online platforms\n• **Ask Questions**: Prepare thoughtful questions about the role",
      
      courses: "Best programming courses for beginners:\n\n**Free Options:**\n• freeCodeCamp (Web Development)\n• CS50 by Harvard (Computer Science)\n• Python for Everybody (Coursera)\n• The Odin Project (Full Stack)\n\n**Paid Options:**\n• Complete Web Developer Bootcamp (Udemy)\n• 100 Days of Code: Python (Udemy)\n• React Complete Guide (Udemy)\n\nStart with free resources, then invest in paid courses for deeper learning.",
      
      career: "Steps to switch careers to tech:\n\n1. **Assess Your Transferable Skills**: Communication, problem-solving, project management\n2. **Choose Your Path**: Web dev, data science, product management, etc.\n3. **Learn Fundamentals**: Take online courses, build projects\n4. **Build Portfolio**: Create 3-5 projects showcasing your skills\n5. **Network**: Join tech communities, attend meetups\n6. **Apply Strategically**: Start with junior roles, internships\n7. **Stay Persistent**: Career transitions take 6-18 months typically"
    };

    const message = userMessage.toLowerCase();
    
    if (message.includes('resume') || message.includes('cv')) {
      return responses.resume;
    } else if (message.includes('data science') || message.includes('skills')) {
      return responses.skills;
    } else if (message.includes('interview') || message.includes('preparation')) {
      return responses.interview;
    } else if (message.includes('course') || message.includes('learn') || message.includes('beginner')) {
      return responses.courses;
    } else if (message.includes('career') || message.includes('switch') || message.includes('transition')) {
      return responses.career;
    } else {
      return "I'd be happy to help! I can assist you with:\n\n• Resume and CV writing tips\n• Skill development recommendations\n• Interview preparation strategies\n• Course and learning resource suggestions\n• Career transition guidance\n• Job search strategies\n\nWhat specific area would you like to explore?";
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Career AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
              <div className="space-y-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-sm text-indigo-600 hover:text-indigo-800 p-1 rounded hover:bg-indigo-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about careers..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;