import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../../../types';
import { useTheme } from '../../../hooks/useTheme';

interface Props {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: Props) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }} // Adjusted duration and easing
      className={`rounded-lg overflow-hidden shadow-lg ${
        theme === 'dark' ? 'bg-blue-800' : 'bg-white'
      }`}
    >
      <div className="relative h-48">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <time className="text-white text-sm">{post.date}</time>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className={`text-sm opacity-90 ${expanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
          {post.content}
        </p>
        <button
          onClick={handleToggle}
          className="mt-4 text-sm font-medium text-blue-500 hover:underline"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.article>
  );
};

