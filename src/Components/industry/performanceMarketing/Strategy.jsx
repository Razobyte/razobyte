import React from "react";
import icon1 from '../../../../public/Image/stargtegt-icon (11).png';
import icon2 from '../../../../public/Image/stargtegt-icon (10).png';
import icon3 from '../../../../public/Image/stargtegt-icon (9).png';
import icon4 from '../../../../public/Image/stargtegt-icon (8).png';
import icon5 from '../../../../public/Image/stargtegt-icon (7).png';
import icon6 from '../../../../public/Image/stargtegt-icon (6).png';
import icon7 from '../../../../public/Image/stargtegt-icon (5).png';
import icon8 from '../../../../public/Image/stargtegt-icon (4).png';
import icon9 from '../../../../public/Image/stargtegt-icon (3).png';
import icon10 from '../../../../public/Image/stargtegt-icon (2).png';
import icon11 from '../../../../public/Image/stargtegt-icon (1).png';

import { Row, Col } from "react-bootstrap";
const performanceItems = [
  { id: 1, title: "Conversion Rate Optimization", icon: icon1 },
  { id: 2, title: "Cost Per Acquisition (CPA)", icon: icon2 },
  { id: 3, title: "Ad Spend<br /> Optimization", icon: icon3 },
  { id: 4, title: "Return on Investment (ROI)", icon: icon4 },
  { id: 5, title: "Lead Generation", icon: icon5 },
  { id: 6, title: "Attribution Analysis", icon: icon2 },
  { id: 7, title: "Click-Through Rate (CTR) Enhancement", icon: icon6 },
  { id: 8, title: "Landing Page Optimization", icon: icon7 },
  { id: 9, title: "A/B Testing", icon: icon8 },
  { id: 10, title: "Search Engine Optimization (SEO)", icon: icon9 },
  { id: 11, title: "Remarketing<br />Retargeting", icon: icon10 }, // Add a line break
  { id: 12, title: "Customer Lifetime<br /> Value (CLV)", icon: icon11 },
];


const PerformanceMarketingStrategy = () => {
  return (
    <Row className="bg-[#ffff] md:py-10 sm:py-5  py-3 justify-content-center">
      {/* Outer Col with 10 width */}
      <Col xs={12} lg={10}>
        {/* Header */}
        <div className="text-center md-mb-2 mb-0">
          <h2 className="hed2 text-center">
            Grow Smarter with Performance Marketing
          </h2>
          <p className="text-[#5E5E5E] sm:text-xl text-xs pb-md-0 pb-1">
            Achieve Real Results with Targeted Campaigns
          </p>
        </div>

        {/* Grid for Cards */}
        <Row>
          {performanceItems.map((item) => (
            <Col
              key={item.id}
              xs={4} // Full width on extra small screens
              sm={6}  // 2 cards per row on small screens
              md={4}  // 3 cards per row on medium screens
              lg={3}  // 4 cards per row on large screens
              className="mb-4 d-flex justify-content-center"
            >
              <div className="bg-white shadow-md rounded-xl p-4 w-100 text-center hover:shadow-lg
               transition-shadow duration-300 flex flex-col justify-center items-center">
                <img src={item.icon} className="md:w-16 md:h-16 w-10 h-10 mb-3" />
                <h3
                  className="md:text-base text-xs font-semibold text-[#3b7fbf] break-words"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>



              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default PerformanceMarketingStrategy;
