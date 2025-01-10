import React from 'react';

const Timeline = () => {
  const months = Array.from({length: 12}, (_, i) => `Month ${i + 1}`);
  
  const milestones = [
    {
      title: "Setup, initial campaigns, CTR, leads, conversion rates.",
      start: 1,
      duration: 2,
      color: "bg-[#E8505B]"
    },
    {
      title: "Scaling, CPA, ROI, lead quality, remarketing success.",
      start: 4,
      duration: 2,
      color: "bg-[#3B7FBF]"
    },
    {
      title: "Segmentation, patient acquisition costs, cross-channel results.",
      start: 7,
      duration: 2,
      color: "bg-[#EB996E]"
    },
    {
      title: "Long-term optimization, lifetime value, patient retention, ROI.",
      start: 10,
      duration: 3,
      color: "bg-[#03AC22]"
    }
  ];

  return (
   <div className=' row pb-20 w-screen d-md-flex d-none justify-center items-center flex-col  bg-[#EBF4FB]'>
     <div className="w-full col-md-10 max-w-6xl mx-auto">
      <h1 className="hed2 text-center">Timeframe</h1>
      <h2 className="text-[#5E5E5E] sm:text-xl text-xs mb-12 text-center">
        Building Success Over Time A Strategic 12-Month Plan
      </h2>
      <div className="relative">
        {/* Month labels */}
        <div className="flex justify-between mb-8">
          {months.map((month, index) => (
            <div key={index} className="text-sm font-medium">
              {month}
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="absolute w-full h-full border-l border-r border-gray-100">
          {Array.from({length: 11}).map((_, index) => (
            <div
              key={index}
              className="absolute h-full w-px bg-gray-200"
              style={{left: `${((index + 1) * 100) / 12}%`}}
            />
          ))}
        </div>

        {/* Milestones */}
        <div className="relative h-64  mb-5">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`absolute rounded-lg p-2 ${milestone.color} text-white shadow-md`}
              style={{
                left: `${((milestone.start - 1) * 100) / 12}%`,
                width: `${(milestone.duration * 100) / 12}%`,
                top: `${index * 80}px`,
              }}
            >
              <p className="text-sm">{milestone.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

   </div>


   
  );
};

export default Timeline;