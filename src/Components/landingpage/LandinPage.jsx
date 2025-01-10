import { Row, Col } from 'react-bootstrap'
import banner from '../../../public/Image/razobyte banner-Landing-page.png'
import { useState,useRef } from 'react'
import Count from '../HomePages/Count/Count'
import ScrollTrigger from 'react-scroll-trigger'
import image from '../../../public/Image/landinpage-about-us.png'
import icon from '../../../public/Image/lazy-lading-1 (4).png'
import icon1 from '../../../public/Image/lazy-lading-1 (3).png'
import icon2 from '../../../public/Image/lazy-lading-1 (2).png'
import icon3 from '../../../public/Image/lazy-lading-1 (1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Marquee from 'react-fast-marquee'
import Testominials from '../HomePages/Testominals/Testomnials'
import ClientsSection from '../HomePages/clients/Clients'



export default function LandingPage() {
    const [clients, setClients] = useState(false)
    const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

    const blogPosts = [
        {
        
            title: 'Why IT Solutions Matter',
            excerpt: "Your business deserves a solid foundation, and that's where our IT expertise comes in. From streamlining operations to enhancing security, our tailor-made IT solutions ensure your business runs smoothly and efficiently, allowing you to focus on what matters most—growth and innovation. "
        },
        {

            title: 'The Power of Digital Marketing',
            excerpt: 'The digital landscape is your playground, and we’re here to help you conquer it. Our dynamic digital marketing strategies are designed to boost your online presence, engage your target audience, and drive measurable results. '
        },
        {
            title: 'The Razobyte Advantage',
            excerpt: 'Combining top-tier IT solutions with powerful digital marketing, Razobyte Softech transforms challenges into opportunities. We’re not just a service provider—we’re your strategic partner in success.'
        }
        
    ];
    return (
        <>
            <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)}></ScrollTrigger>
            <Row className='px-0'>
                <img src={banner} alt="banner" className='img-fluid px-0' />
            </Row>
            <Count clients={clients} />

            <Row className='justify-content-center align-items-center py-3'>
                <Col md={5} xs={10}>
                    <h2 className='hed2 text-left'>About Us</h2>
                    <h5 className='hed5 text-muted'>A Leading IT Powerhouse: Where Technology Meets Marketing Magic</h5>
                    <p className='para'>In a world that's shrinking by the second, new trends are popping up faster than ever—especially with AI leading the charge. The question is, how can businesses ensure their websites stay ahead of the curve?
                        The answer is simple: be the trendsetter! Trends come in waves, and people catch on in three stages: Early Adopters, Followers, and the Rest. The real game-changers? The Early Adopters. That's where we come in.
                        At Razobyte Softech, our expert team of marketers and developers are always on the pulse of what's next. We don't just follow trends; we anticipate them, ensuring our clients' websites are not only relevant but cutting-edge. With us, your brand won't just keep up—it'll lead the way.</p>


                </Col>
                <Col md={5} xs={10}>
                    <img src={image} alt="lnding-page-about-us" className='img-fluid' />
                </Col>

            </Row>
            <Row className='justify-content-center align-items-center py-3 d-md-flex d-none mb-4'>
                <h2 className='hed2 text-center'>Discover Our Stellar Services</h2>
                <h5 className='hed5 text-muted text-center'>Ready to Elevate Your Brand? Dive into our powerhouse offerings designed to supercharge your success</h5>
                <Col md={10} xs={10} className=' d-flex justify-content-center align-items-center gap-md-4 gap-1'>
                    <div style={{ backgroundColor: "#3b7Fbf" }} className='p-md-3 p-3 rounded col-md-3 col-xs-3
                    d-sm-block d-none'>
                        <img src={icon} alt="img" className='img-fluid' />
                        <p className='para text-white pt-2'>Website Design & Application
                            Design & Development</p>
                    </div>
                    <div style={{ backgroundColor: "#3b7Fbf" }} className='p-md-4 p-3 rounded col-md-2'>
                        <img src={icon1} alt="img" className='img-fluid' />
                        <p className='para text-white pt-2 '>Digital marketing</p>
                    </div>
                    <div style={{ backgroundColor: "#3b7Fbf" }} className='p-md-3 p-2 rounded col-md-2'>
                        <img src={icon2} alt="img" className='img-fluid' />
                        <p className='para text-white pt-2 '>Performance
                            Marketing</p>
                    </div>
                    <div style={{ backgroundColor: "#3b7Fbf" }} className='p-md-4 p-2 rounded col-md-2 d-sm-block d-none '>
                        <img src={icon3} alt="img" className='img-fluid' />
                        <p className='para text-white pt-2 '>IT Consulting</p>
                    </div>
                   

                </Col>


            </Row>
            <Row className='justify-content-center align-items-center py-3 mb-5'
              style={{
                backgroundImage: "linear-gradient( to bottom, #3b7fbf, #4ECFFF)", // Adjust colors and direction as needed
              }} >
                <h2 className='hed2 text-white text-center pt-3'>Uncover Your Business Potential with 
                Razobyte Softech</h2>
            <Col md={10} className='justify-content-center align-items-center py-3'>
                <div className="position-relative">
                <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400:{
              slidesPerView: 3,
              spaceBetween: 20,

            }

          }}
          className="pb-4"
        >
                        {blogPosts.map((post, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-lg d-flex flex-column w-100 bg-white p-3 ">
                                    <div className="p-2">
                                        <h3 className="hed3">{post.title}</h3>
                                        <p className="para">{post.excerpt}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Navigation Buttons */}
                    <div ref={navigationPrevRef} className="custom-swiper-button-prev"><MdArrowBackIos/></div>
                    <div ref={navigationNextRef} className="custom-swiper-button-next"><MdArrowForwardIos/></div>
                </div>
            </Col>
        </Row>
       <ClientsSection/>
       <div className='mb-5'
                ></div>
                <Testominials/>
                <div className='mb-5'
                ></div>

       
            <ScrollTrigger />



        </>
    )
}
