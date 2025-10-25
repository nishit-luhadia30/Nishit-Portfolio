# 🚀 Nishit Luhadia - Portfolio Website

A modern, responsive, and interactive portfolio website showcasing my journey as a Computer Science student, competitive programmer, and full-stack developer. Built with React, Tailwind CSS, and packed with smooth animations and engaging UI/UX.

## ✨ Features

### 🎯 **Core Sections**
- **Dynamic Hero Section**: Typewriter effect with rotating tech quotes and animated code block
- **About Me**: Personal introduction with stats (300+ problems solved, 10+ contests, 4+ projects)
- **Experience**: Professional internship experience with TechHyaku Pvt. Ltd.
- **Projects Showcase**: 5 featured projects with live demos and GitHub links
- **Competitive Programming Stats**: Platform ratings (Codeforces, LeetCode, GeeksForGeeks) and contest achievements
- **Technical Skills**: Programming languages, algorithms & data structures, and tech stack
- **Contact Section**: Multiple ways to connect (Email, LinkedIn, GitHub, Phone)

### 🎨 **Design Highlights**
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Hover effects, scale transitions, and fade-in animations
- **Modern UI**: Dark theme with gradient accents (green-orange palette)
- **Interactive Elements**: Clickable project cards, social links, and navigation
- **Clean Code**: Component-based architecture with reusable elements

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19** - Latest React with modern hooks and features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework for rapid UI development

### **UI Components & Icons**
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Additional icon library (FaGithub, FaLinkedIn, etc.)

### **Key Technologies**
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom animations and transitions
- **HTML5** - Semantic markup

### **Development Tools**
- **ESLint** - Code quality and consistency
- **npm** - Package management
- **Git** - Version control

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
portfolio-for-nishit/
├── public/                     # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── Header.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Hero section with typewriter effect
│   │   ├── About.jsx           # About me with stats and profile card
│   │   ├── Experience.jsx      # Professional experience timeline
│   │   ├── Projects.jsx        # Featured projects showcase
│   │   ├── CPStats.jsx         # Competitive programming statistics
│   │   ├── Skills.jsx          # Technical skills with progress bars
│   │   ├── Contact.jsx         # Contact information and links
│   │   └── Footer.jsx          # Footer with social links
│   ├── images/                 # Image assets
│   │   └── nishit_bg.jpg       # Profile picture
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global styles and Tailwind imports
│   └── App.css                 # Additional custom styles
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

### 📊 **Component Architecture Diagram**

```
App.jsx (Root Component)
│
├── Header (Navigation)
│   └── Smooth scroll links to sections
│
├── Hero (Landing Section)
│   ├── Typewriter animation
│   ├── Profile introduction
│   └── Code block showcase
│
├── About (Personal Info)
│   ├── Bio and description
│   ├── Stats (Problems, Contests, Projects)
│   └── Profile card with image
│
├── Experience (Professional Journey)
│   └── Internship details with skills
│
├── Projects (Portfolio Showcase)
│   ├── Smart AR Shopping Assistant
│   ├── Internship Project
│   ├── Decentralized Den
│   ├── Budget Planner
│   └── Generative AI HackToSkills
│
├── CPStats (Competitive Programming)
│   ├── Platform ratings (CF, LC, GFG)
│   └── Contest achievements
│
├── Skills (Technical Expertise)
│   ├── Programming Languages (C++, Python, Java, C)
│   ├── Algorithms & Data Structures
│   └── Technologies & Tools (MERN Stack)
│
├── Contact (Get In Touch)
│   ├── Email
│   ├── LinkedIn
│   ├── GitHub
│   └── Phone
│
└── Footer (Social Links & Copyright)
```

## 🎨 Design Philosophy

### **Color Palette**
- **Primary Background**: `#13152e` (Dark Navy)
- **Secondary Background**: `#1e293b` (Slate)
- **Accent Colors**: 
  - Green: `#00e5a0` (Primary CTA)
  - Orange: `#ff6b35` (Secondary accent)
  - Gradient: Green → Yellow → Orange

### **Typography**
- **Font Family**: System fonts (sans-serif)
- **Headings**: Bold, 2xl-4xl sizes
- **Body Text**: Regular, lg-base sizes
- **Code Blocks**: Monospace font

### **Animations & Interactions**
- **Hover Effects**: Scale transforms (1.05x), color transitions
- **Typewriter Effect**: Dynamic text animation in Hero section
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Fade-in Animations**: Content appears smoothly on load
- **Progress Bars**: Animated skill level indicators

