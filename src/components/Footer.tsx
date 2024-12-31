import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/papiya-nath-mazumdar-246948256/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/peace_pearlz/', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Send, href: 'https://t.me/yourusername', label: 'Telegram' },
  ];

  return (
    <footer className="py-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white hover:bg-yellow-100 transition-colors shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-700" />
              </motion.a>
            ))}
          </motion.div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Papiya Nath Mazumdar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};