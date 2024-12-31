import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks/useTheme';

export const About = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
          🌱A passionate individual dedicated to continuous learning and growth.🌱
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
           
           <p className="text-lg leading-relaxed mx-auto max-w-3xl text-center">
  🌟🌟🌟🌟<br />
  Welcome to my portfolio! I’m Papiya Nath Mazumdar, and I’m delighted to share my journey, passions, and work with you. 
  This space reflects my love for creativity and professionalism, showcasing my experiences, skills, and the projects that fuel my curiosity and growth. 
  Whether you’re here to explore my educational background, dive into my professional accomplishments, or simply get to know me better, 
  I hope you find something that resonates with you. 
  Feel free to reach out if you'd like to connect or collaborate. 
  Enjoy exploring!<br />
  🌟🌟🌟🌟
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/about1.jpg"
                alt="About Me 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
              <img
                src="/assets/about2.jpg"
                alt="About Me 2"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};