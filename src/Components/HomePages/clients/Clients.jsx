import React from 'react';
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

const ClientsSection = () => {
  return (
    <Row
      className="d-md-flex d-none justify-content-center align-items-center py-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
          url('/Image/Rectangle 51 (1).png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center mb-4">
        <h2 className=" hed2 text-light fs-1 fw-bold mb-3">Our Clients</h2>
        <p className="text-light fs-5 mb-3">
          From startups to Fortune 350 companies
        </p>
      </div>
      <Col md={12}>
        {/* First Marquee - Right Direction */}
        <Marquee speed={30} className="mb-5" direction="right">
          {[cli1, cli2, cli3, cli4, cli5, cli6,cli7,cli8,cli9,cli10,cli11].map((img, index) => (
            <div 
              key={index} 
              className="mx-3"
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <img
                src={img}
                alt={`client ${index + 1}`}
                style={{
                  borderRadius: '20px',
                  objectFit: 'contain',
                  maxHeight:"120px",
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          ))}
        </Marquee>

        {/* Second Marquee - Left Direction */}
        <Marquee speed={20} direction="left" >
        {[cli1, cli2, cli3, cli4, cli5, cli6,cli7,cli8,cli9,cli10,cli11].map((img, index) => (
            <div 
              key={index} 
              className="mx-3"

              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
             
            >
              <img
                src={img}
                alt={`client ${index + 7}`}
                style={{
                  borderRadius: '20px',
                  maxHeight:"120px",
                  objectFit: 'cover',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          ))}
        </Marquee>
      </Col>
    </Row>
  );
};

export default ClientsSection;