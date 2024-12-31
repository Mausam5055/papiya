import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../../hooks/useTheme';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../../../data/blog';

export const Blog = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [visiblePosts, setVisiblePosts] = useState(6);  // Limit to 6 initially

  const handleViewMore = () => {
    setVisiblePosts((prev) => prev + 3);  // Show 3 more on each click
  };

  const hasMorePosts = visiblePosts < blogPosts.length;

  return (
    <section
      id="blog"
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
          <h2 className="text-4xl font-bold mb-4">🍂Blog🍂</h2>
          <p className="text-lg opacity-90">Sharing my thoughts and experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {hasMorePosts && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
