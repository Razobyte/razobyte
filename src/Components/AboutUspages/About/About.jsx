import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Sections from '../Sections/Sections';
import Projects from '../Projects/Projects2';
import Testominials from '../../HomePages/Testominals/Testomnials';
import AbBannerImage from '../../../../public/Image/Ab-banner.png';
import '../About/About.css'
import { useNavigate } from 'react-router';
import Count from '../../HomePages/Count/Count';

export default function About() {
    const navigate=useNavigate()
    const [clients, setClients] = useState(false)
    return (
        <>
        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)}>
        <Row className='d-md-flex d-none items-center justify-center' style={{ backgroundImage: `url(${AbBannerImage})`, height: "398px", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <Col md className='px-0'>;
                    <div  className='flex items-center justify-center'>
                    <h2 className='hed1 text-white'>About Us</h2>
                    </div>
                </Col>
            </Row>
            <Row className='d-sm-none d-flex items-center justify-center'>
                <Col md className='px-0'>;
                <img src={AbBannerImage} alt="" className='img-fluid' />
                    
                </Col>
            </Row>
            <Count clients={clients}/>
            <Sections />
            <Projects  titleProjects="Top Web Design Projects"/>
            <Testominials/>
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