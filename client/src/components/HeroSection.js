import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/hero-bg.jpg';
import image2 from '../images/hero-bg1.jpg';
import image3 from '../images/hero-bg2.jpg';

// Sample images array with updated text
const slides = [
  { img: image1, text: 'Home Loan: "Own your dream home today! Get easy approvals and flexible EMI options."' },
  { img: image2, text: 'Business Loan: "Expand your business effortlessly with customized loan options tailored to your needs."' },
  { img: image3, text: 'Personal Loan: "Get fast personal loans to meet your urgent needs—simple and hassle-free process."' },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 md:py-24 flex flex-col md:flex-row items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Sliding Images with Dots */}
      <div className="relative flex-1 w-full md:w-2/3 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-60 md:h-[60vh] bg-cover bg-center flex justify-center items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black bg-opacity-40 p-6 md:p-10 text-center">
                <p className="text-lg md:text-2xl font-semibold">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-4 w-4 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'} focus:outline-none transition-colors duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* Left Content */}
      <div className="relative flex-1 w-full md:w-1/3 text-center px-6 md:px-12 flex flex-col justify-center items-center space-y-4 md:space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Find the Perfect Loan Solution for You
        </h1>
        <p className="text-base md:text-xl mb-6">
          Quick approvals, low interest rates, and custom plans for all your financial needs.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/apply"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
          <Link
            to="/contact-form"
            className="bg-transparent border border-white font-semibold text-white py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
