/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Title, Word } from ".";

const About = () => {
  const achievements = [
    {
      number: "15+",
      label: "Successful Projects",
      description: "Delivered on time and within budget",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Every client would hire me again",
    },
    {
      number: "2+",
      label: "Years Experience",
      description: "In modern web development",
    },
    {
      number: "24h",
      label: "Response Time",
      description: "Quick communication guaranteed",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "I listen to your needs, understand your business goals, and create a clear roadmap for success.",
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "Clean code, modern design, and best practices ensure your project is built for the long term.",
    },
    {
      step: "03",
      title: "Testing & Launch",
      description:
        "Thorough testing across devices and browsers, then a smooth deployment with ongoing support.",
    },
  ];

  return (
    <div
      id="about"
      className="w-full max-md:px-5 max-w-6xl mx-auto pt-36 pb-24 text-center relative">
      <Title text={"Why Choose Me"} />
      <Word />

      {/* Client-focused bio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 max-w-4xl mx-auto">
        <p className="text-[18px] text-[#dfe5ec] leading-relaxed mb-8">
          I&apos;m Adam, a Full-Stack Developer based in Morocco, specializing
          in React and Next.js applications. I partner with businesses to
          transform their digital presence through modern web solutions that
          drive results and deliver exceptional user experiences.
        </p>
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {achievement.number}
            </div>
            <div className="text-sm font-medium text-white/90 mb-1">
              {achievement.label}
            </div>
            <div className="text-xs text-[#dfe5ec] opacity-80">
              {achievement.description}
            </div>
          </div>
        ))}
      </motion.div>

      {/* My Approach */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16">
        <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
        <p className="text-[#dfe5ec] mb-8 max-w-2xl mx-auto">
          Every project is unique, but my process remains consistent: clear
          communication, quality delivery, and a focus on your business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {approach.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-left p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-[#dfe5ec] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
