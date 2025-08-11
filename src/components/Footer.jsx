import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const footerLink = [
    {
      to: "https://github.com/sagarpatra99",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      to: "https://www.linkedin.com/in/thesagarpatra/",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      to: "mailto:sagarpatra641@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
  ];

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-gray-200 dark:bg-gradient-to-br dark:from-gray-950 dark:via-slate-950 dark:to-indigo-900 text-gray-900 dark:text-white py-6 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sagar's Portfolio
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:text-lg">
              Frontend React.js Developer passionate about creating amazing web
              experiences. Let's build something incredible together.
            </p>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Available for freelance work
              </span>
            </div>
            <div className="flex space-x-4">
              {footerLink.map(({ to, icon, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="group p-3 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-xl text-gray-800 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-black/10 dark:border-white/20"
                  aria-label={label}
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colorss cursor-pointer text-left hover:translate-x-2 transform transition-transform"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "React.js Apps",
                "Responsive Design",
                "Performance Optimization",
              ].map((service) => (
                <li
                  key={service}
                  className="text-gray-600 dark:text-gray-300 text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-red-600 dark:border-gray-200 mt-4 sm:mt-10 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 flex items-center space-x-2 sm:mb-4 md:mb-0">
              <span>
                © {currentYear}{" "}
                <Link
                  to="https://www.linkedin.com/in/thesagarpatra/"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sagar Patra
                </Link>{" "}
                Made with
              </span>
              <Heart
                size={16}
                className="text-red-500 animate-pulse"
                fill="currentColor"
              />
              {/* <span>and lots of coffee.</span> */}
            </p>

            {/* <button
              onClick={scrollToTop}
              className="fixed right-4 bottom-12 bg-blue-600 hover:bg-blue-700 p-4 rounded-full text-white transition-all duration-300"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button> */}
            <ScrollToTopButton/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
