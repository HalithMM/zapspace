import React from 'react';
import { motion } from 'framer-motion';
// import { Logo } from './Logo';

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      > 
      </motion.div>
      <motion.div
        className="mt-8 w-48 h-1 bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '12rem' }}
        transition={{ duration: 2, ease: 'linear' }}
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 0.2, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  );
};