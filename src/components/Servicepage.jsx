import React, { useState } from "react";
import { motion } from "framer-motion";
import BannerImg2 from "../assets/Banners/Services(2).png";
import { HomeImg, OfficeImg } from "../components/images"; 
 
 

// Animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const hoverVariants = {
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    } 
  }
};

export const Servicepage = () => { 
  return (
    <div className=" space-y-12 overflow-x-hidden">
      {/* Hero Banner */}
      <motion.div
       initial={{ opacity: 0, scale: 0.9 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.8 }}
        className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] overflow-hidden relative"
      >
        <img
          src={BannerImg2}
          alt="Services"
          className="w-full h-full object-cover object-center rounded-b-3xl"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Transform Your Space With Us
          </motion.h1>
        </div> */}
      </motion.div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl font-extrabold border-b-4 border-yellow-400 inline-block pb-2 mb-6">
              Tailor-Made Interior Solutions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Zapspace, we don't believe in one-size-fits-all designs. We
              specialize in custom interior design solutions that are crafted around
              your space, style, and story. Whether it's a cozy home makeover or a
              functional office revamp, we design with precision, passion, and
              purpose.
            </p>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl sm:text-3xl font-bold border-b-4 border-yellow-400 pb-2 mb-8">
              Our Interior Design Services
            </h1>
          </motion.div>

          {/* Home Design Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h2 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-semibold mb-6 pl-2 border-l-4 border-yellow-400"
            >
              Home Interior Design
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
              {HomeImg.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                   
                  className="flex flex-col items-center text-center space-y-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-yellow-50 rounded-full mb-2">
                    <img
                      src={item.img}
                      alt={item.Description}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    {item.Description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commercial Design Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h2 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-semibold mb-6 pl-2 border-l-4 border-yellow-400"
            >
              Commercial Interior Design
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
              {OfficeImg.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                   
                  className="flex flex-col items-center text-center space-y-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-yellow-50 rounded-full mb-2">
                    <img
                      src={item.img}
                      alt={item.Description}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    {item.Description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gradient-to-r from-yellow-50 to-white p-6 sm:p-8 rounded-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
            Why Zapspace 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "✅ 700+ Successful Projects",
              "✅ 25+ Years of Experience",
              "✅ On-Time Delivery Guarantee",
              "✅ 100% Custom Designs",
              "✅ Trained Professionals",
              "✅ Free Consultation"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm"
              >
                <span className="text-yellow-500">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Location Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
            Interior Design Services Near You
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 leading-relaxed">
                We proudly serve <span className="font-semibold text-gray-800">Chennai, Trichy, Madurai, Coimbatore</span>, and surrounding areas across <span className="font-semibold text-gray-800">TamilNadu, Kerala and Karnataka</span>. At Zapspace, our mission is to bring world-class interior design solutions to every home and workspace in Tamil Nadu.</p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Whether you're renovating your ancestral home in <span className="font-semibold">Karaikudi</span>, modernizing your apartment in <span className="font-semibold">Chennai</span>, or building your dream office in <span className="font-semibold">Coimbatore</span>, we bring personalized design expertise tailored to your vision. We don't just design spaces—we transform lifestyles.
              </p>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                Every project we undertake is a collaboration, ensuring your interiors reflect your personality, purpose, and regional aesthetics. From concept to execution, Zapspace delivers excellence, creativity, and functionality.
              </p>
            </div>
          </div>
        </motion.section>
        
      </div>
    </div>
  );
};