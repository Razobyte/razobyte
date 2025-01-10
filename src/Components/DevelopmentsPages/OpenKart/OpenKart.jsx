import { Row, Col } from 'react-bootstrap';
import Blog from '../../Blog/Blog2';
import { useNavigate } from 'react-router';
import bannerImage from '../../../../public/Image/opne-cart-banner.png'
import '../Development.css'
import Marquee from 'react-fast-marquee';
import Projects2 from '../../AboutUspages/Projects/Projects2';
import opencart1Img from '../../../../public/Image/Php.svg';
import opencart2Img from '../../../../public/Image/PHP-SER.svg';
import opencart3Img from '../../../../public/Image/Op (1).png';
import opencart4Img from '../../../../public/Image/Op (2).png';
import opencart5Img from '../../../../public/Image/Op (3).png';
import opencart6Img from '../../../../public/Image/Shopify (3).png';
import opencart7Img from '../../../../public/Image/Shopify (1).png';
import opencart8Img from '../../../../public/Image/Shopify7.png';
export default function OpenKart({ Image, title }) {
  const navigate = useNavigate()
  return (
    <>
      {/* <Row className='p-0 d-lg-none  position-relative'>
        <img src={bannerImage} alt="banner" className='img-fluid p-0' />
        <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[20px]  top-[10px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#FFF]">
              OpenCart</h2>
          </div></Col>
      </Row> */}
      <Row
        className="d-lg-flex  2xl:h-[420px] lg:h-[420px] md:h-[420px]  h-[120px] justify-center items-center relative p-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0 py-0">
          <div className="flex justify-start ps-10 items-center">
            <h2 className="lg:text-8xl  font-semibold md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-white">OpenCart</h2>
          </div>
        </Col>
      </Row>


      <Row className='flex justify-center items-center pt-5 pb-3'>
        <Col md={10} className='flex justify-center items-center flex-col'>
          <h2 className='hed2 text-center'>Introduction to OpenCart Ecommerce Solutions</h2>
          <p className='para text-center'>In the dynamic realm of online commerce, selecting the optimal platform is key to achieving success. At Razobyte Softtech, we specialize in
            empowering businesses with cutting-edge ecommerce solutions, with OpenCart emerging as a cornerstone of our offerings. In this comprehensive
            guide, we delve into the myriad advantages of OpenCart, its unique features, and why it's the preferred choice for businesses seeking robust
            ecommerce capabilities. </p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={10}>
          <h3 className='hed2 text-center'>Why OpenCart Stands Out: Unveiling Its Superiority</h3>
          <p className='para'>OpenCart has garnered acclaim as a leading ecommerce platform, renowned for its versatility, scalability, and ease of use. Let's explore the key
            features that distinguish OpenCart and make it an indispensable tool for businesses worldwide.</p>

          <div className='d-flex justify-content-center flex-sm-row flex-col  align-items-center gap-3'>
            <div className='d-flex flex-col items-center Shopify-section shadow-md'>
              <h3 className='text-center font-semibold  text-md  md:text-2xl'>User-Friendly <br /> Interface</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>At the core of OpenCart's appeal lies its intuitive user interface, designed to simplify the process of setting up and managing an online store. With its user-friendly dashboard and straightforward navigation, OpenCart empowers businesses to launch their ecommerce ventures with minimal effort and maximum efficiency.</p>
            </div>
            <div className='d-flex flex-col items-center Shopify-section shadow-md'>

              <h3 className='text-center font-semibold  text-md  md:text-2xl'>Flexibility and Customization Options</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>At the core of OpenCart's appeal lies its intuitive user interface, designed to simplify the process of setting up and managing an online store. With its user-friendly dashboard and straightforward navigation, OpenCart empowers businesses to launch their ecommerce ventures with minimal effort and maximum efficiency.</p>
            </div>
            <div className='d-flex flex-col items-center Shopify-section shadow-md hover:text-[#ffff]'>

              <h3 className='text-center font-semibold  text-md  md:text-2xl'>Flexibility and Customization Options</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>At the core of OpenCart's appeal lies its intuitive user interface, designed to simplify the process of setting up and managing an online store. With its user-friendly dashboard and straightforward navigation, OpenCart empowers businesses to launch their ecommerce ventures with minimal effort and maximum efficiency.</p>
            </div>

          </div>
          <div className='d-md-flex justify-content-center align-items-center gap-3'>
            <div className='d-flex flex-col items-center Shopify-section shadow-md'>

              <h3 className='text-center font-semibold  text-md  md:text-2xl'>Comprehensive Feature Set</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>
                OpenCart boasts a comprehensive feature set out of the box, encompassing essential ecommerce functionalities such as product management, order processing, payment gateways, and shipping options. With OpenCart, businesses have everything they need to launch, manage, and grow a successful online store.</p>
            </div>
            <div className='d-flex flex-col items-center Shopify-section shadow-md hover:text-[#fff]'>

              <h3 className='text-center font-semibold  text-md  md:text-2xl pt-2 '>Responsive Customer Support</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>In the event of any issues or queries, OpenCart provides responsive customer support to assist businesses every step of the way. Whether it's technical assistance, troubleshooting, or guidance on optimizing store performance, OpenCart's dedicated support team is readily available to provide expert advice and solutions.</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row className='bgphp2 d-md-flex  d-none justify-center items-center'>
        <img src={opencart1Img} className='img-fluid px-0 w-full h-[1]' />
        <h2 className='hed2 text-white text-center'>When to Opt for OpenCart</h2>


        <Col md={10} >
          <p className='para text-center text-white'>While OpenCart offers a plethora of benefits, the decision to adopt the platform should be informed by strategic considerations aligned with your business objectives.</p>
          <div className="d-flex justify-content-center items-center gap-5 ">
            <div className='php-section-services'>
              <h3 className='hed3 text-[#3b7fbf] text-center'>Launching a New Online store </h3>
              <p className='para'>For businesses embarking on their ecommerce journey, WooCommerce offers an ideal platform to kickstart their online ventures. Its seamless integration with WordPress, user-friendly interface, and extensive customization options make it an attractive option for startups looking to establish a strong online presence. </p>
            </div>
            <div className='php-section-services'>
              <h3 className='hed3 text-[#3b7fbf] text-center'>Expanding Your Ecommerce Presence </h3>
              <p className='para'>For businesses seeking to expand their existing ecommerce operations or migrate from another platform, WooCommerce provides a seamless transition path. Its scalability, flexibility, and extensive plugin ecosystem make it well-suited to accommodate the evolving needs of growing businesses. </p>
            </div>
            <div className='php-section-services'>
              <h3 className='hed3 text-[#3b7fbf] text-center'>Diversifying Sales Channels</h3>
              <p className='para'>In an increasingly omnichannel world, diversifying sales channels is essential to reaching customers wherever they are. WooCommerce enables businesses to sell across multiple channels, including social media platforms, online marketplaces, and physical retail locations, thereby maximizing reach and revenue potential. </p>
            </div>
          </div>
        </Col>
        <img src={opencart2Img} className='img-fluid px-0 h-1' />
      </Row> */}
      <Row className='d-flex justify-content-center align-items-center pb-5'>
        <Col md={10}>
          <h3 className='hed2 text-center pt-5 pb-3'>Setting OpenCart Apart</h3>
          <p className='para text-md-center'>While numerous ecommerce platforms exist in the market, OpenCart distinguishes itself through its unique features, capabilities, and ecosystem.
            Compared to traditional ecommerce platforms such as Shopify or Magento, OpenCart offers several advantages,</p>
          <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-5'>
            <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#ffff] py-5'>
              <img src={opencart5Img} alt="" className='img-fluid w-[60px]' />
              <h3 class="text-center font-semibold text-sm pt-md-0 md:text-lg">Affordability</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center' >OpenCart provides unparalleled flexibility and customization options, allowing businesses to create unique and tailored online stores.</p>

            </div>
            <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#fff] py-5'>
              <img src={opencart4Img} alt="" className='img-fluid  w-[60px]' />
              <h3 class="text-center font-semibold text-sm pt-md-0 md:text-lg">Extensive customization options</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>OpenCart provides unparalleled flexibility and customization options, allowing businesses to create unique and tailored online stores.</p>



            </div>
            <div className='d-flex flex-column items-center CodeIgniter-section  hover:text-[#ffff]'>
              <img src={opencart3Img} alt="" className='img-fluid w-[60px]' />
              <h3 className="text-center font-semibold text-sm pt-md-0 md:text-lg">Scalability</h3>
              <p className='text-[15px] fs-sm-6 font-[500] text-center'>OpenCart's scalable architecture ensures that businesses can grow their operations seamlessly without encountering limitations.</p>
            </div>
          </div>

        </Col>
      </Row>
      <Row className='d-flex justify-content-center align-items-center py-5 bg-[#5AA1E333]'>
        <Col md={12}>
          <div>
            <h2 className='hed2 text-center'>Custom Development</h2>
            <p className='para text-center'>While OpenCart offers a wide range of features and customization options out of the box,  businesses may require additional  customization<br />  to meet
              their specific requirements. At Razobyte Softtech, we specialize in custom development solutions tailored  to enhance <br /> the capabilities and performance
              of OpenCart stores.</p>
            <Marquee>
              <div className='laravelSection13'>
                <h3 className='text-[#3b7fbf] hed3 '>Custom Themes and Design for OpenCart</h3>
                <p className='para'>Our team of experienced designers can create custom themes and designs that align with your brand identity, aesthetics, and user preferences. Whether you're looking for a sleek and modern design or a more immersive and interactive layout, we'll work closely with you to bring your vision to life.</p>
              </div>
              <div className='laravelSection13'>
                <h3 className='hed3 text-[#3b7fbf]'>Advanced Functionality and Integrations for OpenCart</h3>
                <p className='para'>In addition to design customization, we can develop custom functionality and integrations to extend the capabilities of your OpenCart store. Whether you need custom checkout workflows, personalized product recommendations, or seamless integration with third-party systems, our developers have the expertise to implement tailored solutions that align with your business objectives.</p>
              </div>
              <div className='laravelSection13'>
                <h3 className='hed3 text-[#3b7fbf]'>Performance Optimization and Scalability for OpenCart</h3>
                <p className='para'>Ensuring optimal performance and scalability is essential for delivering a seamless shopping experience and accommodating growing traffic and sales volume. Our team employs best practices in performance optimization, including code optimization, server configuration, and caching strategies, to ensure that your OpenCart store operates efficiently under any workload.</p>
              </div>
              <div className='laravelSection13'>
                <h3 className='hed3 text-[#3b7fbf]'>Ongoing Support and Maintenance for OpenCart</h3>
                <p className='para'>Our commitment to your success extends beyond the initial development phase. We offer ongoing support and maintenance services to keep your OpenCart store running smoothly and address any issues or updates that may arise. Whether you need technical assistance, platform updates, or optimization recommendations, our dedicated support team is here to help you every step of the way.</p>
              </div>

            </Marquee>


          </div>
        </Col>
      </Row>
      <Projects2 titleProjects="Top Web Development Projects" />
      <Row className='d-flex justify-content-center align-items-center  py-4   laravelSection12'>
        <Col md={10}>
          <h3 className='hed2 text-white text-center'>Related Services</h3>

          <div className='d-md-flex justify-content-center align-items-center'>
            <div className='laravelSection13'>
              <img src={opencart6Img} alt="" className='img-fluid w-20' />
              <h3 className='hed3  text-center'>WooCommerce
                Development </h3>
              <p className='para text-center'>Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise’s standards.</p>
            </div>
            <div className='laravelSection13 cursor-pointer' onClick={() => navigate('/shopify')}>
              <img src={opencart8Img} alt="" className='img-fluid w-20' />
              <h3 className='hed3  text-center'>Shopify <br />  Development</h3>
              <p className='para text-center'>Kick-start your business by launching an e-commerce store
                with Shopify Bring in an array of versatile features to set up an online store  rapidly and successfully with Shopify development services.</p>
            </div>
            <div className='laravelSection13 d-md-flex d-none'>
              <img src={opencart7Img} alt="" className='img-fluid w-20' />
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