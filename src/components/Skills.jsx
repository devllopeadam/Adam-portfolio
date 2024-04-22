import { GradientButton, Title } from ".";
import { skills } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  const feedAnimation = {
    intial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div id="skills">
      <div className="px-6 mx-auto max-w-[950px] flex flex-col gap-14 relative">
        <Title text={"Skills"} />
        <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full opacity-90 absolute top-[220px] md:top-[160%] bg-gradient-experience-1 blur-[150px] -translate-y-1/4 -translate-x-1/2 left-1/2 -z-[1]"></div>
        <div className="flex justify-center items-center gap-6 max-md:gap-4 flex-wrap mt-10">
          {skills.map((skill, index) => {
            return (
              <motion.a
                href={skill.href}
                target="_blank"
                variants={feedAnimation}
                initial="intial"
                whileInView={"animate"}
                viewport={{ once: true }}
                custom={index}
                className="p-4 backdrop-blur-sm rounded-[10px] bg-white bg-opacity-20 border border-white border-opacity-40
                flex md:gap-4 gap-3 items-center"
                key={skill.skill}>
                <div className="flex items-center">
                  <img
                    className="md:max-w-10 max-w-8"
                    loading="lazy"
                    src={skill.imgSkill}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[17px] leading-none text-white font-medium">
                    {skill.skill}
                  </p>
                  <p className="text-white text-opacity-50 mt-1">
                    {skill.level}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
        <GradientButton
          text={"Check out my Github"}
          link={"https://github.com/devllopeadam"}
        />
      </div>
    </div>
  );
};

export default Skills;
