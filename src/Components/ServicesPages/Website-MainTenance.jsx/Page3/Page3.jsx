import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Page3.css';
import performance from '../../../../../public/Image/performance.png';
import Fixes from '../../../../../public/Image/fixesEnhancement.png';
import Content from '../../../../../public/Image/contentBackup.png';
import Funtionality from '../../../../../public/Image/functionality.png';
import Tech from '../../../../../public/Image/supportTech.png';
import Hack from '../../../../../public/Image/hackAndVirusProof.jpeg';
import Mobile from '../../../../../public/Image/mobile.png';
import Increase from '../../../../../public/Image/increaseConversion.png';

const services = [
  {
    image: performance,
    title: 'Performance Checkup',
    description: 'Our intensive maintenance checklist ensures your website performance at its best. All the performance monitoring activities are scheduled through our automated CRM system. Through our CRM system, you will get detailed reports on a monthly basis.'
  },
  {
    image: Fixes,
    title: 'Fixes and Enhancement',
    description: 'To make your website bug free, we do regular bug fixes, website health checkups, and improvements. Our dedicated team takes care of any issue that arises through third-party plugins or by the core itself. Your issue would be resolved at the highest priority.'
  },
  {
    image: Content,
    title: 'Content and Backup',
    description: 'The advantage of our maintenance program is that you can add, edit and update content as and when needed. We take a full website backup prior to any major update. If it is needed, the backup can be on-demand by the client. This will transition your website from a poor user experience to much smoother and better user experience.'
  },
  {
    image: Funtionality,
    title: 'Functionality Check',
    description: 'We check whether all forms are working properly and whether inquiry emails are getting received. We also check for any broken links on the website and rectify it. Broken links are a bad sign for SEO, hence it helps to keep your SEO health score high.'
  },
  {
    image: Tech,
    title: 'Tech Support',
    description: 'Our technical support team will constantly update you via our auto ticket management system. Also, our support team connects through calls or email as required. Through all the mediums, we ensure that the majority of tickets get resolved in 24-48 hours.'
  },
  {
    image: Hack,
    title: 'Hack & Virus Proof',
    description: 'Our Security implementations prevent and protect from hacking, malware, and viruses. In any disgraced situation of hack or malware, our team takes it on most priority to resolve the issue. And well keep in sync with you unless it is 100% hack free.'
  },
  {
    image: Mobile,
    title: 'Mobile & Browser Optimization',
    description: 'We guarantee that you wont be penalized for not having a fully responsive website. If a section is not responsive, we address it so that it is.'
  },
  {
    image: Increase,
    title: 'Increase Conversion Rate',
    description: 'Our expertly-engineered Web Case service will boost your conversion rate by ensuring that everything works smoothly and efficiently.'
  }
];

const Page3 = () => {
  return (
    <>
      <h2 className="text-center mt-5 hed2">The Nine Pillars of Our Web Maintenance Services</h2>

      {/* Main container row with a Col of 10 */}
      <Row className="justify-content-center">
        <Col md={10}>
          {/* Nested Row for services */}
          <Row className="justify-content-center align-items-center">
            {services.map((service, index) => (
              <Col key={index} md={3} xs={8} className="my-3">
                <div className=" service-card d-flex justify-content-center align-items-center   flex-column p-3 text-center  shadow-md border">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h4 className="service-title mb-2 hed3 m-0 p-0 pt-2">{service.title}</h4>
                  <p className="service-description para m-0 p-0">{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <div className="text-center d-flex justify-content-center align-items-enter mt-2 mb-5">
        <Button className="btn2" variant="primary">MAINTAIN MY WEBSITE TODAY</Button>
      </div>
    </>
  );
};

export default Page3;
