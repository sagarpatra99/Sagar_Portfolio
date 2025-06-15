import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-whited dark:bg-gray-900d transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;