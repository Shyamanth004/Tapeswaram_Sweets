import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/h3.jpg",
  "/h2.jpg",
  "/h1.jpg",
];

const texts = [
  "Welcome to Tapeswaram",
  "Discover Unique Sweets",
  "Experience Traditional Delights"
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    // Change image every 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    // Change text every 3 seconds (same duration as image)
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative text-black overflow-hidden mt-20">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Block - Changing Text */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-4 lg:px-16 text-center lg:text-left">
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-8 drop-shadow-lg">
              {texts[currentText]}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-12 drop-shadow-md">
              An Aesthetic Confectionery
            </p>
            <Link to="./about" className="mt-4 bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Block - Rotating Images */}
        <div className="flex-1 relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-gray-400 hover:bg-white transition duration-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
