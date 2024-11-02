/* eslint-disable no-unused-vars */
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { links, linksMobile } from "../constants";
import ContactButton from "./ContactButton";
import { ArrowBottom, CloseRound, Logo, Menu } from "../assets";
import { useEffect, useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [active, setActive] = useState("");
  const [show, setShow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showIsScroll, setShowIsScroll] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    previous < latest && latest > 50 ? setHidden(true) : setHidden(false);
    if (latest > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  });

  return (
    <>
      <motion.div
        className={`nav fixed w-full max-lg:translate-y-0 z-[100] ${
          showIsScroll && "md:bg-[#090f16] nav-scroll  translate-y-0"
        } ${isScrolling && "bg-[#090f16] pt-5 -top-5 scroll-large"}`}
        variants={{
          hidden: { y: "-100%" },
          visible: isScrolling ? { y: 20 } : { y: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}>
        <div className="container-sm">
          <div
            className={`flex justify-between items-center text-white py-4 h-[83px] relative z-20 ${
              isScrolling
                ? "nav md:backdrop-blur md:bg-[#22272f] md:px-10 md:rounded-full md:py-2 md:h-[70px] max-md:-mt-5"
                : ""
            }`}>
            <a
              href="#home"
              onClick={() => setActive("")}
              className="logo cursor-pointer flex items-center gap-3 relative">
              <img
                src={Logo}
                className="logo w-7"
              />
              <motion.div className="w-full gradient-btn"></motion.div>
              <h1 className="text-[17px] font-medium">Adam.Dev</h1>
            </a>
            <div className="sections lg:flex gap-8 items-center hidden">
              {links.map((link) => {
                return (
                  <a
                    onClick={() => setActive(link.label)}
                    className={`text-[16.5px] duration-300 font-normal ${
                      active === link.label
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    key={link.label}
                    href={link.href}>
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="contact max-lg:hidden">
              <ContactButton />
            </div>
            <div
              className="max-lg:flex items-center justify-center border-[#2c3237] hidden py-[5px] px-1 rounded-[5px]"
              onClick={() => {
                setIsScrolling(!isScrolling);
                setShowIsScroll(!showIsScroll);
                setShow(!show);
              }}>
              <img
                className="w-6 lg:hidden"
                src={show ? CloseRound : Menu}
              />
            </div>
          </div>
        </div>
        {show && (
          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            className="absolute backdrop-blur bg-[#090f16ba] z-[100] full-h w-screen top-[100%] left-0 px-6 py-8 text-white flex flex-col gap-8 items-center justify-start pt-32 lg:hidden">
            {linksMobile.map((link) => {
              return (
                <a
                  onClick={() => {
                    setShow(false);
                    setIsScrolling(!isScrolling);
                    setShowIsScroll(!showIsScroll);
                    setActive(link.label);
                  }}
                  className={`group text-[30px] duration-300 font-medium relative flex items-start gap-3 ${
                    active === link.label
                      ? "opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  key={link.label}
                  href={link.href}>
                  {link.label}
                  <div className="flex items-center justify-center mt-[17px]">
                    <img
                      className="w-5"
                      src={ArrowBottom}
                    />
                  </div>
                </a>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Header;
