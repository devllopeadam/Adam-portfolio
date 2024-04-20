/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Title = ({ text }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    isInView && controls.start("visible");
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0.5, x: -70 },
      }}
      transition={{ duration: 0.2, delay: 0.25 }}
      initial="hidden"
      animate={controls}
      className="text-white text-center relative z-20 text-2xl uppercase font-extrabold">
      <h1>{text}</h1>
    </motion.div>
  );
};

export default Title;
