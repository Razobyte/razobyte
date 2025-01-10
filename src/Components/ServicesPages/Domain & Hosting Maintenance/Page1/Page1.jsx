import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const PlanFeature = ({ text }) => (
  <div className="d-flex align-items-center mb-2">
    <FaCheck size={15} className="me-2 text-success" />
    <span>{text}</span>
  </div>
);

const PlanDropdown = ({ title, features, isOpen, toggleOpen }) => (
  <div className="mt-3">
    <Button 
      variant="link" 
      className="text-start p-0 text-decoration-none" 
      onClick={toggleOpen}
    >
      <h6 className="mb-0 d-flex align-items-center hed4">
        {title}
        <IoIosArrowDown size={20} className={`ms-2 ${isOpen ? 'rotate-180' : ''}`} />
      </h6>
    </Button>
    {isOpen && (
      <div className="mt-2">
        {features.map((feature, index) => (
          <PlanFeature key={index} text={feature} />
        ))}
      </div>
    )}
  </div>
);

const PricingPlan = ({ title, description, originalPrice, discountedPrice, savePercentage, features, dropdowns }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <Col md={6} lg={3} className="mb-4">
      <div className="border rounded p-4 h-100 d-flex flex-column">
        <h3 className='hed2'>{title}</h3>
        <p className="text-muted hed4">{description}</p>
        <div className="mb-3">
          <small className="text-muted text-decoration-line-through">₹{originalPrice}/mo</small>
          <div className="d-flex align-items-baseline">
            <h2 className="mb-0 me-2 hed3">₹{discountedPrice}</h2>
            <span>/mo</span>
          </div>
          <span className="badge bg-success">SAVE {savePercentage}%</span>
        </div>
        <Button className="mb-3 btn2 px-5 py-3">Choose Plan</Button>
        {features.map((feature, index) => (
          <PlanFeature key={index} text={feature} />
        ))}
        {dropdowns.map((dropdown, index) => (
          <PlanDropdown
            key={index}
            title={dropdown.title}
            features={dropdown.features}
            isOpen={openDropdown === index}
            toggleOpen={() => setOpenDropdown(openDropdown === index ? null : index)}
          />
        ))}
      </div>
    </Col>
  );
};

