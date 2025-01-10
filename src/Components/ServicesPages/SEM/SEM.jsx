
import { Row, Col, Button } from 'react-bootstrap'
import '../SEM/SEM.css';
import { useNavigate } from 'react-router';
import Blog from '../../Blog/Blog2';
import BannerImg from '../../../../public/Image/Search-engine-banner.png';
import SemImg1 from '../../../../public/Image/SEM-G-1 (9).png';
import SemImg2 from '../../../../public/Image/SEM-G-1 (8).png';
import SemImg3 from '../../../../public/Image/SEM-G-1 (7).png';
import SemImg4 from '../../../../public/Image/SEM-G-1 (6).png';
import SemImg5 from '../../../../public/Image/SEM-G-1 (5).png';
import SemImg6 from '../../../../public/Image/SEM-G-1 (4).png';
import SemImg7 from '../../../../public/Image/SEM-G-1 (3).png';
import SemImg8 from '../../../../public/Image/SEM-G-1 (2).png';
import SemImg9 from '../../../../public/Image/SEM-G-1 (1).png';
import bgImg from '../../../../public/Image/e-bgh.png';
import Proj1Img from '../../../../public/Image/Sem-top-pr-1.png';
import Proj2Img from '../../../../public/Image/Sem-top-pr-2.png';
import Proj3mg from '../../../../public/Image/img (11).png';
import Proj4Img from '../../../../public/Image/img (13).png';
import Proj5Img from '../../../../public/Image/img (9).png';
import Proj6Img from '../../../../public/Image/img (12).png';
import Proj7Img from '../../../../public/Image/img (15).png';
import Proj8Img from '../../../../public/Image/projall1.png';
import { Helmet } from 'react-helmet';



