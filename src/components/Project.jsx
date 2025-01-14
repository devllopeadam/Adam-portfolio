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
import Video from "./Video";

const Project = ({
  name,
  projectImages,
  description,
  technologies,
  links,
  video,
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
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold text-white text-center">
            {name}
          </h1>
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
