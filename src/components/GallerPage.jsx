import React, { useState } from "react";
import kitchen1 from "../assets/kitchen/kitchen1.jpg";
import kitchen2 from "../assets/kitchen/kitchen2.jpg";
import kitchen3 from "../assets/kitchen/kitchen3.jpg";
import kitchen4 from "../assets/kitchen/kitchen4.jpg";
import kitchen5 from "../assets/kitchen/kitchen5.jpg";
import kitchen6 from "../assets/kitchen/kitchen6.jpg";
import kitchen7 from "../assets/kitchen/kitchen7.jpg";
import kitchen8 from "../assets/kitchen/kitchen8.jpg";
import kitchen9 from "../assets/kitchen/kitchen9.jpg";
import kitchen10 from "../assets/kitchen/kitchen10.jpg";
import GalleryComp from "./GalleryComp";
import BannerImg2 from "../assets/Banners/project banner.png";
import living1 from "../assets/living/living1.jpg";
import living2 from "../assets/living/living2.png";
import living3 from "../assets/living/living3.png";
import living4 from "../assets/living/living4.png";
import living5 from "../assets/living/living5.jpg";
import living6 from "../assets/living/living6.jpg";
import living7 from "../assets/living/living7.jpg";
import living8 from "../assets/living/living8.jpg";
import living9 from "../assets/living/living9.jpg";
import living10 from "../assets/living/living10.jpg";

import bedroom1 from "../assets/bedroom/bedroom1.jpg";
import bedroom2 from "../assets/bedroom/bedroom2.jpg";
import bedroom3 from "../assets/bedroom/bedroom3.jpg";
import bedroom4 from "../assets/bedroom/bedroom4.jpg";
import bedroom5 from "../assets/bedroom/bedroom5.jpg";
import bedroom6 from "../assets/bedroom/bedroom6.jpg";
import bedroom7 from "../assets/bedroom/bedroom7.jpg";
import bedroom8 from "../assets/bedroom/bedroom8.jpg";
import bedroom9 from "../assets/bedroom/bedroom9.jpg";
import bedroom10 from "../assets/bedroom/bedroom10.jpg";
import bedroompic from "../assets/bedroom/bedroom.jpg"; 
import { motion } from "framer-motion";
const GallerPage = () => {
  const kitchen = [
    kitchen1,
    kitchen2,
    kitchen3,
    kitchen4,
    kitchen5,
    kitchen6,
    kitchen7,
    kitchen8,
    kitchen9,
    kitchen10,
  ];
  const living = [
    living1,
    living2,
    living3,
    living4,
    living5,
    living6,
    living7,
    living8,
    living9,
    living10,
  ];
  const bedroom = [
    bedroom1,
    bedroom2,
    bedroom3,
    bedroom4,
    bedroom5,
    bedroom6,
    bedroom7,
    bedroom8,
    bedroom9,
    bedroom10,
  ]; 
  return (
    <div className="mx-auto text-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] relative mb-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerImg2})` }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-3xl sm:text-4xl mt-5 md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            Our Signature Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed drop-shadow-sm">
            We're not here to <span className="text-yellow-300 font-semibold">replicate</span> the old.
            Each design reflects fresh ideas, bold creativity, and modern
            elegance. We don't follow trends —{" "}
            <span className="italic text-white">we set them.</span>
          </p>
        </div>
      </motion.div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
          Living Rooms
        </h3>
        <GalleryComp kitchen={living} />
      </div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
          Bedrooms
        </h3>
        <GalleryComp kitchen={bedroom} />
      </div>
      <div className="mb-16 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
          Kitchen Spaces
        </h3>
        <GalleryComp kitchen={kitchen} />
      </div> 
    </div>
  );
};

export default GallerPage;