export default function SEM(title) {
    const navigate = useNavigate()
    return (

        <>           
        <Row className='p-0 d-lg-none  position-relative'>
      <img src={BannerImg} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[20px]  top-[10px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#474747]">
            Search Engine Marketing</h2>
            </div></Col>
    </Row>
     <Row
        className="d-lg-flex d-none justify-center items-center relative"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0">
          <div className="absolute top-[120px] left-10 col-6">
            <h2 className="hed1 text-[#474747]">Search Engine Marketing</h2>
          </div>
        </Col>
      </Row>

           
            <Row className='justify-content-center align-items-center gap-5 py-5 bgrem' style={{ backgroundImage: "url('Image/blue.png')", backgroundSize: "50%", backgroundPosition: "right", backgroundRepeat: "no-repeat" }} >
                <Col md={5}>
                    <h2 className='hed2 text-left'>What is PPC</h2>
                    <p className='para text-left'>PPC, or Pay-Per-Click advertising,
                         is a digital marketing model where advertisers pay a fee each time
                          their ad is clicked. It's an effective way to reach potential customers 
                          at the right moment, as your ads appear when users search for keywords related to your
                           business on search engines like Google or Bing, or when they browse websites within your target audience.</p>
                    <p className='para text-left'>
                        We specialize in Pay-Per-Click (PPC) advertising, a powerful digital marketing strategy designed to drive targeted traffic to your website and increase conversions. Let's delve into what PPC is all about, why it's essential for your business, and how Razobyte can help you utilise its full potential.
                    </p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>
                    <img src="/Image/sem.png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center bgsection-homepage-sem  align-items-center gap-5 py-5  '>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (5).png" alt="" className='img-fluid' />
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='hed2 text-left'>Straight to the customers</h2>
                    <p className='para text-left'>
                        With PPC, you're not just casting a wide net and hoping for the best. Instead, you're targeting your ads directly to potential customers who are actively searching for products or services like yours. This means your marketing efforts are focused and efficient, maximizing your return on investment (ROI) and driving qualified leads to your website.

                        <Button className='btn2 text-center'>Get in Touch</Button>

                    </p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (5).png"
                        alt=""
                        className="img-fluid"

                    />
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center gap-5 py-5 '>
                <Col md={5}>
                    <h2 className='hed2 text-left'>What’s the Hype about?</h2>
                    <p className='para text-left'>   The hype surrounding PPC isn't just hype – it's well-deserved praise for a marketing strategy that delivers tangible results. PPC offers unparalleled targeting options, real-time tracking and analytics, and the flexibility to adjust your campaigns on the fly. Plus, with features like ad extensions and remarketing, you can engage with customers at every stage of the buying journey, from awareness to conversion.

                    </p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>

                    <img src="/Image/sem1 (4).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5'>
                <h2 className='text-center hed2'>Type of Google Ads</h2>
                <Col md={10}>
                    <div>
                        <div className='d-flex items-center justify-center gap-5'>
                            <div className='google-ads-section d-md-flex d-none flex-col'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg1} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2 '>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Search</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Promoting links realted to  user search queries</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg2} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Display</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites they already visit</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg3} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'> Shopping</h3>

                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites they
                                        already visit</p>
                                </div>
                            </div>

                        </div>
                        <div className='d-flex items-center justify-center gap-5 mt-5'>
                            <div className='google-ads-section d-md-flex d-none flex-col'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg4} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Video</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Promoting links realted to
                                        user search queries</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg5} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>App</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites the already visit</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg6} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Discovery</h3>

                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites they  already visit</p>
                                </div>
                            </div>

                        </div>
                        <div className='d-md-flex d-none  items-center justify-center gap-5 mt-5'>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg7} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Local Services</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Promoting links realted to   user search queries</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg8} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'>Performance Max</h3>
                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites they      already visit</p>
                                </div>
                            </div>
                            <div className='google-ads-section'>
                                <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
                                    <img src={SemImg9} alt="" className='img-fluid w-20' />
                                </div>
                                <div className='px-2'>
                                    <h3 className='hed3 text-[#3b7fbf] text-center'> Smart</h3>

                                    <p className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
                                    <p className='para text-center'>Reaching users on sites they
                                        already visit</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </Col>

            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5 bgsection-homepage-sem '>
                <Col md={5} className='d-flex justify-content-center align-items-center'>

                    <img src="/Image/sem-sec.png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
                    <h2 className='hed2 text-left'>Retargeting & Remarketing?</h2>
                    <p className='para text-left'>   Retargeting and remarketing are powerful strategies in PPC marketing that help advertisers to reconnect with users who have previously interacted with your website or shown interest in your products or services. At Razobyte, we leverage advanced retargeting and remarketing techniques to re-engage these users and guide them towards conversion. Retargeting, also known as remarketing, involves displaying targeted ads to users who have visited your website but have not completed a desired action, such as making a purchase or filling out a contact form. By placing a tracking pixel on your website, we can track these users as they browse the web and show them relevant ads across various platforms and websites they visit.

                    </p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>

            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5'  >
                <Col md={5}>
                    <h2 className='hed2 text-left'>Planned approach with
                        Analytics</h2>
                    <p className='para text-left'>The hype surrounding PPC isn't just hype – it's well-deserved praise for a marketing strategy that delivers tangible results. PPC offers unparalleled targeting options, real-time tracking and analytics, and the flexibility to adjust your campaigns on the fly. Plus, with features like ad extensions and remarketing, you can engage with customers at every stage of the buying journey, from awareness to conversion.

                    </p>


                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>
                    <img src="/Image/sem-sec2.png" alt="" className='img-fluid' />
                </Col>
            </Row>


            <Row className=' d-md-flex d-none justify-content-center align-items-center gap-5 py-5'
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "1000px"
                }}

            >
                {/* First image for large screens */}
                <Col md={10}>
                    <div className='d-flex items-center justify-center gap-5'>
                        <div className=' col-md-5 d-none d-sm-flex justify-content-center align-items-center'>
                            <img src="/Image/sem1 (3).png" alt="" className='img-fluid' />
                        </div>
                        {/* Content for all screens */}
                        <div >
                            <h2 className='text-left hed2 text-light'>Who is it for?</h2>
                            <p className=' text-left  text-light'>
                                PPC is for any business looking to boost their online visibility, drive traffic to their website, and increase sales or leads. Whether you're a small local business or a global enterprise, PPC is not bound for specific subset of businesses and can be tailored to your needs and budget. At Razobyte, we work with businesses of all sizes and industries, crafting customized PPC strategies that deliver measurable results.
                            </p>

                            <Button className='btn-whitebg'>Get in touch</Button>



                        </div>
                        {/* Second image for small screens */}
                        <div className="d-sm-none col-md-5">
                            <img
                                src="/Image/sem1 (3).png"
                                alt=""
                                className="img-fluid"

                            />
                        </div>
                    </div>
                    <div className='d-flex items-center justify-center gap-5 py-5'>
                        <div className=' col-md-5 d-sm-none  d-flex justify-content-center align-items-center'>
                            <img src="/Image/sem1 (2).png" alt="" className='img-fluid' />
                        </div>
                        {/* Content for all screens */}
                        <div >
                            <h2 className='text-left hed2 text-light'>Which  Ad to choose</h2>
                            <p className=' text-left  text-light'>
                                When it comes to PPC, choosing the right ad format is crucial for success. From search ads that appear at the top of Google search results to display ads that target users as they browse the web, there are plenty of options to consider. Our team of PPC experts will help you select the ad formats that best align with your business goals and target audience, ensuring maximum impact and ROI.

                            </p>

                            <Button className='btn-whitebg'>Get in touch</Button>



                        </div>
                        {/* Second image for small screens */}
                        <div className="d-md-flex d-none col-md-5">
                            <img
                                src="/Image/sem1 (2).png"
                                alt=""
                                className="img-fluid"

                            />
                        </div>
                    </div>

                </Col>
            </Row>
            <Row className=' d-sm-none d-flex justify-content-center align-items-center gap-5 py-5 '
                style={{ background: "linear-gradient(to bottom ,#3B7FBF, #4ECFFF)" }}
            >
                {/* First image for large screens */}
                <Col md={10}>
                    <div className='d-md-flex items-center justify-center gap-5'>
                        <div className=' col-md-5 d-none d-sm-flex justify-content-center align-items-center'>
                            <img src="/Image/sem1 (3).png" alt="" className='img-fluid' />
                        </div>
                        {/* Content for all screens */}
                        <div >
                            <h2 className='text-left hed2 text-light'>Who is it for?</h2>
                            <p className=' text-left text-light'>
                                PPC is for any business looking to boost their online visibility, drive traffic to their website, and increase sales or leads. Whether you're a small local business or a global enterprise, PPC is not bound for specific subset of businesses and can be tailored to your needs and budget. At Razobyte, we work with businesses of all sizes and industries, crafting customized PPC strategies that deliver measurable results.
                            </p>

                            <Button className='btn-whitebg'>Get in touch</Button>



                        </div>
                        {/* Second image for small screens */}
                        <div className="d-sm-none col-md-5 pt-5">
                            <img
                                src="/Image/sem1 (3).png"
                                alt=""
                                className="img-fluid"

                            />
                        </div>
                    </div>
                    <div className='d-md-flex items-center justify-center gap-5 py-5'>

                        {/* Content for all screens */}
                        <div >
                            <h2 className='text-left hed2 text-light'>Which  Ad to choose</h2>
                            <p className=' text-left  text-light'>
                                When it comes to PPC, choosing the right ad format is crucial for success. From search ads that appear at the top of Google search results to display ads that target users as they browse the web, there are plenty of options to consider. Our team of PPC experts will help you select the ad formats that best align with your business goals and target audience, ensuring maximum impact and ROI.

                            </p>

                            <Button className='btn-whitebg'>Get in touch</Button>



                        </div>
                        {/* Second image for small screens */}
                        <div className="d-flex d-sm-none col-md-5 pt-5">
                            <img
                                src="/Image/sem1 (2).png"
                                alt=""
                                className="img-fluid"

                            />
                        </div>
                    </div>

                </Col>
            </Row>

            <Row className='justify-content-center align-items-center gap-5 py-5'>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (1).png" alt="" className='img-fluid' />
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='text-left hed2'>Need experts? Call Razobyte!</h2>
                    <p className='para text-left'>
                        PPC is a dynamic and effective marketing strategy that can propel your business to new heights. With Razobyte's PPC services, you'll harness the power of targeted advertising to reach your ideal customers and achieve your marketing objectives. Ready to take your online presence to the next level? Contact us today to learn more about our PPC solutions and how we can help your business thrive in the digital era
                    </p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (1).png"
                        alt=""
                        className="img-fluid"

                    />
                </Col>
            </Row>
            <Row className='flex justify-content-center align-items-center py-5  bg-[#5aa1e333]'>
                <Col md={10}>
                    <h2 className='hed2 text-center'>Top SEM Projects</h2>
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

            <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='custom2-shadow'>
                        <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>
                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                    <div className='custom2-shadow'>
                        <img src="/Image/Sem-project.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center cursor-pointer' onClick={() => navigate('/seo')}>Search Engine Optimization</p>
                    </div>
                </Col>

            </Row>

            <Blog title="Blogs" />
            <Row style={{ backgroundColor: "#5e5e5e" }} className='d-flex justify-content-center align-items-center '>
                <Col md={10} className='d-flex justify-content-center align-items-center gap-md-5  py-3'
                >
                    <p className='para text-white pt-3'>Getting Your Dream Design is no sweat. a simple mouse click is all you need to get</p>


                    <Button variant='dark' className='btn1' onClick={() => navigate('/contact')}>Click Here</Button>
                </Col>
            </Row>

        </>

    )
}