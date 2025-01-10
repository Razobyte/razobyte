import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bg from '../../../../public/Image/bg-footer.png';
import FotterImg from '../../../../public/Image/LogoRazobyte.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import instrlogo from '../../../../public/Image/instagram (1) 1.png';
import fbLogo from '../../../../public/Image/FB logo final.png';
import linkedin from '../../../../public/Image/LinkedIn Logo final.png';
import Twitter from '../../../../public/Image/Twitter_new_X_logo Final.png';
import bg2 from '../../../../public/Image/FOOTER-BG-MOBILE.png'

const LayoutFooter = () => {
  return (
    <>
    <Row
      className=" w-screen d-md-flex d-none flex-col py-sm-0 py-5 justify-center items-center"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: "border-box"
      }}
    >
        
      <div className="col-md-10 col-10 w-full gap-5 flex">
        <Row className="w-full">
          <Col xs={12} md={4} className="d-flex   flex-column justify-sm-center items-sm-center">
            <img
              src={FotterImg}
              alt="Razobyte Logo"
              className="md:h-24 h-auto w-auto object-cover mt-sm-0 mt-5"
            />
            <p className="sm:text-lg text-sm font-normal text-white mb-sm-3 mb-0">
            Your trusted partner for comprehensive IT and digital solutions. 
            With a passion for technology and a dedication to excellence, 
            we empower businesses to thrive in the digital age.
            </p>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column items-sm-center items-start">
            <h2 className="text-white md:text-4xl text-2xl mt-sm-4  mt-0 font-bold text-center">Other Links</h2>
            <div className="flex flex-column justify-center  mt-2 relative">
              <h6 className="flex text-white gap-2">
                <span><IoIosArrowRoundForward /></span> Terms & Conditions
              </h6>
              <h6 className="flex items-center text-white gap-2">
                <span><IoIosArrowRoundForward /></span> Terms Privacy Policy
              </h6>
              <div className='text-white md:text-lg font-semibold '>Email : info@razobyte.com</div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column items-sm-center items-start">
            <h2 className="text-white md:text-4xl text-2xl  mt-sm-4  mt-2 font-bold text-center">Follow  In Us</h2>
            <div className="flex space-x-5 mt-2 justify-center">
              <a href="https://www.instagram.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={instrlogo} alt="Instagram" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://www.facebook.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={fbLogo} alt="Facebook" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://www.linkedin.com/company/razobyte/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://twitter.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="h-10 w-10 object-contain rounded-md" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Row className='w-screen flex items-center justify-center  mt-5' style={{borderTop:"1px solid white",borderBottom:"1px solid white",opacity:"0.5"}}>
        <p className='text-center pt-3 text-white testx-lg'>© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
    </Row>
    </Row>
    <Row
      className=" w-screen d-md-none d-flex flex-col  justify-center items-center"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: "border-box"
      }}
    >
        
      <div className="col-12 w-full mx-auto  flex">
        <Row className="w-full">
          <Col xs={12} md={4} sm={11} className="d-flex flex-column ">
            <img
              src={FotterImg}
              alt="Razobyte Logo"
              className="md:h-24 h-auto w-auto object-cover"
            />
            <p className="sm:text-lg text-sm font-normal text-white mb-sm-3 mb-0">
            Your trusted partner for comprehensive IT and digital solutions. 
With a passion for technology and a dedication to excellence, 
we empower businesses to thrive in the digital age.
            </p>
          </Col>

         
         <div className='flex justify-center mt-4'>
         <Col xs={6} md={4} className="d-flex flex-column items-sm-center items-start">
            <h2 className="text-white md:text-4xl text-2xl mt-sm-4  mt-0 font-bold text-center">Other Links</h2>
            <div className="flex flex-column justify-center  mt-2 relative">
              <h6 className="flex text-white gap-2 text-xs">
                <span><IoIosArrowRoundForward /></span> Terms & Conditions
              </h6>
              <h6 className="flex items-center text-white text-xs gap-2">
                <span><IoIosArrowRoundForward /></span> Terms Privacy Policy
              </h6>
              <div className='text-white text-sm font-semibold '>Email : info@razobyte.com</div>
            </div>
          </Col>
          <Col xs={6} md={4} className="d-flex flex-column items-sm-center items-start">
            <h2 className="text-white md:text-4xl text-2xl  mt-sm-4  mt-2 font-bold text-center">Follow In Us</h2>
            <div className="flex space-x-2 mt-2 justify-center">
              <a href="https://www.instagram.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={instrlogo} alt="Instagram" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://www.facebook.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={fbLogo} alt="Facebook" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://www.linkedin.com/company/razobyte/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-10 w-10 object-contain rounded-md" />
              </a>
              <a href="https://twitter.com/razobyte" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="h-10 w-10 object-contain rounded-md" />
              </a>
            </div>
          </Col>
         </div>


        </Row>
      </div>
      <Row className='w-screen flex items-center justify-center  mt-5' style={{borderTop:"1px solid white",borderBottom:"1px solid white",opacity:"0.5"}}>
        <p className='text-center pt-3 text-white testx-lg'>© COPYRIGHT 2023 RAZOBYTE SOFTTECH. ALL RIGHTS RESERVED.</p>
    </Row>
    </Row>
   
    </>
  );
};

export default LayoutFooter;
