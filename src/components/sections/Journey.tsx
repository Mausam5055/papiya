import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks/useTheme';
import { Journey as JourneyType } from '../../types';

const journeyData: JourneyType[] = [
  {
    id: 1,
    year: "🚩Cureent",
    title: "Path towards....",
    description: "Aspiring Regulatory Affairs Specialist: Navigating Compliance and Innovation"
  },
  {
    id: 2,
    year: "🚩03/09/2024",
    title: "AI And Front End ",
    description: "Achieved significant professional growth and recognition"
  },
  {
    id: 3,
    year: "🚩01/07/2023",
    title: " Nature’s Touch for Radiant Skin",
    description: "developed this herbal mask sheet to combine natural ingredients with modern skincare for healthy, radiant skin."
  },
  {
    id: 4,
    year: "🚩06/06/2022",
    title: "Project On HPLC",
    description: "A study on High-Performance Liquid Chromatography (HPLC) for separating and analyzing compounds."
  },
  {
    id: 5,
    year: "🚩01/06/2022",
    title: "Advanced Diploma In Computer Applications",
    description: "Successfully completed a comprehensive program in computer applications."
  },
  {
    id: 6,
    year: "🚩01/08/2000",
    title: "The Beginning",
    description: "The beginning of my journey, marking the first chapter of my life and the foundation of all that follows"
  },
  // Add more journey items
];

export const Journey = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="journey"
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
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg opacity-90">The path that led me here</p>

        

        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

          {journeyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex ${index % 2 === 0 ? 'justify-end' : ''} mb-8`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className={`p-6 rounded-lg shadow-lg ${
                  theme === 'dark' ? 'bg-blue-800' : 'bg-white'
                }`}>
                  <span className="text-sm font-bold opacity-75">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};