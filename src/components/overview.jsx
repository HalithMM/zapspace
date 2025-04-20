import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import overview from "../assets/sliders/service.jpg";
export const Overview = () => {
  const [count, setCount] = useState(0);
  const [expCount, setExpCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const totalProjects = 700;
  const totalExperience = 25;
  const animationDuration = 2000; // ms
  const steps = 50;

  const animateCounter = useCallback((target, setter) => {
    let current = 0;
    const increment = target / steps;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setter(Math.floor(current));
    }, animationDuration / steps);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      animateCounter(totalProjects, setCount);
      animateCounter(totalExperience, setExpCount);
    }
  }, [inView, animateCounter, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <motion.div className="w-full lg:w-1/2 space-y-8" variants={itemVariants}>
          <div className="space-y-4">
            <motion.span 
              className="inline-block text-sm md:text-base font-medium tracking-widest text-amber-500 uppercase"
              variants={itemVariants}
            >
              WHAT WE OFFER
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Full Package of Design Services
            </motion.h2>
            <motion.h3 
              className="text-lg md:text-xl text-gray-600"
              variants={itemVariants}
            >
              From Design-Project to Accessories Selection
            </motion.h3>
          </div>

          <motion.p 
            className="text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Interior Agency provides its clients with the most full list of design services, starting from creating a design-project and its 3D visualization to selecting exclusive accessories right for your interior. 
            Our award-winning designers offer the most exquisite decisions and create really unique spaces either in apartments or offices.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-8 md:gap-12 pt-4"
            variants={itemVariants}
          >
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-bold text-amber-500">
                {count}+
              </span>
              <span className="text-gray-700 font-medium">
                Projects Completed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-bold text-amber-500">
                {expCount}+
              </span>
              <span className="text-gray-700 font-medium">
                Years in Industry
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 relative"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl aspect-video">
            <motion.img 
              className="w-full h-full object-cover"
              src={overview} 
              alt="Design services showcase"
              loading="lazy"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};