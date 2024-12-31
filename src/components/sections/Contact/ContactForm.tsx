import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

export const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-blue-800 border-blue-700 text-white'
              : 'bg-white border-yellow-200'
          }`}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-blue-800 border-blue-700 text-white'
              : 'bg-white border-yellow-200'
          }`}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-blue-800 border-blue-700 text-white'
              : 'bg-white border-yellow-200'
          }`}
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 ${
          theme === 'dark'
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-yellow-400 hover:bg-yellow-500'
        }`}
      >
        <span>Send Message</span>
        <Send size={18} />
      </motion.button>
    </form>
  );
};