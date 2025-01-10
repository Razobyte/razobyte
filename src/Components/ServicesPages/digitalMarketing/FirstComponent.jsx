import React from 'react';
import icon1 from '../../../../public/Image/digital-marketing-icon (11).png';
import icon2 from '../../../../public/Image/digital-marketing-icon (12).png';
import icon3 from '../../../../public/Image/digital-marketing-icon (13).png';

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: icon1,
      title: "Simple & Clear",
      description: "We make digital marketing easy to understand and implement."
    },
    {
      icon: icon2,
      title: "Focused on Results",
      description: "We prioritize strategies that bring real, measurable outcomes."
    },
    {
      icon: icon3,
      title: "Your Partner in Growth",
      description: "We work closely with you to achieve your business goals."
    }
  ];

  return (
    <div className="row w-screen flex flex-col justify-center items-center bg-[#E2F2FF] ">
      <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center text-center mb-6 mt-4">
                    <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70  max-w-24"></div>
                    <h2 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-gray-900"> 
                      Why Work With Us?</h2>
                    <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
                </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="border-[16px] border-gray-300 rounded-full  mb-2">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;