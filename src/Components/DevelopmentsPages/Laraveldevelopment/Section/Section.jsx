import { Row, Col, Carousel, Card, CardBody, CardText, CardTitle, CardImg} from 'react-bootstrap';
import { GiCheckMark } from "react-icons/gi";
import '../../Development.css';
import Blog from '../../../Blog/Blog2';
import Testominials from '../../../HomePages/Testominals/Testomnials';
import { useNavigate } from 'react-router';
import Projects2 from '../../../AboutUspages/Projects/Projects2';
import img1 from '../../../../../public/Image/lar-2.png';
import img2 from '../../../../../public/Image/lar-3 (1).png';
import img3 from '../../../../../public/Image/lar-3 (8).png';
import img4 from '../../../../../public/Image/lar-3 (6).png';
import img5 from '../../../../../public/Image/lar-3 (7).png';
import img6 from '../../../../../public/Image/lar-3 (4).png';
import img7 from '../../../../../public/Image/lar-3 (5).png';
import img8 from '../../../../../public/Image/lar-3 (3).png';
import img9 from '../../../../../public/Image/lar-3 (2).png';
import img10 from '../../../../../public/Image/lar-5 (1).jpg';
import img11 from '../../../../../public/Image/lar-6.jpg';
import img24 from '../../../../../public/Image/lar-9 (6).png';
import img25 from '../../../../../public/Image/lar-9 (5).png';
import img26 from '../../../../../public/Image/lar-9 (4).png';
import img27 from '../../../../../public/Image/lar-9 (3).png';
import img28 from '../../../../../public/Image/lar-10 (3).png';
import img29 from '../../../../../public/Image/lar-10 (2).png';
import CommonSection from '../../../ServicesPages/looking/Looking';

import image277 from '../../../../../public/Image/Codi.png';
import image288 from '../../../../../public/Image/php-else (2).png';
import image299 from '../../../../../public/Image/php-else (1).png';
import image30 from '../../../../../public/Image/php-else(7).png';
import image31 from '../../../../../public/Image/lar-8 (11).jpg';
import image32 from '../../../../../public/Image/Html-5 (1).png';
import html from '../../../../../public/Image/html-css.png';
import image33 from '../../../../../public/Image/lar-8 (8).png';
import image34 from '../../../../../public/Image/shopify7.png';
import image35 from '../../../../../public/Image/php-else (3).png';
import image36 from '../../../../../public/Image/php-else (4).png';
import image37 from '../../../../../public/Image/php-else(6).png';
import wordpress from '../../../../../public/Image/wp (1).png'




