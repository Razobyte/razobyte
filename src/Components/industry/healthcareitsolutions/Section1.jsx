import React from 'react';
import { Row, Col } from 'react-bootstrap';
import icon1 from '../../../../public/Image/itconsultaionicon (7).png';
import icon2 from '../../../../public/Image/itconsultaionicon (6).png';
import icon3 from '../../../../public/Image/itconsultaionicon (5).png';
import icon4 from '../../../../public/Image/itconsultaionicon (4).png';
import icon5 from '../../../../public/Image/itconsultaionicon (3).png';
import icon6 from '../../../../public/Image/itconsultaionicon (2).png';
import icon7 from '../../../../public/Image/itconsultaionicon (1).png';



const HealthcareSolutionsSection1 = () => {
  const solutions = [
    {
      icon: icon1,
      title: "Electronic Health Records (EHR) Integration",
      description: "Streamline patient information management with our EHR integration services. We ensure that your systems are seamlessly connected, providing a cohesive and comprehensive view of patient data that improves care coordination and decision-making."
    },
    {
      icon: icon2,
      title: "Telemedicine Solutions",
      description: "Expand your reach with our secure and scalable telemedicine solutions. Facilitate virtual consultations, remote monitoring, and telehealth services that enhance patient access and engagement while maintaining compliance with healthcare regulations."
    },
    {
      icon: icon3,
      title: "Data Security and Compliance",
      description: "Safeguard sensitive patient information with our robust data security solutions. We ensure your systems are compliant with industry regulations, including HIPAA, to protect against data breaches and maintain patient trust."
    },
    {
      icon: icon4,
      title: "Healthcare Analytics",
      description: "Unlock valuable insights from your data with our advanced analytics solutions. We provide tools and expertise to analyze patient outcomes, optimize operations, and drive informed decision-making."
    },
    {
      icon: icon5,
      title: "Healthcare Infrastructure Management",
      description: "Enhance the efficiency and reliability of your IT infrastructure. Our team manages and supports your technology environment, ensuring high availability and performance to meet the demanding needs of healthcare operations."
    },
    {
      icon: icon6,
      title: "Website Design and Development",
      description: "Establish a professional online presence with our custom website design and development services. We create user-friendly, responsive websites that are optimized for patient engagement and provide essential information about your services and practice."
    },
    {
      icon: icon7,
      title: "Application Development (Android and iOS)",
      description: "Enhance patient experience with our custom mobile app development services. We design and develop applications for both Android and iOS platforms, offering features such as appointment scheduling, patient portals, and health tracking to improve patient interaction and streamline your operations."
    }
  ];

  const maintenanceSupport = {
    icon: icon4,
    title: "Maintenance & Support",
    description: "Ensure the smooth operation of your IT assets with our comprehensive maintenance and support services. We offer:",
    services: [
      {
        title: "Website Maintenance:",
        description: "Keep your website running smoothly with regular updates, security patches, and performance optimizations."
      },
      {
        title: "Mobile App Maintenance:",
        description: "Ensure your mobile applications are up-to-date and functioning efficiently with ongoing support and updates."
      },
      {
        title: "Domain & Hosting Maintenance:",
        description: "Manage your domain and hosting needs with our reliable support, ensuring maximum uptime and performance for your online presence."
      }
    ]
  };

  return (
    <Row className="flex justify-center items-center py-5">
      <Col md={10} xs={10}>
        <h1 className="text-3xl font-bold text-[#3B7FBF] text-center mb-8">
          Our IT Solutions for Healthcare
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {solutions.slice(0, 6).map((solution, index) => (
            <div key={index} className="bg-white p-4
            flex flex-col items-center rounded-lg shadow-md border-2 border-[#3B7FBF] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">
                <img src={solution.icon} alt="icon" className='img-fluid' />
                </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3 text-center">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="md:flex hidden justify-center gap-10">
          {/* Mobile App Development Card */}
          <div className="bg-white p-4 flex items-center  flex-col
           rounded-lg shadow-md border-2 border-[#3B7FBF] hover:shadow-lg transition-shadow col-md-4">
            <div className="text-4xl mb-4 flex">
            <img src={solutions[6].icon} alt="icon" className='img-fluid' />
            </div>
            <h3 className="text-xl font-semibold text-[#3b7fbf] text-center mb-3">
              {solutions[6].title}
            </h3>
            <p className="text-gray-600 text-sm">
              {solutions[6].description}
            </p>
          </div>

          {/* Maintenance & Support Card */}
          <div className="bg-white p-4 flex items-center flex-col
          border-2 border-[#3B7FBF]
          rounded-lg shadow-md  hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">
                <img src={maintenanceSupport.icon} alt="icon" className='img-fluid' />
            </div>
            <h3 className="text-xl font-semibold text-[#3b7fbf] text-center mb-3">
              {maintenanceSupport.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {maintenanceSupport.description}
            </p>
            <div className="space-y-3">
              {maintenanceSupport.services.map((service, index) => (
                <div key={index}>
                  <span className="font-semibold text-blue-600">{service.title}</span>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HealthcareSolutionsSection1;