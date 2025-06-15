import { useState, useEffect, useRef } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
// import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'React.js', percentage: 70, color: 'from-blue-500 to-cyan-500', icon: <FaReact className='text-[#5ED3F3]' /> },
    { name: 'JavaScript', percentage: 85, color: 'from-yellow-500 to-orange-500', icon: <IoLogoJavascript className="text-[#FFFF00]" /> },
    { name: 'Next.js', percentage: 40, color: 'from-blue-600 to-blue-800', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', percentage: 98, color: 'from-teal-500 to-green-500', icon: <SiTailwindcss className='text-[#15B8C5]'/> },
    { name: 'HTML5', percentage: 96, color: 'from-orange-500 to-red-500', icon: <FaHtml5 className='text-[#E96228]' /> },
    { name: 'CSS3', percentage: 93, color: 'from-blue-400 to-purple-500', icon: <SiCss3 className='text-[#33A3D4]'/> },
    { name: 'Node.js', percentage: 47, color: 'from-green-500 to-emerald-600', icon: <FaNodeJs className='text-[#7FC728]' /> },
    { name: 'GitHub', percentage: 75, color: 'from-red-500 to-pink-500', icon: <FaGithub className='text-black' /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-slate-800 dark:to-indigo-900 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Here are my technical skills with proficiency levels based on my experience and knowledge. 
            Each skill represents years of hands-on development and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl p-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Professional Level
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.percentage}%
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Proficiency
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-4 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div
                  className="absolute top-0 h-4 w-1 bg-white rounded-full shadow-lg transition-all duration-1000 ease-out"
                  style={{
                    left: isVisible ? `calc(${skill.percentage}% - 2px)` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{skills.length}</div>
            <p className="text-gray-600 dark:text-gray-300">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
