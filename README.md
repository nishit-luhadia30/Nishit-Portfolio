# CareerAI - Personalized Career & Skills Advisor

An AI-powered career advisor designed specifically for Indian students, built with React and integrated with Google Cloud's Generative AI (Vertex AI). This application provides personalized career path recommendations, skill gap analysis, and actionable learning roadmaps.

## 🚀 Features

- **Personalized Career Assessment**: Comprehensive questionnaire covering skills, interests, and background
- **AI-Powered Recommendations**: 3-5 tailored career paths with match scores and explanations
- **Skill Gap Analysis**: Identify missing skills and get prioritized learning plans
- **Interactive Chatbot**: AI assistant for resume tips, course suggestions, and career guidance
- **Indian Job Market Focus**: Recommendations tailored for the Indian tech ecosystem
- **Privacy-First Design**: Secure handling of user data

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom components
- **AI Integration**: Ready for Google Cloud Vertex AI integration
- **Database**: Prepared for Firestore integration
- **Deployment**: Ready for Google Cloud Run

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd career-skills-advisor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── Hero.jsx                # Landing section
│   ├── CareerAssessment.jsx    # Multi-step assessment form
│   ├── CareerRecommendations.jsx # AI-generated career paths
│   ├── SkillGapAnalysis.jsx    # Skill analysis and learning roadmap
│   ├── ChatBot.jsx             # AI assistant chatbot
│   └── Footer.jsx              # Footer component
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## 🔧 Configuration

### Google Cloud Integration (Future)

To integrate with Google Cloud services:

1. **Set up Vertex AI**
   - Enable Vertex AI API in Google Cloud Console
   - Create service account and download credentials
   - Configure authentication

2. **Firestore Setup**
   - Enable Firestore in Google Cloud Console
   - Set up security rules
   - Configure database structure

3. **Environment Variables**
   Create a `.env` file:
   ```env
   VITE_GOOGLE_CLOUD_PROJECT_ID=your-project-id
   VITE_VERTEX_AI_LOCATION=your-location
   ```

## 🎯 Usage

1. **Career Assessment**: Users complete a comprehensive assessment covering:
   - Personal information and education level
   - Technical skills and experience
   - Career interests and preferences
   - Background and strengths

2. **Get Recommendations**: AI analyzes the data and provides:
   - 3-5 personalized career paths
   - Match scores and explanations
   - Salary ranges and growth potential
   - Top companies and time to entry

3. **Skill Analysis**: For each recommended career:
   - Identify existing vs. missing skills
   - Get prioritized learning roadmap
   - Access curated learning resources
   - Estimated timeline to job-readiness

4. **AI Assistant**: Chat with the AI for:
   - Resume writing tips
   - Course recommendations
   - Interview preparation
   - Career transition guidance

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Google Cloud Run Deployment
```bash
# Build the application
npm run build

# Deploy to Cloud Run (requires gcloud CLI)
gcloud run deploy career-advisor \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Cloud Vertex AI for AI capabilities
- Tailwind CSS for styling framework
- Lucide React for beautiful icons
- React community for excellent tooling

## 📞 Support

For support and questions:
- Email: support@careerai.com
- GitHub Issues: [Create an issue](../../issues)

---

Built with ❤️ for Indian students pursuing their dream careers.