import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Livingroom from "../assets/sliders/LivingRoom.jpg";
import Bedroom from "../assets/sliders/Bedroom.jpg";
import Kitchen from "../assets/sliders/Kitchen.jpg";
import homeOffice from "../assets/sliders/HomeOffice.jpg";
import homeDecor from "../assets/sliders/HomeDecor.jpg";
export const Service = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "free-snap",
    drag: true,
    created(slider) {
      let timeout;
      const run = () => {
        timeout = setTimeout(() => {
          slider.next();
          run();
        }, 3000);
      };
      run();
    },
  });

  const serviceImages = [
    { images:  Livingroom, Title: "Living Room" },
    { images: Bedroom, Title: "Bed Room" },
    { images: Kitchen, Title: "Kitchen" },
    { images: homeOffice, Title: "Home Office" },
    { images: homeDecor, Title: "Home Decor" },
  ];

  return (
    <div id="services" className="w-full bg-black py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div ref={sliderRef} className="keen-slider md:w-1/2 w-full">
          {serviceImages.map((data, i) => (
            <div className="keen-slider__slide flex flex-col items-center" key={i}>
              <img
                src={data.images}
                alt={data.Title}
      
                className="w-full max-h-[400px] object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <h3 className="text-white text-lg sm:text-xl mt-3">{data.Title}</h3>
            </div>
          ))}
        </div>  
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="font-extrabold text-white text-4xl sm:text-6xl md:text-7xl leading-tight">
            WHAT YOU CAN MAKE <br />
            <span className="text-blue-300">With US.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
