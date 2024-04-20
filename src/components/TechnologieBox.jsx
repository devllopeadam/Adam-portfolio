/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const TechnologieBox = ({ srcImg, positionStyle }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => clearTimeout(id);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className={`techno-box max-xl:hidden select-none flex items-center justify-center rounded-xl p-[11px] absolute w-[68px] h-[68px] bg-[#2c3237] ${positionStyle} ${
        active ? "animateBox" : ""
      }`}>
      <img
        className="max-w-full select-none"
        src={srcImg}
      />
    </motion.div>
  );
};

export default TechnologieBox;
