import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Check from '../../../../public/Image/check-mark_5290058 1.png'
const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Healthcare:",
      description: "Crafting advanced IT solutions tailored for the healthcare sector, such as Electronic Health Records (EHR) systems, telemedicine platforms, and patient management systems. We develop innovative software and applications that enhance patient care, streamline operations, and ensure compliance with healthcare regulations."
    },
    {
      title: "Finance:",
      description: "Creating secure and efficient financial software and platforms."
    },
    {
      title: "Retail:",
      description: "Building advanced e-commerce and point-of-sale systems."
    },
    {
      title: "Manufacturing:",
      description: "Engineering solutions for smart manufacturing and automation."
    },
    {
      title: "Technology:",
      description: "Designing and developing cutting-edge technology products and services."
    }
  ];

  return (
    <div className="w-full py-12">
      <Row className="justify-center">
        <Col md={10}>
          <h1 className="text-4xl font-bold text-center text-[#3b7fbf] mb-4">
            Industries We Serve
          </h1>
          <p className="text-center text-gray-700 mb-8 text-lg">
            Our product engineering expertise spans across various industries, including:
          </p>
          
          <div className="space-y-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full  flex items-center justify-center">
                   <img src={Check} alt="check" className='img-fluid' />
                  </div>
                </div>
                <div>
                  <span className="text-[#3b7fbf] font-semibold text-lg">
                    {industry.title}
                  </span>{" "}
                  <span className="text-gray-900 font-medium sm:text-base text-xs">
                    {industry.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IndustriesWeServe;