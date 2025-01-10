import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import {Row,Col} from 'react-bootstrap'
// Import Swiper styles
import 'swiper/swiper-bundle.css';


// Install Swiper modules



export default function Section2() {
  return (
    <>
      <Row className='bgphp2 py-5'>
      <h2 className='hed2 text-white text-center pb-3'>Why Php Reigns Supreme in Web Development</h2>
        <Col md={10} xs={12} sm={12}  lg={12}>
        <Swiper 
        modules={[Navigation,Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        navigation={true}
        
      >
            <SwiperSlide className='mr-5'>
            <div className='bg-[#ffff] rounded-2  md:h-[320px] p-3  h-[280px] md:w-auto  w-[200px]' >
            <img src="Image/php-4 (4).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Versatility and Flexibility</h3>
            <p className='para'>
            PHP empowers developers to create a wide range of web applications, from simple websites to complex enterprise solutions, thanks to its extensive library of functions and frameworks.
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide className='mr-5'>  
            <div className='bg-[#ffff] rounded-2  md:h-[320px] p-3  h-[280px] md:w-auto  w-[200px]'>
            <img src="Image/php-4 (3).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Cost-Effectiveness</h3>
            <p className='para'>
            Being open-source, PHP eliminates the need for expensive licensing fees, making it a cost-effective option for businesses of all sizes.s 
            </p>
            </div></SwiperSlide>
            <SwiperSlide className='mr-5'> 
              <div className='bg-[#ffff] rounded-2   md:h-[320px] p-3  h-[280px] md:w-auto  w-[200px]'>
            <img src="Image/php-4 (2).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Rapid Development</h3>
            <p className='para'>
            PHP's intuitive syntax and vast ecosystem of tools and frameworks enable rapid prototyping and development, reducing time-to-market for your projects . 
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide className='mr-5'> 
              <div className='bg-[#ffff] rounded-2   md:h-[320px] p-3 h-[280px] md:w-auto  w-[200px]'>
            <img src="Image/php-4 (1).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Scalability and Performance</h3>
            <p className='para'>
            With its lightweight footprint and efficient execution, PHP offers seamless scalability and superior performance, ensuring your website can handle increased traffic and workload.
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide className='mr-5'> 
            <div className='bg-[#ffff] rounded-2   md:h-[320px] p-3 h-[280px] md:w-auto  w-[200px] '>
          <img src="Image/php-4 (5).png" alt="" className='img-fluid w-20' />
          <h3 className='hed3 text-[#3b7fbf]'>Strong Community Support</h3>
          <p className='para'>
          PHP boasts a vibrant community of developers who actively contribute to its growth and evolution, providing valuable resources, support, and updates.
          </p>
          </div>
          </SwiperSlide>        
          </Swiper>
        </Col>
      </Row>
    </>
  );
}
