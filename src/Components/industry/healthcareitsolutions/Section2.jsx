import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your online visibility and attract more patients with our targeted SEO strategies. We optimize your website and content to rank higher in search engine results, ensuring you are easily found by potential patients searching for healthcare services."
    },
    {
      title: "Search Engine Marketing (SEM)",
      description: "Drive targeted traffic and increase your online presence with our SEM services. We create and manage pay-per-click (PPC) campaigns to attract new patients and drive conversions, ensuring your practice reaches the right audience effectively."
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Enhance your social media presence with our SMO services. We optimize your social media profiles and content to increase engagement and reach, helping you build a strong online community and connect with patients more effectively."
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Promote your services and engage with your audience through strategic social media marketing. We design and execute campaigns that drive patient interaction, raise brand awareness, and support your overall marketing goals."
    },
    {
      title: "Email Marketing",
      description: "Keep your patients informed and engaged with our targeted email marketing campaigns. We design personalized and automated email sequences that deliver relevant information, promotions, and updates directly to your patients' inboxes."
    },
    {
      title: "Influencer Marketing",
      description: "Leverage the power of influencer marketing to expand your reach and build trust within your community. We connect you with healthcare influencers who can authentically promote your services, share valuable content, and enhance your practice's reputation through their established networks."
    }
  ];

  return (
    <div 
      className="relative min-h-screen py-5 flex items-center justify-center"
      style={{
        backgroundImage: "url('/Image/bg-it-solutions.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <Row className="relative z-10 flex justify-center items-center">
        <Col md={10} xs={11}>
          <div className="text-center mb-5">
            <h2 className="font-bold hed2 text-white mb-2">
              Our Digital Marketing Services for Healthcare
            </h2>
            <p className="para text-white max-w-4xl mx-auto">
              In today's digital age, effective marketing is crucial for healthcare organizations to attract and retain patients. 
              Razobyte offers a range of digital marketing services tailored specifically for the healthcare sector:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg 
                p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold hed3 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DigitalMarketingServices;