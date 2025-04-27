import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@mui/material";

export const Testimonials = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      setIsPaused(true);
    }
  };

  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
      setIsPaused(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // We'll handle manually
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      }
    ]
  };

  const testimonials = [
    {
      title: "Modern Living Room Makeover",
      content:
        "Zapspace transformed our living room beautifully, adding elegant touches and maintaining a warm, cozy atmosphere that amazed us.",
      author: "Arjun & Meera, Trichy, Tamil Nadu",
    },
    {
      title: "Minimalist Bedroom Design",
      content:
        "I've always dreamed of a minimalist bedroom that feels peaceful yet stylish. Zapspace exceeded my expectations...",
      author: "Iqbal, Karaikudi",
    },
    {
      title: "Luxury Villa Interiors",
      content:
        "Designing a large home felt overwhelming at first, but Zapspace made the entire process smooth and truly enjoyable.",
      author: "Mr.Krishnan, Trichy, Tamil Nadu",
    },
    {
      title: "Office Space Interior",
      content:
        "We envisioned an office that showcased creativity and professionalism, and Zapspace perfectly brought that vision to life!",
      author: "Ravi Varun, Creative Director, Trichy",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-3xl sm:text-4xl mb-8">
          Client Testimonials
        </h1>
        <div className="mx-auto max-w-3xl mb-8 px-4 sm:px-6">
          <p className="text-gray-500 text-sm sm:text-base text-center">
            <strong>Note:</strong> For privacy reasons, we do not display clients'
            personal details on our website.
          </p>
        </div>
        <div className="px-2 sm:px-4">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onMouseEnter={handlePause}
                onMouseLeave={handlePlay}
                onTouchStart={handlePause}
                onTouchEnd={handlePlay}
              >
                <Card
                  className="!w-full !max-w-[400px] sm:!max-w-[500px] !min-h-[200px] !m-2 sm:!m-4 !p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md border border-gray-200 !flex !flex-col justify-content-between"
                >
                  <div className="flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                      {testimonial.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 italic mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-500">
                    — {testimonial.author}
                  </span>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
