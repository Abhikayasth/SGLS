import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectChange = (event) => {
    const { options } = event.target;
    const values = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setSelectedOptions(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    navigate('/notification'); // Navigate to the notification page
  };

  return (
    <section id='contact-us' className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-10 md:py-16 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-white opacity-20 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-72 h-72 bg-white opacity-30 rounded-full absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Contact Us for Your Loan Needs
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Fill out the form below to get in touch with us. Our experts will respond promptly to help with your loan inquiries.
        </p>

        <div className="max-w-lg mx-auto">
          <form
            className="bg-white p-8 rounded-xl shadow-lg space-y-6 relative"
            action="https://formsubmit.co/your-email" // Update with actual email integration or backend handling
            method="POST"
            onSubmit={handleSubmit} // Attach handleSubmit function
          >
            {/* Hidden SEO Metadata Fields */}
            <input type="hidden" name="_subject" value="New Contact Inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            {/* Loan Options Selection */}
            <div>
              <label htmlFor="loan-options" className="block text-sm font-semibold text-gray-700 mb-2">Loan Options</label>
              <select
                id="loan-options"
                name="loan-options"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                multiple
                onChange={handleSelectChange}
                required
              >
                <option value="personal-loan">Personal Loan</option>
                <option value="home-loan">Home Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="education-loan">Education Loan</option>
                <option value="business-loan">Business Loan</option>
              </select>
            </div>

            {/* Selected Options Display */}
            {selectedOptions.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">You have selected the following loan options:</p>
                <ul className="list-disc list-inside text-gray-800 mb-4">
                  {selectedOptions.map(option => (
                    <li key={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600">
                  Please use the contact options below to apply or get more information about these loan options.
                </p>
              </div>
            )}

            {/* Communication Options */}
            <div className="space-y-4">
              <p className="block text-sm font-semibold text-gray-700 mb-2">How would you like us to contact you?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <button
                  type="button"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://wa.me/your-number', '_blank')}
                >
                  <i className="fab fa-whatsapp mr-2"></i> Contact via WhatsApp
                </button>
                
                {/* Direct Call */}
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
                  onClick={() => window.open('tel:+1234567890')}
                >
                  <i className="fas fa-phone mr-2"></i> Direct Call
                </button>

                {/* Email */}
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-transform duration-300 transform hover:scale-105"
                  onClick={() => window.open('mailto:your-email@example.com')}
                >
                  <i className="fas fa-envelope mr-2"></i> Contact via Email
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105 mt-6"
            >
              Connect via on this website...
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 space-x-4">
          <a
            href="https://www.facebook.com/YourClientPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/YourClientPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/YourClientPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
