import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Row, Col } from "react-bootstrap";

const CommonSection = ({ title, services, bgName, para }) => {
  const navigate = useNavigate();
  return (
    <Row className={`flex justify-center items-center md:py-12 py-3 w-screen overflow-hidden ${bgName}`}>
      <Col md={10} xs={12}>
        {/* Title */}
        <h3 className="hed2  pt-3 text-center mb-0">
          {title}
        </h3>
        <p className="md:text-lg sm:text-base text-xs  sm:font-normal font-medium text-[#5E5E5E] 
        text-center mb-8">{para}</p>


        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.link)}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg
               p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
              />
              {/* Title */}
              <h3 className="text-sm sm:text-base font-medium text-blue-600 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div
  className={`md:hidden flex flex-wrap ${services.length % 3=== 0 ? "justify-start" : "justify-center"}`}
>
  {services.map((service, index) => (
    <div
      key={index}
      onClick={() => navigate(service.link)}
      className="flex flex-col items-center justify-content-center cursor-pointer basis-1/3 mb-3"
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-12 h-12 mb-2"
      />
      {/* Title */}
      <h3 className="text-sm sm:text-base font-medium text-blue-600 text-center">
        {service.title}
      </h3>
    </div>
  ))}
</div>


      </Col>
    </Row>
  );
};

export default CommonSection;
