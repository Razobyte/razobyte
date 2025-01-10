import { Row, Col, Button } from 'react-bootstrap'
import Blog from '../../Blog/Blog2'
import { useNavigate } from 'react-router'
import '../SEM/SEM.css';
import Projects2 from '../../AboutUspages/Projects/Projects2';
import bannerUi from '../../../../public/Image/UI-banner.png'
import Proj1Img from '../../../../public/Image/Sem-top-pr-1.png';
import Proj2Img from '../../../../public/Image/Sem-top-pr-2.png';
import Proj3mg from '../../../../public/Image/img (11).png';
import Proj4Img from '../../../../public/Image/img (13).png';
import Proj5Img from '../../../../public/Image/img (9).png';
import Proj6Img from '../../../../public/Image/img (12).png';
import Proj7Img from '../../../../public/Image/img (15).png';
import Proj8Img from '../../../../public/Image/projall1.png';
import UI1Img from '../../../../public/Image/Ui-1.png';
import UI2Img from '../../../../public/Image/Ui-2.png';
import UI3Img from '../../../../public/Image/Ui-3.png';
import UI4Img from '../../../../public/Image/Ui_4.png';


export default function UI(title) {

    const navigate = useNavigate()

    return (
        <>
            <Row className='d-md-flex d-none align-items-center justify-content-center '
                style={{ backgroundImage: `url(${bannerUi})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "60vh" }}>
                <Col md>
                    <div className='col-md-5 d-flex flex-col items-center justify-center'>
                        <h2 className='text-[#3b7fbf]'>“Design is not just what it looks like and
                            feels like. Design is how it works.” -
                            Steve Jobs</h2>
                        <h3 className='hed3 font-[900] text-[#3b7fbf]'>
                            Steve Jobs</h3>
                        <div className='port-button my-3'>
                            <Button className='btn2'>Know More</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-sm-flex d-sm-none  align-items-center justify-content-center '
            >
                <Col md className='d-flex flex-col items-center justify-center  bg-[#59a0e333] py-5'>
                    <div className='d-flex flex-col items-center justify-center px-0'
                    >
                        <h2 className=' hed2 text-[#3b7fbf]'>“Design is not just what it looks like and
                            feels like. Design is how it works.” -
                            Steve Jobs</h2>
                        <h3 className='hed2 text-[#3b7fbf]'>
                            Steve Jobs</h3>
                        <div className=' flex items-center my-3 justify-center'>
                            <Button className='btn2'>Know More</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center py-5'

                style={{ backgroundImage: "url('Image/grey.png')", backgroundRepeat: "no-repeat", backgroundSize: "700px" }}

            >
                <Col md={10}>
                    <div className='d-md-flex align-items-center justify-content-center gap-5'>
                        <div>
                            <h2 className='hed2 text-center'>User Centricity</h2>
                            <p className='para text-left'>In the world of constantly evolving digital designs, one principle remains unmoved and certain: user centricity. At Razobyte, we place this principle at the very core of our UI/UX design philosophy. Every design decision is meticulously shaped by an in-depth understanding of user needs, preferences, and behaviors. Through comprehensive user research, persona development, and iterative testing, we forge designs that are not just visually appealing but also intuitive, accessible, and deeply resonant with your target audience.</p>


                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <img src={UI1Img} alt="" className='img-fluid' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-md-flex align-items-center justify-content-center py-5 bg-[#59a0e333]'>
                <Col md={10}>
                    <div className=' d-md-flex align-items-center justify-content-center gap-5'>

                        <div className='col-md-6 d-md-flex  d-none align-items-center justify-content-center'>
                            <img src= {UI2Img}  alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h2 className='hed2 text-center'>Smooth User Journey</h2>
                            <p className='para text-left'>A smooth user journey is the core of a success in this  digital era where internet reigns supreme. It's the difference between frustration and delight, confusion and clarity, disengagement and conversion. A smooth user journey can be the difference between a recurring client and a bounced user.</p>
                            <p className='para text-left'>

                                At Razobyte, we carefully craft every aspect of the user journey, ensuring a seamless progression from entry point to desired outcome. Through intuitive navigation structures, strategically placed calls-to-action, and fluid interaction design, we pave the way for users to effortlessly traverse your digital ecosystem, fostering deeper engagement and driving tangible results.</p>


                        </div>
                        <div className='col-md-6 d-sm-none  d-flex  align-items-center justify-content-center'>
                            <img src= {UI2Img} alt="" className='img-fluid' />
                        </div>

                    </div>
                </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center py-5'>
                <Col md={10}>
                    <div className='d-md-flex align-items-center justify-content-center gap-5'>
                        <div>
                            <h2 className='hed2 text-center'>Sleek Design</h2>
                            <p className='para text-left'>Sleek design isn't merely about aesthetics – it's about marrying form with function in a harmonious union. Our team of designers at Razobyte specializes in creating sleek, modern designs that transcend visual appeal, enhancing usability and fostering emotional connections.
                            </p>
                            <p className='para text-left'>
                                From specially crafted custom layouts to elegant typographic choices, every design element is thoughtfully curated to contribute to a polished and professional aesthetic that resonates with your audience and reinforces your brand identity.</p>


                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <img src={UI3Img} alt="" className='img-fluid' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center py-5 bg-[#59a0e333]'>
                <Col md={10}>
                    <div className='d-md-flex align-items-center justify-content-center gap-5'>

                        <div className='col-md-6 d-md-flex d-none align-items-center justify-content-center'>
                            <img src={UI4Img} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h2 className='hed2 text-center'>Custom looks</h2>
                            <p className='para  text-left'>In a world filled with generic templates and cookie-cutter designs, standing out requires authenticity and originality. That's why we offer custom design solutions tailored to the specific needs and branding requirements of your business. Whether you're aiming for bold and daring or minimalist and refined, our designers collaborate closely with you to breathe life into your vision.
                                With custom looks that authentically reflect your brand identity and deeply resonate with your audience, you'll carve out a distinct niche in the digital world, setting yourself apart as a symbol of innovation and creativity.</p>


                        </div>
                        <div className='col-md-6 d-sm-none d-flex align-items-center justify-content-center'>
                            <img src="Image/ui_4.png" alt="" className='img-fluid' />
                        </div>

                    </div>
                </Col>
            </Row>
            <Row className='flex justify-content-center align-items-center py-5 '>
                <Col md={10}>
                    <h2 className='hed2 text-center'>Top UI/UX design Projects</h2>
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
            <Row className='d-md-flex d-none justify-content-center align-items-center py-5 bg-[#59a0e333] mb-5'>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='custom2-shadow'>
                        <img src="/Image/Sem-last.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMediaOpt')}> Social Media Optimization</p>
                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                    <div className='custom2-shadow'>
                        <img src="/Image/programming (1) 1 (3).png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center cursor-pointer' onClick={() => navigate('/SocialMediaMarketing')}>Social Media Marketing</p>
                    </div>

                </Col>

            </Row>
            <Projects2 titleProjects="Top Web Design Projects" />
            <Blog title="Blogs" />
            <Row style={{ backgroundColor: "#5e5e5e" }} className='justify-content-center align-items-center'>
                <Col md={10} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white pt-3'>Interested in a little more details, let us know how we can assist you.</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>






        </>
    )
}