import { Row, Col, Button, Carousel, Accordion } from 'react-bootstrap';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Blog from '../../Blog/Blog2';
import '../../DevelopmentsPages/Development.css'
import Testominials from '../../HomePages/Testominals/Testomnials';
import Marquee from 'react-fast-marquee';
import ios3_3 from '../../../../public/Image/Ios3 (3).png';
import ios3_2 from '../../../../public/Image/Ios3 (2).png';
import ios3_1 from '../../../../public/Image/Ios3 (1).png';
import iosbnrImg from '../../../../public/Image/ios-banner.png';
import cli2_2 from '../../../../public/Image/cli-2 (2).png';
import cli2_3 from '../../../../public/Image/cli-2 (3).png';
import cli2_4 from '../../../../public/Image/cli-2 (4).png';
import cli2_5 from '../../../../public/Image/cli-2 (5).png';
import iosImage from '../../../../public/Image/Ios.jpg';
import ios1_4 from '../../../../public/Image/Ios1 (4).png';
import ios1_3 from '../../../../public/Image/Ios1 (3).png';
import ios1_2 from '../../../../public/Image/Ios1 (2).png';
import ios1_1 from '../../../../public/Image/Ios1 (1).png';
import ios2_6 from '../../../../public/Image/Ios2 (6).png';
import ios2_5 from '../../../../public/Image/Ios2 (5).png';
import ios2_4 from '../../../../public/Image/Ios2 (4).png';
import ios2_3 from '../../../../public/Image/Ios2 (3).png';
import ios2_2 from '../../../../public/Image/Ios2 (2).png';
import ios2_1 from '../../../../public/Image/Ios2 (1).png';
import php_6 from '../../../../public/Image/php-6.png';
import andro7_5 from '../../../../public/Image/Andro7 (5).png';
import andro7_4 from '../../../../public/Image/Andro7 (4).png';
import andro7_3 from '../../../../public/Image/Andro7 (3).png';
import andro7_2 from '../../../../public/Image/Andro7 (2).png';
import andro7_1 from '../../../../public/Image/Andro7 (1).png';



