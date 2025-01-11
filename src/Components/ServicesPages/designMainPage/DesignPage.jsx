import React from 'react';
import vdo from '../../../../public/Image/ui ux banner with new border 1.mp4'
import { Row, Col } from 'react-bootstrap';
import img from '../../../../public/Image/design-section2.png';
import img2 from '../../../../public/Image/design-section1.png';
import '../../../Components/ServicesPages/digitalMarketing/Digital.css'
import WhatweOffer from './WhatweOffer';
import Designtools from './Designtools';
import ModalExample from '../../Modal/Modal';
import WhyChooseUs from './WhyChooseUs';
import Contact from '../../HomePages/Contact/Contact';
import TestimonialsSection from '../../industry/performanceMarketing/TestominailsNew';
import men from '../../../../public/Image/men.png';
import bg from '../../../../public/Image/bg-ground.png'

function DesignPage() {
  return (
    <>
      <Row className="p-0">
        <video
          src={vdo}
          type="video/mp4"
          className="w-full p-0" // Full height of the viewport
          loop
          autoPlay
          muted
          playsInline // Helps for mobile browsers
        >
          Your browser does not support the video tag.
        </video>
      </Row>
      <Row className='d-md-flex justify-content-center align-items-center py-5'>
        <div className="flex items-center justify-center text-center ">
          <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70  max-w-24"></div>
          <h2 className="px-1 hed2 text-center">
            Welcome to Our Design & Branding Studio</h2>
          <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
        </div>
        <p className="text-[#5E5E5E] text-center sm:text-xl text-xs p-0 m-0">Where imagination meets function.</p>
        <Col md={10} xs={12}>
          <div className="img-div flex p-0 justify-center items-center zoom-container">
            <div className="animate__animated zoom-animation p-0">
              <img src={img} alt="what-we-do" className="object-cover w-auto" />
            </div>
          </div>
          <div className='text-center justify-center pt-2 flex items-center'>
            <p className='text-black md:text-lg font-medium text-sm max-w-4xl  text-center'>Design is more than just making things look pretty. It's about creating experiences that feel
              natural, effortless, and intuitive. Whether it's a website, an app, or a digital product, we help you
              design experiences that people actually enjoy using.</p>
          </div>

        </Col>

      </Row>
      <Row className='d-md-flex justify-content-center align-items-center pb-5'>
        <div className="flex items-center justify-center text-center">
          <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70 max-w-24"></div>
          <h2 className="px-1 hed2 text-center">How We Do It</h2>
          <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70"></div>
        </div>
        <p className="text-[#5E5E5E] text-center sm:text-xl text-xs pb-md-0 pb-3">
          Design doesn't have to be complicated. We like to keep things clear, focused, and effective.
        </p>

        <Col md={10} xs={12}>
          <div className="relative  w-full max-w-6xl mx-auto">
            <div className="div d-md-block d-none">
               {/* Left Side Button */}
            <div className="absolute top-8 left-10 -translate-y-1/2 animate-pulse duration-[2000ms] ease-in-out">
              <div className="relative">
                <div className="bg-[#76769E] w-64 text-center text-white px-10 py-3 rounded-full text-lg font-medium " >
                  We Listen First
                </div>
                <div className="absolute -bottom-1.5 -right-2 border-2 border-[#76769E] w-full h-full rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right Side Button */}
            <div className="absolute top-10 right-24 -translate-y-1/2 animate-pulse duration-[2000ms] ease-in-out">
              <div className="relative">
                <div className="bg-[#14237B] w-64 text-center text-white px-8 py-1 rounded-full text-lg font-medium">
                  We Create With Purpose
                </div>
                <div className="absolute -bottom-1.5 -right-2 border-2 border-[#14237B] w-full h-full rounded-full -z-10"></div>
              </div>
            </div>

            {/* Bottom Left Button */}
            <div className="absolute bottom-12 left-10 animate-pulse duration-[2000ms] ease-in-out">
              <div className="relative flex flex-col justify-center items-center">
                <div className="bg-[#502419]  text-white text-center px-8 py-1 rounded-full text-lg font-medium 
                w-64">
                  We Test, Learn, and Improve
                </div>
                <div className="absolute -bottom-1.5 -right-2 border-2 border-[#651D13] w-full h-full rounded-full -z-10"></div>
              </div>
            </div>

            {/* Bottom Right Button */}
         
            <div className="absolute bottom-12 right-28 animate-pulse duration-[2000ms] ease-in-out">
              <div className="relative flex flex-col items-center justify-center">
                <div className="bg-[#ef5350] w-64  text-white px-8 py-1 rounded-full text-lg font-medium text-center
              ">
                  We Bring Your Brand to Life
                </div>
                <div className="absolute -bottom-1.5 -right-2 border-2 border-[#E8505B] w-full h-full rounded-full -z-10"></div>
              </div>
            </div>

            </div>
           
            {/* Center Image */}
            <div className="img-div flex justify-center items-center">
              <img src={img2} alt="what-we-do" className="w-auto object-cover h-auto" />
            </div>
          </div>
        </Col>
      </Row>
      <WhatweOffer/>
      <Designtools/>
      <Row className='bg-[#3b7fbf] py-4 flex justify-center items-center'>
          <Col md={10} className='flex flex-md-row flex-column justify-between items-center'>
            <h4 className='sm:text-3xl font-semibold text-white'>Start Your Project Today!</h4>
            <ModalExample 
            buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
            subheadingForm="Let's Discuss Your Goals & Provide a Quote" 
            className="btnmain bg-white text-[#3b7fbf] sm:px-0 px-3"/>
          </Col>
        </Row>
        <WhyChooseUs/>
        <Contact/>
        <TestimonialsSection/>
        <Row className='justify-content-center align-items-center mt-5'>
  <Col md={10} className='d-md-flex d-none justify-content-center align-items-center relative top-5 rounded-md'
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "184px" // Adjust this based on your design
    }}
  >
    {/* Image */}
    <div className='d-lg-flex d-none  justify-center absolute left-2 bottom-0'>
      <img src={men} alt="men" className='h-52 w-auto' />
    </div>
    
    {/* Text */}
    <div className='text-left '>
      <p className='md:text-3xl sm:text-2xl font-semibold text-base text-white lg:ps-48 pt-20 sm max-w-2xl'>
        Let’s Create Something Great Together
      </p>
    </div>
    
    {/* Button */}
    <div className='text-center flex justify-center items-center pt-10'>
      <ModalExample
        buttonLabel="BOOK A FREE SESSION"
        headingform="Book Your Session"
        className="bg-white font-extrabold text-[#455A64] hover:text-[#3b7fbf] py-2 px-3"
      />
    </div>
  </Col>
</Row>

   




    </>
  )
}
export default DesignPage
