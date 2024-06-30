import React, { useState } from 'react';

const Testimonial = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col bg-orange-1 px-10  py-12 mt-16">
      <div className="text-2xl font-semibold mb-2 font-Poppins">
          Testimonials
      </div>
      <span className='mb-8'>{'0'+ (parseInt(activeIndex) + 1) + '/03'}</span>
      <div className="flex w-full px-6">
        <div className="flex items-center w-6/12  space-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative rounded-full ml-4 overflow-hidden w-32 h-48 transition-transform duration-300 ${
                index === activeIndex ? 'transform scale-150' : ''
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
        <div className="flex-1 ml-4 w-6/12">
          <div className="text-lg font-extrabold text-orange-logo font-['Poppins]">{testimonials[activeIndex].name}</div>
          <div className="text-sm text-black-1 font-normal font-['Poppins]">{testimonials[activeIndex].designation}</div>
          <p className="mt-2 text-2xl font-extrabold text-black-1 font-['Poppins]">{testimonials[activeIndex].description}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-4 w-full">
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-orange-logo px-4 py-2 rounded"
        >
          <img
            src={'/assets/next-btn.svg'}
            className="h-25 w-25"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;