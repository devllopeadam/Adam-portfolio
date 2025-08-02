import { motion } from "framer-motion";
import { Title } from ".";

const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "Web App Development",
      description: "Modern React & Next.js applications with responsive design and optimal performance",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: "📊",
      title: "Admin Dashboards & Back Offices",
      description: "Custom admin panels with data visualization, user management, and real-time updates",
      technologies: ["React", "Charts.js", "Material-UI", "Firebase"]
    },
    {
      icon: "🔗",
      title: "API Integrations",
      description: "Seamless third-party API integrations and custom backend development",
      technologies: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      icon: "🔐",
      title: "Auth & RBAC Systems",
      description: "Secure authentication and role-based access control for your applications",
      technologies: ["NextAuth", "Firebase Auth", "JWT", "OAuth"]
    },
    {
      icon: "💡",
      title: "Freelance Consulting",
      description: "Technical consulting for short-term missions and project architecture planning",
      technologies: ["Code Review", "Architecture", "Best Practices", "Performance"]
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Speed up your existing applications with code optimization and best practices",
      technologies: ["Lighthouse", "Core Web Vitals", "SEO", "Optimization"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div
      id="services"
      className="w-full max-md:px-5 max-w-6xl mx-auto pt-36 pb-24 text-center relative">
      <Title text={"Services I Offer"} />
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[18px] text-[#dfe5ec] mt-6 max-w-[650px] mx-auto leading-relaxed mb-12">
        From concept to deployment, I provide end-to-end web development services 
        that help businesses establish their digital presence and achieve their goals.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-[#dfe5ec] text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {service.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-md backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 p-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to bring your project to life?
        </h3>
        <p className="text-[#dfe5ec] mb-6 max-w-[500px] mx-auto">
          Let&apos;s discuss your requirements and create a solution that fits your needs and budget.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Request a Quote
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
