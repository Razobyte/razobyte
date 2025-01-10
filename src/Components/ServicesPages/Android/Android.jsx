import { Row, Col, Button, Carousel, Accordion } from 'react-bootstrap';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import '../../DevelopmentsPages/Development.css'
import Marquee from 'react-fast-marquee';
import Blog from '../../Blog/Blog2';
import Testominials from '../../HomePages/Testominals/Testomnials';
import adnBannerImg from '../../../../public/Image/android-page-banner.png';
import cli2_1 from '../../../../public/Image/cli-2 (2).png';
import cli2_2 from '../../../../public/Image/cli-2 (3).png';
import cli2_3 from '../../../../public/Image/cli-2 (4).png';
import cli2_4 from '../../../../public/Image/cli-2 (5).png';
import php6 from '../../../../public/Image/php-6.png';
import andImg from '../../../../public/Image/And.jpg';
import andro4 from '../../../../public/Image/Andro (4).png';
import andro1 from '../../../../public/Image/Andro (1).png';
import andro3 from '../../../../public/Image/Andro (3).png';
import andro2 from '../../../../public/Image/Andro (2).png';
import androi5_6 from '../../../../public/Image/Androi5 (6).png';
import androi5_5 from '../../../../public/Image/Androi5 (5).png';
import androi5_4 from '../../../../public/Image/Androi5 (4).png';
import androi5_3 from '../../../../public/Image/Androi5 (3).png';
import androi5_2 from '../../../../public/Image/Androi5 (2).png';
import androi5_1 from '../../../../public/Image/Androi5 (1).png';
import android6_3 from '../../../../public/Image/Andro 6 (3).png';
import android6_2 from '../../../../public/Image/Andro 6 (2).png';
import android6_1 from '../../../../public/Image/Andro 6 (1).png';
import android7_5 from '../../../../public/Image/Andro7 (5).png';
import android7_4 from '../../../../public/Image/Andro7 (4).png';
import android7_3 from '../../../../public/Image/Andro7 (3).png';
import android7_2 from '../../../../public/Image/Andro7 (2).png';
import android7_1 from '../../../../public/Image/Andro7 (1).png';




