import { Award, Calendar, ExternalLink } from "lucide-react";
import UIUX from "../assets/certificate_3.png";
import webDesign from "../assets/html_css.png";
import gitGithub from "../assets/git_hub.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiCss3 } from "react-icons/si";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Mastering Node.js, Express.js and MongoDB",
      issuer: "Internshala",
      date: "2025",
      description: "Advanced React.js concepts, hooks, and state management",
      color: "from-green-500 to-green-700",
      icon: <FaNodeJs />,
      image: node,
      link: "https://trainings.internshala.com/view_certificate/1kqrtwpfl68/43jb2aonhxb/",
    },
    {
      title: "Building Web Application using React.js",
      issuer: "Internshala",
      date: "2025",
      description: "Advanced React.js concepts, hooks, and state management",
      color: "from-sky-500 to-sky-700",
      icon: <FaReact />,
      image: react,
      link: "https://trainings.internshala.com/view_certificate/8trb79zmyzq/39oqcwr4qrt/",
    },
    {
      title: "Developing Interactive Websites with JS",
      issuer: "Internshala",
      date: "2024",
      description: "Comprehensive JavaScript programming and problem-solving",
      color: "from-yellow-300 to-yellow-600",
      icon: <IoLogoJavascript />,
      image: javascript,
      link: "https://trainings.internshala.com/view_certificate/643r6i5b0wn/7jx010ql53v/",
    },
    {
      title: "Git and GitHub: Mastering Version Control",
      issuer: "Internshala",
      date: "2024",
      description: "HTML, CSS, JavaScript, and responsive web design",
      // color: "from-purple-500 to-pink-500",
      color: "from-gray-50 to-gray-400",
      icon: <FaGithub className="text-black" />,
      image: gitGithub,
      link: "https://trainings.internshala.com/view_certificate/fqh1ovt1zyb/6maqxixr8sa/",
    },
    {
      title: "Designing Web Pages using HTML and CSS",
      issuer: "Internshala",
      date: "2024",
      description:
        "Built responsive and structured web pages using HTML and CSS",
      color: "from-blue-900 to-indigo-600",
      icon: <SiCss3 />,
      image: webDesign,
      link: "https://trainings.internshala.com/view_certificate/643r6i5b0wn/7jx010ql53v/",
    },
    {
      title: "UI/UX with Figma and Adobe XD",
      issuer: "Udemy",
      date: "2024",
      description: "User-focused design, visual hierarchy and responsive UI",
      color: "from-gray-50 to-gray-400",
      icon: <IoLogoFigma className="text-orange-400" />, // 526, 390
      image: UIUX,
      link: "https://www.udemy.com/certificate/UC-3ceb509c-977e-4304-a693-e80de091c99d/",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-6">
            Certificates & Achievements
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional certifications that validate my skills and commitment
            to continuous learning and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Link to={cert.link} key={index}>
              <div
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* <div className="h-[390px] w-[526px]"> */}
                <img src={cert.image} />
                {/* </div> */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}
                ></div>

                <div className="flex items-start justify-between my-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 bg-gradient-to-r ${cert.color} rounded-xl text-white text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">{cert.issuer}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span className="text-blue-600 dark:text-blue-400 font-medium">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900">
                    <ExternalLink
                      size={16}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Certified Professional
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-2">
                    Verified
                    <MdVerified className="text-blue-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {certificates.length}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Certificates
              </p>
            </div>
            <div className="h-10 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                100%
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Pass Rate
              </p>
            </div>
            <div className="h-10 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                2025
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Latest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