const PricingPlans = () => {
const plans = [
  {
    title: "Single",
    description: "A great solution for beginners",
    originalPrice: "399.00",
    discountedPrice: "69.00",
    savePercentage: 82,
    renewalPrice: "179.00",
    features: [
      "1 Website",
      "~10,000 Visits Monthly",
      "50 GB NVMe Storage",
      "200,000 Files And Directories (inodes)",
      "Free Pre-Built Templates",
      "Free Automatic Website Migration",
      "Unlimited Free SSL",
      "1 Email Account"
    ],
    dropdowns: [
      {
        title: "Managed WordPress",
        features: [
          "Free 1-Click WordPress Installation",
          "Free Automatic Website Migration",
          "Free Pre-Built Templates",
          "WordPress Acceleration (LiteSpeed)",
          "WordPress Auto Updates"
        ]
      },
      {
        title: "Security",
        features: [
          "Standard DDoS Protection",
          "Web Application Firewall",
          "Cloudflare Protected Nameservers",
          "Malware Scanner",
          "Secure Access Manager"
        ]
      },
      {
        title: "Technical Details",
        features: [
          "200,000 Files And Directories (inodes)",
          "25 PHP Workers",
          "~10,000 Visits Monthly",
          "2 Subdomains",
          "25 MySQL Max User Connections",
          "2 Databases"
        ]
      }
    ]
  },
  {
    title: "Premium",
    description: "Everything you need to create your website",
    originalPrice: "599.00",
    discountedPrice: "129.00",
    savePercentage: 78,
    renewalPrice: "249.00",
    features: [
      "100 Websites",
      "~25,000 Visits Monthly",
      "100 GB NVMe Storage",
      "400,000 Files And Directories (inodes)",
      "Free Pre-Built Templates",
      "Free Automatic Website Migration",
      "Unlimited Free SSL",
      "Free Email"
    ],
    dropdowns: [
      {
        title: "Managed WordPress",
        features: [
          "Free 1-Click WordPress Installation",
          "Free Automatic Website Migration",
          "Free Pre-Built Templates",
          "WordPress Acceleration (LiteSpeed)",
          "WordPress Auto Updates"
        ]
      },
      {
        title: "Hostinger Website Builder",
        features: [
          "AI Website Builder",
          "Drag&Drop Editor",
          "150 Templates",
          "Marketing Integrations",
          "AI Image Generator",
          "AI Writer",
          "AI Blog Generator"
        ]
      },
      {
        title: "Security",
        features: [
          "Standard DDoS Protection",
          "Web Application Firewall",
          "Cloudflare Protected Nameservers",
          "Malware Scanner",
          "Secure Access Manager",
          "Free Domain WHOIS Privacy Protection (₹749.00 Value)"
        ]
      },
      {
        title: "Guarantee",
        features: [
          "30-Day Money-Back Guarantee",
          "99.9% Uptime Guarantee",
          "Global Data Centers",
          "24/7 Customer Support",
          "Priority Support"
        ]
      },
      {
        title: "Technical Details",
        features: [
          "400,000 Files And Directories (inodes)",
          "25 PHP Workers",
          "~25,000 Visits Monthly",
          "2 Subdomains",
          "25 MySQL Max User Connections",
          "2 Databases"
        ]
      }
    ]
  },
  {
    title: "Business",
    description: "Level-up with more power and enhanced features",
    originalPrice: "699.00",
    discountedPrice: "249.00",
    savePercentage: 64,
    renewalPrice: "499.00",
    features: [
      "100 Websites",
      "~25,000 Visits Monthly",
      "200 GB NVMe Storage",
      "600,000 Files And Directories (inodes)",
      "Free Pre-Built Templates",
      "Free Automatic Website Migration",
      "Unlimited Free SSL",
      "Free Email"
    ],
    dropdowns: [
      {
        title: "Managed WordPress",
        features: [
          "Free 1-Click WordPress Installation",
          "Free Automatic Website Migration",
          "Free Pre-Built Templates",
          "WordPress Acceleration (LiteSpeed)",
          "WordPress Auto Updates"
        ]
      },
      {
        title: "Hostinger Website Builder",
        features: [
          "AI Website Builder",
          "Drag&Drop Editor",
          "150 Templates",
          "Marketing Integrations",
          "AI Image Generator",
          "AI Writer",
          "AI Blog Generator"
        ]
      },
      {
        title: "Security",
        features: [
          "Enhanced DDoS Protection",
          "Web Application Firewall",
          "Cloudflare Protected Nameservers",
          "Malware Scanner",
          "Secure Access Manager",
          "Free Domain WHOIS Privacy Protection (₹749.00 Value)"
        ]
      },
      {
        title: "Guarantee",
        features: [
          "30-Day Money-Back Guarantee",
          "99.9% Uptime Guarantee",
          "Global Data Centers",
          "24/7 Customer Support",
          "Priority Support"
        ]
      },
      {
        title: "Technical Details",
        features: [
          "600,000 Files And Directories (inodes)",
          "60 PHP Workers",
          "~25,000 Visits Monthly",
          "100 Subdomains",
          "75 MySQL Max User Connections",
          "Unlimited Databases"
        ]
      }
    ]
  },
  {
    title: "Cloud Startup",
    description: "Enjoy optimised performance & guaranteed resources",
    originalPrice: "1699.00",
    discountedPrice: "699.00",
    savePercentage: 58,
    renewalPrice: "1279.00",
    features: [
      "300 Websites",
      "~20,000 Visits Monthly",
      "200 GB NVMe Storage",
      "200,000 Files And Directories (inodes)",
      "Free Pre-Built Templates",
      "Free Automatic Website Migration",
      "Unlimited Free SSL",
      "Free Email"
    ],
    dropdowns: [
      {
        title: "Managed WordPress",
        features: [
          "Free 1-Click WordPress Installation",
          "Free Automatic Website Migration",
          "Free Pre-Built Templates",
          "WordPress Acceleration (LiteSpeed)",
          "WordPress Auto Updates"
        ]
      },
      {
        title: "Hostinger Website Builder",
        features: [
          "AI Website Builder",
          "Drag&Drop Editor",
          "150 Templates",
          "Marketing Integrations",
          "AI Image Generator",
          "AI Writer",
          "AI Blog Generator"
        ]
      },
      {
        title: "Security",
        features: [
          "Enhanced DDoS Protection",
          "Web Application Firewall",
          "Cloudflare Protected Nameservers",
          "Malware Scanner",
          "Secure Access Manager",
          "Free Domain WHOIS Privacy Protection (₹749.00 Value)"
        ]
      },
      {
        title: "Guarantee",
        features: [
          "30-Day Money-Back Guarantee",
          "99.9% Uptime Guarantee",
          "Global Data Centers",
          "24/7 Customer Support",
          "Priority Support"
        ]
      },
      {
        title: "Technical Details",
        features: [
          "200,000 Files And Directories (inodes)",
          "100 PHP Workers",
          "~20,000 Visits Monthly",
          "300 Subdomains",
          "100 MySQL Max User Connections",
          "Unlimited Databases"
        ]
      }
    ]
  }
];

  return (
    <>
      <Row className="text-center d-md-flex justify-content-center align-items-center   py-sm-5 py-2">
        <Col md={10}>
          <h2 className='hed2 m-0 p-0'>Pick Your Perfect Plan</h2>
          <p className="para m-0 p-0">Get started with confidence. Our 30-day money-back guarantee means it's risk-free.</p>
        </Col>
      </Row>
      <Row  className="d-md-flex align-items-center justify-content-center">
        <Col md={10} className="d-md-flex justify-content-center gap-2">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
        </Col>
      </Row>
      </>
  );
};

export default PricingPlans;