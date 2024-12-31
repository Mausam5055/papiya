import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { Education } from '../../../types';
import { useTheme } from '../../../hooks/useTheme';

interface Props {
  education: Education;
  index: number;
}

export const EducationCard = ({ education, index }: Props) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        theme === 'dark' ? 'bg-blue-800' : 'bg-white'
      }`}
    >
      <div className="relative h-48">
        <img
          src={education.imageUrl}
          alt={education.institution}
          className="w-full h-full object-cover"
        />
        {education.driveLink && (
          <motion.a
            href={education.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
          >
            <Upload className="w-6 h-6 text-blue-600" />
          </motion.a>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{education.institution}</h3>
        <p className="text-sm opacity-75 mb-2">{education.year}</p>
        <p className="font-medium mb-2">{education.degree}</p>
        <p className="text-sm opacity-90">{education.description}</p>
      </div>
    </motion.div>
  );
};