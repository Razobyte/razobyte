import { Row, Col } from 'react-bootstrap'
import '../SecSection/secSection.css'
export default function Sec() {
    return (
        <>
            <Row className=' d-md-flex d-none py-lg-4 justify-content-center align-items-center'>
                <Col md={10} className='py-5 text-center' >
                    <div>
                        <h3 className='text-center hed2'>We Deliver Your Essential Ecommerce Requirement</h3>
                        <p className='para md:text-center  text-justify'>
                            Your trusted partner for top-notch e-commerce solutions. Whether you’re an established enterprise or a budding startup, we are here to empower your online business and drive your success in the digital realm. At RazoByte, we understand the dynamic and ever-evolving nature of the e-commerce landscape. With our expertise and cutting-edge technology, we offer a comprehensive suite of services designed to enhance your online presence, streamline your operations, and maximize your revenue potential.
                        </p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center md:gap-[165px] gap-[50px]'>
                    <div className='d-flex gap-3 img-style-secSection'>
                        <img src="/Image/sec-section-2 (8).png" alt="" className='img-fluid ' />
                        <div className='d-flex flex-col justify-center align-items-center pt-2'>
                            <h3 className='hed3'>Strategy</h3>
                            <p className='para'>Development</p>
                        </div>
                    </div>
                    <div className="d-md-flex d-none gap-3 img-style-secSection">
                        <img src="/Image/sec-section-2 (7).png" alt="" className=' img-fluid '/>
                        <div className='d-flex flex-col justify-center align-items-center pt-2'>
                            <h3 className='hed3'>CustomCart</h3>
                            <p className='para'>Setup</p>
                        </div>
                    </div>
                    <div className='d-md-flex gap-3 img-style-secSection '>
                        <img src="/Image/sec-section-2 (6).png" alt="" className='img-fluid' />
                        <div className='flex flex-col align-items-center justify-content-center pt-2'>
                            <h3 className='hed3 '>ThirdParty</h3>
                            <p className='para'>Integration</p>
                        </div>
                    </div>
                    <div className='d-md-flex gap-3 img-style-secSection'>
                        <img src="/Image/sec-section-2 (5).png" alt="" className=' img-fluid' />
                        <div className='flex flex-col items-center justify-content-center pt-2'>
                            <h3 className='hed3'> e-Store</h3>
                            <p className='para'>Customization</p>
                        </div>
                    </div>
                    </div>
              
                <div className='d-md-flex d-none justify-content-center align-items-center md:gap-[170px] gap-[20px] pt-5'>
                <div className='d-md-flex gap-3 img-style-secSection '>
                    <img src="/Image/Sec-section4.png" alt="" className='img-style-secSection img-fluid w-20' />
                    <div className='d-flex flex-col justify-center align-items-center pt-4'>
                        <h3 className='hed3'>CMS</h3>
                        <p className='para'>Content Managment</p>
                    </div>
                </div>
                <div className="d-md-flex d-none  gap-3 img-style-secSection">
                    <img src="/Image/sec-section-2 (3).png" alt="" className='img-style-secSection img-fluid w-20 bg-[#3b7fbf]' />
                    <div className='d-flex flex-col  justify-center align-items-center pt-4'>
                        <h3 className='hed3'>   MultiSites</h3>
                        <p className='para'>Management</p>
                    </div>
                </div>
                <div className='d-md-flex gap-3 img-style-secSection '>
                    <img src="/Image/sec-section-2 (2).png" alt="" className='img-style-secSection img-fluid w-20' />
                    <div className='flex flex-col align-items-center justify-content-center pt-4'>
                        <h3 className='hed3'>
                            Payment</h3>
                        <p className='para'>GatewayIntegration</p>
                    </div>
                </div>
                <div className='d-md-flex gap-3 img-style-secSection'>
                    <img src="/Image/sec-section-2 (1).png" alt="" className=' img-style-secSection img-fluid w-20' />
                    <div className='flex flex-col items-center justify-content-center pt-5'>
                        <h3 className='hed3'>Advertising</h3>
                        <p className='para'>PPC/SEO And SMO</p>
                    </div>
                </div>
            </div>
               
                    

                </Col>
                
            </Row>


        </>
    )
}