export default function IOS({ title }) {
    return (
        <>
         <Row className='p-0 d-lg-none  position-relative'>
                <img src={iosbnrImg} alt="banner" className='img-fluid p-0' />
                <Col md lg xxl className="px-0">
                    <div className="position-absolute xs:top-[10px]  top-[5px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
                        <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#3b7fbf]">
                        IOS/iPhone App Development</h2>
                    </div></Col>
            </Row>
            <Row
                className="d-lg-flex d-none justify-center items-center relative"
                style={{
                    backgroundImage: `url(${iosbnrImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px', // Adjust height based on your design
                    position: 'relative',
                }}
            >
                <Col md lg xxl className="px-0">
                    <div className="absolute top-[40px] left-20 w-[50%]">
                        <h2 className="hed1 text-[#3b7fbf]">IOS/iPhone App Development</h2>
                        <p className="hed3 text-left font-[550] d-md-block d-none">
                        Hire  top Ios/Iphone App Devlopers and Programmers  <br /> to build high quality iphone/ipad app <br/>
                        with a truly immersive user experience.
                        </p>
                    </div>
                </Col>
            </Row>
         

            <Row className='d-flex justify-content-center align-items-center'>
                <Col md={12} xs-={10}>
                <Marquee className='gap-2'>
                <div className='d-flex align-items-center justify-content-center py-3'>
                    <img src={cli2_2} alt="" className='img-fluid' />
                    <img src={cli2_3} alt="" className='img-fluid' />
                    <img src={cli2_4} alt="" className='img-fluid' />
                    <img src={cli2_5} alt="" className='img-fluid' />
                </div>
            </Marquee>
        

                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
            <Col md={10}>
            <h2 className='text-center  hed2  animate__animated animate__heartBe'>Hidden Brains offers dedicated iOS/iPhone app developers, 
            programmers and software engineers on an hourly, part-
            time, or full-time hiring basis for all your iOS Development 
            needs </h2>
             <div className='d-md-flex gap-5 pt-3'>
              <div className='col-md-6 flex '>
              <img src={iosImage} alt="image" className='img-fluid' />
                </div>
            <div>
                <h3 className='text-sm animate__animated animate__backInLeft'>"Hidden Brains provides direct models to hire iOS app 
                developers and help clients quickly ramp up teams."</h3>
                <p className='para animate__animated animate__backInLeft text-left'>Our team of experienced iOS/iPhone app developers drives value-added 
                services to our global customers, strong domain expertise to build highly 
                scalable, robust, and customized iPhone applicatio</p>
                <p className='para text-left'>At Hidden Brains, you can hire an iOS developer to build feature-rich, 
                interactive, and secure iOS applications. We help to meet your 
                organizational and business objectives, becoming an extension of your IT 
                business.Our top rated iOS developers for hire, based in our offshore 
                software development centers in Hyderabad, Pune, Ahmedabad, Indore, 
                India are well versed with cutting-edge iOS development techniques to 
                deliver custom iPhone apps. Hire dedicated iOS/iPhone programmers 
                from Hidden Brains on a full-time, part-time or hourly basis to build 
                secure and scalable applications for your business.</p>
            </div>
             
             </div>



        </Col>
            </Row>
            <Row className='bgphp py-5'>
                <Col md={10} >
                    <h3 className='hed2 text-white text-center'>Why Hire iOS/iPhone App Developers From Hidden Brains?</h3>
                    <p className='text-white para text-center'>Hidden Brains offers a large team of remote Andriod developers for hire to leverage the power of team
                        augmentation, collaboration, and technical excellence.</p>
                </Col>
                <Carousel className='phpindicators'>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                            <div className='php-version-div d-md-flex flex-col d-none'>
                                <img src=  {ios1_4} alt="" className='img-fluid w-20' />
                                <h3 className='hed3 ' style={{ color: "#3b7fbf" }}>Team
                                    Augmentation</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div  d-md-flex flex-col d-none'>
                                <img src= {ios1_3} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Quick time to
                                    Market</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>


                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>

                            <div className='php-version-div   d-md-flex flex-col d-none'>
                                <img src= {ios1_2} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Skilled
                                    Resources</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div  d-md-flex flex-col d-none'>
                                <img src= {ios1_1} alt="" className='img-fluid w-20' />
                                <h3 className='hed3 ' style={{ color: "#3b7fbf" }}>Cost
                                    Savings</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>

                        </div>
                    </Carousel.Item>

                </Carousel>





            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center' >Hire iOS App Developer for Custom Mobile App Development</h3>

                    <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1 my-3 '>
                            <img src= {ios2_6} alt="" className='img-fluid ' />
                            <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>iPhone App Strategy</h3>
                            <p className='para  text-center' >Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 my-3'>
                            <img src= {ios2_5} alt="" className='img-fluid ' />
                            <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>iPhone App Design</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 my-3'>
                            <img src= {ios2_4} alt="" className='img-fluid' />
                            <h3 className='hed3 text-center pt-4' style={{ color: "#3b7fbf" }}>Custom iPhone App
                                Development</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>

                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src= {ios2_3} alt="" className='img-fluid ' />
                            <h3 className='hed3' style={{ color: "#3b7fbf" }}>iPhone App  Testing</h3>
                            <p className='para text-center ' >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 '>
                            <img src= {ios2_2} alt="" className='img-fluid ' />
                            <h3 className='hed3  text-center pt-4' style={{ color: "#3b7fbf" }}>iPhone Support & Maintenance </h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1'>
                            <img src= {ios2_1} alt="" className='img-fluid' />
                            <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>iOS App Migration</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                    </div>


                </Col>

            </Row>
            <Row className='bgphp py-4'>
                <Col md={10} >
                    <h3 className='hed2 text-white text-center'>Key Reasons to Hire Dedicated Ios  Developer  from us</h3>

                </Col>
                <Carousel className='phpindicators'>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                            <div className='php-version-div d-md-flex d-none flex-col justify-center'>
                                <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Build your Own
                                    Team</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div d-md-flex d-none flex-col justify-center '>
                                <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Technical
                                    Expertise</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                            <div className='php-version-div justify-center d-md-flex flex-col'>

                                <h3 className='hed3 py-2 pt-4' style={{ color: "#3b7fbf" }}>Direct Point of
                                    Contact</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div d-md-flex d-none flex-col justify-center'>

                                <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Build your
                                    Own Team</h3>
                                <p className='para pt-4'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>


                        </div>
                    </Carousel.Item>

                </Carousel>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center' >Hiring iOS/iPhone App Developers Models</h3>


                    <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src=  {ios3_3} alt="" className='img-fluid' />
                            <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>Hidden BrainsManaged Team</h3>
                            <p className='para text-center' >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 '>
                            <img src= {ios3_2} alt="" className='img-fluid ' />
                            <h3 className='hed3  text-center' style={{ color: "#3b7fbf" }}>ClientManaged Team</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1'>
                            <img src = {ios3_1} alt="" className='img-fluid' />
                            <h3 className='hed3  text-center' style={{ color: "#3b7fbf" }}>Hybrid Model</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                    </div>







                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${php_6})`,
                height: "30vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Col md className='d-flex justify-content-evenly align-items-center'>
                    <div>
                        <p className='para text-white'>Ready to strat your dream Project </p>
                        <h3 className='hed3 text-white'>We have a TEAM to get you there.</h3>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <Button className='d-flex justify-content-center align-items-center btn-php-get-in-touch'>Get in touch <RiArrowRightDoubleLine /></Button>
                    </div>

                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center' >Hire Dedicated Android App Developers In 5 Simple Steps</h3>

                    <div className='d-flex justify-content-center align-items-center gap-4 '>
                        <div className='And-section1'>
                            <img src={andro7_5} alt="" className='img-fluid w-50' />
                            <h3 className='hed3 pt-2 text-center'>Drop anInquiry</h3>

                        </div>
                        <div className='And-section1 '>
                            <img src={andro7_4} alt="" className='img-fluid  w-50' />
                            <h3 className='hed3  pt-2 text-center'>Consult WithOur Experts</h3>

                        </div>
                        <div className='And-section1'>
                            <img src= {andro7_3} alt="" className='img-fluid   w-50' />
                            <h3 className='hed3  pt-2 text-center' >Select Engag <br />ement Model</h3>

                        </div>
                        <div className='And-section1 d-md-flex d-none'>
                            <img src= {andro7_2} alt="" className='img-fluid  w-50 ' />
                            <h3 className='hed3  pt-2 text-center'>Sign off andBegin Work</h3>

                        </div>
                        <div className='And-section1 d-md-flex d-none'>
                            <img src= {andro7_1} alt="" className='img-fluid   w-50' />
                            <h3 className='hed3  pt-2 text-center' >Scale Your
                                Team</h3>

                        </div>

                    </div>
                    <div className='flex items-center justify-center py-5'>
                        <Button className='android-btn d-flex items-center justify-center '>Get started now <RiArrowRightDoubleLine /></Button>

                    </div>





                </Col>

            </Row>
            <Testominials />
            <Row className=' d-none justify-content-center align-items-center py-5'>

                <Col md={10}>
                    <h2 className='text-center pb-3 hed2' style={{ color: "#5E5E5E" }}>Frequently Asked Questions</h2>
                    <p className='para text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,  earum!</p>
                    <Accordion defaultActiveKey="0" className='main-accrodinstart'>
                        <Accordion.Item eventKey='0' className='main-accrodinstartItem  my-2'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap'>
                                    <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='faqbodyitems '>
                                <div className='faqbodyitemstext'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>

                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey='1' className='main-accrodinstartItem my-2'>
                            <Accordion.Header className='headersection2'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap2'>
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='faqbodyitems'>
                                <div className='faqbodyitemstext'>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium est adipisci culpa molestiae a repudiandae omnis eos sunt dicta! Architecto ad ex impedit ut suscipit amet non voluptatibus perspiciatis accusantium, repellat tempore atque in vitae voluptatum.</p>

                                </div>

                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey='2' className='main-accrodinstartItem my-2'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap'>
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='faqbodyitems '>
                                <div className='faqbodyitemstext'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus numquam, nobis recusandae voluptatibus, rerum perspiciatis aperiam minima ab, cupiditate soluta deleniti eum animi deserunt eius pariatur aut! Quae quia voluptates, nam debitis ipsum deleniti error placeat ad, culpa, cupiditate est tenetur reiciendis. Officia, deleniti.</p>
                                </div>
                            </Accordion.Body>

                        </Accordion.Item>
                    </Accordion>


                </Col>

            </Row>
            <Blog title="Blogs" />





        </>
    )
}