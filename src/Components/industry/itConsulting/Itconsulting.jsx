import { useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import banner from '../../../../public/Image/IT-Consulting-banner.png'
import img1 from '../../../../public/Image/itconsulting (1).png';
import Count from '../../HomePages/Count/Count';
import img2 from '../../../../public/Image/itconsulting (2).png';
import img3 from '../../../../public/Image/itconsulting (3).png';
import img4 from '../../../../public/Image/itconsulting (4).png'
import ScrollTrigger from 'react-scroll-trigger';
import Partners from '../healthcareitsolutions/Partners';
import { useNavigate } from 'react-router';
import ItCosultingSolutionsSection1 from './Section1';

export default function ItConsultingServices(){
    const navigate=useNavigate()

    const [clients, setClients] = useState(false)
    return(
        <>
        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
        <Row className='p-0'>
            <img src={banner} alt="banner" className='img-fluid p-0' />
        </Row>
        <Count clients={clients}/>
        <div className='my-20'>

        </div>
        <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf]'>
            <Col md={5} xs={10}>
            <img src={img1} alt="img1" className='img-fluid' />
            </Col>
            <Col md={5} xs={10}>
            <h2 className='hed2 text-white'>IT Consulting Services 
            by Razobyte</h2>
            <p className='para text-white'>
            At Razobyte, we offer expert IT consulting services designed to help businesses navigate their technology challenges, optimize their IT infrastructure, and achieve their strategic goals. Our seasoned consultants provide tailored solutions that align with your business objectives, ensuring that your technology investments deliver maximum value and drive operational success.</p>
            </Col>
        
        </Row>
        <Row className='flex justify-center items-center py-5'>
            <Col md={5}  sm={10} xs={10}>
            <h1 className='hed2'>Why Choose Razobyte 
            for IT Consulting?
               </h1>
                <p className='para'>In a rapidly evolving technological landscape, businesses need a strategic partner who understands their unique needs and can provide effective solutions. Razobyte’s IT consulting services are designed to address your specific challenges, improve efficiency, and support your long-term success.</p>
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <img src={img2} alt="img2" className='img-fluid' />
            </Col>
        </Row>
       
       <ItCosultingSolutionsSection1/>
       <Row className='flex justify-center items-center py-5'>
            <Col md={5}  sm={10} xs={10}>
            <h1 className='hed2'>Why Partner with 
            Razobyte?</h1>
                <p className='para'>At Razobyte, our IT consulting services are driven by a commitment to excellence and a deep understanding of various industries. Our team combines technical expertise with strategic insight to deliver solutions that are both effective and aligned with your business objectives.</p>
            </Col>
            <Col md={5}  sm={10} xs={10}>
            <img src={img4} alt="img3" className='img-fluid' />
            </Col>
        </Row>
        <Row  className='flex justify-center items-center py-5 bg-[#3b7fbf] mb-5'>
            <Col md={5} xs={10}>
            <div className=' rounded-md flex  items-center justify-center'>
            <img src={img3} alt="img2" className='img-fluid' />
            </div>
            </Col>
            <Col md={5} xs={10}>
            <h2 className='hed2 text-white'>Ready to Optimize 
            Your IT?</h2>

            <p className='text-sm  text-white'>
            Contact Razobyte today to discover how our IT consulting services can help you achieve your goals and enhance your technology infrastructure. Let’s work together to drive your business forward.
            </p>
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