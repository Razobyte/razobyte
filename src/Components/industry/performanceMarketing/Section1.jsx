import React from 'react';
import '../../ServicesPages/digitalMarketing/Digital.css'

import { Container, Row, Col } from 'react-bootstrap';

const ServiceCard = ({ icon, title, description, features }) => (
  <div className="px-2 py-3 flex flex-col">
    <div className="flex flex-col items-center">
    <img 
  src={icon} 
  alt={title} 
  className="w-16 h-16 mb-2 slow-shake-zoom" 
/>
      <h3 className="mb-1 mt-1 md:text-lg sm:text-sm text-xs md:font-bold font-semibold p-0 text-center">{title}</h3>
    </div>
    <p className="d-md-flex flex-col d-none flex-grow-1 text-center max-w-xs ">{description}</p>
    {features && (
      <div className="d-md-flex flex-col items-center justify-center d-none mt-">
        <span className="fw-bold text-sm">Key Features </span>
        <p className='text-sm text-center'>{features}</p>
      </div>
    )}
  </div>
);

const ServicesSection = ({ headingservices, servicesparagraph, servicesData, className }) => {
  return (
    <>
      <Row className={`justify-content-center bg-[#EAF2FF] py-sm-5 py-2 ${className}`}>
        <Col md={10} xs={11}>
          <div className="text-center mb-sm-5 mb-0">
            <div className="flex items-center justify-center text-center ">
              <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70  max-w-24"></div>
              <h2 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-gray-900">{headingservices}</h2>
              <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
            </div>
            <h3 className="text-[#5E5E5E] sm:text-xl text-xs pb-md-0 pb-3">{servicesparagraph}</h3>
          </div>
          <Row className="g-4">
            {servicesData.map((service, index) => {
              const rowIndex = Math.floor(index / 2); // Group of 4 services per row
              const isOddRow = rowIndex % 2 !== 0;

              return (
                <Col key={index} xs={6} md={7} lg={4}>
                  <div className={`h-100 rounded-2xl shadow ${(index % 2 === 0 && !isOddRow) || (index % 3 !== 0 && isOddRow)
                      ? 'bg-[#3b7fbf] text-white'
                      : 'bg-[#98AADD] text-white'
                    }`}>
                    <ServiceCard {...service} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ServicesSection;
