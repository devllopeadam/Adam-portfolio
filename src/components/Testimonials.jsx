/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "./Title";
import { testimonials } from "../constants";
import { trackTestimonialInteraction, trackButtonClick } from "../utils/amplitude";

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <Title text="Client Testimonials" />
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Meet some of my top clients who trusted me with their vision and achieved exceptional results. Join 50+ satisfied businesses worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              onMouseEnter={() => {
                setHoveredCard(testimonial.id);
                trackTestimonialInteraction(testimonial.name, 'hovered');
              }}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group transition-all duration-500 ${
                hoveredCard === testimonial.id ? "scale-105" : ""
              }`}>
              {/* Card Background */}
              <div className="relative backdrop-blur-sm rounded-2xl bg-white/10 border border-white/20 p-8 h-full overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Review Text */}
                <p className="text-white/90 text-base leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* Project Badge */}
                <div className="mb-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.gradient} bg-opacity-20 text-white border border-white/20`}>
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <img
                      src={testimonial.profileImage}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"
                    />
                    {/* Online Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {testimonial.position}
                    </p>

                    {/* Company Info */}
                    <div className="flex items-center gap-2 mt-1">
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        className="w-5 h-5 rounded object-cover"
                      />
                      <span className="text-white/60 text-xs">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackTestimonialInteraction(testimonial.name, 'linkedin_clicked')}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-colors duration-300 group/linkedin">
                    <svg
                      className="w-5 h-5 text-blue-400 group-hover/linkedin:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Ready to be my next success story?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Join these industry leaders and transform your business with professional web solutions that deliver real results
              </p>
              <a
                href="#contact"
                onClick={() => trackButtonClick("Start Your Project", "Testimonials")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Your Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
