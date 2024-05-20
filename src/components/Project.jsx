/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { CurrentDown } from "../assets";

const Project = ({ name, imgProjet, description, technologies, links }) => {
  const [toShow, setToShow] = useState(null);
  const handleHover = (value) => setToShow(value);

  return (
    <motion.div
      variants={{
        animate: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -70 },
      }}
      initial="hidden"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="md:p-6 p-4 backdrop-blur-sm rounded-[20px] bg-white bg-opacity-20 border border-white border-opacity-40 flex flex-col gap-6 max-md:max-w-[455px]">
      <div className="flex items-center justify-center">
        <img
          className="w-full rounded-xl"
          loading="lazy"
          src={imgProjet}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] font-bold text-white text-center">{name}</h1>
        <p className="text-[#dfe5ecca] text-[14px] font-medium w-full">
          {description}
        </p>
        <hr className="border-white opacity-10 mt-3" />
      </div>
      <div className="flex lg:flex-row flex-col max-md:items-start gap-5">
        <p className="text-[20px] font-medium text-white">Technologies:</p>
        <div className="flex gap-4">
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
  );
};

export default Project;
