import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid, React, Sass, Tailwind, Vite } from "../assets";
import TechnologieBox from "./TechnologieBox";
import GradientButton from "./GradientButton";

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
  }, [count]);

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
          Frontend Developer
        </h1>
        <p className="text-[18px] text-[#dfe5ec] mt-6 max-w-[600px] mx-auto">
          {`Hi there! 👋 I'm Adam, a Frontend Developer based in Morocco,
          dedicated to crafting beautiful and functional web interfaces that
          elevate user experiences.`}
        </p>
        <a
          href="/public/Adam's-cv.pdf"
          download="adam Jeniah CV.pdf">
          <GradientButton
            text={"Check Out My CV"}
            otherProperties={"w-fit mx-auto mt-6"}
          />
        </a>
      </motion.div>
      <img
        width="897"
        height="599"
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-[1]"
        src={Grid}
      />

      <TechnologieBox
        srcImg={Sass}
        positionStyle={`top-[100px] left-[232px]`}
      />
      <TechnologieBox
        srcImg={React}
        positionStyle={`top-[50px] right-[300px] `}
      />
      <TechnologieBox
        srcImg={Tailwind}
        positionStyle={`top-[380px] left-[232px] rounded-[5px]`}
      />
      <TechnologieBox
        srcImg={Vite}
        positionStyle={`top-[300px] right-[232px]`}
      />
    </div>
  );
};

export default Hero;
