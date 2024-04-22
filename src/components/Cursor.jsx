import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mousePosition]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="cursor w-8 h-8 rounded-full bg-[#b4b3f8] fixed top-0 left-0 pointer-events-none"
    />
  );
};

export default Cursor;
