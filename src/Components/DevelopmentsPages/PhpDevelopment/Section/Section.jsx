import { Row, Col, Button, Accordion } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Section2 from '../OtherSection/Section';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Section3 from '../OtherSection/Section2';
import Blog from '../../../Blog/Blog2';
import { useNavigate } from 'react-router';
import '../../Development.css';
import Projects2 from '../../../AboutUspages/Projects/Projects2';
import cli_2 from '../../../../../public/Image/cli-2 (2).png'
import cli2_3 from '../../../../../public/Image/cli-2 (3).png';
import cli2_4 from '../../../../../public/Image/cli-2 (4).png';
import cli2_5 from '../../../../../public/Image/cli-2 (5).png';
import php2 from '../../../../../public/Image/php-2.png';
import rectangle211_1 from '../../../../../public/Image/Rectangle 211 (1).png';
import php_3 from '../../../../../public/Image/php-3.png';
import lar_8 from '../../../../../public/Image/lar-8 (8).png';
import php5_9 from '../../../../../public/Image/php-5 (9).png';
import php5_8 from '../../../../../public/Image/php-5 (8).png';
import php5_7 from '../../../../../public/Image/php-5 (7).png';
import php5_6 from '../../../../../public/Image/php-5 (6).png';
import php5_5 from '../../../../../public/Image/php-5 (5).png';
import php from '../../../../../public/Image/php.png';
import php5_3 from '../../../../../public/Image/php-5 (3).png';
import php5_2 from '../../../../../public/Image/php-5 (2).png';
import php5_1 from '../../../../../public/Image/php-5 (1).png';
import php6_1 from '../../../../../public/Image/php-6 (1).png';
import php6_5 from '../../../../../public/Image/php-6 (5).png';
import php6_4 from '../../../../../public/Image/php-6 (4).png';
import php6 from '../../../../../public/Image/php-6.png';
import image27 from '../../../../../public/Image/Codi.png';
import image28 from '../../../../../public/Image/php-else (2).png';
import image29 from '../../../../../public/Image/php-else (1).png';
import image30 from '../../../../../public/Image/php-else(7).png';
import image31 from '../../../../../public/Image/lar-8 (11).jpg';
import image32 from '../../../../../public/Image/Html-5 (1).png';
import html from '../../../../../public/Image/html-css.png';
import image33 from '../../../../../public/Image/lar-8 (8).png';
import image34 from '../../../../../public/Image/shopify7.png';
import image35 from '../../../../../public/Image/php-else (3).png';
import image36 from '../../../../../public/Image/php-else (4).png';
import image37 from '../../../../../public/Image/php-else(6).png';
import CommonSection from '../../../ServicesPages/looking/Looking';
import wordpress from '../../../../../public/Image/wp (1).png'

