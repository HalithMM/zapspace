import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from "framer-motion";
import LandinImg1 from "../assets/landing/img1.jpg";
import LandingImg2 from "../assets/landing/img2.jpg";
import LandingImg3 from "../assets/landing/img3.jpg";
 const LandingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const slides = [
    {
      src: LandinImg1,
      description: "Interior Design",
      heading: "CLASSY RENOVATION",
       
    },
    {
      src: LandingImg2,
      description: "Elegant Design",
      heading: "MODERN HIGH-TECH",
       
    },
    {
      src:  LandingImg3,
      heading: "VISUALIZATION",
      description: "Design Project",
       
    }
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    defaultAnimation: {
      duration: 1500
    }
  });

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="home" className="relative w-full h-screen max-h-[800px] overflow-hidden">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    ref={sliderRef}
    className="keen-slider h-full"
  >
    {slides.map((slide, index) => (
      <div key={index} className="keen-slider__slide relative h-full w-full">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={slide.src} 
          alt={slide.heading}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading={index === 0 ? 'eager' : 'lazy'}
        /> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 text-white"
        >
          <div className="max-w-3xl space-y-6 transform transition-all duration-1000">
            <span className="inline-block text-md sm:text-xl font-medium tracking-widest text-amber-400">
              {slide.description}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight">
              {slide.heading}
            </h1> 
          </div>
        </motion.div>
      </div>
    ))}
  </motion.div>
</section>

  );


};

export default LandingScreen
