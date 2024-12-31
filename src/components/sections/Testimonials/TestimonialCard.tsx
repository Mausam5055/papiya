import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../../types';
import { Quote } from 'lucide-react';

interface Props {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<Props> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <motion.div
        className="h-full p-8 rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4"
        >
          <Quote size={80} className="text-yellow-300" />
        </motion.div>

        <div className="relative">
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-yellow-200"
            >
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-bold text-lg text-gray-900"
              >
                {testimonial.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-yellow-600"
              >
                {testimonial.role}
              </motion.p>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed relative z-10"
          >
            {testimonial.content}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
