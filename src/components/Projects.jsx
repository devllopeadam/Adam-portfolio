/* eslint-disable no-unused-vars */
import { projects } from "../constants";
import { motion } from "framer-motion";
import { Title, Anim } from ".";
import { useState } from "react";
import { CurrentDown } from "../assets";

const Projects = () => {
  const [toShow, setToShow] = useState(null);
  const handleHover = (value) => setToShow(value);
  return (
    <div
      id="projects"
      className="container-big relative pt-8 md:pt-14 flex flex-col gap-14">
      <Title text={"Projects"} />
      <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full opacity-90 absolute top-[220px] md:top-[164px] bg-gradient-experience-1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2 -z-[1]"></div>
      <div className="w-full h-full max-w-[394px] max-h-[560px] bg-gradient-experience-2 absolute top-[450px] -translate-x-1/2 left-1/2 opacity-100 blur-[150px] translate-y-2/3 lg:translate-y-1/3"></div>
      <div className="grid max-w-[64rem] mx-auto grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center z-30">
        {projects.map((project) => {
          if (project.type !== "single") {
            return (
              <Anim
                key={project.name}
                className="md:p-6 p-4 backdrop-blur-sm rounded-[20px] bg-white bg-opacity-20 border border-white border-opacity-40 flex flex-col gap-6 max-md:max-w-[455px]">
                <div className="flex items-center justify-center">
                  <img
                    className="w-full rounded-xl"
                    loading="lazy"
                    src={project.imgProjet}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[20px] font-bold text-white text-center">
                    {project.name}
                  </h1>
                  <p className="text-[#dfe5ecca] text-[14px] font-medium w-full">
                    {project.description}
                  </p>
                  <hr className="border-white opacity-10 mt-3" />
                </div>
                <div className="flex lg:flex-row flex-col max-md:items-start gap-5">
                  <p className="text-[20px] font-medium text-white">
                    Technologies:
                  </p>
                  <div className="flex gap-4">
                    {project.technologies.map((technologie) => {
                      return (
                        <div
                          key={technologie.name}
                          className="relative"
                          onMouseEnter={() => handleHover(technologie.id)}
                          onMouseLeave={() => handleHover(null)}>
                          <a
                            href={technologie.href}
                            target="_blank">
                            <img
                              key={technologie.name}
                              className="w-7 h-7 cursor-pointer"
                              src={technologie.img}
                            />
                          </a>
                          {toShow === technologie.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9, top: -35 }}
                              animate={{ opacity: 1, scale: 1, top: -45 }}
                              transition={{ duration: 0.2 }}
                              exit={{ opacity: 0, scale: 0, top: -35 }}
                              className="boxProjet absolute text-[13px] font-medium px-2 py-[4px] flex justify-center items-center rounded-[4px] bg-white w-fit -top-[50px] text-nowrap">
                              <img
                                src={CurrentDown}
                                className="absolute -bottom-[12px] w-6 h-6"
                              />
                              {technologie.name}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-7 ">
                  <p className="text-[20px] font-medium text-white">Links:</p>
                  <div className="flex gap-5">
                    {project.links.map((link) => {
                      return (
                        <div
                          key={link.name}
                          className="relative"
                          onMouseEnter={() => handleHover(link.href)}
                          onMouseLeave={() => handleHover(null)}>
                          <a
                            href={link.href}
                            target="_blank">
                            <img
                              key={link.name}
                              className="w-7 h-7 cursor-pointer"
                              src={link.img}
                            />
                          </a>
                          {toShow === link.href && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9, top: -35 }}
                              animate={{ opacity: 1, scale: 1, top: -45 }}
                              transition={{ duration: 0.2 }}
                              exit={{ opacity: 0, scale: 0, top: -35 }}
                              className="boxProjet absolute text-[13px] font-medium px-2 py-[4px] flex justify-center items-center rounded-[4px] bg-white w-fit -top-[50px] text-nowrap">
                              <img
                                src={CurrentDown}
                                className="absolute -bottom-[12px] w-6 h-6"
                              />
                              {link.name}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Anim>
            );
          } else {
            return (
              <Anim
                key={project.name}
                className="md:p-6 md:col-span-2 p-4 backdrop-blur-sm rounded-[20px] bg-white bg-opacity-20 border border-white border-opacity-40 flex md:flex-row flex-col gap-6 max-md:max-w-[455px]">
                <div className="flex items-center justify-center max-h-[270px]">
                  <img
                    className="w-full md:h-full md:max-w-[480px] rounded-xl"
                    loading="lazy"
                    src={project.imgProjet}
                  />
                </div>
                <div className="info flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold text-white">
                      {project.name}
                    </h1>
                    <p className="text-[#dfe5ecca] text-[14px] font-medium w-full">
                      {project.description}
                    </p>
                    <hr className="border-white opacity-10 mt-3" />
                  </div>
                  <div className="flex lg:flex-row flex-col max-md:items-start gap-5">
                    <p className="text-[20px] font-medium text-white">
                      Technologies:
                    </p>
                    <div className="flex gap-4">
                      {project.technologies.map((technologie) => {
                        return (
                          <div
                            key={technologie.name}
                            className="relative"
                            onMouseEnter={() => handleHover(technologie.id)}
                            onMouseLeave={() => handleHover(null)}>
                            <a
                              href={technologie.href}
                              target="_blank">
                              <img
                                key={technologie.name}
                                className="w-7 h-7 cursor-pointer"
                                src={technologie.img}
                              />
                            </a>
                            {toShow === technologie.id && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9, top: -35 }}
                                animate={{ opacity: 1, scale: 1, top: -45 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0, scale: 0, top: -35 }}
                                className="boxProjet absolute text-[13px] font-medium px-2 py-[4px] flex justify-center items-center rounded-[4px] bg-white w-fit -top-[50px] text-nowrap">
                                <img
                                  src={CurrentDown}
                                  className="absolute -bottom-[12px] w-6 h-6"
                                />
                                {technologie.name}
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-7 ">
                    <p className="text-[20px] font-medium text-white">Links:</p>
                    <div className="flex gap-5">
                      {project.links.map((link) => {
                        return (
                          <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => handleHover(link.href)}
                            onMouseLeave={() => handleHover(null)}>
                            <a
                              href={link.href}
                              target="_blank">
                              <img
                                key={link.name}
                                className="w-7 h-7 cursor-pointer"
                                src={link.img}
                              />
                            </a>
                            {toShow === link.href && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9, top: -35 }}
                                animate={{ opacity: 1, scale: 1, top: -45 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0, scale: 0, top: -35 }}
                                className="boxProjet absolute text-[13px] font-medium px-2 py-[4px] flex justify-center items-center rounded-[4px] bg-white w-fit -top-[50px] text-nowrap">
                                <img
                                  src={CurrentDown}
                                  className="absolute -bottom-[12px] w-6 h-6"
                                />
                                {link.name}
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Anim>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
