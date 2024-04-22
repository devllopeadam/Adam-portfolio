/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Anim = ({ children, className }) => {
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
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -70 },
      }}
      transition={{ duration: 0.5 }}
      initial="hidden"
      animate={controls}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Anim;
