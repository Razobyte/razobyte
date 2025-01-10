import { Row, Col, Carousel } from 'react-bootstrap'
import banner from './../../../../public/Image/react-banner.png'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { SlArrowRight } from "react-icons/sl";
import cli_2 from '../../../../public/Image/cli-2 (2).png'
import cli2_3 from '../../../../public/Image/cli-2 (3).png';
import cli2_4 from '../../../../public/Image/cli-2 (4).png';
import cli2_5 from '../../../../public/Image/cli-2 (5).png';
import Marquee from 'react-fast-marquee';
import reactimg from '../../../../public/Image/reactimg.png';
import reactimg1 from '../../../../public/Image/reactimg1.png';
import reactimg2 from '../../../../public/Image/reactimg2.png';
import reactimg3 from '../../../../public/Image/reactimg3.png';
import reactcircle from '../../../../public/Image/reactcircle.png';
import '../Development.css'
import TechStack from './FirstReact';
import imgvue from '../../../../public/Image/imgreactservices (2).png';
import imgangular from '../../../../public/Image/imgreactservices (1).png';
import imgfrontend from '../../../../public/Image/imgreactservices (3).png';
import Blog from '../../Blog/Blog2';


export default function ReactDevelopment() {

    return (
        <>
            <Row className='flex justify-center items-center p-0'>
                <img src={banner} alt='React Development Banner' className='img-fluid p-0' />
            </Row>
            <Row className='d-md-flex justify-center items-center pt-5'>
                <h1 className='text-center hed2'>ReactJS Development Company</h1>
                <p className='text-center para'>Build modern, easily navigable apps adhering to W3C, and ECMAScript with ReactJS development services.</p>
                <Col md={10} xs={10}>
                    <div className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                    <div className='flex justify-center items-center text-center mt-3'>
                        <button
                         className='bg-[#3b7fbf] px-4 rounded-md py-2 text-white font-semibold flex items-center gap-2'>Describe You Business Requirement <SlArrowRight /></button>
                    </div>
                </Col>
            </Row>
            <Row className='d-md-flex justify-content-center align-items-center'>

                <Col md={12} col sm={10} xs={10}>
                    <Marquee className='gap-lg-5 gap-2'>
                        <div className='d-flex align-items-center justify-content-center py-3 gap-lg-5 gap-2'>
                            <img src={cli_2} alt="" className='img-fluid shadow-sm' />
                            <img src={cli2_3} alt="" className='img-fluid shadow-sm' />
                            <img src={cli2_4} alt="" className='img-fluid shadow-sm' />
                            <img src={cli2_5} alt="" className='img-fluid shadow-sm' />
                        </div>
                    </Marquee>

                </Col>

            </Row>
            <Row className='d-md-flex justify-content-center align-items-center bg-[#3b7fbf] py-5 mb-5'>
                <Col md={10} xs={10}>
                    <h1 className='hed2 text-center text-white'>Full-Scale ReactJS Development Services</h1>
                    <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>

            </Row>
            <Row className='d-md-flex justify-content-center align-items-center pb-5'>
                <Col md={5} xs={10}>
                    <h2 className='hed2'>Hire React JS App Development Team</h2>
                    <div className='para pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                    <div className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                    <h3 className='text-[25px] text-[#474747]'>Hire Our Experts to Craft Ultimate Apps</h3>

                </Col>
                <Col md={5}>
                    <img src={reactimg} alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row style={{ backgroundImage: `url(${reactimg1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='d-md-flex d-none justify-center items-center mb-5'>
                <Col md={10} xs={10} className='flex items-center gap-5'>
                    <img src={reactimg2} alt="" className='img-fluid' />
                    <div className='flex flex-col gap-5 w-1/2'>
                        <div className='text-center text-white  bg-black bg-opacity-50 p-3 rounded-md '>
                            <div className='text-3xl font-bold'>100+</div>
                            <p className='para text-white text-center'>5-Star Client Reviews
                                from Leading Enterprises</p>
                        </div>
                        <div className='text-center text-white  bg-black bg-opacity-50  p-3 rounded-md '>
                            <div className='text-3xl font-bold'>23+</div>
                            <p className='para text-white text-center'>Years Building Breakthrough
                                Tech Solutions</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 w-1/2'>
                        <div className='text-center text-white  bg-black bg-opacity-50  p-3 rounded-md '>
                            <div className='text-3xl font-bold'>25+</div>
                            <p className='para text-white'>Market Tested Development
                                <br />
                                Solutions</p>
                        </div>
                        <div className='text-center text-white  bg-black bg-opacity-50 p-3 rounded-md '>
                            <div className='text-3xl font-bold'>93%</div>
                            <p className='para text-white text-center'>Client Retention Ratio
                                from Top Brands
                            </p>


                        </div>

                    </div>
                </Col>


            </Row>
            <Row className='flex justify-center items-center'>
                <Col md={10} xs={10} sm={10}>
                    <h2 className='text-center hed2'>Ultimate Features of ReactJS with Top React Development  Company</h2>
                    <p className='text-center para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='shadow-md py-4 px-4 rounded-md mb-4'>
                        <h3 className='text-2xl font-medium text-[#3b7fbf] '>One-Way Data Binding</h3>
                        <p className='para'>One-way data binding in React refers to the flow of data from a parent component to a child component. It ensures that changes in the parent component automatically update the child component, but not vice versa. This pattern is fundamental in React's component architecture, where data flows unidirectionally, helping to maintain predictable and manageable state updates.</p>
                    </div>
                    <div className='shadow-md py-4 px-4 rounded-md mb-4'>
                        <h3 className='text-2xl font-medium text-[#3b7fbf] '>Virtual DOM</h3>
                        <p className='para'>The Virtual DOM (Document Object Model) is a concept in React that provides a lightweight representation of the actual DOM in memory. It acts as a reconciliation layer between the developer’s view and the actual browser DOM.</p>
                    </div>
                    <div className='shadow-md py-4 px-4 rounded-md mb-4'>
                        <h3 className='text-2xl font-medium text-[#3b7fbf] '>Component Approach</h3>
                        <p className='para'>
                            The "Component Approach" in React refers to the fundamental building block of UI elements in React applications. Components are reusable and independent pieces of code that encapsulate specific functionality and UI logic. This approach promotes modular and maintainable code by breaking down the user interface into smaller, self-contained parts.</p>
                    </div>
                    <div className='shadow-md py-4 px-4 rounded-md mb-4'>
                        <h3 className='text-2xl font-medium text-[#3b7fbf] '>JavaScript XML</h3>
                        <p className='para'>
                            JavaScript XML (JSX) is an extension to JavaScript syntax used by React. It allows developers to write HTML-like code directly within JavaScript, which React then translates into standard JavaScript function calls. JSX makes it easier to define and render UI components in React applications.</p>
                    </div>


                </Col>
            </Row>
            <Row className='d-md-flex d-none justify-center items-center py-md-5 mb-2' style={{ background: "linear-gradient(to bottom , #3b7fbf ,#4ECFFF)" }}>
                <h1 className='hed2 text-center text-white'>React Development Services to Meet Your Business Needs</h1>
                <p className='para text-center text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'<br />
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. <br />It has survived not only five </p>
                <Col md={10} xs={10} className='laravelindicators'>
                    <Carousel controls={true} >
                        <Carousel.Item>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4  h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'>Custom Application Development</h3>
                                    <p className='para text-center'>Look for a React development team that can create custom solutions aligned with your business requirements. </p>
                                </div>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4  h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'>Full-Cycle Development Services</h3>
                                    <p className='para text-center'> Choose a service provider that offers comprehensive development services, including planning, design, development, testing, deployment, and maintenance.s</p>
                                </div>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4 h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'> Scalability and Performance</h3>
                                    <p className='para text-center'>Ensure the development team designs applications using scalable architectures and best practices. </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4 h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'>User Experience (UX) and Design</h3>
                                    <p className='para text-center'>Look for developers who prioritize user experience and have expertise in UI/UX design. A well-designed interface not only enhances usability but also contributes to user satisfaction and engagement.</p>
                                </div>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4 h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'>Integration with Existing Systems</h3>
                                    <p className='para text-center'>Ensure the development team has experience in seamless integration and can maintain data consistency and security when integrating with other systems or APIs.</p>
                                </div>
                                <div className='bg-white shadow-md w-1/2 rounded-lg py-4 px-4 h-[200px]'>
                                    <h3 className='text-[#3b7fbf] font-medium text-xl text-center'>Mobile Responsiveness and Accessibility</h3>
                                    <p className='para text-center'>Verify that the applications developed are responsive and accessible across various devices and platforms, ensuring a broader reach and better user experience.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
            <Row className='flex justify-center items-center py-5'>
                <Col md={5} xs={10}>
                    <h1 className='hed2'>Hit Bulls Eye with the Top ReactJS Web Development Company</h1>
                    <div className='para py-2'>Look for a company with a solid track record of successfully delivering ReactJS projects. Check their portfolio to see examples of their work.</div>
                    <div className='para pb-2'>
                        Ensure the company has a team of experienced ReactJS developers who are proficient in the latest technologies and best practices.
                    </div>
                    <div className='para pb-2 '>
                        hoose a company that offers customized solutions tailored to your specific business requirements. Avoid one-size-fits-all approaches and seek personalized strategies that address your unique challenges.
                    </div>
                    <div className='para'>
                        Opt for a company that follows Agile methodologies. This ensures flexibility, iterative development, and continuous feedback, resulting in a more refined and successful project.
                    </div>
                    <div className='para'>
                        Select a company that provides full-cycle development services, including planning, design, development, testing, deployment, and post-launch support.
                    </div>
                </Col>
                <Col md={5} xs={10}>
                    <img src={reactimg3} alt="reactimg3" className='img-fluid' />
                </Col>
                <div className='col-md-10 col-xs-10' style={{ marginTop: "-20px" }}>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={reactcircle} alt="" className='img-fluid' />
                        <div className='para pt-3'>Certified professionals with the ultimate skillset of
                            trending technologies and features like Virtual DOM,
                            JSK, and JavaScript.</div>
                        <div className='flex justify-center items-center gap-1'>
                            <img src={reactcircle} alt="" className='img-fluid' />
                            <div className='para  pt-3'>
                                JSK approach to support HTML elements in JavaScript
                                and place them in DOM without any createElement.
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src={reactcircle} alt="" className='img-fluid' />
                        <div className='para pt-3'>Skills to harness the power of modern technologies to
                            craft ultimate ReactJS applications.</div>
                        <div className='flex justify-center items-center gap-1'>
                            <img src={reactcircle} alt="" className='img-fluid' />
                            <div className='para  pt-3'>
                                Complete In-Depth Consultation and Flood Mapping of
                                Your Project  Experts.
                            </div>
                        </div>
                    </div>

                </div>
            </Row>
            <TechStack />

            <Row className='d-flex justify-content-center align-items-center  py-4   laravelSection12'>
                <Col md={10}>
                    <h3 className='hed2 text-white text-center'>Related Services</h3>

                    <div className='d-md-flex justify-content-center align-items-center'>
                        <div className='laravelSection13'>
                            <img src={imgvue} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>Vue Js </h3>
                            <p className='para text-center'>Vue.js is a progressive JavaScript framework used for building user interfaces.Vue is designed from the ground up to be incrementally adoptable.</p>
                        </div>
                        <div className='laravelSection13 cursor-pointer' onClick={() => navigate('/shopify')}>
                            <img src={imgangular} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>Angular js</h3>
                            <p className='para text-center'>AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. </p>
                        </div>
                        <div className='laravelSection13 d-md-flex d-none'>
                            <img src={imgfrontend} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>FrontEnd</h3>
                            <p className='para text-center'>Frontend Development refers to the development of the client side of web applications and websites, meaning what users interact with directly in their web browser.</p>
                        </div>
                    </div>


                </Col>
            </Row>
            <Blog title="Blogs" />
        </>
    )
}