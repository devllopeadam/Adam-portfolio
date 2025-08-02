import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Framer,
  Grid,
  Javascript,
  NextJs,
  React,
  Sass,
  Tailwind,
  Typescript,
  Vite,
} from "../assets";
import TechnologieBox from "./TechnologieBox";
import GradientButton from "./GradientButton";
import { trackButtonClick } from "../utils/amplitude";

const Hero = () => {
  const texts = ["An Extra", "A Creative", "An Amazing"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (count === 2) {
        setCount(0);
      } else {
        setCount((prev) => (prev + 1) % texts.length);
      }
    }, 4500);
    return () => clearInterval(id);
  }, [count, texts.length]);

  return (
    <div className="w-full max-lg:-z-[1] z-[10] relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl max-lg:px-7 pb-28 pt-16 grid grid-cols-1 gap-2 mx-auto text-center md:py-28">
        <motion.div
          key={texts[count]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center relative overflow-hidden h-[100px] max-md:h-[90px]">
          {texts.map((text, index) => (
            <motion.span
              key={index}
              className={`bg-clip-text text-transparent bg-white-gradient md:text-7xl text-[54px] font-[700] absolute h-[100px] duration-500 ${
                index === count ? "top-0 opacity-100" : "top-full opacity-0"
              }`}>
              {text}
            </motion.span>
          ))}
        </motion.div>
        <h1 className="subtitle md:text-7xl text-[54px] font-[700] -mt-[10px]">
          Full-Stack Developer
        </h1>
        <p className="text-[18px] text-[#dfe5ec] mt-6 max-w-[650px] mx-auto leading-relaxed">
          I build modern web applications for companies that need speed,
          reliability, and clean UI. Specializing in React, Next.js, and
          full-stack solutions that turn your ideas into working products with
          fast execution and clean code.
        </p>

        {/* Achievement Stats */}
        <div className="flex items-center justify-center gap-8 mt-8 mb-6 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm text-[#dfe5ec] opacity-80">
              Projects Delivered
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 max-sm:hidden"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-[#dfe5ec] opacity-80">
              Client Satisfaction
            </div>
          </div>
          <div className="w-px h-12 bg-white/20 max-sm:hidden"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2+</div>
            <div className="text-sm text-[#dfe5ec] opacity-80">
              Years Experience
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap max-w-[500px] mx-auto">
          <GradientButton
            text={"Let's Work Together"}
            link="#contact"
            onclick={() => trackButtonClick("Let's Work Together", "Hero")}
            variant="gradient"
          />
          <GradientButton
            text="Download CV"
            link="/adam-jeniah.pdf"
            onclick={() => trackButtonClick("Download CV", "Hero")}
            variant="outline"
          />
        </div>
      </motion.div>
      <img
        width="897"
        height="599"
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-[1]"
        src={Grid}
      />

      <TechnologieBox
        srcImg={Sass}
        overlay={false}
        className={`top-[15%] left-[17%]`}
      />
      <TechnologieBox
        srcImg={React}
        overlay={false}
        className={`top-[11%] right-[20%] `}
      />
      <TechnologieBox
        srcImg={Tailwind}
        overlay={false}
        className={`top-[70%] left-[15%] rounded-[5px]`}
      />
      <TechnologieBox
        srcImg={NextJs}
        overlay={false}
        className={`top-[55%] right-[15%]`}
      />
      <TechnologieBox
        srcImg={Typescript}
        overlay={true}
        className={
          "!w-[35px] !h-[35px] !rounded-md top-[28%] right-[8%] p-[7px] bg-blend-darken"
        }
      />
      <TechnologieBox
        srcImg={Vite}
        overlay={true}
        className={
          "!w-[30px] !h-[30px] !rounded-md top-[40%] left-[8%] p-[7px] bg-blend-darken"
        }
      />
      <TechnologieBox
        srcImg={Javascript}
        overlay={true}
        className={
          "!w-[37px] !h-[37px] !rounded-md top-[80%] left-[30%] p-[7px] bg-blend-darken"
        }
      />
      <TechnologieBox
        srcImg={Framer}
        overlay={true}
        className={
          "!w-[30px] !h-[30px] !rounded-md top-[80%] right-[30%] p-[7px] bg-blend-darken"
        }
      />
    </div>
  );
};

export default Hero;
