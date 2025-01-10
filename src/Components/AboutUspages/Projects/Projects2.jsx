import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../AboutUsPages/Projects/Projects.css';
import webprojImg from '../../../../public/Image/po3.jpg';
import webproj1Img from '../../../../public/Image/po5.jpg';
import webproj2Img from '../../../../public/Image/po6.jpg';
import webproj3Img from '../../../../public/Image/po1.jpg';

export default function Projects2({ titleProjects }) {
    return (
        <Row 
            className='pb-sm-5 py-2 justify-content-center align-items-center' 
            style={{ 
                backgroundImage: "url('Image/grey.png')", 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "55%", 
                backgroundPosition: "right" 
            }}
        >
            <div className='text-center'>
                <h2 className='hed2 pb-sm-5 pb-1'>{titleProjects}</h2>
            </div>
            <Col md={10} xs={10} > 
                <Swiper
                   modules={[Pagination, Scrollbar,Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    scrollbar={{draggable:true}}
                    pagination={{ clickable: true }}
                    autoplay
                  
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
                            slidesPerView: 3,  // Show 3 slides on larger screens
                            spaceBetween: 40
                        }
                    }}
                    className='pb-5'
                >
                    <SwiperSlide>
                        <div className='img-1-style'>
                            <h3>ColorBar Website</h3>
                            <img src={webprojImg} alt="ColorBar Website" className='img-fluid' style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='img-1-style'>
                            <h3>Cissern Website</h3>
                            <img src={webproj2Img} alt="Cissern Website" className='img-fluid' style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-1-style">
                            <h3>King Clean</h3>
                            <img src={webproj3Img} alt="King Clean" className='img-fluid' style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='img-1-style'>
                            <h3>MDRC</h3>
                            <img src={webproj1Img} alt="MDRC" className='img-fluid' style={{ maxHeight: '400px', objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Col>
        </Row>
    );
}