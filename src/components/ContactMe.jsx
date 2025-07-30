import { useState } from "react";
import { GradientButton, Title } from ".";
import { Grid } from "../assets";
import { contacts } from "../constants";
import { motion } from "framer-motion";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      id="contact"
      className="container-big mt-20 z-20 relative flex flex-col gap-5 pb-20">
      <Title text={"Contact Me"} />
      <div className="flex items-center justify-center">
        <h2 className="bg-clip-text text-transparent bg-white-gradient text-center text-[30px] md:text-[48px] font-extrabold">
          Ready to Collaborate?
        </h2>
        <span className="bg-transparent text-[30px] md:text-[55px] max-md:hidden">
          👋
        </span>
        <img
          width="897"
          height="599"
          className="absolute md:top-[-125px] xl:scale-125 md:max-w-full md:max-h-full left-1/2 -translate-x-1/2 -z-[1]"
          src={Grid}
        />
      </div>
      <div className="flex items-center lg:flex-row flex-col md:gap-10 gap-14 justify-evenly mt-10">
        {contacts.map((contact) => {
          return (
            <div
              key={contact.title}
              className="flex flex-col gap-2 items-center">
              <h3 className="bg-clip-text text-transparent bg-white-gradient text-center text-[30px] md:text-[45px] font-extrabold">
                {contact.title}
              </h3>
              <p className="text-[17px] text-white text-opacity-60 font-medium">
                {contact.subtitle}
              </p>
              {contact.type !== "copy" ? (
                <div className="mt-6">
                  <GradientButton
                    text={contact.buttonText}
                    link={contact.href}
                  />
                </div>
              ) : (
                <div className="mt-6">
                  <CopyToClipboard
                    text={contact.href}
                    onCopy={handleCopy}>
                    <div
                      className={`group relative z-50 bg-gradient py-3 px-8 text-black cursor-pointer text-base rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 flex items-center justify-center w-fit mx-auto`}>
                      {contact.buttonText}
                      <div className="bg-black bg-opacity-50 transition-all duration-200 opacity-0 group-hover:opacity-100 w-2/3 h-[8px] absolute -bottom-[10px] left-1/2 -z-1 -translate-x-1/2 blur-md"></div>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bg-white p-[5px] rounded-sm top-[-50px] text-[14px]">
                          Copied !
                        </motion.div>
                      )}
                    </div>
                  </CopyToClipboard>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMe;
