import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../../hooks/useTheme';
import { TestimonialCard } from './TestimonialCard';
import { Testimonial } from '../../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya",
    role: "Friend",
    content: " ❝ As an M.Pharm student, Papiya has demonstrated remarkable analytical skills and an in-depth understanding of pharmaceutical sciences. Her commitment to learning and research is exceptional.❞ ",
    imageUrl: "/assets/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Priyanka Nath Mazumdar",
    role: "Sister",
    content: " ❝Papiya is a dedicated and passionate individual who approaches every challenge with determination and enthusiasm. Her drive to excel in both academics and personal growth is truly inspiring.❞ ",
    imageUrl: "/assets/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Anmol",
    role: "Colleague",
    content: "❝Papiya is not just a hard-working student; she's also a wonderful friend who is always there to lend a helping hand. Her kindness and support make her a joy to be around.❞",
    imageUrl: "/assets/testimonial3.jpg"
  },
  {
    id: 4,
    name: "Shivam",
    role: "Classmate",
    content: "❝In her professional studies, Papiya has consistently shown a high level of professionalism and dedication. Her ability to balance academic pressures with a positive attitude is commendable❞",
    imageUrl: "/assets/testimonial4.jpg"
  },
  {
    id: 5,
    name: "Nibedita",
    role: "colleague",
    content: "❝Papiya is an incredibly organized and driven individual. Her focus on achieving academic excellence, paired with her ability to collaborate effectively, makes her a valuable team member.❞",
    imageUrl: "/assets/testimonial5.jpg"
  },
  {
    id: 6,
    name: "Debosmita",
    role: "Friend",
    content: "❝As a person, Papiya brings warmth and positivity to every room she enters. Her infectious enthusiasm for learning and personal growth has made her a role model for her peers❞",
    imageUrl: "/assets/testimonial6.jpg"
  },
  // Add more testimonials here
];

export const Testimonials = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const [isExpanded, setIsExpanded] = useState(false);

  const startIndex = currentIndex * testimonialsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-20 ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-yellow-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">✨Testimonials✨</h2>
          <p className="text-lg opacity-90">What people say about me</p>
        </motion.div>

        {/* Visible Testimonials (Mobile and Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>

        {/* Expanded Testimonials (Desktop view shows two columns) */}
        {isExpanded && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.slice(visibleTestimonials.length, visibleTestimonials.length + 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};





