/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const TechnologieBox = ({ srcImg, className, overlay }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={`select-none ${overlay ? "bg-black opacity-40" : ""}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className={`techno-box max-xl:hidden select-none flex items-center justify-center rounded-xl p-[11px] absolute w-[68px] h-[68px] bg-[#2c3237] ${
          active ? "animateBox" : ""
        } ${className}`}>
        <img
          className="select-none max-w-full w-[36px]"
          src={srcImg}
        />
      </motion.div>
    </div>
  );
};

export default TechnologieBox;
