import React, { useMemo, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../assets/Imgaes/Livinghall.jpg";
import Img2 from "../assets/Imgaes/TvDecor.jpg";
import Img3 from "../assets/Imgaes/masterBedrrom.jpg";
import Img4 from "../assets/Imgaes/Bedroom.jpg";
import Img5 from "../assets/Imgaes/Dining.jpg";
import Img6 from "../assets/Imgaes/bathroom.jpg";
import bedroompic from "../assets/bedroom/bedroom.jpg" 
export const Project = () => {
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: isMobile ? 300 : 500,
      slidesToShow: isMobile ? 1 : 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      pauseOnHover: !isMobile,
      arrows: !isMobile,
      lazyLoad: "progressive",
      adaptiveHeight: isMobile,
      waitForAnimate: true,
      swipeToSlide: true,
      touchThreshold: 10,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    }),
    [isMobile]
  );

  const Images = useMemo(
    () => [
      { src: Img1, title: "Elegant Living Hall" },
      { src: Img2, title: "TV Wall Decor" },
      { src: Img3, title: "Luxury Master Bedroom" },
      { src: Img4, title: "Modern Guest Bedroom" },
      { src: Img5, title: "Contemporary Dining" },
      { src: Img6, title: "Spa-like Bathroom" },
    ],
    []
  );

  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Recent Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Highlights from our client collaborations -- Mr.Krishnan, Trichy, Tamil Nadu 
            </p>
          </div>

          <div className="relative px-2 sm:px-0">
            <Slider {...settings}>
              {Images.map((item, index) => (
                <div key={index} className="px-2 focus:outline-none">
                  <div className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                      <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-200">
                        <h3 className="text-white text-lg sm:text-xl font-medium">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