export default function Android({ title }) {
    return (
        <>

            <Row className='p-0 d-lg-none  position-relative'>
                <img src={adnBannerImg} alt="banner" className='img-fluid p-0' />
                <Col md lg xxl className="px-0">
                    <div className="position-absolute xs:top-[10px]  top-[5px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
                        <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#3b7fbf]">
                            Android App Development</h2>
                    </div></Col>
            </Row>
            <Row
                className="d-lg-flex d-none justify-center items-center relative"
                style={{
                    backgroundImage: `url(${adnBannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px', // Adjust height based on your design
                    position: 'relative',
                }}
            >
                <Col md lg xxl className="px-0">
                    <div className="absolute top-[40px] left-20 w-[50%]">
                        <h2 className="hed1 text-[#3b7fbf]">Android App Development</h2>
                        <p className="hed3 text-left font-[550] d-md-block d-none">
                            Hire Android Developers and programmers,
                        </p>
                        <p className="para text-left d-md-block d-none">
                            who can take your app idea from concept to reality
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center'>
                <Col md={12} xs={10}>
                    <Marquee className='gap-2'>
                        <div className='d-flex align-items-center justify-content-center py-3'>
                            <img src={cli2_1} alt="" className='img-fluid' />
                            <img src={cli2_2} alt="" className='img-fluid' />
                            <img src={cli2_3} alt="" className='img-fluid' />
                            <img src={cli2_4} alt="" className='img-fluid' />
                        </div>
                    </Marquee>


                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h2 className='text-center  hed2  animate__animated animate__heartBe'>Dedicated Android developers for Hire from a vast pool of
                        skilled technical resources with both technical and domain </h2>
                    <div className='d-md-flex gap-5 pt-3'>
                        <div className='col-md-6 flex '>
                            <img src={andImg} alt="image" className='img-fluid' />
                        </div>
                        <div>
                            <h3 className='text-sm animate__animated animate__backInLeft'>"Hire Android app programmers from Hidden Brains to
                                get the best support for Android app development"</h3>
                            <p className='para animate__animated animate__backInLeft text-left'>Our team of experienced Android app developers drives value-added
                                services to our global customers, strong domain expertise to build highly
                                scalable, robust, and customized iPhone applicatio</p>
                            <p className='para text-left'>At Hidden Brains, you can hire an Android developer to build feature-rich, interactive, and secure Android applications. We help to meet your
                                organizational abusiness objectives, becoming an extension of your IT business.

                                Our top rated iOS developers for hire, based in our offshore software development centers in Hyderabad, Pune, Ahmedabad, Indore, India are well versed
                                with cutting-edge Android app development techniques to deliver custom iPhone apps. Hire dedicated Android programmers from Hidden Brains on a
                                full-time, part-time or hourly basis to build secure and scalable applications for your business.</p>
                        </div>

                    </div>



                </Col>
            </Row>
            <Row className='bgphp py-5'>
                <Col md={10} >
                    <h2 className='hed2 text-white text-center'>Benefits of Hiring Android App Developer From Us</h2>
                    <p className='text-white para text-center'>Hidden Brains offers a large team of remote Andriod developers for hire to leverage the power of team
                        augmentation, collaboration, and technical excellence.</p>
                </Col>
                <Carousel className='phpindicators'>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                            <div className='php-version-div d-md-flex d-none flex-col'>
                                <img src={andro4} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Focus on Core
                                    Processess</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div'>
                                <img src={andro1} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Cost
                                    Savings</h3>
                                <p className='para pt-4'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                            <div className='php-version-div d-md-flex d-none flex-col'>
                                <img src={andro3} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Flexibility</h3>
                                <p className='para'>Enhance the functionality and
                                    power of the website with
                                    seamless </p>
                            </div>
                            <div className='php-version-div d-md-flex d-none flex-col'>
                                <img src={andro2} alt="" className='img-fluid w-20' />
                                <h3 className='hed3' style={{ color: "#3b7fbf" }}>Risk
                                    Mangement</h3>
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
                    <h3 className='hed2 text-center' >Expertise of our Full-Stack Android App Developers</h3>
                    <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1 my-3'>
                            <img src={androi5_6} alt="" className='img-fluid' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Native Android App
                                Development</h3>
                            <p className='para  text-center pt-2' >Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>

                        <div className='php-section1'>
                            <img src={androi5_5} alt="" className='img-fluid ' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Android App Design</h3>
                            <p className='para text-center  pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1'>
                            <img src={androi5_4} alt="" className='img-fluid ' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Android Testing</h3>
                            <p className='para text-center  pt-2'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem</p>
                        </div>
                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src={androi5_3} alt="" className='img-fluid' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Android Apps Upgrade</h3>
                            <p className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 '>
                            <img src={androi5_2} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Android App
                                Maintenance</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1'>
                            <img src={androi5_1} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Application Porting</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${php6})`,
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
            <Row className='bgphp py-5'>
                <h3 className='hed3 text-white text-center'>Key Reasons to Hire Dedicated Android Developers</h3>
                <Col md={10} className='phpindicators'>
                    <Carousel>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                                <div className='bg-[#ffff] rounded-3 w-1/3 p-3'>
                                    <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Workforce
                                        Reimagined</h3>
                                    <p className='para'>Enhance the functionality and
                                        power of the website with
                                        seamless </p>
                                </div>
                                <div className='bg-[#ffff] rounded-3 w-1/3 p-3'>
                                    <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Direct Point of
                                        Contact</h3>
                                    <p className='para'>Enhance the functionality and
                                        power of the website with
                                        seamless </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='d-flex justify-content-center align-items-center gap-4 py-4'>
                                <div className='bg-[#ffff] rounded-3 w-1/3 p-3'>

                                    <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Build your Own
                                        Team</h3>
                                    <p className='para'>Enhance the functionality and
                                        power of the website with
                                        seamless </p>
                                </div>
                                <div className='bg-[#ffff] rounded-3 w-1/3 p-3'>
                                    <h3 className='hed3 py-2' style={{ color: "#3b7fbf" }}>Technical
                                        Expertise</h3>
                                    <p className='para'>Enhance the functionality and
                                        power of the website with
                                        seamless </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center' >Our Models to Hire Android Developers</h3>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src={android6_3} alt="" className='img-fluid' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Android Apps Upgrade</h3>
                            <p className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1 '>
                            <img src={android6_2} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Android App
                                Maintenance</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                        <div className='php-section1'>
                            <img src={android6_1} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Application Porting</h3>
                            <p className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.Lorem</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${php6})`,
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
                        <div className='And-section1  d-md-flex d-none'>
                            <img src={android7_5} alt="" className='img-fluid w-50' />
                            <h3 className='hed3 pt-2 text-center'>Drop anInquiry</h3>

                        </div>
                        <div className='And-section1  d-md-flex d-none '>
                            <img src={android7_4} alt="" className='img-fluid w-50' />
                            <h3 className='hed3  pt-2 text-center'>Consult WithOur Experts</h3>
                        </div>
                        <div className='And-section1 '>
                            <img src={android7_3} alt="" className='img-fluid w-50' />
                            <h3 className='hed3  pt-2 text-center' >Select Engage <br />ment Model</h3>
                        </div>
                        <div className='And-section1'>
                            <img src={android7_2} alt="" className='img-fluid  w-50' />
                            <h3 className='hed3  pt-2 text-center'>Sign off andBegin Work</h3>
                        </div>
                        <div className='And-section1'>
                            <img src={android7_1} alt="" className='img-fluid  w-50' />
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