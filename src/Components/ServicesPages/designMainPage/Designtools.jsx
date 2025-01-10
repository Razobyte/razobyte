import React from 'react';
import adobe from '../../../../public/Image/adobe-creative.png';
import figma from '../../../../public/Image/figma_5968705 1.png';
import sketch from '../../../../public/Image/sketch 1.png';
import canva from '../../../../public/Image/Canva-logo-PNG 1.png';
import 'animate.css';
import { Row, Col } from 'react-bootstrap';

export default function Designtools() {
  return (
    <>
      <Row className='d-flex justify-content-center align-items-center py-5 bg-white'>
        <div className="flex items-center justify-center text-center m-0 p-0">
          <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70  max-w-24"></div>
          <h2 className="px-1 hed2 text-center m-0">
            Our Design Tools
          </h2>
          <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
        </div>
        <p className="text-[#5E5E5E] text-center sm:text-xl text-xs pt-1 pb-4 m-0">We use the best tools to bring your vision to life</p>
        <Col md={10} className='d-flex justify-content-evenly align-items-center'>
          {/* Adobe */}
          <div
            className="flex flex-col justify-center items-center  hover:animate-bounce duration-1000"
          // Add delay using inline style (for example 1 second)
          >

            <a href="https://www.adobe.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-[#FFDFB0]  relative  md:w-28 w-20 h-20 md:h-28 p-1 rounded-full box-border">
                <img src={adobe} alt="Adobe" className="img-fluid md:w-24 xs:w-16 w-16 h-16 xs:h-16 md:h-24 object-cover" />
              </div>
            </a>
            <h4 className="text-black md:text-2xl text-base font-semibold mt-2 text-center">Adobe</h4>
          </div>

          {/* Figma */}
          <div className='flex flex-col justify-center items-center hover:animate-bounce duration-1000'>
            <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center  md:w-28 w-20 h-20 md:h-28 border-[18px] border-[#BCBCBC60] 
               bg-white relative  rounded-full box-border p-0 m-0">
                <img src={figma} alt="Figma" className="md:w-24 w-16 h-16 md:h-24 object-cover p-0 m-0" />
              </div>
            </a>
            <h4 className="text-black md:text-2xl text-base font-semibold mt-2 text-center">Figma</h4>
          </div>

          {/* Sketch */}
          <div className='flex flex-col justify-center items-center hover:animate-bounce duration-1000'>
            <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center md:w-28 md:h-28 w-20 h-20 p-1 border-[18px] border-[#CBE6FF] 
               bg-white relative  rounded-full box-border">
                <img src={sketch} alt="Sketch" className="md:w-24  w-16 h-16 md:h-24 object-cover  mt-2" />
              </div>
            </a>
            <h4 className="text-black md:text-2xl text-base font-semibold mt-2 text-center">Sketch</h4>
          </div>

          {/* Canva */}
          <div className='flex flex-col justify-center items-center hover:animate-bounce duration-1000'>
            <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
              <div className="flex justify-center items-center bg-[#FFCBCE]  relative  md:w-28 w-20 h-20 md:h-28 p-1 rounded-full box-border">
                <img src={canva} alt="Canva" className="img-fluid md:w-24 w-16 h-16 md:h-24 object-cover" />
              </div>
            </a>
            <h4 className="text-black md:text-2xl  text-base font-semibold mt-2 text-center">Canva</h4>
          </div>
        </Col>
      </Row>
    </>
  );
}
