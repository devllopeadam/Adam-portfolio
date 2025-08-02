/* eslint-disable react/prop-types */
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import {
  CurrentDown,
  DevlinksVideo,
  LeftArrow,
  PlayVideo,
  RightArrow,
} from "../assets";

// Import E-Inventory logo and GymSpace logo
import EInventoryLogo from "../assets/images/icons/logo-Einventory-large.png";
import { GymSpaceLogo } from "../assets";
import Video from "./Video";

const Project = ({
  name,
  projectImages,
  description,
  technologies,
  links,
  video,
  isSpecial = false,
  category = "intermediate",
  value = "medium",
  complexity = "intermediate",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [toShow, setToShow] = useState(null);
  const [open, setOpen] = useState(false);
  const handleHover = (value) => setToShow(value);
  const scrollPrev = useCallback(() => {
    if (emblaApi && !prevBtnDisabled) emblaApi.scrollPrev();
  }, [emblaApi, prevBtnDisabled]);

  const scrollNext = useCallback(() => {
    if (emblaApi && !nextBtnDisabled) emblaApi.scrollNext();
  }, [emblaApi, nextBtnDisabled]);

  const updateButtonStates = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtonStates();
    emblaApi.on("select", updateButtonStates);
    emblaApi.on("reInit", updateButtonStates);
  }, [emblaApi, updateButtonStates]);

  return (
    <>
      <motion.div
        variants={{
          animate: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -70 },
        }}
        initial="hidden"
        whileInView={"animate"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative md:p-6 p-4 backdrop-blur-sm rounded-[20px] bg-white bg-opacity-20 border border-white border-opacity-40 flex flex-col gap-6 max-md:max-w-[455px]">
        
        {/* Project Value Badge */}
        {value === "high" && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/40 to-purple-600/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-400/30">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white">Enterprise</span>
            </div>
          </div>
        )}
        
        {complexity === "enterprise" && value === "high" && (
          <div className="absolute top-4 right-4 z-20">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 backdrop-blur-md rounded-full border border-emerald-400/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        {/* {video && (
          <motion.div
            variants={{
              animate: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -30 },
            }}
            initial="hidden"
            whileInView={"animate"}
            viewport={{ once: true }}
            onClick={() => setOpen(true)}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-md:hidden text-[12px] opacity-50 transition-all duration-200 absolute bg-white px-2 pl-10 py-2 rounded-lg top-6 -right-20 flex items-center gap-1 shadow-inner cursor-pointer">
            <img
              src={PlayVideo}
              className="w-3 h-3"
            />
            Watch Demo
          </motion.div>
        )} */}
        <div
          className="overflow-hidden relative"
          ref={emblaRef}>
          {isSpecial && (name === "E-Inventory" || name === "GymSpace") ? (
            // Special display for professional SaaS projects
            <div
              className={`min-w-full min-h-[300px] ${
                name === "E-Inventory"
                  ? "bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800"
                  : "bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-800"
              } rounded-xl flex flex-col items-center justify-center relative overflow-hidden group`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-white rounded-full"></div>
                <div className="absolute top-1/2 left-8 w-12 h-12 border border-white rounded-lg transform rotate-45"></div>
              </div>

              {/* Logo and Content */}
              <div className="relative z-10 text-center group-hover:scale-105 transition-transform duration-300">
                {name === "E-Inventory" ? (
                  <div className="w-48 h-18 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300 p-4">
                    <img
                      src={EInventoryLogo}
                      alt="E-Inventory Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  // GymSpace Logo
                  <div className="w-56 h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/25 group-hover:scale-110 transition-all duration-300 p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={GymSpaceLogo}
                        alt="GymSpace Logo"
                        className="w-12 h-12 rounded-xl"
                      />
                      <div className="flex flex-col items-start">
                        <h1 className="text-[25px] font-bold text-gray-800 leading-[1.1] text-nowrap">
                          Gym Space
                        </h1>
                        <p className="text-[11px] text-gray-600">
                          Gym Management Platform
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p
                  className={`${
                    name === "E-Inventory"
                      ? "text-blue-200"
                      : "text-emerald-200"
                  } text-lg mb-6 px-4 font-medium`}>
                  {name === "E-Inventory"
                    ? "Multi-Tenant SaaS Platform"
                    : "Enterprise Gym Management"}
                </p>

                {/* Features Pills - Smaller and more refined */}
                <div className="flex flex-wrap gap-2 justify-center mb-8 px-4">
                  {name === "E-Inventory"
                    ? [
                        "Inventory",
                        "Analytics",
                        "Multi-Tenant",
                        "Real-time",
                      ].map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-white/25 backdrop-blur-md rounded-full text-white text-sm border border-white/30 hover:bg-white/35 hover:border-white/50 hover:scale-105 transition-all duration-300 font-medium shadow-md">
                          {feature}
                        </span>
                      ))
                    : [
                        "Member Management",
                        "Scheduling",
                        "Billing",
                        "Analytics",
                        "Multi-Location",
                      ].map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-white/25 backdrop-blur-md rounded-full text-white text-sm border border-white/30 hover:bg-white/35 hover:border-white/50 hover:scale-105 transition-all duration-300 font-medium shadow-md">
                          {feature}
                        </span>
                      ))}
                </div>
              </div>

              {/* Contact Icon with Tooltip - Small and elegant */}
              <div className="absolute top-4 right-4 z-20 group/contact">
                <a
                  href="#contact"
                  className="relative">
                  <div
                    className={`w-12 h-12 ${
                      name === "E-Inventory"
                        ? "bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border-emerald-400/50 hover:from-emerald-500/60 hover:to-cyan-500/60 hover:border-emerald-400/80 hover:shadow-emerald-500/30"
                        : "bg-gradient-to-r from-blue-500/40 to-purple-500/40 border-blue-400/50 hover:from-blue-500/60 hover:to-purple-500/60 hover:border-blue-400/80 hover:shadow-blue-500/30"
                    } backdrop-blur-md rounded-full border-2 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer`}>
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div
                      className={`absolute -top-1 -right-1 w-4 h-4 ${
                        name === "E-Inventory"
                          ? "bg-emerald-400 shadow-emerald-400/50"
                          : "bg-blue-400 shadow-blue-400/50"
                      } rounded-full animate-pulse shadow-lg`}></div>
                  </div>

                  {/* Tooltip - Compact and professional */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-gray-900/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg border border-gray-700/50">
                      Demo Access
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-900/95 rotate-45 border-l border-t border-gray-700/50"></div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            // Regular display for other projects
            <div className="flex gap-5">
              {projectImages.map((img) => {
                return (
                  <div
                    key={img}
                    className="min-w-full min-h-full">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-full rounded-xl min-h-full"
                        loading="lazy"
                        src={img}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {video && (
            <motion.div
              variants={{
                animate: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -30 },
              }}
              initial="hidden"
              whileInView={"animate"}
              viewport={{ once: true }}
              onClick={() => setOpen(true)}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-md:hidden text-[12px] opacity-50 transition-all duration-200 absolute bg-black bg-opacity-80 rounded-full bottom-2 right-2 gap-1 shadow-lg cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
              <img
                src={PlayVideo}
                className="w-4 h-4"
              />
            </motion.div>
          )}
        </div>
        {!(isSpecial && (name === "E-Inventory" || name === "GymSpace")) && (
          <div className="-mt-11 flex items-center gap-4 justify-center relative z-10">
            <button
              onClick={scrollNext}
              className={`w-9 h-9 rounded-full backdrop-blur-sm bg-white border border-black border-opacity-10 shadow-lg flex items-center justify-center ${
                nextBtnDisabled ? "opacity-70" : ""
              }`}>
              <img
                src={RightArrow}
                className="w-[18px]"
              />
            </button>
            <button
              onClick={scrollPrev}
              className={`w-9 h-9 rounded-full backdrop-blur-sm bg-white border border-black border-opacity-10 shadow-lg flex items-center justify-center ${
                prevBtnDisabled ? "opacity-70" : ""
              }`}>
              <img
                src={LeftArrow}
                className="w-[18px]"
              />
            </button>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[20px] font-bold text-white">
              {name}
            </h3>
            {/* Category Badge */}
            <div className={`px-2 py-1 rounded-md text-xs font-medium ${
              category === "professional" 
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : category === "intermediate"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
            }`}>
              {category === "professional" ? "Professional" : 
              category === "intermediate" ? "Intermediate" : "Learning"}
            </div>
          </div>
          <p className="text-[#dfe5ecca] text-[14px] font-medium w-full">
            {description}
          </p>
          <hr className="border-white opacity-10 mt-3" />
        </div>
        <div className="flex lg:flex-row flex-col max-md:items-start gap-5">
          <p className="text-[20px] font-medium text-white">Technologies:</p>
          <div className="flex gap-4 flex-wrap">
            {technologies.map((technologie) => {
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
                      onClick={() => setOpen(true)}
                      className="boxProjet absolute text-[13px] font-medium px-2 py-[4px] flex justify-center items-center rounded-[4px] bg-white w-fit -top-[50px] text-nowrap cursor-pointer">
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
            {links.map((link) => {
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
      </motion.div>
      {video && (
        <Video
          videoSrc={DevlinksVideo}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
