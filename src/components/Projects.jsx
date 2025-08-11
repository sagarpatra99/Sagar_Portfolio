import { Github } from 'lucide-react';
import weather from "../assets/weather.png";
import ecoLabs from "../assets/ecoLabs.png";
import tictac from "../assets/TicTac.png";
import calculator from "../assets/cal.png";
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Weather App Project',
      description: 'A modern e-commerce platform built with React.js, featuring user authentication, shopping cart, and payment integration.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: weather,
      github: 'https://github.com/sagarpatra99/Weather-App',
      demo: 'https://sagarweather.netlify.app/'
    },
    {
      title: 'EcoLabs Project',
      description: 'A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.',
      technologies: ['React.js', 'Redux', 'CSS3', 'Firebase'],
      image: ecoLabs,
      github: 'https://github.com/sagarpatra99/Online-Course-Project',
      demo: 'https://fascinating-pavlova-51f685.netlify.app/'
    },
    {
      title: 'TicTacToe Project',
      description: 'A responsive weather application that displays current weather and forecasts using external APIs.',
      technologies: ['React.js', 'API Integration', 'Chart.js', 'CSS3'],
      image: tictac,
      github: 'https://github.com/sagarpatra99/Tic-Tac-Toe-Game',
      demo: 'https://taupe-licorice-6d6e68.netlify.app/'
    },
    {
      title: 'Calculator Project',
      description: 'A responsive portfolio website showcasing my projects and skills with modern design and animations.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      image: calculator,
      github: 'https://github.com/sagarpatra99/Calculator',
      demo: 'https://sagarcalculate.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-6 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            {/* My Projects */}
            What I build so far
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-scalea">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-contain mt-6"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <Link
                    to={project.demo}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
