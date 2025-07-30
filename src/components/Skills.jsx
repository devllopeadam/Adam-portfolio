/* eslint-disable no-unused-vars */
import { GradientButton, Title } from ".";
import { skillsCategories } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabVariants = {
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "rgba(255, 255, 255, 0.7)",
    },
    active: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "rgba(255, 255, 255, 1)",
    },
  };

  const skillAnimation = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.1 + index * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "tools", label: "DevOps & Tools", icon: "🚀" },
  ];

  return (
    <div id="skills">
      <div className="px-6 mx-auto max-w-[1100px] flex flex-col gap-14 relative">
        <Title text={"Skills & Technologies"} />

        {/* Background gradient */}
        <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full opacity-90 absolute top-[520px] md:top-[100%] bg-gradient-experience-1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2 -z-[1]"></div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-2 flex-wrap z-10">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variants={tabVariants}
              animate={activeTab === tab.id ? "active" : "inactive"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-2 ${
                activeTab === tab.id
                  ? "shadow-lg shadow-white/10"
                  : "hover:border-white/50"
              }`}>
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center gap-x-4 gap-y-3 max-md:gap-3 flex-wrap mt-6 z-10">
          {skillsCategories[activeTab]?.map((skill, index) => (
            <motion.a
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              key={`${activeTab}-${skill.skill}`}
              variants={skillAnimation}
              custom={index}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-3 backdrop-blur-sm rounded-xl bg-gradient-to-r from-white/25 to-white/15 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 flex md:gap-3 gap-2 items-center">
              {/* Icon container */}
              <div className="flex-shrink-0">
                <img
                  className="md:w-7 md:h-7 w-6 h-6 object-contain"
                  loading="lazy"
                  src={skill.imgSkill}
                  alt={skill.skill}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col min-w-0">
                <p className="text-sm md:text-base leading-none text-white font-medium group-hover:text-white/90 transition-colors">
                  {skill.skill}
                </p>
                <p className="text-white/60 text-xs md:text-sm mt-1 group-hover:text-white/70 transition-colors">
                  {skill.level}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-3 h-3 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Skills count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/50 text-sm z-10">
          Showing {skillsCategories[activeTab]?.length || 0} {activeTab}{" "}
          technologies
        </motion.div>

        <GradientButton
          text={"Check out my Github"}
          link={"https://github.com/devllopeadam"}
        />
      </div>
    </div>
  );
};

export default Skills;
