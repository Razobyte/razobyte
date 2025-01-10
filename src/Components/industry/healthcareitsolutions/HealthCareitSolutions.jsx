import { useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import banner from '../../../../public/Image/healthcare-it-soulstion banner.png'
import img1 from '../../../../public/Image/itsolution1.png';
import Count from '../../HomePages/Count/Count';
import img2 from '../../../../public/Image/itsooutions2.png';
import img3 from '../../../../public/Image/itsolutions3.png';
import img4 from '../../../../public/Image/itsoultioni4.png'
import ScrollTrigger from 'react-scroll-trigger';
import HealthcareSolutionsSection1 from './Section1';
import DigitalMarketingServices from './Section2';
import Partners from './Partners';
import { useNavigate } from 'react-router';

export default function HealthCare(){
    const navigate=useNavigate()

    const [clients, setClients] = useState(false)
    return(
        <>
        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
        <Row className='p-0'>
            <img src={banner} alt="banner" className='img-fluid p-0' />
        </Row>
        <Count clients={clients}/>
        <Row className='flex justify-center items-center py-5'>
            <Col md={5}  sm={10} xs={10}>
            <h1 className='hed2'>Healthcare IT Solutions 
                and Digital Marketing 
                by Razobyte</h1>
                <p className='para'>Welcome to Razobyte, where we redefine healthcare IT and digital marketing solutions. Our specialized expertise empowers healthcare providers to leverage cutting-edge technology and strategic digital marketing to enhance patient care, streamline operations, and drive growth.</p>
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <img src={img1} alt="img1" className='img-fluid' />
            </Col>
        </Row>
        <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf]'>
            <Col md={5} xs={10}>
            <img src={img2} alt="img2" className='img-fluid' />
            </Col>
            <Col md={5} xs={10}>
            <h2 className='hed2 text-white'>Why Healthcare Needs 
            Specialized IT Solutions</h2>
            <p className='para text-white'>  The healthcare industry is evolving rapidly, with technological advancements transforming patient care and operational efficiency. At Razobyte, we understand that healthcare organizations face unique challenges that require tailored IT solutions. Our comprehensive suite of services is designed to address these needs, ensuring that your practice or facility remains at the forefront of innovation.</p>
            </Col>
        
        </Row>
       <HealthcareSolutionsSection1/>
       <DigitalMarketingServices/>
       <Row className='flex justify-center items-center py-5'>
            <Col md={5}  sm={10} xs={10}>
            <h1 className='hed2'>Why Choose Razobyte?</h1>
                <p className='para'>At Razobyte, we are committed to delivering solutions that drive success in the healthcare industry. Our team of experts combines deep industry knowledge with innovative technology and marketing strategies to provide solutions that are not only effective but also aligned with your goals.
                Partner with us to experience the future of healthcare IT and digital marketing. Contact Razobyte today to learn how we can help you achieve excellence in patient care and operational efficiency.</p>
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <img src={img3} alt="img3" className='img-fluid' />
            </Col>
        </Row>
        <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf] mb-5'>
            <Col md={5} xs={10}>
            <div className='border-2 border-white rounded-md flex  items-center justify-center'>
            <img src={img4} alt="img2" className='img-fluid' />
            </div>
            </Col>
            <Col md={5} xs={10}>
            <p className='text-sm  text-white'>Ready to transform your healthcare practice with advanced IT solutions and dynamic digital marketing? Reach out to Razobyte and let's discuss how we can support your journey to success.</p>
            </Col>
        </Row>
        <Partners/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
                <Col md={10} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para pt-2 text-white'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us' onClick={()=>navigate('/contact')}>Contact-us</Button>
                </Col>
            </Row>
        </ScrollTrigger>
        </>
    )
}