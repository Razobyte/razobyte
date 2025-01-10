import React, { useRef } from "react";
import { Row, Col, Card, CardBody, CardTitle } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Testominals/Testomnials.css';
import ratingImg from '../../../../public/Image/star 3.png';
import test1Img from '../../../../public/Image/lar-7.png';
import test2Img from '../../../../public/Image/inverted-commas 1.png';
import test3Img from '../../../../public/Image/Raseo-Technology-Solutions.jpg';
import test4Img from '../../../../public/Image/Eric-yong.jpg';

export default function Testominials() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const testimonials = [
    {
      name: "Alvin Hong",
      title: "Manager",
      rating: 5,
      image: test1Img,
      review: "The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best."
    },
    {
      name: "Eunice Yong",
      title: "Director",
      rating: 5,
      image: test3Img,
      review: "They have been very good to boost my business through SEO campaign and Google adwords, thanks."
    },
    {
      name: "Eric Lim",
      title: "Owner",
      rating: 5,
      image: test4Img,
      review: "They are at their words in terms of providing service and support!! all the best."
    }
  ];

  return (
    <Row className='py-5 justify-content-center align-items-center bg-[#3b7fbf] ' style={{ position: "relative" }}>
      <div className='text-center'>
        <h3 className='hed2 text-light'>TESTIMONIALS</h3>
        <p className='para text-light'>Don't go only with our commitments: Here is what our clients say about us:</p>
      </div>
      <Col md={10} xl={10} xs={10} className='position-relative'>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
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
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }}
         
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center gap-3'>
                <Card className='card-main-Testominals'>
                  <CardBody>
                    <CardTitle>
                      <div className="cardinnerdata d-flex  sm:gap-x-28 gap-x-2">
                        <div className='review p-0'>
                          <h4 className='hed3'>{testimonial.name}</h4>
                          <h5 className='para'>{testimonial.title}</h5>
                          <div className='d-flex items-center justify-center p-0 rating'>
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <img key={i} src={ratingImg} alt="rating" className='img-fluid' />
                            ))}
                          </div>
                        </div>
                        <div className='card-img-testominials'>
                          <img src={testimonial.image} alt="testimonial" className="card-img-testominials-img" />
                        </div>
                      </div>
                    </CardTitle>
                    <div className="testimonial-content">
                      <div>
                        <img src={test2Img} alt="inverted commas" className='img-fluid w-5' />
                      </div>
                      <p className='para'>{testimonial.review}</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div ref={navigationPrevRef} className="custom-swiper-button-prev">
          <IoMdArrowDropleft size={30} />
        </div>
        <div ref={navigationNextRef} className="custom-swiper-button-next">
          <IoMdArrowDropright size={30} />
        </div>
      </Col>
    </Row>
  );
}
