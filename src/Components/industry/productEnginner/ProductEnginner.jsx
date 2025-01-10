import { useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import banner from '../../../../public/Image/Product-Engineering-banner.png'
import img1 from '../../../../public/Image/product-enginner (1).png';
import Count from '../../HomePages/Count/Count';
import img2 from '../../../../public/Image/product-enginner (2).png';
import img3 from '../../../../public/Image/product-enginner (3).png';
import img4 from '../../../../public/Image/product-enginner (4).png'
import ScrollTrigger from 'react-scroll-trigger';
import ProdcutEnginneringServices from './Section1';
import Partners from '../healthcareitsolutions/Partners';
import { useNavigate } from 'react-router';
import IndustriesWeServe from './Section2';

export default function ProductEnginner(){
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
            <h1 className='hed2'>Product Engineering 
            at Razobyte</h1>
                <p className='para'>At Razobyte, we offer end-to-end product engineering services that help businesses transform their innovative ideas into successful products. Our approach combines deep technical expertise with strategic insights to deliver high-quality, scalable solutions that meet your business needs and drive growth.</p>
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <img src={img4} alt="img1" className='img-fluid' />
            </Col>
        </Row>
        <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf]'>
            <Col md={5} xs={10}>
            <img src={img3} alt="img2" className='img-fluid' />
            </Col>
            <Col md={5} xs={10}>
            <h2 className='hed2 text-white'>Why Choose Razobyte 
            for Product Engineering?</h2>
            <p className='para text-white'>In today’s competitive landscape, the ability to bring products to market quickly and efficiently is crucial. Our product engineering services are designed to provide comprehensive support throughout the product lifecycle, from initial concept to final launch and beyond. We leverage cutting-edge technologies and methodologies to ensure that your product is not only functional but also poised for success in the market.</p>
            </Col>
        
        </Row>

       <ProdcutEnginneringServices/>
       <IndustriesWeServe/>
       <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf] mb-5'>
       <Col md={5} xs={10}>
       <h2 className='hed2 text-white'>Why Partner with 
       Razobyte?</h2>
            <p className='text-sm  text-white'>Choosing Razobyte for your product engineering needs means partnering with a team that is dedicated to delivering excellence. We combine technical proficiency with a strategic approach to ensure that your product not only meets but exceeds market expectations. Our commitment to quality, innovation, and customer satisfaction drives our approach, making us a trusted partner in your product development journey.</p>
            </Col>
            <Col md={5} xs={10}>
            <div className=' flex  items-center justify-center'>
            <img src={img2} alt="img2" className='img-fluid' />
            </div>
            </Col>
        </Row>
       <Row className='flex justify-center items-center pb-20'>
           
            <Col md={5}  sm={10} xs={10}>
            <img src={img1} alt="img3" className='img-fluid' />
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <h1 className='hed2'>Ready to Bring Your 
            Product to Life?</h1>
                <p className='para'>Contact Razobyte today to discuss your product engineering needs. Our team is here to help you transform your ideas into successful products with our comprehensive engineering solutions.</p>
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