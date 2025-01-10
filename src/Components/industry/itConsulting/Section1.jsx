import React from 'react';
import { Row, Col } from 'react-bootstrap';
import icon from '../../../../public/Image/it-consultiong-icon (9).png';
import icon1 from '../../../../public/Image/it-consultiong-icon (8).png';
import icon2 from '../../../../public/Image/it-consultiong-icon (10).png';
import icon3 from '../../../../public/Image/it-consultiong-icon (7).png';
import icon4 from '../../../../public/Image/it-consultiong-icon (5).png';
import icon5 from '../../../../public/Image/it-consultiong-icon (4).png';
import icon6 from '../../../../public/Image/it-consultiong-icon (3).png';
import icon7 from '../../../../public/Image/it-consultiong-icon (2).png';
import icon8 from '../../../../public/Image/it-consultiong-icon (1).png';

const ItConsultingServices = () => {
  const services = [
    {
      icon: icon8,
      title: "IT Strategy & Planning",
      description: "Develop a comprehensive IT strategy that aligns with your business goals. We work with you to assess your current IT environment, identify gaps, and create a strategic roadmap to advance your technology and drive growth."
    },
    {
      icon: icon2,
      title: "Systems Integration & Optimization",
      description: "Streamline your operations with seamless systems integration. Our consultants help connect disparate systems and optimize your technology stack to enhance performance and productivity."
    },
    {
      icon: icon,
      title: "Cloud Solutions Consulting",
      description: "Harness the power of the cloud with our expert consulting services. We assist with cloud strategy, migration, and management, helping you select and implement the right cloud solutions to improve scalability and reduce costs."
    },
    {
      icon: icon4,
      title: "Data Security & Compliance",
      description: "Safeguard your organization's data with robust security measures. We provide consulting services to help you implement effective security protocols, ensure compliance with regulations, and protect against potential threats."
    },
    {
      icon: icon3,
      title: "Business Intelligence & Analytics",
      description: "Unlock actionable insights from your data with our business intelligence and analytics consulting. We offer solutions to analyze data, identify trends, and make informed decisions that drive operational efficiency and business growth."
    },
    {
      icon: icon1,
      title: "IT Infrastructure Assessment & Improvement",
      description: "Evaluate and enhance your IT infrastructure to support your business needs. We conduct thorough assessments, recommend improvements, and implement solutions to boost performance, reliability, and scalability."
    },
    {
      icon: icon5,
      title: "Custom Application Development",
      description: "Address your unique business needs with custom application development. We design and build tailored solutions, from enterprise applications to customer-facing platforms, ensuring they integrate seamlessly with your existing systems."
    },
    {
      icon: icon6,
      title: "Website Design & Development",
      description: "Establish a strong online presence with our website design and development services. We create responsive, user-friendly websites that effectively represent your brand and support your business objectives."
    },
    {
      icon: icon7,
      title: "Technology Roadmap Development",
      description: "Plan for future technology needs with a detailed technology roadmap. We help you define your IT goals, prioritize investments, and create a strategic plan that supports your business's growth and innovation."
    }
  ];

  return (
    <Row className="justify-center pb-5">
      <h1 className="text-4xl font-bold text-center text-[#3B7FBF] mb-12">
        Our IT Consulting Services
      </h1>
      <Col md={10} className='flex items-center justify-center' >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#3B7FBF] p-4 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow border-b-8 border-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      </Col>
    </Row>
  );
};

export default ItConsultingServices;