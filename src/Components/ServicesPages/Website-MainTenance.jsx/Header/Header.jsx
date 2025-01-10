import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
import image from '../../../../../public/Image/maintenance.jpg';
import './Header.css'

const Page5 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Row className="align-items-center justify-content-center py-sm-3 py-2" style={{ backgroundColor: "#3b7fbf" }}>
                <Col md={5} xs={12}> 
                    <h1 className="text-white hed2">Website Maintenance Services With 100% Website Care and Support</h1>
                    <p className="text-white hed3  fw-medium">Let our Experts take care of your website maintenance needs with our comprehensive packages.</p>
                    
                    <div className="d-flex flex-wrap gap-sm-2 gap-0 mb-sm-4 mb-0">
                        {["Monthly Backup", "Security Scanning", "Performance Optimization", "24/7 Support", "Content Updates", "SEO Monitoring"].map((feature, index) => (
                            <p key={index} className="d-flex align-items-center text-white me-3 mb-2">
                                <FaCheckCircle className="me-2" size={14} /> {feature}
                            </p>
                        ))}
                    </div>
                    
                    <div className="d-flex jjustify-content-center align-itmes-center gap-sm-3 gap-1 mb-3 mt-sm-3 mt-1">
                <Button className=" btm px-2" variant='dark' onClick={()=>navigate('/contact')}>Get a Quote</Button>
                <Button variant='dark' className=" btm " onClick={()=>navigate('/about/about-us')}>Explore Packages</Button>
                </div>
                </Col>
                <Col md={5} xs={12}>
                    <img className="maintenance-banner-img" 
                    src={image}  
                    style={{objectFit:"contain"}} alt="Website Maintenance" />
                </Col>
            </Row>

            

           
            </>
      
    );
};

export default Page5;