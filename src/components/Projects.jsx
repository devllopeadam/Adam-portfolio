/* eslint-disable no-unused-vars */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Project, Title } from ".";
import { projects } from "../constants";
import { trackProjectFilter, trackProjectView } from "../utils/amplitude";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Smart categorization logic
  const projectCategories = useMemo(() => {
    const intermediate = projects.filter((p) => p.category === "intermediate");
    const learning = projects.filter((p) => p.category === "learning");

    return {
      all: projects,
      intermediate: intermediate,
      learning: learning,
      "high-value": projects.filter((p) => p.value === "high"),
    };
  }, []);

  const filteredProjects = projectCategories[activeFilter] || projects;

  const filterOptions = [
    {
      id: "all",
      label: "All Projects",
      count: projects.length,
      description: "Complete portfolio showcase",
    },
    {
      id: "high-value",
      label: "High-Value",
      count: projectCategories["high-value"].length,
      description: "Client-ready projects",
      premium: true,
    },
    {
      id: "intermediate",
      label: "Intermediate",
      count: projectCategories.intermediate.length,
      description: "Feature-rich applications",
    },
    {
      id: "learning",
      label: "Learning",
      count: projectCategories.learning.length,
      description: "Skill development projects",
    },
  ];

  return (
    <div
      id="projects"
      className="container-big relative pt-8 md:pt-14 flex flex-col gap-14">
      <Title text={"Projects"} />

      {/* Smart Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap gap-3 justify-center mb-8 z-30 relative">
        {filterOptions.map((filter) => (
          <motion.button
            key={filter.id}
            onClick={() => {
              setActiveFilter(filter.id);
              trackProjectFilter(filter.label);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 backdrop-blur-md ${
              activeFilter === filter.id
                ? filter.premium
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-400/50 shadow-lg shadow-blue-500/25"
                  : "bg-white/20 border-white/40 shadow-lg"
                : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30"
            }`}>
            <div className="flex items-center gap-2">
              {filter.premium && (
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              )}
              <span
                className={`font-semibold text-sm ${
                  activeFilter === filter.id ? "text-white" : "text-white/80"
                }`}>
                {filter.label}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white/90"
                    : "bg-white/10 text-white/70"
                }`}>
                {filter.count}
              </span>
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
              <div className="bg-gray-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-gray-700/50">
                {filter.description}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 border-l border-t border-gray-700/50"></div>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Filter Results Info */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-6 z-30 relative">
        <p className="text-white/70 text-sm">
          {activeFilter === "all"
            ? `Showing all ${filteredProjects.length} projects`
            : activeFilter === "high-value"
            ? `${filteredProjects.length} high-value projects that demonstrate enterprise capabilities`
            : activeFilter === "intermediate"
            ? `${filteredProjects.length} feature-rich applications with modern tech stacks`
            : `${filteredProjects.length} projects from my learning journey`}
        </p>
      </motion.div>

      {/* Background Effects */}
      <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full opacity-90 absolute top-[250px] md:top-[164px] bg-gradient-experience-1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2 -z-[1]"></div>
      <div className="w-full h-full max-w-[394px] max-h-[560px] bg-gradient-experience-2 absolute top-[450px] -translate-x-1/2 left-1/2 opacity-100 blur-[150px] translate-y-2/3 lg:translate-y-1/3"></div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid max-w-[64rem] mx-auto grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center z-30">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* More Projects Badge */}
      <div className="flex justify-center mt-12 z-30 relative">
        <div className="group cursor-pointer">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
            </div>
            <span className="text-white font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
              More Projects Coming Soon
            </span>
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-white/60 group-hover:text-white group-hover:rotate-12 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
