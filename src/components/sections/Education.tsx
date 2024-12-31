import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../hooks/useTheme';
import { Education as EducationType } from '../../types';
import { Upload } from 'lucide-react';

const educationData: EducationType[] = [
  {
    id: 1,
    institution: "🎓Primrose English Medium School",
    degree: "Primary Education",
    year: "2003-2015",
    description: "💡Completed foundational education from KG 1 to Class 10, building core skills and knowledge across subjects, fostering personal growth and academic development.",
    imageUrl: "/assets/education1.jpg",
    driveLink: "https://drive.google.com/file/d/1-xovOdF5R_P3TkrAGMSjyBqrndkYu3Ik/view?usp=drive_link"
  },
  {
    id: 2,
    institution: "🎓Ramanuj Gupta Senior Secondary Education",
    degree: "Secondary Education",
    year: "2015-2017",
    description: "💡Focused on Physics, Chemistry, Biology/Mathematics, and advanced scientific concepts, developing analytical and problem-solving skills essential for future academic and professional pursuits.",
    imageUrl: "/assets/education2.jpg",
    driveLink: "https://drive.google.com/file/d/1-vzD9CQQDFbYehgnUM4wi-NWgyPyTO4o/view?usp=drive_link"
  },
  { id: 3,
    institution: "🎓Assam University",
    degree: "B.Pharm (Bachelor Of Pharmacy)",
    year: "2019-2023",
    description: "💡A program that focuses on drug development, formulation, and patient care, preparing students for careers in the pharmaceutical and healthcare industries.",
    imageUrl: "/assets/education3.jpg",
    driveLink: "https://drive.google.com/file/d/1-vXS7YPmcI4qINPXXJMq8C4HPNoYojYP/view?usp=drive_link"
    
  },
  { id: 4,
    institution: "🎓Chitkara university",
    degree: " M.Pharm (Master of Pharmacy)",
    year: "2024-2026",
    description: "💡An advanced program specializing in pharmaceutical sciences, research, and drug development, enhancing expertise for careers in healthcare, research, and the pharmaceutical industry.",
    imageUrl: "/assets/education4.jpg",
    driveLink: "https://drive.google.com/example"
    
  }
  // Add more education items here
];

export const Education = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 ${theme === 'dark' ? 'bg-blue-800 text-white' : 'bg-yellow-100 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg opacity-90">My academic journey and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                theme === 'dark' ? 'bg-blue-900' : 'bg-white'
              }`}
            >
              <div className="relative h-48">
                <img
                  src={edu.imageUrl}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
                {edu.driveLink && (
                  <a
                    href={edu.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                  >
                    <Upload className="w-6 h-6 text-blue-600" />
                  </a>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-sm opacity-75 mb-2">{edu.year}</p>
                <p className="font-medium mb-2">{edu.degree}</p>
                <p className="text-sm opacity-90">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};