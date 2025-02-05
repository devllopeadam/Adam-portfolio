import { motion } from "framer-motion";
import { FrontendMentor, Github, Linkedin, Logo } from "../assets";
const Footer = () => {
  return (
    <div className="container-sm py-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <a
            href="/"
            className="logo cursor-pointer flex items-center gap-3 relative text-white">
            <img
              src={Logo}
              className="logo w-7"
            />
            <motion.div className="w-full gradient-btn"></motion.div>
            <h1 className="text-[17px] font-medium">Adam.Dev</h1>
          </a>
          <p className="text-[#7A7F86] text-[15px] font-medium ">
            jeniahadam@gmail.com
          </p>
        </div>
        <p className="text-[#7A7F86] text-[15px] font-medium max-md:hidden">
          &copy; Adam 2024. All rights reserved
        </p>
        <div className="flex items-center gap-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adam-jeniah/">
            <img
              loading="lazy"
              className="max-w-7 max-h-7"
              src={Linkedin}
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/devllopeadam">
            <img
              loading="lazy"
              className="max-w-7 max-h-7"
              src={Github}
            />
          </a>
          <a
            target="_blank"
            href="https://www.frontendmentor.io/profile/devllopeadam">
            <img
              loading="lazy"
              className="max-w-7 max-h-7"
              src={FrontendMentor}
            />
          </a>
        </div>
      </div>
      <p className="text-[#7A7F86] text-[15px] mt-6 mx-auto text-center font-medium max-md:block hidden">
        &copy; Adam 2025. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
