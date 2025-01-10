import {Row,Col} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay} from 'swiper/modules';
export default function Section3(){
    return(
        <>
        <Row className='bgphp d-md-flex d-none pb-5'>
      
        <h2 className='hed2 text-white text-center pt-5 pb-3'>The Advantages of PHP Frameworks</h2>

        <Col md={10}>
        <Swiper
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }}
          slidesPerView={3}
          spaceBetween={50}
          modules={[Navigation,Autoplay]}
          navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >



        <div className='d-flex justify-content-center align-items-center gap-4 '> 
        <SwiperSlide >
        <div className='bg-[#ffff]    rounded-3  md:h-[280px] h-[150px]' data-swiper-autoplay="2000"> 
        <div className='bg-[#6891b833] h-20  flex items-center justify-center '>
        <h3 className='hed3  text-center' style={{color:"#3b7fbf"}}>Rapid Development</h3>
        </div>
        <p className='para px-2 pt-2'>PHP frameworks provide a solid foundation for building web applications quickly and efficiently, thanks to their extensive libraries and built-in functionalities.</p>
        </div>
        </SwiperSlide>
       <SwiperSlide>
       <div className=' bg-[#ffff]    rounded-3  md:h-[280px] h-[150px]d-md-block d-none' > 
       <div className='bg-[#6891b833] h-20 flex items-center justify-center'>
       <h3 className='hed3   text-center' style={{color:"#3b7fbf"}}>MVC Architecture </h3>
       </div>
        
        <p className='para  px-2 pt-2'>PHP frameworks follow the Model-View-Controller (MVC) architecture, promoting code organization and separation of concerns, which enhances maintainability and scalability.</p>
        </div>
       </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[#ffff]    rounded-3  md:h-[280px] h-[150px] d-md-block d-none'> 
       <div className='bg-[#6891b833] h-20 flex items-center justify-center'>
       <h3 className='hed3 text-center' style={{color:"#3b7fbf"}}>Security</h3>
       </div>
        <p className='para px-2 py-2 '>PHP frameworks come with built-in security features, such as input validation, CSRF protection, and secure session handling, helping to mitigate common security threats </p>
        </div>
        </SwiperSlide>
          <SwiperSlide>
      <div className=' d-md-block d-none bg-[#ffff]    rounded-3 md:h-[280px] h-[150px]' > 
      <div className='bg-[#6891b833] h-20 flex  items-center justify-center'>
      <h3 className='hed3  text-center' style={{color:"#3b7fbf"}}>Community Support</h3>
      </div>
        <p className='para px-2 py-2'> PHP frameworks benefit from active and vibrant communities of developers, who contribute plugins, extensions, and documentation, making it easier to troubleshoot issues and find solutions.</p>
        </div>
           </SwiperSlide>

        </div>
        </Swiper>
        </Col>
        {/* <img src="Image/PHP-SER.svg" className='img-fluid px-0 w-full' alt='img'/> */}
        </Row>
        </>
    )
}