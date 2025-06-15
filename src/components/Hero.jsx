import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400 to-red-500 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Avatar/Profile placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl hover-scale">
            <span className="text-4xl font-bold text-white">SP</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sagar Patra</span>
          </h1>
          
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-semibold mb-2">
              <Typewriter
            options={{
              strings: [
                "Front-end Developer",
                "React.js Developer",
                "Node.js Developer",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating <span className="font-semibold text-blue-600 dark:text-blue-400">beautiful</span>, 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> responsive</span>, and 
            <span className="font-semibold text-green-600 dark:text-green-400"> user-friendly</span> web applications 
            using modern technologies like React.js, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-scale shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-scale shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            {/* <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-scale shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download CV</span>
              </span>
            </button> */}
          </div>

          <div className="flex justify-center space-x-6">
            <Link to="https://github.com/sagarpatra99" className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover-scale">
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link to="https://www.linkedin.com/in/thesagarpatra/" className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover-scale">
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;