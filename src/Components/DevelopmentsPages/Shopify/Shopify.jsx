import { Row, Col, Button } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiCheckMark } from 'react-icons/gi'
import Blog from '../../Blog/Blog2';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router';
import '../Development.css'
import Projects2 from '../../AboutUspages/Projects/Projects2';
import Bannershopify from '../../../../public/Image/SHOPIFY-banner.png'
import Shopify1Img from '../../../../public/Image/Shopify-2.png';
import Shopfy2Img from '../../../../public/Image/Shopify2.jpg';
import Shopify3Img from '../../../../public/Image/Shopify3 (4).png';
import Shopify4Img from '../../../../public/Image/Shopify3 (1).png';
import Shopify5Img from '../../../../public/Image/Shopify3 (5).png';
import Shopify6Img from '../../../../public/Image/Shopify3 (6).png';
import Shopify7Img from '../../../../public/Image/Shopify3 (3).png';
import Shopify8Img from '../../../../public/Image/Php.svg';
import Shopify9Img from '../../../../public/Image/PHP-SER.svg';
import Shopifyvdo from '../../../../public/Image/vdo.mp4';
import Shopify10Img from '../../../../public/Image/Shopify (3).png';
import Shopify11Img from '../../../../public/Image/Shopify (2).png';
import Shopify12Img from '../../../../public/Image/Shopify (1).png';





