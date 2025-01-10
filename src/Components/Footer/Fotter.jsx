// Footer.js
import React, { useState } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import '../Footer/Footer.css';
import FotterImg from '../../../public/Image/LogoRazobyte.png';
import GoogImg from '../../../public/Image/google 1.png';
import RatingImg from '../../../public/Image/rating 1.png';
import soPartnerImg from '../../../public/Image/social 1.png';
import PrtnerImg from '../../../public/Image/logo-footer (1).png';
import Prtner1Img from '../../../public/Image/logo-footer (1).png';
import Prtner2Img from '../../../public/Image/logo-footer (1).png';
import instrlogo from '../../../public/Image/instagram (1) 1.png';
import fbLogo from '../../../public/Image/FB logo final.png';
import linkedin from '../../../public/Image/LinkedIn Logo final.png';
import Twitter from '../../../public/Image/Twitter_new_X_logo Final.png';
import ScrollToTop from '../ScrollTop';

const servicesData = [
  {
    title: "Design",
    path: "/services/design",
    items: [
      { name: "UI/UX Design", path: "/services/design/ui/ux-design" },
      { name: "Website Design", path: "/services/design/website-design" }
    ]
  },
  {
    title: "Ecommerce",
    items: [
      { name: "Shopify", path: "/services/ecommerce-solutions/shopify-development" },
      { name: "OpenKart", path: "/services/ecommerce-solutions/opencart-development" },
      { name: "WooCommerce", path: "/services/ecommerce-solutions/wocommerce-development" },
      { name: "Magneto", path: "/services/ecommerce-solutions/Magneto-development" },
      { name: "PrestaShop", path: "/services/remainpage" }
    ]
  },
  {
    title: "Development",
    items: [
      { name: "Website Development", path: "/services/development/website-dvelopment" },
      { name: "CodeIgniter Website", path: "/services/development/codeigniter-website-development" },
      { name: "Informative Website", path: "/" },
      { name: "PHP Website", path: "/services/development/php-development" },
      { name: "HTML & CSS Website", path: "/services/development/html-css-website" },
      { name: "Laravel Website", path: "/services/development/laravel-devlopment" },
      { name: "React JS Website", path: "/services/development/reactjs-development" },
      { name: "Ruby on Rails", path: "/services/remainpage" },
      { name: "E-Commerce Website", path: "/services/development/ecommerce-website-development" }
    ]
  },
  {
    title: "Digital Marketing",
    path: "/services/digital-marketing",
    items: [
      { name: "Search Engine Optimization", path: "/services/digital-marketing/seo-search-engine-optimization" },
      { name: "Search Engine Marketing", path: "/services/digital-marketing/sem-search-engine-marketing" },
      { name: "Social Media Optimization", path: "/services/digital-marketing/smo/social-media-optimization" },
      { name: "Social Media Marketing", path: "/services/digital-marketing/smm/social-media-marketing" },
      { name: "Email Marketing", path: "/services/digital-marketing/email-marketing" }
    ]
  },
  {
    title: "Mobile Applications",
    items: [
      { name: "Android App", path: "/services/mobile-application/android-applications-development" },
      { name: "iOS App", path: "/services/mobile-application/ios-applications-development" }
    ]
  },
  {
    title: "Maintenance & Support",
    items: [
      { name: "Website Maintenance", path: "/services/maintenance-and-support/website-maintenance" },
      { name: "Mobile App Maintenance", path: "/services/maintenance-and-support/mobile-app-maintenance" },
      { name: "Domain & Hosting Maintenance", path: "/services/maintenance-and-support/domain-and-hosting-maintenance" },
      { name: "Payment Gateway", path: "/services/payment-gateway" }
    ]
  },
  {
    title: "Game Development",
    items: [
      { name: "2D", path: "#" },
      { name: "3D", path: "#" },
      { name: "Meta Verse", path: "#" }
    ]
  }
];
export default function Footer() {



  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />

      <Row className="justify-content-center align-items-start py-sm-5 py-1 row"
        style={{ backgroundColor: "#3b7fbf", }}>
        <Col md={10} xs={10}>
          {/* Company Info Section */}
          <Row className="mb-1">
            <Col md={6}>
              <img src={FotterImg} alt="Razobyte Logo" className="img-fluid mb-sm-3 mb-0" style={{ height: "80px", width: "268px" }} />
              <p className="text-light para mb-sm-3 mb-1">Your trusted partner for comprehensive IT and digital solutions. With a passion for technology and a dedication to excellence, we empower businesses to thrive in the digital age.</p>
              <button className="fsbtn sm:mb-0 mb-0" onClick={() => navigate('/contact')}>Get in Touch</button>
            </Col>
            <Col md={5} className="d-md-flex d-none flex-column justify-content-center" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.893)' }}>
              <div className='d-flex align-items-center bg-[#ffffff48] px-3 py-0 mb-3 rounded'>
                <div>
                  <img src={GoogImg} alt="google-img" className="img-fluid" />
                </div>
                <div className="Rating">
                  <img src={RatingImg} alt="rating-img" style={{ marginBottom: '0px' }} />
                  <p className="text-[#fff] text-md font-medium">Google Rating</p>
                </div>
                <div className="Border px-2 ps-3">
                  <div className='partner'>
                    <img src={soPartnerImg} alt="partner" className="pt-1" />
                    <p className="text-[#fff] text-md font-medium pt-[13px]">partner</p>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap col-md-12 col-lg-12 col-xl-12 align-items-start justify-content-around'>
                <img src={PrtnerImg} alt="" className='img-fluid' />
                {/* <img src={Prtner1Img} alt="" className='img-fluid' />
                <img src={Prtner2Img} alt="" className='img-fluid' /> */}
              </div>
            </Col>
          </Row>
          {/* Company Links Section */}
          <Row className="mb-1">
            <Col md={12}>
              <h3 className="Companytext3 text-light hed3 mb-2">
                <span className="text-light hed1">C</span>ompany
              </h3>
              <ul className="d-flex flex-wrap para text-white justify-start
               sm:gap-x-14 gap-x-1 link">
                {/* <li onClick={()=>navigate('/digital-performance-marketing')}>LandingPage</li> */}
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/privacy-policy')} >Privacy Policy</li>
                <li onClick={() => navigate('/about/about-us')}>About us</li>
                <li onClick={() => navigate('/')}>Services</li>
                <li onClick={() => navigate('/portfolio')}>Portfolio</li>
                <li onClick={() => navigate('/blogmain')}>Blogs</li>
                <li onClick={() => navigate('/careers')}>Careers</li>
                <li onClick={() => navigate('/contact')}>Reach us</li>
              </ul>
            </Col>
          </Row>

          {/* Services Section */}
          <Row className="mb-1">
            <Col>
              <h3 className="Companytext3 text-light hed3 mb-2">
                <span className="text-light hed1">S</span>ervices
              </h3>

              {/* Mobile Accordion */}
              <div className="d-md-none">
                <Accordion className="custom-accordion">
                  {servicesData.map((category, idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={idx}>
                      <Accordion.Header>
                        <Link to={category.path} className="text-white text-decoration-none">
                          <span>{category.title}</span>
                        </Link>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled mb-0">
                          {category.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-white py-2"
                              onClick={() => navigate(item.path)}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>

              {/* Desktop Services Grid */}
              <Row className="d-none d-md-flex">
                {servicesData.map((category, idx) => (
                  <Col md={3} key={idx} className="mb-4">
                    <h4 className="hed3 fw-bold text-white mb-3">
                      <Link to={category.path} className="text-white text-decoration-none">
                        {category.title}
                      </Link>
                    </h4>
                    <ul className="para text-white link list-unstyled">
                      {category.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          onClick={() => navigate(item.path)}
                          className="mb-2"
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Get in Touch Section */}
          <Row className="mb-1">
            <Col>
              <h3 className="Companytext2 text-light hed3 mb-2">
                <span className="text-light hed1">G</span>ET IN TOUCH
              </h3>
              <Row>
                <Col md={6}>
                  <h4 className="text-light hed3 mb-3"><span className="text-light hed1" style={{ opacity: '0.6' }}>G</span>urugram</h4>
                  <p className='text-white para'>Unit 243 B, Tower , Spaze I-Tech Park, Sector 49, Sohna Road, Gurugram 1220018 Haryana</p>
                  <p className='text-white para'>Phone: +91-01244084508</p>
                  <p className='text-white para'>Email: contact-us@razobyte.com</p>
                  <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                </Col>
                <Col md={6}>
                  <h4 className="text-light hed3 mb-3"><span className="text-light hed1" style={{ opacity: '0.6' }}>A</span>hemdabad</h4>
                  <p className='text-white para'>C Siddhi Vinayak Tower, Sarkhej Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051</p>
                  <p className='text-white para'>Phone: +91-01244084508</p>
                  <p className='text-white para'>Email: contact-us@razobyte.com</p>
                  <p className='text-white para'>Monday - Saturday (24 Hours)</p>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Social Media Links */}
          <Row className="mb-1">
            <Col className="d-flex justify-content-center gap-4 py-1" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.493)', borderBottom: '1px solid rgba(255, 255, 255, 0.493)' }}>
              <div className="d-flex justify-content-center icon my-3">
                <a href="https://www.instagram.com/razobyte" target="_blank" rel="noopener noreferrer">
                  <img src={instrlogo} alt="Instagram" className="img-fluid" />
                </a>
                <a href="https://www.facebook.com/razobyte" target="_blank" rel="noopener noreferrer">
                  <img src={fbLogo} alt="Facebook" className="img-fluid" />
                </a>
                <a href="https://www.linkedin.com/company/razobyte/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="img-fluid" />
                </a>
                <a href="https://twitter.com/razobyte" target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} alt="Twitter" className="img-fluid" />
                </a>
              </div>
            </Col>
          </Row>

          {/* Copyright Section */}
          <Row className='d-flex justify-content-center align-items-center'>
            <Col md={12} xs={10} className="text-light d-flex justify-content-between gap-sm-5 gap-0 align-items-center">
              <p className="mb-2 text-xs">© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
              <a className="mb-2 text-sm text-white text-decoration-none cursor-pointer" onClick={() => navigate('/privacy-policy')}>Privacy Policy</a>
              <p className="mb-2 d-flex align-items-center gap-2">
                <CiMail size={15} />
                <a href="mailto:contact-us@razobyte.com" className="text-light text-sm">contact-us@razobyte.com</a>
              </p>
              <p className="mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt size={15} />
                <a href="tel:+918448158188" className="text-light text-sm">+91-8448158188</a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>

  );
}