/* eslint-disable no-unused-vars */
import { useInView } from "framer-motion";
import { Cursor, Title, Word } from ".";
import { useEffect, useRef, useState } from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-md:px-5 max-w-5xl mx-auto pt-36 pb-24 text-center relative">
      <Title text={"About Me"} />
      <Word />
    </div>
  );
};

export default About;
