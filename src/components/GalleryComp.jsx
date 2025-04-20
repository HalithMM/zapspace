import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const GalleryComp = ({ kitchen }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid auto-rows-[220px] sm:auto-rows-[250px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4"
    >
      {kitchen.map((img, index) => (
        <motion.div
          key={index}
          variants={item}
          className={`relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 ${
            index % 5 === 0 ? 'row-span-2' : ''
          }`}
        >
          <img
            src={img}
            alt={`Design ${index + 1}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-start p-4">
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GalleryComp;
