import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
// Using your existing image imports
import cli1 from '../../../../public/Image/cli-2 (3).png';
import cli2 from '../../../../public/Image/cli-2 (1).png';
import cli3 from '../../../../public/Image/cli-2 (2).png';
import cli4 from '../../../../public/Image/cli-2 (4).png';
import cli5 from '../../../../public/Image/cli-2 (5).png';
import cli6 from '../../../../public/Image/cli-2 (7).png';
import cli7 from '../../../../public/Image/cli-2 (8).png';
import cli8 from '../../../../public/Image/cli-2 (9).png';
import cli9 from '../../../../public/Image/cli-2 (10).png';
import cli10 from '../../../../public/Image/cli-2 (11).png';
import cli11 from '../../../../public/Image/cli-2 (12).png';

const ClientsSectionLandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Row className="d-md-flex justify-content-center align-items-center pt-md-5 pt-2">
      <div className="text-center">
        <h2 className="hed2 text-center">
          Our Clients
        </h2>
        <p className="text-[#5E5E5E] sm:text-xl text-xs pb-md-0 pb-3">
          From startups to Fortune 350 companies
        </p>
      </div>
      <Col md={10} xs={11}>
        {isMobile ? (
          // Mobile View: Two marquees
          <>
            {/* First Marquee - Left Direction */}
            <Marquee speed={10} direction="left">
              {[cli1, cli2, cli3, cli4, cli5, cli6].map((img, index) => (
                <div
                  key={`left-${index}`}
                  className="mx-0"
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <img src={img} alt={`left-${index}`} className="h-52" />
                </div>
              ))}
            </Marquee>

            {/* Second Marquee - Right Direction */}
            <Marquee speed={10} direction="right">
              {[cli7, cli8, cli9, cli10, cli11].map((img, index) => (
                <div
                  key={`right-${index}`}
                  className="mx-0"
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <img src={img} alt={`right-${index}`} className="h-52" />
                </div>
              ))}
            </Marquee>
          </>
        ) : (
          // Desktop View: Single marquee
          <Marquee speed={10} direction="right">
            {[cli1, cli2, cli3, cli4, cli5, cli6, cli7, cli8, cli9, cli10, cli11].map(
              (img, index) => (
                <div
                  key={index}
                  className="mx-1"
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <img src={img} alt={`desktop-${index}`} className="h-52" />
                </div>
              )
            )}
          </Marquee>
        )}
      </Col>
    </Row>
  );
};

export default ClientsSectionLandingPage;
