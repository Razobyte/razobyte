
import { Row, Col, Button, Carousel } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import Blog from '../../Blog/Blog2';
import '../Development.css'
import { useNavigate } from 'react-router';
import Projects2 from '../../AboutUspages/Projects/Projects2';
import Bannerwo from '../../../../public/Image/Wo-banner.png';
import wo1Img from '../../../../public/Image/Wo1.png';
import wo2Img from '../../../../public/Image/Wo1.jpg';
import wo3Img from '../../../../public/Image/Php.svg';
import wo4Img from '../../../../public/Image/PHP-SER.svg';
import wo5Img from '../../../../public/Image/Shopify (3).png';
import wo6Img from '../../../../public/Image/shopify7.png';
import wo7Img from '../../../../public/Image/Shopify (1).png';






export default function WoCommerce({ title, image, para, para2 }) {
    const navigate = useNavigate()
    return (
        <>
          <Row className='p-0 d-lg-none  position-relative'>
      <img src={Bannerwo} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[10px]  top-[5px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#FFFF]">
            WooCommerce Development</h2>
            </div></Col>
    </Row>
        <Row
      className="d-lg-flex d-none justify-center items-center relative"
      style={{
        backgroundImage: `url(${Bannerwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust height based on your design
        position: 'relative',
      }}
    >
      <Col md lg xxl className="px-0">
        <div className="absolute top-[40px] left-20 w-[50%]">
          <h2 className="md:text-5xl text-md text-white pt-md-4 pt-0">
            WooCommerce Development Services
          </h2>
          <p className="text-left text-white d-md-block para d-none pt-2 hed3">
            Turn your website into prosperous platforms to drive sales
          </p>
          <p className="para text-left text-white d-md-block d-none pt-1 font-[550]">
            Design pages that leverages unseen customer tendencies <br/> and triggers effectively to turn page visits.
            <br />
            into purchases with detailed WooCommerce customization
          </p>
        </div>
      </Col>
    </Row>
            <Row className='flex justify-center items-center pt-4 pb-2' >
                <Col md={10}>
                    <h2 className='hed2 text-center'>Create Appealing e-stores with Our WooCommerce Services</h2>
                    <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards</p>
                </Col>
            </Row>
            <Row className='flex justify-center items-center'>
                <Col md={10}>
                    <div className='d-md-flex  gap-3 justify-center items-center'>
                        <div>
                            <h2 className='hed2'>Custom WooCommerce
                                Development Company</h2>


                            <p className='para text-left'>In the fast-paced world of online commerce, choosing the right platform is essential for success. At Razobyte Softtech, we specialize in empowering businesses with cutting-edge ecommerce solutions, with WooCommerce emerging as a cornerstone of our offerings. In this comprehensive guide, we explore the myriad advantages of WooCommerce, its unique features, and why it's the preferred choice for businesses seeking robust ecommerce capabilities.
                            </p>
                        </div>
                        <div className='col-md-5 flex justify-center items-center'>
                            <img src={wo1Img} alt="" className='img-fluid' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-5'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${wo2Img})`,
                    backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}>
                <Col md ={10} className='d-flex justify-content-evenly align-items-center flex-col py-5'>
                    <div>
                        <h2 className='hed2 text-white text-center'>Hire WooCommerce Development Professionals</h2>
                        <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged. </p>

                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                    <button  onClick={()=>navigate('/services/ecommerce-solutions/shopify-development')} className='d-flex justify-content-center align-items-center text-[#3b7fbf] font-semibold bg-[#ffff]  py-2 px-5 rounded-md md:text-xl text-sm'>Hire Shopify Development<FaLongArrowAltRight /></button>
                    </div>

                </Col>

            </Row>
            <Row className='d-flex justify-content-center align-items-center bg-[#5aa1e333] mt-5'>
            <Col md={10} className='px-0'>
                <h3 className='hed2 text-center pt-5'>Why WooCommerce Excels</h3>
                <p className='para text-center'>WooCommerce has established itself as a leading ecommerce platform, renowned for its flexibility, scalability, and seamless integration with WordPress. Let's delve into the key features that set WooCommerce apart and make it an indispensable tool for businesses worldwide.</p>
        
                <div className='d-flex flex-col  flex-sm-row justify-center align-items-center gap-2 py-2'>

                    <div className='d-flex flex-col items-center Shopify-section justify-center hover:text-[#ffff] bg-[#3b7fbf]'>
                        <h3 className='text-center font-[600] text-[22px] text-white'>Seamless Integration with WordPress</h3>
                        <p className='text-[15px] fs-sm-6 font-[500] text-center text-white'>One of WooCommerce's standout features is its seamless integration with WordPress, the world's leading content management system. This integration enables businesses to leverage the power of WordPress's intuitive interface, robust blogging capabilities, and extensive plugin ecosystem to create compelling and dynamic online stores.</p>
                    </div>
                    <div className='d-flex flex-col  items-center justify-center Shopify-section hover:text-[#fff] bg-[#3b7fbf]'>
                        <h3 className='text-center font-[600] text-[22px] text-white'>Flexible and Extensible Platform</h3>
                        <p className='text-[15px] fs-sm-6 font-[500] text-center text-white'>WooCommerce offers unparalleled flexibility and extensibility, allowing businesses to customize and extend their online stores to suit their unique needs and preferences. With a wide range of themes, plugins, and extensions available, WooCommerce provides the tools and resources to create a tailored and feature-rich ecommerce experience.</p>
                    </div>
                    <div className='d-flex flex-col Shopify-section bg-[#3b7fbf]'>
                        <h3 className='text-center font-[600] text-[22px] text-white'>Scalability and  <br />Performance</h3>
                        <p className='text-[15px] fs-sm-6 font-[500] text-center text-white'>As businesses grow and evolve, scalability becomes essential. WooCommerce's scalable architecture ensures that businesses can expand their operations seamlessly, accommodating increased traffic and sales volume without compromising performance or user experience,compromising performance or user experience.</p>
                    </div>
                </div>
        
                <div className='d-md-flex d-none justify-content-center align-items-center gap-5'>
                    <div className='d-flex flex-col items-center Shopify-section justify-center bg-[#3b7fbf]'>
                        <h3 className='text-center font-[600] text-[22px] text-white'>Comprehensive Feature Set</h3>
                        <p className='text-[15px] fs-sm-6 font-[500] text-center text-white'>WooCommerce boasts a comprehensive feature set out of the box, encompassing essential ecommerce functionalities such as product management, order processing, payment gateways, and shipping options. With WooCommerce, businesses have everything they need to launch, manage, and grow a successful online store.</p>
                    </div>
                    <div className='d-flex flex-col items-center Shopify-section justify-center bg-[#3b7fbf]'>
                        <h3 className='text-center font-[600] text-[22px] text-white'>Responsive Customer Support</h3>
                        <p className='text-[15px] fs-sm-6 font-[500] text-center text-white'>In the event of any issues or queries, WooCommerce provides responsive customer support to assist businesses every step of the way. Whether it's technical assistance, troubleshooting, or guidance on optimizing store performance, WooCommerce's dedicated support team is readily available to provide expert advice and solutions.</p>
                    </div>
                </div>
            </Col>
             </Row>
            {/* <Row className='bgphp2 flex justify-center items-center'>
                <img src= {wo3Img} className='img-fluid px-0 w-full h-[1]' />
                <h2 className='hed2 text-white text-center'>When to Opt for WooCommerce</h2>
                <Col md={10}>
                <p className='para text-center text-white'>While WooCommerce offers a plethora of benefits, the decision to adopt the platform should be informed by strategic considerations aligned with your business objectives.</p>
              
               <div className="d-flex flex-col  flex-sm-row justify-content-center items-center gap-md-4 gap-2">
               <div className='bg-[#ffff]  w-1/2 p-3 rounded-3 d-md-block d-none md:h-[330px] h-[150px]'>

               <h3 className='hed3 text-[#3b7fbf] text-center'>Launching a New Online store </h3>
               <p className='para'>For businesses embarking on their ecommerce journey, WooCommerce offers an ideal platform to kickstart their online ventures. Its seamless integration with WordPress, user-friendly interface, and extensive customization options make it an attractive option for startups looking to establish a strong online presence. </p>

           </div>
           <div className=' bg-[#ffff]  lg:w-1/2 w-1/1 p-3 rounded-3 md:h-[330px] h-[150px]'>
               <h3 className='hed3 text-[#3b7fbf] text-center'>Expanding Your Ecommerce Presence </h3>
               <p className='para'>For businesses seeking to expand their existing ecommerce operations or migrate from another platform, WooCommerce provides a seamless transition path. Its scalability, flexibility, and extensive plugin ecosystem make it well-suited to accommodate the evolving needs of growing businesses. </p>

           </div>
           <div className=' bg-[#ffff]  lg:w-1/2 w-1/1 p-3 rounded-3 md:h-[330px] h-[150px]'>
               <h3 className='hed3 text-[#3b7fbf] text-center'>Diversifying Sales Channels</h3>
               <p className='para'>In an increasingly omnichannel world, diversifying sales channels is essential to reaching customers wherever they are. WooCommerce enables businesses to sell across multiple channels, including social media platforms, online marketplaces, and physical retail locations, thereby maximizing reach and revenue potential. </p>
           </div>
                </div>
                    
                </Col>
                <img src={wo4Img} className='img-fluid px-0 h-1' />
            </Row> */}
           
            <Row className='d-flex justify-content-center align-items-center pb-5'>
                <Col md={10}>
                    <h3 className='hed2 text-center pt-5'>Setting WooCommerce Apart</h3>
                    <p className='para text-md-center py-3'>While numerous ecommerce platforms exist in the market, WooCommerce distinguishes itself through its unique features, capabilities, and ecosystem.Compared to traditional ecommerce platforms such as Shopify or Magento, WooCommerce offers several advantages.
                    </p>
                    <div className='d-flex  flex-sm-row flex-col justify-content-center align-items-center gap-3'>
                        <div className='d-flex flex-col items-center Shopify-section  justify-center 
                        shadow-md border border-gray-200hover:text-[#ffff] bg-white'>
                            <h3 className='text-center font-[600] text-[22px]'>Seamless integration with WordPress</h3>
                            <p className='text-[15px]  fs-sm-6  font-[500] text-center'>WooCommerce seamlessly integrates with WordPress, enabling businesses to create compelling online stores with the power of WordPress's intuitive interface and extensive plugin ecosystem.</p>
                        </div>
                        <div className='d-flex flex-col items-center  justify-center Shopify-section hover:text-[#fff] bg-white shadow-md border border-gray-200'>
                            <h3 className=' text-center font-[600] text-[22px]'>Flexibility and customization options</h3>
                            <p className='text-[15px]  fs-sm-6  font-[500]  text-center'>WooCommerce offers unparalleled flexibility and customization options, allowing businesses to create tailored and feature-rich online stores that align with their brand identity and objectives.</p>
                        </div>
                        <div className='d-
                        shadow-md border border-gray-200 flex-col items-center Shopify-section justify-center  bg-white'>

                            <h3 className=' text-center font-[600] text-[22px] pt-2' >Extensibility</h3>
                            <p className='text-[15px]  fs-sm-6  font-[500] text-center'>With a vast library of themes, plugins, and extensions available, WooCommerce provides the tools and resources to extend and enhance the functionality of online stores, enabling businesses to create unique and immersive shopping experiences for their customers.</p>
                        </div>
                    </div>

                    



                </Col>

            </Row>
            <Projects2 titleProjects="Top web Development Projects"/>
            <Row className='d-flex justify-content-center align-items-center  py-4   laravelSection12'>
                <Col md={10}>
                    <h3 className='hed2 text-white text-center'>Related Services</h3>

                    <div className='d-md-flex justify-content-center align-items-center'>
                        <div className='laravelSection13'>
                            <img src={wo5Img} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>WooCommerce
                                Development </h3>
                            <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards.</p>
                        </div>
                        <div className='laravelSection13 cursor-pointer' onClick={() => navigate('/shopify')}>
                            <img src={wo6Img} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>Shopify <br />  Development</h3>
                            <p className='para text-center'>Kick-start your business by launching an e-commerce store
                                with Shopify Bring in an array of versatile features to set up an online store  rapidly and successfully with Shopify development services.</p>
                        </div>
                        <div className='laravelSection13 d-md-flex d-none'>
                            <img src= {wo7Img} alt="" className='img-fluid w-20' />
                            <h3 className='hed3  text-center'>Joomla <br /> Development</h3>
                            <p className='para text-center'>Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply dummy text
                                Lorem Ipsum is simply dummy
                                text of the printing and
                                typesetting industry.Lorem
                                Ipsum is simply</p>
                        </div>

                    </div>


                </Col>
            </Row>
            <Blog title="Blog" />
        </>
    )
}