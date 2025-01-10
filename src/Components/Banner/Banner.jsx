import React from 'react';

const Banner = ({ title, image, para, para2 }) => {
  return (
    // Removed w-screen and added -mx-[50vw] and left-[50%] for full bleed
    <div className="relative w-[100vw] -mx-[50vw] left-[50%] right-[50%]">
      {/* Image Container - Full width with fixed height */}
      <div className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full">
            <div className="max-w-2xl px-4 md:px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-lg text-white mb-4">
                {para}
              </p>
              <p className="hidden md:block text-lg text-white">
                {para2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;