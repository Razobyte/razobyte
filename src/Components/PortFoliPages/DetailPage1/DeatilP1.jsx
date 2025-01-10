import {Row,Col,Button} from 'react-bootstrap'
import Blog from '../../Blog/Blog2';
import Section from './Section';
import { CiHome } from "react-icons/ci";
import tem1Image from "..//..//../../public/Image/tem-1.png";
import tem2Image from "..//..//../../public/Image/Temp-2.png";


export default function DeatilP1({title}){
    return(
       <>
       <Row className='justify-content-center align-items-center bgSection gap-5'>
       <Col md={7}>
       <div>
       <h2 className='hed2 text-white'>BLUE ILLUSION</h2>
       <ul className='d-md-flex gap-3 para text-white'>
       <li><CiHome fontSize={25} /></li>
       <li>Home /</li>
       <li>Projects /</li>
       <li>E-Commerce Development</li>
       </ul>
       </div>
       <div>
       <img src={tem1Image} alt="" className='img-fluid' />


       </div>

       </Col>
       <Col md={4} className='pt-5 d-md-flex align-items-center justify-content-center'>
      <img src={tem2Image} alt="" className='img-fluid' />
       </Col>
       </Row>
       <Section/>
       <Blog title="Blogs"/>
       <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center gap-5 '>
       <Col md={12} className='d-md-flex justify-content-center align-items-center py-lg-3 fw-bold  text-light' style={{ letterSpacing: "2px",gap:"150px" }}>
           <p className='my-2'>Interested in a little more details, let us know how we can assist you Button</p>
           <Button variant='dark' className='my-2 py-2 btn-last-banner-contact-Us'>Contact-us</Button>
       </Col>
   </Row>
       
  
       </>
    )
}