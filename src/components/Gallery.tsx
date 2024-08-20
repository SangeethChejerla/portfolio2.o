import type { ImageData } from '@/types/index';
import { motion } from 'framer-motion';
import React from 'react';
interface GalleryProps {
  images: ImageData[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {images.map((image) => (
        <a key={image.id} href={`/gallery/image/${image.id}`}>
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full aspect-square object-cover transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>
      ))}
    </div>
  );
};
