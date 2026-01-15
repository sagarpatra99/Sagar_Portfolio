import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-6 pb-12 sm:py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-red-500/10 rounded-full blur-3xl"></div>
      <div className="text-center mb-4 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-1 xl:mb-2 sm:mb-6">
            Work - X
          </h2>
          <div className="w-30 xl:w-52 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
      <div className="bg-gray-200 dark:bg-[#191726] w-[80vw] mx-auto py-6 px-5 h-64d rounded-xl flex items-start flex-col gap-4">
        <div className="flex items-start xl:items-center flex-col xl:flex-row gap-3 xl:gap-4">
          <div className="bg-linear-65 text-xs xl:text-base text-white from-gray-300 to-gray-400 dark:from-blue-800 dark:to-cyan-900 w-fit px-4 py-2 rounded-full">
            Jan 2025 - August - 2025
          </div>
          <div className="flex items-center gap-3 text-[#054669] text-xs xl:text-base font-semibold dark:text-gray-400">
            <Briefcase /> Object Technology Solution Inc. (OTSi) | Hyderabad, Telengana, India.
          </div>
        </div>
        <h4 className="font-bold text-base xl:text-2xl text-[#0578B8]">React.js Developer Intern</h4>
        <p className="text-gray-500 text-sm xl:text-lg">
          During this internship, I gained hands-on experience with
          component-based architecture, state management, API integration, and
          writing clean, reusable code. I collaborated with team members,
          followed industry best practices, and improved my problem-solving and
          debugging skills.
        </p>
      </div>
    </section>
  );
};

export default Experience;
