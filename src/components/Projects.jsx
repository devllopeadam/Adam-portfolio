/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Project, Title } from ".";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container-big relative pt-8 md:pt-14 flex flex-col gap-14">
      <Title text={"Projects"} />
      <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full opacity-90 absolute top-[250px] md:top-[164px] bg-gradient-experience-1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2 -z-[1]"></div>
      <div className="w-full h-full max-w-[394px] max-h-[560px] bg-gradient-experience-2 absolute top-[450px] -translate-x-1/2 left-1/2 opacity-100 blur-[150px] translate-y-2/3 lg:translate-y-1/3"></div>
      <div className="grid max-w-[64rem] mx-auto grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center z-30">
        {projects.map((project) => {
          return (
            <Project
              key={project.name}
              {...project}
            />
          );
        })}
      </div>

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
