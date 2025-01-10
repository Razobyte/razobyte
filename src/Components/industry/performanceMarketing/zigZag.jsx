import React from "react";
import { GiCheckMark } from "react-icons/gi";
import chanllengesfaced from '../../../../public/Image/Frame.png';
import img5 from '../../../../public/Image/Frame (1).png';
import img6 from '../../../../public/Image/outcomes.png';
import img7 from '../../../../public/Image/key-takeaways.png';
import { PiDotOutlineFill } from "react-icons/pi";


const ZigZagSection = () => {
  const outComes = [
    {
      title: "Increased Patient Acquisition:",
      description: "Achieved a 25% rise in new patient registrations within six months."
    },
    {
      title: "Higher Engagement Rates:",
      description: "Boosted social media interactions by 40%, enhancing community engagement."
    },
    {
      title: "Improved ROI:",
      description: "Delivered a 150% return on investment (ROI) for PPC campaigns, driving cost-effective patient leads."
    },
    {
      title: "Enhanced Brand Awareness:",
      description: "Increased website traffic by 60% through effective SEO and content strategies."
    }
  ];

  const challenges = [
    {
      title: "Intense Competition:",
      description: "Navigating a crowded healthcare market with numerous providers."
    },
    {
      title: "Tracking Effectiveness:",
      description: "Difficulty in measuring outcomes traditional marketing methods."
    },
    {
      title: "Diverse Demographics:",
      description: "Addressing the varied healthcare needs of different patient groups."
    }
  ];
  const keyTakeaways = [
    {
      text: "Performance marketing strategies can significantly improve patient engagement and acquisition for healthcare providers."
    },
    {
      text: "Data-driven decision-making is essential for effective audience targeting."
    },
    {
      text: "A comprehensive, multi-channel approach maximizes overall marketing impact."
    }
  ];

  return (
    <div className="row w-screen d-md-flex d-none items-center justify-center bg-[#EBF4FB] ">
      <div className="max-w-6xl  col-md-10 flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="relative w-full">
            <div className="border-t-2 border-black rounded-t-[45px] overflow-hidden">
              <div className="absolute left-0.3 top-9 bottom-0 w-0.5 h-1/3 bg-black"></div>
              <div className="absolute -right-0.5 top-10 bottom-0 lg:h-[450px] xl:h-[395px] md:h-[480px] sm:h-auto w-0.5 bg-black"></div>
              <div className="w-5 h-5 bg-black rounded-full absolute xl:top-44 md:top-[310px] lg:top-[305px]
              -left-2"></div>
              <div className="p-4">
                <img src={chanllengesfaced} alt="Challenges" className="w-full h-auto mb-4" />
                <div className="relative">
                  {/* Orange circle positioned to partially hide behind text */}
                  <div className="absolute -top-2 left-3 w-5 h-5 rounded-full bg-orange-500" />
                  {/* Heading text with higher z-index to overlap circle */}
                  <h2 className="relative text-xl z-10 text-[#3b7fbf] font-semibold mb-2 mx-4">
                    Challenges Faced
                  </h2>
                </div>

                {challenges.map((challenge, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-start space-x-2">
                      <GiCheckMark className="w-5 h-5 text-[#3b7fbf] flex-shrink-0 mt-2" />
                      <div>
                        <h5 className="text-gray-600 text-sm font-semibold m-0">
                          {challenge.title}
                        </h5>
                        <p className="text-gray-500 text-xs m-0">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="relative w-full div-2">
            <div className=" border-b-2 border-t-0 border-black rounded-b-[45px] overflow-hidden ">
         
              <div className="p-4">
           
              <div className="relative">
                  {/* Orange circle positioned to partially hide behind text */}
                  <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#FF3D7B]" />
                  {/* Heading text with higher z-index to overlap circle */}
                  <h2 className="relative text-xl z-10 text-[#3b7fbf] font-semibold mb-2 ">
                  Solutions 
                  Implemented
                  </h2>
                </div>
                <p className="text-xs text-[#5e5e5e] font-medium mb-4">
                  Our approach focuses on data-driven campaigns, utilizing analytics to identify target demographics
                  and create tailored solutions, such as telehealth services. We enhance visibility through SEO strategies,
                  run effective PPC advertising on Google and social media, produce engaging content, and foster social
                  media engagement to connect with patients meaningfully.
                </p>
                <img
                  src={img5}
                  alt="Solutions Implemented"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full block-div-3">
            <div className="border-t-2 border-black rounded-t-[40px] overflow-hidden ">
              <div className="absolute -left-0.5 top-9  md:h-[550px] lg:h-[525px] sm:h-auto  xl:h-[470px] bottom-0 w-0.5 bg-black"></div>
              <div className="absolute -right-0.5 top-9 bottom-0  lg:h-[560px] md:h-[620px] xl:h-[520px] sm:h-auto w-0.5 bg-black"></div>
              <div className="p-4">
                <img src={img6} alt="Outcomes" className="w-full h-auto mb-4" />
                <div className="relative">
                  {/* Orange circle positioned to partially hide behind text */}
                  <div className="absolute -top-2 left-3 w-5 h-5 rounded-full bg-[#1FC9F7]" />
                  {/* Heading text with higher z-index to overlap circle */}
                  <h2 className="relative text-xl z-10 text-[#3b7fbf] font-semibold mb-2 mx-4">
                    OutComes
                  </h2>
                </div>
                {outComes.map((outcome, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-start space-x-2">
                      <GiCheckMark className="w-5 h-5 text-[#3b7fbf] flex-shrink-0 mt-2" />
                      <div>
                        <h5 className="text-gray-600 text-sm font-semibold m-0">
                          {outcome.title}
                        </h5>
                        <p className="text-gray-500 text-xs m-0">{outcome.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full block-div-4">
            <div className="border-b-2 border-black rounded-b-[50px] overflow-hidden ">
              <div className="absolute right-0 bottom-10 h-1/2 w-0.5 bg-black"></div>
              <div className="absolute -right-2 lg:bottom-[330px]  xl:bottom-80 md:bottom-96 h-5 w-5 bg-black rounded-full"></div>
              <div className="p-4">
              <div className="relative">
                  {/* Orange circle positioned to partially hide behind text */}
                  <div className="absolute -top-2 left-3 w-5 h-5 rounded-full bg-[#A3A901]" />
                  {/* Heading text with higher z-index to overlap circle */}
                  <h2 className="relative text-xl z-10 text-[#3b7fbf] font-semibold mb-2 mx-4">
                 Key Takeaways
                  </h2>
                </div>
                {keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-2">
                    <div className="mt-2">
                      <div className="bg-[#3b7fbf] w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">
                      {takeaway.text}
                    </p>
                  </div>
                ))}
                <img
                  src={img7}
                  alt="Key Takeaways Illustration"
                  className="w-full h-auto mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZigZagSection;

