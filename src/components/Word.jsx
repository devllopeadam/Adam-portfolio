/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  transform,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Cursor from "./Cursor";

const words = [
  { label: "I'm" },
  { label: "front-end", type: "gradient" },
  { label: "developer" },
  { label: "driven" },
  { label: "by" },
  { label: "a" },
  { label: "passion" },
  { label: "for" },
  { label: "creating" },
  { label: "beautiful" },
  { label: "and" },
  { label: "innovative" },
  { label: "user" },
  { label: "interfaces." },
];

const Word = () => {
  const element = useRef(null);
  const isInView = useInView(element);
  const { scrollY } = useScroll();

  const [inView, setInView] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [visibility, setVisibility] = useState(true);
  // for the custom cursor

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isInView && latest > 2200 && latest < 2700) {
      setInView(true);
    } else {
      setInView(false);
    }
  });
  //  to remove

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start start"],
  });

  return (
    <motion.p
      onMouseEnter={() => setCursorVariant("text")}
      onMouseLeave={() => setCursorVariant("default")}
      ref={element}
      className="lg:text-[78px] max-md:max-w-[550px] mx-auto max-lg:max-w-[650px] md:text-[40px] text-[40px] font-semibold mt-6 flex max-md:gap-2 flex-wrap items-center justify-center relative">
      <p className="md:block hidden text-[90px] absolute -left-[40px] top-[100px]">
        🎉
      </p>
      <p className="md:block hidden text-[90px] absolute -right-[30px] bottom-[60px] rotate-[275deg]">
        🎉
      </p>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Span
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            type={word.type}>
            {word.label}
          </Span>
        );
      })}
    </motion.p>
  );
};

const Span = ({ children, range, progress, type }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const [statut, setStatut] = useState(true);

  return (
    <span className="md:mt-[12px] md:mr-[12px] relative">
      <span className="absolute opacity-10 text-[#b7b7b7]">{children}</span>
      <motion.span
        className={`opacity-10 transition-all duration-[800ms] delay-500 
        ${
          !type ? "text-transparent bg-clip-text bg-white-gradient" : "subtitle"
        }`}
        style={
          statut
            ? {
                opacity: 1,
              }
            : {
                opacity: opacity,
              }
        }>
        {children}
      </motion.span>
    </span>
  );
};

export default Word;
