import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    review: 'I got my personal loan approved within hours! Great service and support.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    review: 'The home loan process was so smooth. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Michael Johnson',
    review: 'Fast approval and excellent customer service. Couldn\'t be happier!',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    review: 'The car loan application was straightforward and quick. Great experience!',
    rating: 4,
  },
  {
    name: 'Sarah Brown',
    review: 'Friendly staff and easy loan process. I felt supported every step of the way.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    review: 'Professional service with competitive rates. Highly satisfied!',
    rating: 4,
  },
  {
    name: 'Laura Garcia',
    review: 'An exceptional experience from start to finish. Highly recommend their services.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 pt-8 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-teal-100 opacity-40 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-64 h-64 bg-teal-100 opacity-30 rounded-full absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hidden pb-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-xl rounded-lg flex-none w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-100 opacity-10 rounded-lg"></div>
              <div className="flex items-center justify-center mb-4">
                <FaUserCircle size={60} className="text-teal-600" />
              </div>
              <p className="relative text-gray-700 mb-4">
                "{testimonial.review}"
              </p>
              <p className="relative font-bold text-gray-900">{testimonial.name}</p>
              <div className="flex mt-2 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
