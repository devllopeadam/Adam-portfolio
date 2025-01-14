/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Close } from "../assets";

const Video = ({ videoSrc, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          tabIndex={0}
          className="fixed inset-0 !z-[100] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none">
              <img
                src={Close}
                className="w-7 h-7"
              />
            </button>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-auto">
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Video;
