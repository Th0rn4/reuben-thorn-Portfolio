import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/InfinitScrollGallery.css";
import StarImage from "../assets/Stars.jpeg";
import CobraImage from "../assets/cobra.jpeg";
import GuitarImage from "../assets/Guitar.jpeg";
import PadleImage from "../assets/Padle.jpeg";

const InfiniteScrollGallery = () => {
  // Place your image URLs in this array
  const images = [StarImage, CobraImage, GuitarImage, PadleImage];

  const settings = {
    infinite: true,
    speed: 6000, // Transition speed in milliseconds (how long the slide takes to transition)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500, // Fixed interval in milliseconds between slide transitions (3 seconds)
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="infinite-scroll-gallery">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide-container">
            <div
              className="image-wrapper"
              style={{
                transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
              }}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteScrollGallery;
