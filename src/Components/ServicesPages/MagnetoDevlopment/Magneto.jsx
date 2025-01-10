import React,{useRef} from 'react';
import { Row, Col,Button } from 'react-bootstrap';
import banner from '../../../../public/Image/Magento-Development-website-banner.png';
import magnetoawardwinign from '../../../../public/Image/magnetoawardwining.png';
import bg from '../../../../public/Image/magentobg.png'
import {FaLongArrowAltRight } from 'react-icons/fa';
import magneto from '../../../../public/Image/magneto.png';
import magneto1 from '../../../../public/Image/magneto1.png';
import magneto2 from '../../../../public/Image/magneto2.png';
import magneto3 from '../../../../public/Image/magneto3.png';
import magneto4 from '../../../../public/Image/magneto4.png';
import magneto5 from '../../../../public/Image/magneto5.png';
import '../../DevelopmentsPages/Development.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router';
import Shopify10Img from '../../../../public/Image/Shopify (3).png';
import Shopify11Img from '../../../../public/Image/Shopify (2).png';
import Shopify12Img from '../../../../public/Image/Shopify (1).png';
import Blog from '../../Blog/Blog2';



export default function Magneto() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigate=useNavigate()
  const services = [
    {
      title: "Custom Magento Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing"
    },
    {
      title: "Magento E-commerce Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing"
    },
    {
      title: "Magento Cloud Hosting",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Intuitive Magento UI/UX Design",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Seamless Third Party Integration",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing"
    },
    {
      title: "Theme and Extension Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing"
    },
    {
      title: "Magento App Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Upgrade and Migration Processes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing"
    }
  ];
  return (
    <>
    <Row className='p-0 d-lg-none  position-relative'>
      <img src={banner} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[10px]  top-[5px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#3b7fbf]">Magento Development</h2>
            </div></Col>
    </Row>
      <Row
        className="d-lg-flex d-none justify-center items-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0">
          <div className="absolute top-[20px] left-20 w-[50%]">
            <h2 className="hed1 text-[#3b7fbf]">Magento Development</h2>
            <p className="hed3 text-left font-[550] d-md-block d-none">
              Kick-start your business by launching  <br /> an e-commerce store with Shopify
            </p>
            <p className="para text-left d-md-block d-none">
              Bring in an array of versatile features to set up an online store rapidly
              and successfully with Shopify development services
            </p>
          </div>
        </Col>
      </Row>
      <Row className='flex justify-center items-center py-sm-5 py-2'>
        <Col md={10}>
          <h2 className='hed2 text-center'>Boost Sales with Top-notch Shopify App Development</h2>
          <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards</p>
        </Col>
      </Row>
      <Row className='flex justify-center items-center align-items-center pb-5'>
        <Col md={12} xs={10}>
          <div className='d-md-flex justify-center items-center'>
            <div className='col-md-5 col-10'>
            <h2 className='hed2 text-md-left'>Award-winning Magento 
            Development Company</h2>
              <p className='para text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nihil asperiores enim a, excepturi cumque error quae numquam sunt, dolore animi deserunt, dolorum dicta ad beatae aliquam aliquid nam!</p>
              <p className='para text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi animi minima, commodi quia quasi ipsum enim praesentium magnam ut rerum!</p>
              <p className='para text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque quam impedit rem est neque deserunt quaerat explicabo quia commodi.</p>
            </div>
            <div className='col-md-5 col-10'>
              <img src={magnetoawardwinign} alt="magnetoawardwining" className='img-fluid' />

            </div>
          </div>



        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${bg})`,
          backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
        <Col md ={10} className='d-flex justify-content-evenly align-items-center flex-col py-3'>
          <div>
            <h2 className='hed2 text-white text-center'>Hire Veteran Magento Web Developers</h2>
            <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. </p>

          </div>
          <div className='d-flex justify-content-center align-items-center gap-2'>
          <button  onClick={()=>navigate('/services/ecommerce-solutions/shopify-development')} className='d-flex justify-content-center align-items-center text-[#3b7fbf] font-semibold bg-[#ffff]  py-2 px-5 rounded-md md:text-xl text-sm'>Hire Shopify Development<FaLongArrowAltRight /></button>
          </div>

        </Col>

      </Row>
     
      <Row className='d-md-flex d-none justify-content-center align-items-center py-5'>
        <Col md={10} className='position-relative'>
          <h3 className='hed2 text-center'>Enlist Avant-garde Magento Development Capabilities</h3>
          <p className='para text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, vitae?</p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className='pb-5'
          >
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center'>
                <img src={magneto} alt="" className='img-fluid w-[60px]' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>Mobile First Design</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae vero nisi earum? Asperiores, quos!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center'>
                <img src={magneto1} alt="" className='img-fluid w-[60px]' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>Responsive Design</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea ullam, iste aut in ratione.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center '>
                <img src={magneto2} alt="" className='img-fluid w-[60px]' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>SEO Optimized</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste nulla nam repudiandae omnis quidem!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center'>
                <img src={magneto3} alt="" className='img-fluid w-[60px]' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>Captivating Landing Pages</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dicta earum ratione dolorem officia eligendi!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center '>
                <img src={magneto4} alt="" className='img-fluid w-[50px] pt-3' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>Single Page Checkouts</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam veritatis quidem enim. Quas, alias.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-md p-2 rounded-md'>
              <div className='d-flex flex-col items-center '>
                <img src={magneto5} alt="" className='img-fluid w-[50px] pt-3' />
                <h3 className='text-center font-semibold text-md md:text-2xl'>E-commerce Web Design</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sit iusto, dolorem ullam ad maxime.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div ref={navigationPrevRef} className="custom-swiper-button-prev">
            {/* Add your custom left arrow icon here */}
            <IoIosArrowBack size={30} />
          </div>
          <div ref={navigationNextRef} className="custom-swiper-button-next">
            {/* Add your custom right arrow icon here */}
            <IoIosArrowForward size={30} />
          </div>
        </Col>
      </Row>
      <div className="bg-gradient-to-b mb-5  row from-[#3b7fbf] to-[#4ECFFF] py-16 position-relative overflow-hidden justify-content-center align-items-center">
        <div className='col-md-10'> 
        <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-xl font-bold text-white text-center mb-1">Our Magento Development Services</h2>
        <p className="text-white text-center mb-12 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Row className="g-3">
          {services.map((service, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <div className="bg-white rounded-lg p-4 h-full shadow-lg">
                <h3 className="sm:text-lg text-base font-semibold text-[#3b7fbf] mb-3">{service.title}</h3>
                <p className="text-gray-600  fw-normal">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      </div>
      <div className="position-absolute bottom-0 left-0 w-full h-12 bg-white" style={{clipPath: "ellipse(70% 100% at 50% 100%)"}}></div>
   

      <Row className='d-flex justify-content-center align-items-center py-4 laravelSection12'>
      <Col md={10}>
          <h3 className='hed2 text-white text-center'>Related Services</h3>

          <div className='d-md-flex flex-col flex-sm-row justify-content-center align-items-center'>
              <div className='laravelSection13 cursor-pointer' onClick={()=>navigate('/services/ecommerce-solutions/wocommerce-development')}>
                  <img src=  {Shopify10Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center' >WooCommerce Development</h3>
                  <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards.</p>
              </div>
              <div className='laravelSection13 cursor-pointer' onClick={()=>navigate('/services/ecommerce-solutions/shopify-development')}>
                  <img src= {Shopify11Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center'>Shopify <br />
             Development</h3>
                  <p className='para text-center'>Kick-start your business by launching an e-commerce store with Shopify. Bring in an array of versatile features to set up an online store rapidly and successfully with Shopify development services.</p>
              </div>
              <div className='laravelSection13 d-md-flex d-none'>
                  <img src={Shopify12Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center'>Joomla <br /> Development</h3>
                  <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
              </div>
          </div>
      </Col>
  </Row>
  <Blog title="Blogs"/>
    </>
  );
}
