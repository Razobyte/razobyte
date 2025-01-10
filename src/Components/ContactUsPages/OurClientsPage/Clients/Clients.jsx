import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Testominials from "../../../HomePages/Testominals/Testomnials";
import {Row,Col,Button}  from 'react-bootstrap';
import Projects2 from "../../../AboutUspages/Projects/Projects2";
import { useNavigate } from "react-router";
import clien1img  from '../../../../../public/Image/clie-3 (3).png';
import clien2img  from '../../../../../public/Image/clie-3 (2).png';
import clien3img  from '../../../../../public/Image/clie-3 (1).png';

export default function Clients(){
    const navigate=useNavigate()
    return(
        <>
        <Banner/>
        <Section/>
        <Testominials/>
        <Projects2 titleProjects="Top Web Design Projects"/>
        <Row className='flex justify-content-center align-items-center py-4 bg-[#5aa1e333]'>
        <h2 className="hed2 text-center">Our Work Speaks for Itself</h2>
        <Col md ={10}>
        <div className='d-md-flex items-center justify-center'>
        <div  className="mt-3">
        <img src= {clien1img} alt=""  className='img-fluid'/>
        <p className='text-[#3b7fbf]  text-center font-[600]'>WEB-BASED APP DEVELOPMENT</p>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study  <RiArrowRightDoubleLine /></Button>
        </div>
        </div>
        <div className="mt-3">
        <img src= {clien2img } alt=""    className='img-fluid'/>
        <p className=' text-[#3b7fbf] text-center font-[600] '>MOBILE APP DEVELOPMENT</p>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study <RiArrowRightDoubleLine /> </Button>
        </div>

        </div>
        <div className="mt-3 d-sm-block d-none">
        <img src= {clien3img} alt=""  className='img-fluid'/>
        <p className='text-[#3b7fbf] text-center font-[580]'>CUSTOM INTEGRATIONS AND 
        ANALYTICS</p>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study <RiArrowRightDoubleLine /></Button>
        </div>

        </div>

        </div>
        </Col>
        </Row>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
        <Col md={10} className='flex items-center justify-center gap-5 py-3'>
            <p className='para pt-2 text-white'>Interested in a little more details, let us know how we can assist you Button</p>
            <Button variant='dark' className='btn-last-banner-contact-Us' onClick={()=>navigate('/contact')}>Contact-us</Button>
        </Col>
    </Row>
        </>
    )
}