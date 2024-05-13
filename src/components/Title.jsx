/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Title = ({ text }) => {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -70 },
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-clip-text text-transparent bg-white-gradient text-center relative z-20 max-md:text-2xl text-lg uppercase font-extrabold">
      {text}
    </motion.div>
  );
};

export default Title;
