import type { ImageData } from '@/types/index';
import { motion } from 'framer-motion';
import React from 'react';

interface BlogPostProps {
  image: ImageData;
}

export const BlogPost: React.FC<BlogPostProps> = ({ image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
        <p className="text-lg">{image.description}</p>
      </motion.div>
    </div>
  );
};