export default function Section(title) {
    const navigate = useNavigate()
    const otherServices = [
        // { title: 'PHP Website', image: image27, link: '/services/development/php-development', show: true },
        { title: 'Prestashop', image: image28, link: '/services/remainpage', show: true },
        { title: 'HTML & CSS Website', image: html, link: '/services/development/html-css-website', show: true },
        { title: 'React JS Website', image: image30, link: '/services/development/reactjs-development', show: true },
        { title: 'Angular JS Website', image: image31, link: '/services/remainpage', show: true },
        { title: 'Laravel Development', image: image33, link: '/services/development/laravel-devlopment', show: true }, 
        { title: 'Ruby On Rails', image: image32, link: '/services/remainpage', show: true }, 
        { title: 'CodeIgniter Website', image: image29, link: '/services/development/codeigniter-website-development', show: true },
        { title: 'Shopify', image: image34, link: '/services/ecommerce-solutions/shopify-development', show: true },
        { title: 'OpenKart', image: image35, link: '/services/ecommerce-solutions/opencart-development', show: true },
        { title: 'Woocommerce', image:image36, link: '/services/ecommerce-solutions/wocommerce-development', show: true },
        { title: 'Magneto', image:image37, link: '/services/ecommerce-solutions/Magneto-development', show: true },
        { title: 'Wordpress Development', image: wordpress, link: '/services/remainpage', show: true },
      ];
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center'>

                <Col md={12}  sm={10} >
                    <Marquee className='gap-2'>
                        <div className='d-flex align-items-center justify-content-center py-3'>
                            <img src={cli_2} alt="" className='img-fluid' />
                            <img src={cli2_3} alt="" className='img-fluid' />
                            <img src={cli2_4} alt="" className='img-fluid' />
                            <img src={cli2_5} alt="" className='img-fluid' />
                        </div>
                    </Marquee>

                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center py-3'>PHP Web Application Development Services</h3>
                    <div className='d-md-flex justify-content-center align-items-center gap-5'>
                        <div className='col-md-5'>
                            <img src={php2} alt="" className='img-fluid' />
                        </div>
                        <div className='col-md-5 pt-md-0 pt-5'>
                            <p className='para  text-justify'>Ranked continuously as one of best PHP development companies in India,
                                Hidden Brains top php developers offers expertise in PHP based web app
                                development services working on complex web development processes
                                and building robust PHP websites. We have been successful in designing,
                                developing and delivering hundreds of top grossing PHP based projects for
                                companies ranging from startups, midsize businesses to enterprises.
                                As a leading PHP development company, we help organizations to
                                leverage the strength of PHP development, continuously augment web
                                capabilities and build experiences that delight customers. With expertise
                                in PHP frameworks such as Laravel and CodeIgniter, Hidden Brains team
                                drives PHP web development services for a cross section of domains.</p>

                            <div className='flex items-center gap-5 justify-center py-3'
                                style={{
                                    backgroundImage: `url(${rectangle211_1 })`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100px"
                                }}
                            >
                                <img src= {php_3} alt="" className='img-fluid phpImage' />
                                <img src= {lar_8} alt="" className='img-fluid phpImage ' />
                            </div>




                        </div>



                    </div>


                </Col>

            </Row>
            <Section2 />
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center'>PHP Web Development Services</h3>
                    <div className='d-flex flex-col flex-sm-row justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src=  {php5_9} alt="" className='img-fluid' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Custom PHP Web
                                Development</h3>

                        </div>
                        <div className='php-section1'>
                            <img src= {php5_8} alt="" className='img-fluid ' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>Full-Stack PHP
                                Development</h3>

                        </div>
                        <div className='php-section1'>
                            <img src= {php5_7} alt="" className='img-fluid ' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3  pt-sm-3 pt-0 text-center' style={{ color: "#3b7fbf" }}>Php Api Development
                                & Integrations</h3>

                        </div>
                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src= {php5_6} alt="" className='img-fluid' style={{ maxWidth: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>PHP Framework
                                Development</h3>

                        </div>
                        <div className='php-section1 '>
                            <img src= {php5_5} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>PHP CMS/Platforms
                                Development</h3>

                        </div>
                        <div className='php-section1'>
                            <img src= {php} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3  pt-2 text-center' style={{ color: "#3b7fbf" }}>PHP Back-End & Web
                                Services</h3>

                        </div>
                    </div>
                    <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
                        <div className='php-section1'>
                            <img src= {php5_3} alt="" className='img-fluid' style={{ width: "100px" }} />
                            <h3 className='hed3 pt-2 text-center' style={{ color: "#3b7fbf" }}>Custom CRM, ERP &
                                Portal Development</h3>

                        </div>
                        <div className='php-section1'>
                            <img src= {php5_2 } alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3 text-center pt-2' style={{ color: "#3b7fbf" }}>PHP Website Support
                                & Maintenance</h3>

                        </div>
                        <div className='php-section1'>
                            <img src= {php5_1} alt="" className='img-fluid ' style={{ width: "100px" }} />
                            <h3 className='hed3 text-center pt-4' style={{ color: "#3b7fbf" }}>PHP Web APP
                                Upgradation & Migration</h3>

                        </div>


                    </div>






                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5 bg-[#5aa1e333]'>
                <h2 className='hed2 text-[#3b7fbf] text-center'>Leveraging Latest PHP Versions and Features</h2>

                <Col md={10}>
                    <div>
                        <div className='flex items-center justify-center gap-5 py-5'>
                            <div className='php-version-div d-sm-block d-none'>
                                <img src= {php6_1} alt="img" className='img-fluid' />
                                <h3 className='hed3 mt-2 '>Embracing PHP 8</h3>
                                <p className='para'>Leveraging the newest features and
                                    performance improvements introduced in
                                    PHP 8 to enhance the functionality and
                                    efficiency of your website.</p>
                            </div>
                            <div className='php-version-div'>
                                <img src= {php6_5} alt="" className='img-fluid' />
                                <h3 className='hed3 mt-2'>Improved Error Handling</h3>
                                <p className='para'>Implementing PHP's enhanced error
                                    handling mechanisms to ensure robustness
                                    and reliability in your applications.</p>
                            </div>
                            <div className='php-version-div'>
                                <img src= {php6_4} alt="" className='img-fluid' />
                                <h3 className='hed3 mt-2'>JIT Compilation</h3>
                                <p className='para'>Harnessing PHP's just-in-time (JIT)
                                    compilation capabilities to boost the
                                    performance of CPU-intensive tasks,
                                    delivering faster execution times and
                                    improved responsiveness.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <div className='php-version-div'>
                                <img src= {php6_1} alt="" className='img-fluid' />
                                <h3 className='hed3 mt-2'>Union Types</h3>
                                <p className='para'>Taking advantage of PHP's support for
                                    union types to enhance type safety and
                                    code clarity in your projects.</p>
                            </div>
                            <div className='php-version-div'>
                                <img src= {php6_5} alt="img" className='img-fluid' />
                                <h3 className='hed3 mt-2'>Match Expression</h3>
                                <p className='para'>Utilizing PHP's match expression feature to
                                    simplify conditional logic and improve
                                    code readability.</p>
                            </div>


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
                        <button onClick={()=>navigate('/services/ecommerce-solutions/opencart-development')} className='d-flex justify-content-center align-items-center text-[#3b7fbf] font-semibold
             bg-[#ffff]  py-2 px-5 rounded-md md:text-xl text-sm'>Get in touch <RiArrowRightDoubleLine /></button>
                    </div>
                </Col>
            </Row>
            <Section3 />
            <CommonSection title="Looking for Something Else" services={otherServices} />
             
            <Projects2 titleProjects="Top Web Development Projects" />

            <Blog title="Blogs" />
        </>
    )
}