export default function Shopify({props}) {
  const navigate = useNavigate()
  return (
    <>
     <Row className='p-0 d-lg-none  position-relative'>
      <img src={Bannershopify} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[10px]  top-[5px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#3b7fbf]">
            Shopify Development</h2>
            </div></Col>
    </Row>
     <Row
        className="d-lg-flex d-none justify-center items-center relative"
        style={{
          backgroundImage: `url(${Bannershopify})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0">
          <div className="absolute top-[40px] left-20 w-[50%]">
            <h2 className="hed1 text-[#3b7fbf]">Shopify Development</h2>
            <p className="hed3 text-left font-[550]  d-md-block d-none">
              Kick-start your business by launching  an e-commerce store with Shopify
            </p>
            <p className="para text-left d-md-block d-none max-w-md">
              Bring in an array of versatile features to set up an online store rapidly and successfully with Shopify development services
            </p>
          </div>
        </Col>
      </Row>
      <Row className='flex justify-center items-center py-lg-5 py-2'>
        <Col md={10} xs={10}>
          <h2 className='hed2 text-center'>Boost Sales with Top-notch Shopify App Development</h2>
          <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards</p>
        </Col>
      </Row>
      <Row className='flex justify-center items-center'>


        <Col md={10} xs={10}>
          <div className='d-md-flex justify-center items-center'>

            <div>
            <h2 className='hed2 text-md-left'>Shopify Development Company</h2>

              <p className='para text-left'>In the dynamic world of online commerce, selecting the right platform can make all the difference. At Razobyte Softtech, we specialize in empowering businesses with the most effective ecommerce solutions, with Shopify standing out as a cornerstone of our offerings. In this comprehensive guide, we delve into the myriad advantages of Shopify, its unparalleled features, and why it's the preferred choice for businesses of all sizes.</p>
              <h3 className='hed2'>Why Shopify: Unraveling Its Superiority</h3>
              <p className='para text-left'>Shopify has earned its reputation as a leading ecommerce platform for numerous compelling reasons, each contributing to its unrivaled appeal among businesses worldwide.</p>

            </div>
            <div className='col-md-5'>
              <img src={Shopify1Img} alt="" className='img-fluid' />

            </div>
          </div>



        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center py-sm-5 py-2'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${Shopfy2Img})`,
          backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
        <Col md ={10} xs={10} className='d-flex justify-content-evenly align-items-center flex-col py-3'>
          <div>
            <h2 className='hed2 text-white text-center'>Add Smart Features With Shopify Developers</h2>
            <p className='para text-white text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. </p>

          </div>
          <div className='d-flex justify-content-center align-items-center gap-2'>
            <button onClick={()=>navigate('/services/ecommerce-solutions/opencart-development')} className='d-flex justify-content-center align-items-center text-[#3b7fbf] font-semibold
             bg-[#ffff]  py-2 px-5 rounded-md md:text-xl text-sm'>Hire OpenCart Development<FaLongArrowAltRight /></button>
          </div>

        </Col>

      </Row>
      <Row className='d-md-flex d-none justify-content-center align-items-center py-sm-5 py-2'>
        <Col md={12} xs={10}>
          <h3 className='hed2 text-center'>Why Shopify: Unraveling Its Superiority</h3>
          <Marquee className='flex gap-3'>
            <div className='d-md-flex justify-content-between align-items-center gap-3'>
              <div className='d-flex flex-col items-center Shopify-section'>
                <img src={Shopify3Img} alt="" className='img-fluid w-[80px]' />
                <h3 className='text-center font-semibold  text-md  md:text-2xl'>Vast App Ecosystem</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>One of Shopify's standout features is its extensive app ecosystem, offering a diverse range of tools and integrations to enhance store functionality. From marketing automation to inventory management, Shopify's app marketplace provides solutions for every aspect of ecommerce operations. This versatility enables businesses to optimize their workflows, drive efficiency, and stay ahead of the competition in a rapidly evolving digital landscape.</p>
              </div>
              <div className='d-flex flex-col items-center Shopify-section'>
                <img src={Shopify4Img} alt="" className='img-fluid w-[70px]' />
                <h3 className='text-center font-semibold  text-md  md:text-2xl'>Responsive Customer Support</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>In the event of any issues or queries, Shopify provides responsive customer support round the clock. Whether you need technical assistance or guidance on optimizing your store, Shopify's dedicated support team is readily available to provide expert advice and solutions. This unwavering support ensures that businesses can overcome challenges swiftly, minimizing downtime and maximizing productivity.</p>
              </div>
              <div className='d-flex flex-col items-center Shopify-section hover:text-[#ffff]'>
                <img src= {Shopify5Img} alt="" className='img-fluid w-[100px]' />
                <h3 className='text-center font-semibold  text-md  md:text-2xl'>Intuitive User Interface</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>Central to Shopify's appeal is its user-friendly interface, designed to streamline the process of setting up and managing an online store. With Shopify, even those without technical expertise can navigate the platform effortlessly, from product listings to order fulfillment. This accessibility ensures that businesses can establish a strong online presence with minimal hassle, accelerating time-to-market and driving growth.</p>
              </div>
              <div className='d-flex flex-col items-center Shopify-section'>
                <img src={Shopify6Img} alt="" className='img-fluid w-[80px] ' />
                <h3 className='text-center font-semibold  text-md  md:text-2xl'>Robust Security Measures</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                  Security is paramount in ecommerce, and Shopify excels in this regard. The platform prioritizes the protection of sensitive customer data through robust security measures, including SSL encryption and PCI compliance. By safeguarding transactions and customer information, Shopify instills trust and confidence among consumers, bolstering brand reputation and fostering long-term relationships.</p>
              </div>
              <div className='d-flex flex-col items-center Shopify-section hover:text-[#fff]'>
                <img src= {Shopify7Img} alt="" className='img-fluid w-[70px] pt-3' />
                <h3 className='text-center font-semibold  text-md  md:text-2xl '>Scalability and Flexibility</h3>
                <p className='text-[15px] fs-sm-6 font-[500] text-center'>Whether you're a burgeoning startup or a well-established enterprise, Shopify offers scalability and flexibility to meet your evolving needs. Its scalable infrastructure can accommodate businesses of all sizes, ensuring seamless expansion to handle increased traffic and sales volume. Additionally, Shopify's flexible architecture allows for easy customization and integration with third-party apps, empowering businesses to tailor their ecommerce ecosystem to suit their unique requirements.</p>
              </div>
            </div>
          </Marquee>
        </Col>

      </Row>
      <Row className='d-flex justify-content-center align-items-center  bg-[#5aa1e333] py-sm-5 py-2'>
        <Col md={10} xs={10}>
          <h3 className='hed2 text-center '>Why Choose Shopify</h3>
          <p className='para text-md-center pb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.Lorem Ipsum is simply of the printing and typesetting industry.</p>

          <div className='d-flex gap-sm-5 gap-1  justify-center items-center'>
            <div>
              <div className='d-flex gap-2'>
                <div className='d-flex gap-2 '>
                  <GiCheckMark color='#3b7fbf' size={25} />
                  <p className='para font-[550] '>
                    Fully Hosted e-commerce Platform</p>
                </div>


              </div>
              <div className='d-flex  gap-sm-5 gap-2'>
                <div className='d-flex gap-2 '>
                  <GiCheckMark color='#3b7fbf' size={25} />
                  <p className='para font-[550] '>
                    Simple Customer Management System</p>
                </div>




              </div>
              <div className='d-flex  gap-sm-5 gap-2'>
                <div className='d-flex'>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para  font-[550] '>
                      Easy Product Catalogue Management </p>
                  </div>
                </div>



              </div>
              <div className='d-flex  gap-sm-5 gap-2'>
                <div className='d-flex'>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para font-[550] '>User-friendly Order Management
                    </p>
                  </div>
                </div>


              </div>
            </div>
            <div>
              <div className='d-flex  gap-sm-5 gap-2'>
                <div className='d-flex'>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para  font-[550] '>Mobile App to Manage Your Store
                    </p>
                  </div>
                </div>



              </div>
              <div className='d-flex gap-sm-5 gap-2'>
                <div className='d-flex font-[550]  '>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para font-[550] '>
                      Support Various Payment Gateways</p>
                  </div>
                </div>



              </div>
              <div className='d-flex   gap-sm-5 gap-2'>
                <div className='d-flex font-[550]  '>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para font-[550] '>
                      Can Utilize Extension Plug-ins</p>
                  </div>
                </div>
              </div>
              <div className='d-flex gap-sm-5 gap-2'>
                <div className='d-flex font-[550]  '>
                  <div className='d-flex gap-2'>
                    <GiCheckMark color='#3b7fbf' size={25} />
                    <p className='para font-[550] '>
                      Very Safe and Secure</p>
                  </div>
                </div>



              </div>
            </div>



          </div>

        </Col>
      </Row>
      {/* <Row className='bgphp2 d-flex justify-center'>
        <img src= {Shopify8Img} className='img-fluid px-0 w-full h-[1]' />
        <h2 className='hed2 text-white text-center'>Shopify vs. Other Ecommerce Solutions</h2>
        <p className='para text-white text-center'>Compared to traditional ecommerce platforms such as Magento or WooCommerce, Shopify offers several advantages, including</p>
        <Col md={12} className='d-flex justify-center align-items-center'>
          <Marquee className='flex gap-sm-5 gap-2'>
          <div className='d-flex  gap-sm-5 gap-2' >
            <div className='bg-[#fff] rounded-2 h-[280px] w-[300px]'>
              <div className='bg-[#6891b833] h-20 d-flex items-center justify-center'>
                <h3 className='hed3 text-center'style={{ color: "#3b7fbf" }}>Simplicity and ease of use</h3>
              </div>
              <p className='para px-2 pt-2'>Shopify's intuitive interface and hosted solution eliminate the need for technical expertise, reducing the barrier to entry for businesses.</p>
            </div>
        
            <div className='bg-[#fff] rounded-2 h-[280px] w-[300px]'>
              <div className='bg-[#6891b833] h-20 flex items-center justify-center'>
                <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>Comprehensive features</h3>
              </div>
              <p className='para px-2 pt-2'>Shopify provides a comprehensive suite of features out of the box, including website hosting, security, payment processing, and marketing tools, simplifying store management.</p>
            </div>
      
            <div className='bg-[#fff] rounded-2 h-[280px] w-[300px]'>
              <div className='bg-[#6891b833] h-20 flex items-center justify-center'>
                <h3 className='hed3 text-center ' style={{ color: "#3b7fbf" }}>Scalability</h3>
              </div>
              <p className='para px-2 py-2'>Unlike self-hosted platforms, Shopify's cloud-based infrastructure scales effortlessly to accommodate business growth, without the need for costly infrastructure upgrades or maintenance.</p>
            </div>
         
            <div className='bg-[#fff] rounded-2 h-[280px] w-[300px]'>
              <div className='bg-[#6891b833] h-20 flex items-center justify-center '>
                <h3 className='hed3 text-center' style={{ color: "#3b7fbf" }}>Integrated ecosystem</h3>
              </div>
              <p className='para px-2 py-2'>Shopify's app marketplace offers a diverse range of integrations and extensions, allowing businesses to customize their store's functionality and enhance the customer experience.</p>
            </div>
        
        </div>
        
          </Marquee>
        </Col>
        <img src={Shopify9Img} className='img-fluid px-0 h-1' />




      </Row> */}
      <Row className='d-flex justify-content-center align-items-center py-sm-5 py-2'
  style={{
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div className='px-0'
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      // Modified gradient for better text visibility
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%)'
    }}
  ></div>
  <video className='px-0'
    autoPlay
    muted
    loop
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: "cover",
      zIndex: -1
    }}
  >
    <source src={Shopifyvdo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className='col-md-10'>
    <h2 className='hed2  relative z-2 text-center text-white'>Custom Development</h2>
    <p className='para text-center text-white z-10 relative'>While Shopify offers an extensive range of features and customization options out of the box, businesses may require additional customization to meet their specific requirements. At Razobyte Softtech, we specialize in custom development solutions tailored to enhance the capabilities and performance of your Shopify store.</p>
    <div className='flex justify-center gap-5 py-5 items-center relative z-2'>
      <div className='bg-[#3b7fbf] w-1/2 p-3 rounded-3 md:h-[280px] h-[100px]'>
        <h2 className='hed3 text-white text-center'>Custom Themes and Design</h2>
        <p className='para text-white text-left d-md-block d-none'>
          Your store's design plays a crucial role in shaping the customer experience and driving conversions. Our team of experienced designers can create custom themes that align with your brand identity, aesthetics, and user preferences. Whether you're looking for a sleek and modern design or a more immersive and interactive layout, we'll work closely with you to bring your vision to life.
        </p>
      </div>
      <div className='bg-[#3b7fbf] w-1/2 p-3 rounded-3 md:h-[280px] h-[100px]'>
        <h2 className='hed3 text-white text-center'>Advanced Functionality & Integrations</h2>
        <p className='para text-white text-left d-md-block d-none'>
          In addition to design customization, we can develop custom functionality and integrations to extend the capabilities of your Shopify store. Whether you need custom checkout workflows, personalized product recommendations, or seamless integration with third-party systems, our developers have the expertise to implement tailored solutions that align with your business objectives.
        </p>
      </div>
    </div>
    <div className='flex justify-center gap-5 items-center relative z-2'>
      <div className='bg-[#3b7fbf] lg:w-1/2 rounded-3 p-3 md:h-[280px] h-[100px]'>
        <h2 className='hed3 text-white text-center'>Performance Optimization & Scalability</h2>
        <p className='para text-white text-left d-md-block d-none'>
          Ensuring optimal performance and scalability is essential for delivering a seamless shopping experience and accommodating growing traffic and sales volume. Our team employs best practices in performance optimization, including code optimization, server configuration, and caching strategies, to ensure that your Shopify store operates efficiently under any workload.
        </p>
      </div>
      <div className='bg-[#3b7fbf] w-1/2 p-3 rounded-3 md:h-[280px] h-[100px]'>
        <h2 className='hed3 text-white text-center'>Ongoing Support and Maintenance</h2>
        <p className='para text-white text-left d-md-block d-none'>
          In addition to design customization, we can develop custom functionality and integrations to extend the capabilities of your Shopify store. Whether you need custom checkout workflows, personalized product recommendations, or seamless integration with third-party systems, our developers have the expertise to implement tailored solutions that align with your business objectives.
        </p>
      </div>
    </div>
  </div>
</Row>
      <Projects2 titleProjects="Top Web Development Projects"/>
      <Row className='d-flex justify-content-center align-items-center py-sm-4 py-2 laravelSection12'>
      <Col md={10}>
          <h3 className='hed2 text-white text-center'>Related Services</h3>
  
          <div className='d-md-flex flex-col flex-sm-row justify-content-center align-items-center'>
              <div className='laravelSection13 cursor-pointer' onClick={()=>navigate('/woCommerce')}>
                  <img src=  {Shopify10Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center' >WooCommerce Development</h3>
                  <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards.</p>
              </div>
              <div className='laravelSection13 cursor-pointer' >
                  <img src= {Shopify11Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center'>Magneto <br />
             Development</h3>
                  <p className='para text-center'>Kick-start your business by launching an e-commerce store with Shopify. Bring in an array of versatile features to set up an online store rapidly and successfully with Shopify development services.</p>
              </div>
              <div className='laravelSection13 d-md-flex d-none'>
                  <img src={Shopify12Img} alt="" className='img-fluid w-20' />
                  <h3 className='hed3 text-center'>Joomla <br /> Development</h3>
                  <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply</p>
              </div>
          </div>
      </Col>
  </Row>
  
      <Blog title="Blog" />
    </>
  )
}