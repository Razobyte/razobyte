import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import bgimg from '../../../../public/Image/representations-user-experience-interface-design-bg.png';

export default function WhyChooseUs() {

  const slides = [
    {
      title: "We keep it simple",
      description: "Good design isn't complicated. We create designs that are clear, clean, and easy to understand."
    },
    {
      title: "We focus on you",
      description: "Every project is a collaboration. We're here to bring your ideas to life, not ours."
    },
    {
      title: "We're detail-oriented",
      description: "From the colors to the fonts, we pay attention to every little detail so your design works perfectly."
    }
  ];

  return (
    <div className="w-screen relative">
      <Row className="items-center d-md-flex d-none">
        {/* Left Column with Background Image (70% Width) */}
        <Col
          xs={12} md={6}
          className="relative"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
          }} 
        >
        <div className="flex items-center relative top-12 lg:left-[272px]  md:left-48 justify-center text-center m-0 p-0 z-10">
          <div className="h-px flex-grow bg-[#ffff]  bg-opacity-70   max-w-24"></div>
          <h2 className="px-1 hed2 text-center text-white m-0">
          Why Choose <span className='text-black'>Us?</span>
          </h2>
          <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
        </div>
          {/* Text Overlay on Left Column */}
          <div className="absolute inset-0  max-w-sm flex items-center justify-start text-white lg:ms-11 md:ms-4 z-20">
            <p className="text-xl font-normal">
              When we design, we work very hard to make the interface experience feel like there's a human on the other end, not a computer.
            </p>
          </div>
        </Col>

        {/* Right Column with Swiper Slides */}
        <Col
          xs={12} md={6} lg={6}
          className="relative p-6"
        >
          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full absolute lg:-left-56 md:-left-20  "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className='pt-12'>
                <div className="bg-[#FFBE9D] rounded-lg p-1 shadow-md lg:h-[200px] md:h-[250px] flex flex-col justify-center transition-transform hover:scale-105 items-center">
                  <h3 className="text-lg font-semibold mb-3 text-center">{slide.title}</h3>
                  <p className="text-black text-base text-center">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
}
