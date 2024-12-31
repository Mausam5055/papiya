import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../../hooks/useTheme';
import { GalleryItem } from './GalleryItem';
import { galleryItems, galleryCategories } from '../../../data/gallery';

export const Gallery = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);  // State to toggle between showing more or less items
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Show only the first 12 items initially, or more if "Show More" is clicked
  const itemsToDisplay = showMore ? filteredItems : filteredItems.slice(0, 7);

  return (
    <section
      id="gallery"
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
          <h2 className="text-4xl font-bold mb-4">🍃Gallery🍃</h2>
          <p className="text-lg opacity-90">A visual journey through my experiences</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-yellow-400 text-gray-900' : theme === 'dark' ? 'bg-blue-900 text-gray-300' : 'bg-yellow-50 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {itemsToDisplay.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

