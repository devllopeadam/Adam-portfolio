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
    </div>
  );
};

export default Projects;
