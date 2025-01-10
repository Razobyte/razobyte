import React from 'react';
import { Row, Col } from 'react-bootstrap';
import icon1 from '../../../../public/Image/product-engineering-icon (8).png';
import icon2 from '../../../../public/Image/product-engineering-icon (7).png';
import icon3 from '../../../../public/Image/product-engineering-icon (6).png';
import icon4 from '../../../../public/Image/product-engineering-icon (5).png';
import icon5 from '../../../../public/Image/product-engineering-icon (4).png';
import icon6 from '../../../../public/Image/product-engineering-icon (3).png';
import icon7 from '../../../../public/Image/product-engineering-icon (2).png';
import icon8 from '../../../../public/Image/product-engineering-icon (1).png';
const ProductEngineeringServices = () => {
  const services = [
    {
      icon: icon1,
      title: "Product Strategy & Consulting",
      description: "We work closely with you to understand your vision and market requirements. Our team provides strategic guidance to define product features, functionalities, and roadmaps that align with your business objectives and customer needs."
    },
    {
      icon: icon2,
      title: "Concept Development & Prototyping",
      description: "Transform your ideas into tangible prototypes with our concept development services. We create detailed prototypes and proof-of-concepts that allow you to validate your product concept, gather feedback, and refine your design before moving into full-scale development."
    },
    {
      icon: icon3,
      title: "Product Design & User Experience",
      description: "Our design team focuses on creating intuitive and user-centric designs that enhance user experience. We ensure that your product is visually appealing, easy to navigate, and meets the expectations of your target audience."
    },
    {
      icon: icon4,
      title: "Software Development",
      description: "Develop robust and scalable software solutions with our custom development services. Whether you need a web application, mobile app, or enterprise software, our team uses the latest technologies and best practices to build high-performance applications tailored to your needs."
    },
    {
      icon: icon6,
      title: "Hardware Engineering",
      description: "For products requiring physical components, our hardware engineering services include design, development, and integration of hardware solutions. We ensure that your hardware is reliable, efficient, and seamlessly integrates with your software."
    },
    {
      icon: icon5,
      title: "Quality Assurance & Testing",
      description: "Deliver a flawless product with our comprehensive quality assurance and testing services. We perform rigorous testing to identify and resolve issues, ensuring that your product meets the highest standards of quality and performance."
    },
    {
      icon: icon7,
      title: "Product Deployment & Launch",
      description: "Successfully launch your product with our deployment and go-to-market strategies. We assist with the deployment process, market entry planning, and promotional activities to ensure a smooth launch and successful market adoption."
    },
    {
      icon: icon8,
      title: "Ongoing Support & Maintenance",
      description: "Ensure the continued success of your product with our support and maintenance services. We provide ongoing technical support, updates, and enhancements to keep your product relevant and effective in a dynamic market environment."
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-50">
      <Row className="justify-center">
        <Col md={10}>
          <h1 className="text-4xl font-bold text-center text-[#2E86DE] mb-12">
            Our Product Engineering Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#2E86DE] p-6 rounded-xl shadow-lg text-white hover:shadow-xl transition-shadow duration-300 flex flex-col border-b-4 border-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shrink-0">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductEngineeringServices;