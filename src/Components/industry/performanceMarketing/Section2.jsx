import React from 'react';
import { Row, Col } from 'react-bootstrap';
import icon1 from '../../../../public/Image/unclock-icon (10).png';
import icon2 from '../../../../public/Image/unclock-icon (9).png';
import icon3 from '../../../../public/Image/unclock-icon (8).png';
import icon4 from '../../../../public/Image/unclock-icon (7).png';
import icon5 from '../../../../public/Image/unclock-icon (6).png';
import icon6 from '../../../../public/Image/unclock-icon (5).png';
import icon7 from '../../../../public/Image/unclock-icon (4).png';
import icon8 from '../../../../public/Image/unclock-icon (3).png';
import icon9 from '../../../../public/Image/unclock-icon (2).png';
import icon10 from '../../../../public/Image/unclock-icon (1).png';



const MarketingService = ({ icon, title }) => (
  <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-center text-center">
     <img src={icon} alt="icon" className='img-fluid' />
      <h3 className="mt-4 text-lg font-semibold text-[#3b7fbf]">{title}</h3>
    </div>
  </div>
)
const PerformanceMarketing = () => {
  const services = [
    {
      icon: icon1,  // Replaced with placeholder icon name
      title: "Conversion Rate Optimization"
    },
    {
      icon: icon5,  // Replaced with placeholder icon name
      title: "Cost Per Acquisition (CPA)"
    },
    {
      icon: icon2,   // Replaced with placeholder icon name
      title: "Ad Spend Optimization"
    },
    {
      icon: icon3,   // Replaced with placeholder icon name
      title: "Return on Investment (ROI)"
    },
    {
      icon: icon4 ,  // Replaced with placeholder icon name
      title: "Lead Generation"
    },
    {
      icon: icon5 ,  // Replaced with placeholder icon name
      title: "Attribution Analysis"
    },
    {
      icon: icon2,  // Replaced with placeholder icon name
      title: "Click-Through Rate (CTR) Enhancement"
    },
    {
      icon: icon8,  // Replaced with placeholder icon name
      title: "Landing Page Optimization"
    },
    {
      icon: icon7,  // Replaced with placeholder icon name
      title: "A/B Testing"
    },
    {
      icon: icon8,  // Replaced with placeholder icon name
      title: "Search Engine Optimization (SEO)"
    },
    {
      icon: icon10,  // Replaced with placeholder icon name
      title: "Remarketing/Retargeting"
    },
    {
      icon: icon9,  // Replaced with placeholder icon name
      title: "Customer Lifetime Value (CLV)"
    }
  ];
  return (
    <div className="flex justify-center items-center lg:py-10 md:py-6 xs:py-4 py-2 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-4xl 
          sm:text-3xl xs:text-2xl text-2xl font-semibold text-[#5e5e5e] mb-2
          ">
            Unlock Your Potential with Razobyte's Performance Marketing
          </h2>
          <p className="md:text-xl xs:text-lg text-base text-[#3b7fbf]">
            At Razobyte Softech, we specialize in performance marketing that drives results. 
            Our data-driven strategies ensure that every campaign is optimized for success.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <MarketingService icon={service.icon} title={service.title} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PerformanceMarketing;