export default function Section() {
    const navigate=useNavigate()
    const otherServices = [
      
        { title: 'PHP Website', image: image277, link: '/services/development/php-development', show: true },
        { title: 'Prestashop', image: image288, link: '/services/remainpage', show: true },
        { title: 'HTML & CSS Website', image: html, link: '/services/development/html-css-website', show: true },
        { title: 'React JS Website', image: image30, link: '/services/development/reactjs-development', show: true },
        { title: 'Angular JS Website', image: image31, link: '/services/remainpage', show: true },
        // { title: 'Laravel Development', image: image33, link: '/services/development/laravel-devlopment', show: true }, 
        { title: 'Ruby On Rails', image: image32, link: '/services/remainpage', show: true }, 
        { title: 'CodeIgniter Website', image: image299, link: '/services/development/codeigniter-website-development', show: true },
        { title: 'Shopify', image: image34, link: '/services/ecommerce-solutions/shopify-development', show: true },
        { title: 'OpenKart', image: image35, link: '/services/ecommerce-solutions/opencart-development', show: true },
        { title: 'Woocommerce', image:image36, link: '/services/ecommerce-solutions/wocommerce-development', show: true },
        { title: 'Magneto', image:image37, link: '/services/ecommerce-solutions/Magneto-development', show: true },
        { title: 'Wordpress Development', image: wordpress, link: '/services/remainpage', show: true },
      ];
    return (
        <>
            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={10} className='d-flex align-items-center justify-content-center text-center'>
                    <div>
                        <h3 className='hed2'>Laravel Development</h3>
                        <p className='para text-justify '>With vast usage, Laravel development is a complete framework that includes a lot of components, making it fast
                            and easy. Laravel development can be used for a wide variety of projects including B2B projects to SaaS-based
                            apps like CRM.
                            Laravel is perfect for both small and large-scale businesses while building custom web applications</p>
                    </div>
                </Col>
            </Row>
            <Row className='d-md-flex justify-content-center align-items-center pb-4 gap-5'>
                <Col md={5} className='d-flex align-items-center text-center justify-content-center '>
                    <div>
                        <h3 className='hed2  fs-md-4 text-left'>Is Laravel Development Good
                            for Websites?</h3>
                        <p className='para text-justify'>If you are looking for a fast and easy development withhold compromising on the quality of your project. Laravel stands out as one of the leading PHP frameworks for web application development, and for good reason. Its elegant syntax, robust features, and extensive ecosystem make it a top choice for building scalable, secure, and high-performing websites. Whether you're launching a simple blog or a complex e-commerce platform, Laravel empowers developers to streamline the development process and deliver exceptional results.</p>
                    </div>

                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>
                    <img src= {img1} alt="img1" className='img-fluid' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center  pb-5'>
                <Col md={10} className='p-4 d-flex flex-column gap-3'>
                    <h3 className='hed2 text-center pb-3'>Advantages of Laravel</h3>
                    <div className='laravle-section'>
                        <h3 class="font-semibold  text-md pt-4 pt-md-0 md:text-2xl">Rapid Development</h3>
                        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Laravel offers a streamlined development process with its elegant syntax and built-in features, allowing for faster time-to-market for your projects.</p>
                    </div>
                    <div className='laravle-section'>
                        <h3 className='font-semibold  text-md pt-4 pt-md-0 md:text-2xl'>Scalability</h3>
                        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>
                            Built with scalability in mind, Laravel enables your website to grow alongside your business, handling increased traffic and workload without compromising performance.</p>
                    </div>
                    <div className='laravle-section'>
                        <h3 className='font-semibold  text-md pt-4 pt-md-0 md:text-2xl'>Robust Security</h3>
                        <p className='text-[15px]  fs-sm-6  font-[500] text-left'> Laravel comes with built-in security features, including hashed password storage, CSRF protection, and role-based access control, ensuring your website stays protected against security threats.</p>
                    </div>
                    <div className='laravle-section d-md-block d-none'>
                        <h3 className='font-semibold  text-md pt-4 pt-md-0 md:text-2xl'>Modern Tools and Features</h3>
                        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Laravel incorporates modern tools and features such as Blade templating engine, Eloquent ORM, and Artisan command-line interface, enhancing developer productivity and code maintainability.</p>
                    </div>
                    <div className='laravle-section d-md-block d-none'>
                        <h3 className='font-semibold  text-md pt-4 pt-md-0 md:text-2xl'>Task Scheduling and Queues</h3>
                        <p className='text-[15px]  fs-sm-[8px]  font-[500] text-left'>Laravel simplifies the execution of recurring tasks and background jobs through its intuitive task scheduling and queueing mechanisms. This ensures smoother performance and improved responsiveness for your web applications.</p>
                    </div>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center pb-5'>
                <Col md={10}>
                    <div className='d-flex  flex-column justify-content-center align-items-center'>
                        <h3 className='hed2 text-center pb-3' >Our Laravel Development Services</h3>
                        <p className='para text-center'>When your journey is different, why should your website look like a template. We provide solutions catering to
                            your specific need and requirement, ensuring that your get a wbsite that represent the journey and values
                            you stand for. The goal is to not look different, just represent. </p>
                    </div>
                    <div>
                        <div className='d-flex flex-col flex-sm-row justify-content-center align-items-center gap-5 p-3'>
                            <div className='laravel-section3 my-3'>
                                <img src= {img2} alt="" className='img-fluid w-20' />
                                <h3 className='font-semibold  text-md md:text-xl text-center'>Custom Laravel Web Apps</h3>

                            </div>
                            <div className='laravel-section3'>
                                <img src={img3} alt="" className='img-fluid w-20 ' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center'>Laravel API Development</h3>

                            </div>

                            <div className='laravel-section3'>
                                <img src={img4} alt="" className='img-fluid w-20' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center'>Laravel QA/ Testing Services</h3>

                            </div>
                            <div>
                            </div>

                        </div>
                        <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>

                            <div className='laravel-section3 '>
                                <img src={img5} alt="" className='img-fluid w-20 ' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center'>Laravel Migration/ Upgradation</h3>

                            </div>
                            <div className='laravel-section3'>
                                <img src={img6} alt="" className='img-fluid w-20' />
                                <h3 className='font-semibold  md:text-xl text-center'>Laravel Enterprise Solutions</h3>

                            </div>
                            <div className='laravel-section3 '>
                                <img src={img7} alt="" className='img-fluid w-20' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center'>Laravel Extension Development</h3>

                            </div>


                        </div>

                        <div className='d-md-flex d-none justify-content-center align-items-center gap-5 p-3'>
                            <div className='laravel-section3'>
                                <img src={img8} alt="" className='img-fluid w-20 ' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center'>Laravel Ecommerce Solutions</h3>

                            </div>
                            <div className='laravel-section3 '>
                                <img src= {img9} alt="" className='img-fluid  w-20' />
                                <h3 className='font-semibold  text-md  md:text-xl text-center '>Laravel App Maintenance</h3>

                            </div>
                            <div>
                            </div>

                        </div>


                    </div>


                </Col>

            </Row>

            <Row className='d-md-flex justify-content-center  align-items-center py-5'
                style={{ background: "linear-gradient(to bottom, rgba(59,127,191,95%), rgba(78,207,255,80%)), url('Image/lar-4.png')" }}>
                <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
                    <div>
                        <h3 className='hed2 text-white text-center pb-3'>The Advantages of Laravel Framework</h3>

                    </div>
                    <div>
                        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
                            <div className='laravel-section6'>
                                <h3 className='hed3'>MVC Architecture</h3>
                                <p className='para text-md-center text-justify'>Laravel follows the Model-View-Controller (MVC) architecture, promoting code organization and separation of concerns, which enhances maintainability and scalability.</p>
                            </div>
                            <div className='laravel-section6 d-md-flex d-none'>
                                <h3 className='hed3'>Blade Templating Engine</h3>
                                <p className='para text-md-center text-justify'>Laravel's Blade templating engine offers a clean and expressive syntax for creating dynamic and reusable views, improving developer productivity and code readability.</p>
                            </div>

                        </div>
                        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
                            <div className='laravel-section6'>
                                <h3 className='hed3'>Eloquent ORM</h3>
                                <p className='para text-md-center text-justify'>Laravel's Eloquent ORM simplifies database interactions with its intuitive query builder and ActiveRecord implementation, reducing development time and complexity.</p>
                            </div>
                            <div className='laravel-section6 d-md-flex d-none'>
                                <h3 className='hed3'>Laravel Community</h3>
                                <p className='para text-md-center text-justify'>
                                Join a vibrant global community of Laravel developers worldwide who contribute to its growth and evolution, providing valuable resources, support, and updates, fostering innovation.</p>
                            </div>

                        </div>
                    </div>

                </Col>

            </Row>
            <Row className='py-5 justify-content-center align-items-center'>
               
                    <h3 className='hed2 text-center pb-5'>Laravel Projects</h3>
        
           
                <Col  md={6} className='d-md-flex justify-content-center align-items-center laravelindicators'>
                    <Carousel indicators={true}>
                        <Carousel.Item>
                            <Card className='laravel-card-section'>
                                <CardImg src={img10} fluid />
                                <CardBody>
                                    <CardTitle className='absolute bottom-[100px] left-[60px] border-bottom'>
                                        <h3 className='hed3 text-light'>Blog System</h3>
                                    </CardTitle>

                                    <CardText className='absolute bottom-[60px] left-[60px] '>
                                        <p className='para fw-bold text-light '>ECOMMERCE DEVELOPMENT</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className='laravel-card-section'>
                                <CardImg src= {img11} fluid />
                                <CardBody>
                                    <CardTitle className='absolute bottom-[100px] border-bottom
                            left-[60px]'>
                                        <h3 className='hed3 text-white'>Bookstore Inventory</h3>
                                    </CardTitle>
                                    <CardText className='absolute bottom-[60px] left-[60px]'>
                                        <p className='para text-white fw-bold '>SINGAPORE, WEB DESIGN</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Carousel.Item>


                    </Carousel>
                </Col>
           </Row>
   <Testominials/>
   <CommonSection title="Our Expertise" services={otherServices}/>
   
 
            {/* <Row className='d-flex justify-content-center align-items-center gap-5 py-4'>
                <Col md={10}>
                    <div>
                        <h2 className='hed2 text-center'>Our Expertise</h2>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img12} alt="" className='img-fluid w-50' />
                                <h3 className='hed3  fs-6 fs-md-6  pt-md-2 text-center' style={{ color: "#3b7fbf" }}>Node js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img13} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2 text-center' style={{ color: "#3b7fbf" }}>Angular js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img14} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2 text-center' style={{ color: "#3b7fbf" }}>React js</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src={img15} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 fs-md-6 pt-md-2 text-center' style={{ color: "#3b7fbf" }}>.Net Core</h3>
                            </div>
                            <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img16} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6  fs-md-6 pt-md-2 text-center' style={{ color: "#3b7fbf" }}>Laravel</h3>
                            </div>

                        </div>
                        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img17} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Rxweb.io</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img18} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Mean</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8' onClick={()=>navigate('/CodeIgniter')}>
                                <img src= {img19} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Codelgniter</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img20} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>CakePHP</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img21} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Spring</h3>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img22} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Express js</h3>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
                                <img src= {img23} alt="" className='img-fluid w-50' />
                                <h3 className='hed3 fs-6 pt-2 text-center' style={{ color: "#3b7fbf" }}>Vue js</h3>
                            </div>



                        </div>


                    </div>
                </Col>
            </Row> */}
            <Row className='laravelsection9 d-flex justify-content-center align-items-center py-5 mt-5'>
                <Col md={10}>
                    <div className='pt-0'>
                        <h3 className='hed2 text-white text-center pb-2'>Leveraging Latest Laravel Versions and Features</h3>
                        <p className='para text-white text-md-center'>Laravel 8: Embrace the latest version of Laravel with its improved routing, enhanced job middleware, and refined rate limiting features, ensuring your website stays at the forefront of technology. Blade Components and Slots: Enhance code reusability and maintainability with Blade components and slots, simplifying the creation of reusable UI components across your website. Laravel Mix: Streamline asset compilation and preprocessing with Laravel Mix, enabling efficient management of CSS, JavaScript, and image assets for your website.
                        Laravel Nova: Leverage the power of Laravel Nova for admin panel development, providing a customizable and intuitive interface for managing your website's backend.</p>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='laravelSection10'>
                                <img src= {img24} alt="" className='img-fluid ' style={{ width: "130px" }} />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Laravel 8</h3>
                            </div>
                            <div className='laravelSection10'>
                                <img src= {img25} alt="" className='img-fluid ' style={{ width: "130px" }} />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Blade Components 
                                and Slots</h3>
                            </div>
                            <div className='laravelSection10 d-md-flex d-none'>
                                <img src= {img26} alt="" className='img-fluid' style={{ width: "130px" }} />
                                <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Laravel Nova</h3>
                            </div>
                            <div className='laravelSection10 d-md-flex d-none'>
                            <img src= {img27} alt="" className='img-fluid' style={{ width: "130px" }} />
                            <h3 className='hed3 fs-6 text-center' style={{ color: "#3b7fbf" }}>Laravel Mix</h3>
                        </div>
                        </div>
                    </div>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center p-5'>
                <Col md={10}>
                    <div>
                        <h3 className='hed2 text-center'>Tailored After Care and Support for Laravel</h3>
                        <p className='para  text-center'>At Radixweb we have designed tailored-to-needs maintenance and support packages for your Laravel interfaces. Here are some highlights:</p>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center align-items-center gap-5'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex gap-2'>
                                    <GiCheckMark color='#3b7fbf' size={35} />
                                    <p className=' text-[#000000d8] para '>
                                        90 days no-cost Bug-free warranty for bug control,
                                        updates and security patches</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex  gap-2'>
                                    <GiCheckMark color='#3b7fbf' size={35} />
                                    <p className='  text-[#000000d8] para'>Option for access to ad-hoc developers for
                                        maintaining, upgrading web solutions</p>
                                </div>

                            </div>


                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-5'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex  gap-2'>
                                    <GiCheckMark color='#3b7fbf' size={35} />
                                    <p className='  text-[#000000d8] para '>Retained service agreement along with your
                                        existing agreement with fixed man hours</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='d-flex  gap-2'>
                                    <GiCheckMark color='#3b7fbf' size={35} />
                                    <p className='  text-[#000000d8] para'>Flexibility of choosing support package – add
                                        specific features, decide time frames.. </p>
                                </div>

                            </div>
 

                        </div>


                    </div>

                </Col>
            </Row>

            <Row className='laravelSection12 d-flex justify-content-center align-items-center  py-5'>
                <Col md={10}>
                    <h3 className='hed2 text-white text-center'>Looking for Something Else?</h3>
                   
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='laravelSection13 cursor-pointer' onClick={()=>navigate('/CodeIgniter')}>
                            <img src= {img28} alt="" className='img-fluid w-20 pt-2' />
                            <h3 className='hed3  text-center '>CodeIgniter Development</h3>
                            <p className='para text-center d-sm-block d-none'>
                            We specialize in crafting cutting-edge websites using the robust CodeIgniter framework. With our expertise and dedication, we bring your digital vision to life, delivering tailor-made solutions that empower your online presence. Explore our CodeIgniter website development services.</p>
                        </div>
                        <div className='laravelSection13 cursor-pointer' onClick={()=>navigate('/php')}>
                            <img src= {img29} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center '>PHP <br /> Development</h3>
                            <p className='para text-center d-sm-block d-none pt-1'>
                            Ranked continuously as one of best PHP development companies in India, Hidden Brains top php developers offers expertise in PHP based web app development services working on complex web development processes and building robust PHP websites.</p>
                        </div>
                        <div className='laravelSection13 d-md-flex d-none'>
                            <img src= {img29} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>CakePHP Development</h3>
                            <p className='para text-center pt-1'>Ranked continuously as one of best PHP development companies in India, Hidden Brains top php developers offers expertise in PHP based web app development services working on complex web development processes and building robust PHP websites.</p>
                        </div>

                    </div>


                </Col>
            </Row>
            <Projects2 titleProjects="Top Web Development Projects"/>
            <Blog title="Blogs" />


        </>
    )
}