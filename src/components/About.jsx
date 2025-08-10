import { Code, User, Award, Coffee } from "lucide-react";
import user from "../assets/Me.png";
import me from "../assets/sagar.jfif";

const About = () => {
  return (
    <section
      id="about"
      className="pt-6 pb-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-2 sm:mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div>
                <img src={user} alt="" height={60} width={60} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Frontend Developer
              </h3>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                I am a passionate Frontend Developer with hands-on industry
                experience gained during my internship at{" "}
                <b className="text-[#61B5E2]">OTSi</b>, where I contributed to
                the development team of real-world web applications. Proficient
                in <span className="text-[#DD4B25] font-semibold">HTML</span>,{" "}
                <span className="text-[#146EB0] font-semibold">CSS</span>,{" "}
                <span className="text-[#EAB925] font-semibold">JavaScript</span>
                , <span className="text-blue-400 font-semibold">React.js</span>,
                and CSS frameworks like{" "}
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  Tailwind CSS
                </span>{" "}
                I am continuously enhancing my expertise by mastering the{" "}
                <span className="text-[#4DA53F] font-semibold">M</span>
                <span className="text-[#8BBF3F] font-semibold">E</span>
                <span className="text-blue-400 font-semibold">R</span>
                <span className="text-[#3C823C] font-semibold">N</span> Stack —{" "}
                <span className="text-[#4DA53F] font-semibold">MongoDB</span>,{" "}
                <span className="text-[#8BBF3F] font-semibold">Express.js</span>
                , <span className="text-blue-400 font-semibold">React.js</span>,
                and{" "}
                <span className="text-[#3C823C] font-semibold">Node.js</span> —
                while pursuing my{" "}
                <span className="text-white font-bold">MCA</span> at{" "}
                <span className="text-red-500">Chandigarh University (CU)</span>
                . My focus is on building clean, responsive, and user-friendly
                interfaces that deliver seamless digital experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies,
                experimenting with projects, and continuously learning to stay
                ahead in the ever-evolving world of web development.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 hover-scale">
                <div className="flex items-center space-x-3 mb-2">
                  <Award
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Experience
                  </h4>
                </div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1+ Years
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-purple-900/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 hover-scale">
                <div className="flex items-center space-x-3 mb-2">
                  <Code
                    className="text-purple-600 dark:text-purple-400"
                    size={20}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Projects
                  </h4>
                </div>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  17+ Completed
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-green-900/30 p-6 rounded-2xl border border-green-200 dark:border-green-800 hover-scale">
                <div className="flex items-center space-x-3 mb-2">
                  <Coffee
                    className="text-green-600 dark:text-green-400"
                    size={20}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Coffee Cups
                  </h4>
                </div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  1000+
                </p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-orange-900/30 p-6 rounded-2xl border border-orange-200 dark:border-orange-800 hover-scale">
                <div className="flex items-center space-x-3 mb-2">
                  <User
                    className="text-orange-600 dark:text-orange-400"
                    size={20}
                  />
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Happy Clients
                  </h4>
                </div>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  25+
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center hover-scale transition-all duration-500 shadow-2xl">
                <Code
                  size={80}
                  className="text-white absolute bottom-2 drop-shadow-lg"
                />
                <img src={me} className="rounded-full" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse shadow-lg flex items-center justify-center">
                <span className="text-white font-bold">JS</span>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-70 animate-pulse shadow-lg flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-white font-bold">⚛️</span>
              </div>
              <div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse shadow-lg flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-white font-bold">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
