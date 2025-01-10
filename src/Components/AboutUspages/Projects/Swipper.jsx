import { Row, Col } from 'react-bootstrap';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Projects/Projects.css'
export default function Swipper() {
  return (
    <Row className='justify-content-center py-5'>
    <div className='text-center pb-5'>
    <h3>Top web Desgine Projects</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia!</p>
    </div>
      <Col md={7}>
        <Swiper  className='d-block'
         modules={[Navigation, Pagination, Scrollbar]}
         spaceBetween={20}
          slidesPerView={3}
          navigation
          Ally
          scrollbar={{draggable:true}}
          style={{spaceBetween: 0}} 
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>

          <h3 className='pr-head3'>MDRC Website Design</h3>

            <img src="Image/King-Clean.png" alt="" style={{width:"80%",height:"70vh", boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",borderRadius:"5px"}} />
          </SwiperSlide>
          <SwiperSlide>
          <h3  className='pr-head3'>MDRC</h3>
          <img src="Image/Ab-6.png" alt="" style={{width:"100%",height:"60vh",boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",borderRadius:"5px"}} />
     
          </SwiperSlide>
          <SwiperSlide>
          <h3 className='pr-head3' >MDRC Design</h3>
            <img src="Image/Ab-6.png" alt=""  style={{width:"100%", height:"60vh", 
            boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",borderRadius:"5px",paddingBottom:"30px"}}/>
          
    
          </SwiperSlide>
          <SwiperSlide>
          <h3  className='pr-head3'>MDRC Website Design</h3>
            <img src="Image/Ab-6.png" alt="" style={{width:"100%",height:"60vh",boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",borderRadius:"5px"}} />
        
          </SwiperSlide>
        
          <SwiperSlide>
          <h3  className='pr-head3'>MDRC</h3>
            <img src="Image/Ab-6.png" alt="" style={{width:"100%",height:"60vh",boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.2)",borderRadius:"10px"}} />
        
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
}
