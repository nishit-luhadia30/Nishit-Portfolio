import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import CPStats from "./components/cpstats";

function App() {
  return (
    <div className="bg-gray-800 text-white font-sans">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <About />
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 bg-gray-900">
        <Experience />
      </section>

      {/* Certificates Section */}
      <Certificates />
      
      <Projects />
      <CPStats />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