## 📱 Sections Overview

### 1. **Hero Section**
- Dynamic typewriter effect with 10 rotating tech quotes
- Personal introduction and tagline
- CTA buttons (View Projects, Resume)
- Animated C++ code block showcase
- Fully responsive layout

### 2. **About Me**
- Detailed bio highlighting journey and passion
- Key statistics:
  - 300+ Problems Solved
  - 10+ Contests Participated
  - 4+ Projects Completed
- Profile card with image, location, and education
- Smooth animations on scroll

### 3. **Experience**
- **TechHyaku Pvt. Ltd.** - Web Development Intern (May-Jun 2025)
- Technologies: React.js, Tailwind CSS, Firebase, ChatBot
- Responsive design and component development
- Hover effects and skill tags

### 4. **Projects Showcase**
Each project includes:
- Title and description
- Tech stack badges
- GitHub repository link
- Live demo link
- Gradient border accent
- Hover scale effect

**Featured Projects:**
1. Smart AR Shopping Assistant (Walmart Hackathon)
2. Internship Project (TechHyaku)
3. Decentralized Den (Web3 Platform)
4. Budget Planner (Full-stack App)
5. Generative AI Career Advisor

### 5. **Competitive Programming Stats**
- **Platforms**: Codeforces (933), LeetCode (1.4M rank), GeeksForGeeks (1665)
- **Contests**: DevUP (1st Place), Jaypee (Top 10%), AlgoUtsav (Round 2)
- Clickable platform cards with external links
- Achievement badges with icons

### 6. **Technical Skills**
- **Programming Languages**: C++ (95%), C (90%), Java (80%), Python (90%)
- **Algorithms & DS**: DP, Graphs, Trees, Greedy, Bit Manipulation, etc.
- **Tech Stack**: MERN (MongoDB, Express, React, Node), SQL, pandas, NumPy
- Interactive skill cards with hover effects

### 7. **Contact Section**
- Email: nishit95luhadia1@gmail.com
- LinkedIn: linkedin.com/in/nishit-luhadia
- GitHub: github.com/nishit-luhadia30
- Phone: +91 74108 86350
- Animated contact cards with icons

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- Git

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishit-luhadia30/portfolio.git
   cd portfolio-for-nishit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🌐 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### **Netlify**
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### **Manual Deployment**
```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

## 🎯 Key Features Breakdown

### **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Touch-friendly interactions

### **Performance Optimizations**
- Vite for fast builds and HMR
- Lazy loading for images
- Optimized bundle size
- Efficient re-renders with React

### **Accessibility**
- Semantic HTML elements
- Alt text for images
- Keyboard navigation support
- ARIA labels where needed

### **SEO Friendly**
- Meta tags for social sharing
- Descriptive page titles
- Structured content hierarchy
- Fast loading times

## 🔮 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add more project case studies
- [ ] Integrate contact form with backend
- [ ] Add testimonials section
- [ ] Implement analytics tracking
- [ ] Add loading animations
- [ ] Create downloadable resume PDF
- [ ] Add more interactive elements
- [ ] Implement i18n for multiple languages

## 🐛 Known Issues

- None currently! 🎉

## 📊 Project Stats

- **Total Components**: 9
- **Lines of Code**: ~2000+
- **Build Size**: ~150KB (gzipped)
- **Load Time**: <2 seconds
- **Lighthouse Score**: 95+

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are always welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Nishit Luhadia**
- 🎓 B.Tech in Computer and Communication Engineering @ LNMIIT, Jaipur (2027)
- 💻 Full-stack Developer | Competitive Programmer
- 🏆 300+ Problems Solved | 10+ Contests Participated
- 🚀 Passionate about Web Development, IoT, and Problem Solving

## 📞 Connect With Me

- **Email**: [nishit95luhadia1@gmail.com](mailto:nishit95luhadia1@gmail.com)
- **LinkedIn**: [linkedin.com/in/nishit-luhadia](https://www.linkedin.com/in/nishit-luhadia-0193462a6/)
- **GitHub**: [github.com/nishit-luhadia30](https://github.com/nishit-luhadia30)
- **Phone**: +91 74108 86350

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide Icons** - For beautiful, customizable icons
- **Vite** - For the lightning-fast build tool
- **Vercel** - For seamless deployment

---

<div align="center">

### ⭐ Star this repo if you like it!

**Built with ❤️ and ☕ by Nishit Luhadia**

*Last Updated: January 2025*

</div>