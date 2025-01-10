import { Row, Col, Button, Carousel } from 'react-bootstrap'
import './Search.css'
import '../SEM/SEM.css'
import Blog from '../../Blog/Blog2'
import { useNavigate } from 'react-router';
import BannerImg from '../../../../public/Image/seoBanner.png';
import incrsdImg from '../../../../public/Image/seo-logo.jpeg';
import incrsdImg1 from '../../../../public/Image/Smo-mainpart-2 (5).png';
import incrsdImg3 from '../../../../public/Image/Smo-mainpart-2 (4).png'
import incrsdImg4 from '../../../../public/Image/Smo-mainpart-2 (3).png';
import incrsdImg5 from '../../../../public/Image/Smo-mainpart-2 (2).png';
import Proj1Img from '../../../../public/Image/Sem-top-pr-1.png';
import Proj2Img from '../../../../public/Image/Sem-top-pr-2.png';
import Proj3mg from '../../../../public/Image/img (11).png';
import Proj4Img from '../../../../public/Image/img (13).png';
import Proj5Img from '../../../../public/Image/img (9).png';
import Proj6Img from '../../../../public/Image/img (12).png';
import Proj7Img from '../../../../public/Image/img (15).png';
import Proj8Img from '../../../../public/Image/projall1.png';
export default function SearchEngineOptimization() {
    const navigate = useNavigate()
    return (
        <>
            <Row className='flex items-center align-items-center justify-center p-0'>
                    <img src={BannerImg} alt="" className='img-fluid p-0' />
            </Row>
            <Row className='justify-content-center align-items-center py-5 '>
                <Col md={10}>
                    <h1 className='text-center hed2 py-4'>Search Engine Optimization</h1>
                    <p className='para'>
                        With more than 8.5 billion searches on Google per day, The world has switched to online mode. From carrots to cars, everything can
                        be ordered at the convenience of people’s living room chairs. So, as a business owner,
                         you are bound to question how we can
                        participate in the digital race.
                    </p>
                    <p> With a team of industry experts at Razobyte, we provide our clients with a strategic roadmap to the No. 1 spot. From content
                            strategy to creating quality backlinks. Our SEO experts showcase unparalleled excellence in Search Engine Optimization, whether
                            it’s On page SEO or Off-page SEO. What makes Razobyte one of the most sought-after SEO Agencies is the dedication and hard
                            work our team shows toward every project..</p>
                    <div className='d-md-flex d-none items-center justify-center gap-4'>
                        <div className='seomainpart'>
                            <img src={incrsdImg} alt="" className='img-fluid w-20' />
                            <p className='para  text-[#3b7fbf]'>
                                Increased
                                Conversions</p>
                        </div>
                        <div className='seomainpart'>
                            <img src={incrsdImg1} alt="" className='img-fluid w-50' />
                            <p className='para text-[#3b7fbf]'>Improved visibility</p>

                        </div>
                        <div className='seomainpart'>
                            <img src={incrsdImg3} alt="" className='img-fluid w-50' />
                            <p className='para  text-[#3b7fbf]'>Increased brand
                                awareness and
                                value</p>
                        </div>
                        <div className='seomainpart'>
                            <img src={incrsdImg4} alt="" className='img-fluid w-50' />
                            <p className='para  text-[#3b7fbf]'>Long-Term results
                            </p>
                        </div>
                        <div className='seomainpart'>
                            <img src={incrsdImg5} alt="" className='img-fluid w-50' />
                            <p className='para  text-[#3b7fbf]'>Recurring audience</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center bgsectionSeo align-items-center gap-md-5 py-5'>
                <Col md={4} className='d-sm-none '>
                    <img src="/Image/pngegg (47) 2.png" alt="" className='img-fluid d-flex justify-content-center align-items-center' />
                </Col>
                <Col md={6}>
                    <h2 className='text-center hed2'>On-Page SEO</h2>
                    <p className='text-muted para'>We optimize the website for the search engine with strategically
                        targetted and keyword oriented content that is written specifically keeping the client’s 
                        need and goals in mind. The content is fully authentic and written by the finest content
                         writers with years of industry specific experience. We ensure that all the pages are
                          optimized i.e. have meta description, H1 Title, Meta title etc.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={4} className='d-none d-sm-flex' >
                    <img src="/Image/pngegg (47) 2.png" alt="" className='img-fluid d-flex justify-content-center align-items-center' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-md-5 py-5'>
                <Col md={4}  >
                    <img src="/Image/Img3.png" alt="" className='img-fluid d-flex justify-content-center align-items-center' />
                </Col>
                <Col md={6}>
                    <h2 className='text-center hed2'>Off-Page SEO</h2>
                    <p className='para text-muted'>With the best SEO experts with more than 10+ experience 
                        
                        in the industry, we provide our clients with high quality backlinks and off-page activities. 
                        
                        The articles are specially written for off-page submission keeping the nature, audience and 
                        theme of the host websites in mind. We partner with a wide range of high quality host 
                        websites to help our clients reach their target audience in a cost effective manner.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center  bgsectionSeo align-items-center gap-md-5 py-5'>
                <Col md={4} className='d-sm-none d-flex'>
                    <img src="/Image/ig5.png" alt="" className='img-fluid d-flex justify-content-center align-items-center' />
                </Col>
                <Col md={6}>
                    <h2 className='text-center hed2'>Technical SEO</h2>
                    <p className='para text-muted'>We provide technical solutions to boost the search engine visbility for our client’s website. Our team of industry experts carefully analyze the website for the techniacal errors and irregularities that impact the website’s performance, speed or functionality..</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <img src="/Image/ig5.png" alt="" className='img-fluid d-md-flex  d-none justify-content-center align-items-center' />
                </Col>

            </Row>
            <Row className='justify-content-center align-items-center gap-md-5 py-5'>
                <Col md={4}  >
                    <img src="/Image/seo-banner-technical.png" alt="" className='img-fluid d-flex justify-content-center align-items-center' />
                </Col>
                <Col md={6}>
                    <h2 className='text-center hed2'>Strategic pathway with
                        Analytics</h2>
                    <p className='para text-muted'>In digital marketing, understanding the impact of your efforts is really important. Analytics serves as the compass guiding the SEO strategy and help take a strategic the path forward. At Razobyte, we harness the power of analytics to drive actionable insights, optimize campaigns, and propel your business forward.</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>

                </Col>
            </Row>
            <Row className='my-lg-5 justify-content-center align-items-center bg-[#5aa1e333]'>
                <Col md={10} className=' flex justify-content-center align-items-center'>
                    <Carousel className='seoIndicators'>
                        <Carousel.Item>
                            <div className='d-flex gap-lg-5 justify-content-center align-items-center py-5'>
                                <div className='d-md-flex flex-col d-none'>
                                    <div className='flex flex-col justify-center items-center bg-white rounded w-[300px] h-[350px]'>
                                        <img src="/Image/pngegg (47) 2.png" alt="" className='img-fluid' />
                                        <h3 className='hed3 text-center'>On page Seo</h3>
                                    </div>

                                </div>
                                <div >
                                    <div className='flex flex-col justify-center items-center  bg-white rounded w-[300px] h-[350px]'>
                                        <img src="/Image/Img3.png" alt="" className='img-fluid ' />
                                        <h3 className='hed3 text-center pt-[79px]'>Off page Seo</h3>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex gap-lg-5 justify-content-center align-items-center py-5'>
                                <div>
                                    <div className='flex flex-col justify-center items-center  bg-white rounded w-[300px] h-[350px]'>
                                        <img src="/Image/ig5.png" alt="" className='img-fluid w-[250px]' />
                                        <h3 className='hed3  text-center pt-1'>Technical Seo</h3>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
            <Row className='flex justify-content-center align-items-center py-5'
            >
                <Col md={10}>
                    <h2 className='hed2 text-center'>TOP SEO PROJECTS</h2>
                    <div className='d-flex justify-content-center align-items-center gap-[150px] py-5' >
                        <div className='Semproj-shadow'>
                            <img src={Proj1Img} alt="" className='img-fluid w-50' />
                            <img src={Proj2Img} alt="" className='img-fluid w-50' />
                        </div>
                        <div className='Semproj-shadow d-md-flex d-none'
                        >
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img src={Proj8Img} alt="" className='img-fluid w-50' />
                                <img src={Proj3mg} alt="" className='img-fluid w-50' />
                                <img src={Proj4Img} alt="" className='img-fluid w-50' />

                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img src={Proj5Img} alt="" className='img-fluid w-50' />
                                <img src={Proj6Img} alt="" className='img-fluid w-50' />
                                <img src={Proj7Img} alt="" className='img-fluid w-50' />


                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5 bg-[#5aa1e333]'>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='custom2-shadow'>
                        <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>

                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                    <div className='custom2-shadow'>
                        <img src="/Image/Sem-project.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center cursor-pointer' onClick={() => navigate('/sem')}>Search Engine  Marketing</p>
                    </div>

                </Col>

            </Row>
            <Blog title="Blogs" />

            <Row style={{ backgroundColor: "#5e5e5e" }} className='justify-content-center align-items-center mt-5 text-center'>
                <Col md={10} className='flex items-center justify-center gap-5 py-3 text-center'>
                    <p className='para text-white text-center pt-3'>Interested in a little more details, let us know how we can assist you.</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us' onClick={() => navigate('/contact')}>Contact-us</Button>
                </Col>
            </Row>


        </>

    )
}