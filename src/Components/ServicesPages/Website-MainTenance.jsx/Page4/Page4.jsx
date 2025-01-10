import React, { useRef } from "react";
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'; // Import icons
import 'swiper/css';
import 'swiper/css/navigation';
import "./Page4.css";
import slide1 from "../../../../../public/Image/protect.png";
import slide2 from "../../../../../public/Image/update.png";
import slide3 from "../../../../../public/Image/report.jpg";
import slide4 from "../../../../../public/Image/Support.png";
import slide5 from "../../../../../public/Image/initiate.jpg";

const Page4 = () => {
  const slides = [
    {
      image: slide1,
      title: "Protect",
      content: "Through the program, we ensure that the website codes, database, and credentials are fully secured and maintained."
    },
    {
      image: slide2,
      title: "Update",
      content: "In this phase, our team does all the required updations to the website requested by you."
    },
    {
      image: slide3,
      title: "Report",
      content: "We believe in keeping complete transparency and we provide up-to-date Monthly / Quarterly Website Traffic reports."
    },
    {
      image: slide4,
      title: "Support",
      content: "Our Website Care team is there to support you with any technical difficulties with the website's performance."
    },
    {
      image: slide5,
      title: "Initiate",
      content: "Our technical team initiates a maintenance project through the CRM system."
    }
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Row className="justify-content-center align-items-center py-2" style={{backgroundColor:"#f5f5f5"}}>
      <Col md={11} lg={10} xs={10} className="position-relative">
        <h2 className="text-center mb-4 text-3xl font-bold">Our Services</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="service-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide my-2 bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="p-4">
                  <img 
                    src={slide.image} 
                    alt={`${slide.title} icon`} 
                    className="mx-auto mb-4 h-20 w-20 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">{slide.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{slide.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div ref={navigationPrevRef} className="custom-swiper-button-prev">
          <IoMdArrowDropleft size={30} />
        </div>
        <div ref={navigationNextRef} className="custom-swiper-button-next">
          <IoMdArrowDropright  size={30}/>
        </div>
      </Col>
    </Row>
  );
};

export default Page4;
