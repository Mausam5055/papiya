import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryItem as GalleryItemType } from '../../../types';

interface Props {
  item: GalleryItemType;
  index: number;
}

export const GalleryItem = ({ item, index }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.imageUrl}
        alt={item.description}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black/50 flex items-center justify-center p-4"
      >
        <p className="text-white text-center text-sm">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};