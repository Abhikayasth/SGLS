import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact-form'); // Adjust the route to your contact form page
  };

  return (
    <section id='contact-us' className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-5 md:py-10 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-white opacity-20 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-72 h-72 bg-white opacity-30 rounded-full absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Get in Touch with Us
        </h2>
        <p className="text-lg md:text-xl text-white mb-12">
          We’re here to assist you with all your needs. Whether you have questions, need support, or want to explore our services further, we’re just a click away. Our dedicated team is ready to provide personalized support to help you achieve your goals.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
          <div className="flex items-center text-white">
            <FaEnvelope size={24} className="mr-2" />
            <span>Email us at: <a href="mailto:info@yourcompany.com" className="underline">roshanfiremarshal@gmail.com</a></span>
          </div>
          <div className="flex items-center text-white">
            <FaPhone size={24} className="mr-2" />
            <span>Call us at: <a href="tel:+1234567890" className="underline">+91 9033409781</a></span>
          </div>
          <div className="flex items-center text-white">
            <FaMapMarkerAlt size={24} className="mr-2" />
            <span>Location : Gujarat, Vadoadara .. </span>
          </div>
        </div>
        <p className="text-lg md:text-xl text-white mb-12">
          Ready to take the next step? Click the button below to reach out to us and explore how we can help you with our comprehensive range of services. Our team is here to guide you through every step of the way.
        </p>
        <button
          onClick={handleJoinUs}
          className="bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105"
        >
          Join Us for More Details
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
