import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ duration = 2000 }) => {
  const [textVisible, setTextVisible] = useState(true);
  const fadeOutTime = duration * 0.8; // Earlier fade out for smoother transition

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setTextVisible(false);
    }, fadeOutTime);
    return () => clearTimeout(fadeOutTimer);
  }, [duration, fadeOutTime]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Premium Text Animation */}
      <motion.div
        className="relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: textVisible ? 0 : -20,
          opacity: textVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.6, 0.01, -0.05, 0.9],
          opacity: { duration: 0.4 }
        }}
      >
        <h1 className="text-transparent bg-clip-text bg-white text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 relative">
          <motion.span
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 1.2,
              ease: [0.6, 0.01, -0.05, 0.9]
            }}
          >
            ZAPSPACE 
          </motion.span> 
        </h1>
      </motion.div>

      {/* Premium Loading Bar */}
      <div className="w-64 md:w-80 mt-12 relative">
        <motion.div
          className="h-2 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: duration/1000, 
              ease: [0.6, 0.01, -0.05, 0.9]
            }}
          >
            <motion.div 
              className="absolute right-0 top-0 h-full w-1 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.2
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Percentage Counter */}
        {/* <motion.div 
          className="absolute -bottom-6 right-0 text-xs text-gray-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.span
            initial={{ number: 0 }}
            animate={{ number: 100 }}
            transition={{ 
              duration: duration/1000,
              ease: 'linear'
            }}
          >
            {({ number }) => (
              <span>{Math.round(number)}%</span>
            )}
          </motion.span>
        </motion.div> */}
      </div>

      {/* Subtle Particles Animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 5 + 1,
              height: Math.random() * 5 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0, Math.random() * 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}; 