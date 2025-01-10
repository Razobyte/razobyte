import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import banner from '../../../public/Image/website-design-devlopment.jpg'
import Count from '../HomePages/Count/Count';
import ScrollTrigger from 'react-scroll-trigger';
import { useNavigate } from 'react-router';
import ServicesSection from '../industry/performanceMarketing/Section1';
import ecommerce from '../../../public/Image/online-shopping.png'
import php5Image from '../../../public/Image/php-else (5).png';
import image27 from '../../../public/Image/Codi.png';
import wordpress from '../../../public/Image/wp (1).png'
import image28 from '../../../public/Image/php-else (2).png';
import image29 from '../../../public/Image/php-else (1).png';
import image30 from '../../../public/Image/php-else(7).png';
import image31 from '../../../public/Image/lar-8 (11).jpg';
import image32 from '../../../public/Image/html-5_5968267 (1).png';
import image33 from '../../../public/Image/lar-8 (8).png';
import image34 from '../../../public/Image/shopify7.png';
import image35 from '../../../public/Image/php-else (3).png';
import image36 from '../../../public/Image/php-else (4).png';
import image37 from '../../../public/Image/php-else(6).png';
import Check from '../../../public/Image/check-mark_5290058 1.png'
import icon8 from '../../../public/Image/performance-marketing (1).png'
import icon7 from '../../../public/Image/performance-marketing (2).png'
import icon6 from '../../../public/Image/performance-marketing (3).png'
import icon5 from '../../../public/Image/performance-marketing (4).png'
import icon4 from '../../../public/Image/performance-marketing (5).png'
import icon3 from '../../../public/Image/performance-marketing (6).png'
import icon2 from '../../../public/Image/performance-marketing (7).png'
import icon1 from '../../../public/Image/performance-marketing (8).png'
import Contact from '../HomePages/Contact/Contact';
import PerformanceMetrics from '../industry/performanceMarketing/Section2';
import shopify from '../../../public/Image/shopify7.png';
import openkart from '../../../public/Image/php-else (3).png';
import woCommerce from '../../../public/Image/php-else (4).png';
import prestashop from '../../../public/Image/php-else (2).png';
import img1 from '../../../public/Image/case-icon (1).png';
import img2 from '../../../public/Image/case-icon (2).png';
import img3 from '../../../public/Image/case-icon (3).png';
import img4 from '../../../public/Image/case-icon (4).png';
import CommonSection from '../ServicesPages/looking/Looking';
import { GiCheckMark } from "react-icons/gi";
import TestimonialsSection from '../industry/performanceMarketing/TestominailsNew';
import ClientsSectionLandingPage from '../industry/performanceMarketing/Clients';
import LayoutFooter from '../industry/performanceMarketing/Footer';
import Section1 from './Section1';
import ModalExample from '../Modal/Modal';

export default function WebsiteDesignDevelopment() {
  const navigate = useNavigate()

  const EcoomerceServices = [
    { title: 'Shopify', image: shopify, link: '/services/ecommerce-solutions/shopify-development', show: true },
    { title: 'Openkart', image: openkart, link: '/services/ecommerce-solutions/opencart-development', show: true },
    { title: 'Woocommerce', image: woCommerce, link: '/services/ecommerce-solutions/wocommerce-development', show: true },
    { title: 'Prestashop', image: prestashop, link: '/services/remainpage', show: true },
  ]


  const otherServices = [
    { title: 'Wordpress Development', image: wordpress, link: '/services/remainpage', show: true },
    { title: 'HTML & CSS Website', image: image32, link: '/services/development/html-css-website', show: true },
    { title: 'PHP Website', image: image27, link: '/services/development/php-development', show: true },
    { title: 'React JS Website', image: image30, link: '/services/development/reactjs-development', show: true },
    { title: 'Laravel Development', image: image33, link: '/services/development/laravel-devlopment', show: true },
    { title: 'Angular JS Website', image: image31, link: '/services/remainpage', show: true },
    { title: 'CodeIgniter Website', image: php5Image, link: '/services/development/codeigniter-website-development', show: true },
    { title: 'Ecommerce Website', image: ecommerce, link: '/services/development/ecommerce-website-development', show: true },
  ];
  const takeaways = [
    {
      text: "Performance marketing strategies can significantly improve patient engagement and acquisition for healthcare providers."
    },
    {
      text: "Data-driven decision-making is essential for effective audience targeting."
    },
    {
      text: "A comprehensive, multi-channel approach maximizes overall marketing impact."
    }
  ];
   const services = [
            {
              icon: icon1,
              title: "PPC Management",
              description: "Maximize your ad spend with our expert pay-per-click management.",
              features: "Keyword research, ad copy creation, A/B testing, and analytics"
            },
            {
              icon: icon2,
              title: "SEO Optimization",
              description: "Improve your organic search visibility and attract quality traffic.",
              features: "On-page SEO, backlink strategy, and technical SEO audits"
            },
            {
              icon: icon3,
              title: "Social Media Advertising",
              description: "Engage your audience on platforms they love like Facebook, Instagram, Twitter, LinkedIn",
              features: "Targeted campaigns, creative assets, and performance tracking"
            },
            {
              icon: icon4,
              title: "Content Marketing",
              description: "Drive conversions with compelling and valuable content.",
              features: "Blog writing, infographics, and video marketing"
            },
            {
              icon: icon5,
              title: "Website Design and Development",
              description: "We create visually stunning, user-friendly websites that reflect your brand identity.",
              features: ""
            },
            {
              icon: icon6,
              title: "UI and UX Design",
              description: "Our intuitive interfaces enhance user engagement and satisfaction for an optimal experience.",
              features: ""
            },
            {
              icon: icon7,
              title: "Mobile Design and Development",
              description: "We provide responsive Android and iOS solutions, ensuring seamless interactions on any device.",
              features: ""
            },
            {
              icon: icon8,
              title: "Digital Marketing",
              description: "Boost your online presence with our strategic services, from SEO to social media marketing, designed to connect with your target audience and drive traffic to your website.",
              features: ""
            }
          ];
  const results = [
    {
      title: "Increased Patient Acquisition:",
      description: "Achieved a 25% rise in new patient registrations within six months."
    },
    {
      title: "Higher Engagement Rates:",
      description: "Boosted social media interactions by 40%, enhancing community engagement."
    },
    {
      title: "Improved ROI:",
      description: "Delivered a 150% return on investment (ROI) for PPC campaigns, driving cost-effective patient leads."
    },
    {
      title: "Enhanced Brand Awareness:",
      description: "Increased website traffic by 60% through effective SEO and content strategies."
    }
  ];


  const steps = [
    {
      icon: img1,
      title: "Company",
      subtitle: "Razobyte",
      className: "text-gray-700"
    },
    {
      icon: img2,
      title: "Industry",
      subtitle: "Healthcare",
      className: "text-gray-700"
    },
    {
      icon: img3,
      title: "Objective",
      subtitle: "To enhance patient acquisition and engagement through targeted performance marketing",
      className: "text-gray-700"
    },
    {
      icon: img4,
      title: "Timeframe",
      subtitle: "2021-2023",
      className: "text-gray-700"
    }
  ];
  const challenges = [
    {
      title: "Intense Competition:",
      description: "Navigating a crowded healthcare market with numerous providers."
    },
    {
      title: "Tracking Effectiveness:",
      description: "Difficulty in measuring outcomes traditional marketing methods."
    },
    {
      title: "Diverse Demographics:",
      description: "Addressing the varied healthcare needs of different patient groups."
    }
  ];
  const [clients, setClients] = useState(false)
  return (
    <>

      <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
        <Row className='p-0'>
          <img src={banner} alt="banner" className='img-fluid p-0' />
        </Row>

        <Count clients={clients} />
        <Section1 />
        <CommonSection title="Web Development Technologies" services={otherServices} bgName="bg-[#EAF2FF]"
          para="We specialize in creating powerful, scalable and user-friendly websites using the latest 
          technologies." />
            <Row className='bg-[#EAF2FF] pb-5 d-md-none d-flex justify-center items-center'>
          <Col md={10} className='flex  flex-col justify-center items-center'>
            <h4 className='text-xl  font-semibold  text-[#5E5E5E]'>
              Start Your Project Today!</h4>
              <ModalExample
              buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
              subheadingForm="Let's Discuss Your Goals & Provide a Quote"  className="btnmain bg-black text-[#fff] px-5"/>
          </Col>
        </Row>
        <Row className='d-md-flex justify-center items-center md:py-12 py-3 w-screen overflow-hidden bg-[#FFF]'>
          <Col md={10} xs={12}>
            {/* Title */}
            <h3 className="sm:text-2xl text-xl md:text-4xl font-semibold text-gray-700 text-center">
              Ecommerce Development
            </h3>
            <p className="md:text-lg sm:text-base text-xs font-normal text-gray-700 text-center mb-8">Building Secure, Scalable Online Stores That Drive Sales</p>

            {/* Desktop Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-6 gap-3">
              {EcoomerceServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(service.link)}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg
               p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
                  />
                  {/* Title */}
                  <h3 className="text-sm sm:text-base fw-medium text-[#3b7fbf] text-center">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
            {/* Mobile Slider */}
          </Col>
        </Row>
        <Row className='bg-[#3b7fbf] py-4 d-md-flex d-none justify-center items-center'>
          <Col md={10} className='flex justify-between items-center'>
            <h4 className='sm:text-3xl text-base md:font-semibold font-medium text-white'>Start Your Project Today!</h4>
            <ModalExample 
            buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
            subheadingForm="Let's Discuss Your Goals & Provide a Quote" 
             className="btnmain bg-white text-[#3b7fbf]"/>

          </Col>

        </Row>
      
 
  {/* First Services Section (visible on desktop) */}
  <ServicesSection
    headingservices="Our Other Capabilities"
    className="d-md-flex d-none"
    servicesparagraph="Drive Traffic, Engage Audiences, and Boost Conversions"
    servicesData={services}
  />
  {/* Contact Section */}
  <Contact />

  {/* Second Services Section (visible on mobile only) */}
  <ServicesSection
    headingservices="Our Other Capabilities"
    className="d-md-none d-flex py-4"
    servicesparagraph="Drive Traffic, Engage Audiences, and Boost Conversions"
  />
        {/* <PerformanceMetrics /> */}
        {/* Case Studies Section */}

        {/* <Row className='flex justify-center items-center pt-12 bg-[#EAF2FF]'>
                    <div className="max-w-5xl mx-auto px-4">
                     
                        <div className="text-center mb-5">
                            <h2 className="lg:text-5xl sm:text-3xl text-xl font-bold text-[#5e5e5e] mb-3">Case Studies</h2>
                            <h3 className="lg:text-xl  text-base font-normal text-[#3b7fbf]">
                                Boosting Patient Engagement through Performance Marketing at Razobyte
                            </h3>
                        </div>

                      
                        <div className="flex flex-col md:flex-row items-center justify-evenly">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-center">
                                   
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-2 text-4xl">
                                            <img src={step.icon} alt="step-icon" className='img-fluid' />
                                        </div>
                                        <h4 className="font-semibold text-gray-700 text-lg mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 max-w-xs">
                                            {step.subtitle}
                                        </p>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block text-blue-600 text-2xl mx-9">
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" mx-auto px-4 py-2 flex justify-center items-center flex-col">
                        <h2 className="lg:text-5xl sm:text-3xl text-2xl  font-bold text-gray-600 text-center sm:mb-12 mb-3">
                            Challenges
                        </h2>

                        <div className=" max-w-6xl flex  md:flex-row flex-col gap-md-5 gap-1">
                            {challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="bg-[#3b7fbf] rounded-lg  p-3 transform transition-transform hover:scale-90"
                                >
                                    <h3 className="text-white text-xl font-semibold mb-3">
                                        {challenge.title}
                                    </h3>
                                    <p className="text-white text-base leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center py-sm-5 py-2">
    <h2 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-gray-600 text-center mb-sm-5 mb-3">
        Solutions Implemented
    </h2>
    <div className=" max-w-6xl w-full flex flex-col lg:flex-row justify-center items-center">
      
        <div className="lg:w-6/12 w-full  mb-6 lg:mb-0">
            <p className="lg:text-base text-sm font-normal">
                Our approach focuses on data-driven campaigns, utilizing analytics to identify target demographics
                and create tailored solutions, such as telehealth services. We enhance visibility through SEO strategies,
                run effective PPC advertising on Google and social media, produce engaging content, and foster social
                media engagement to connect with patients meaningfully.
            </p>
        </div>

       
        <div className="lg:w-6/12 w-full  flex justify-center">
            <img 
                src={img5} 
                alt="Solutions Implemented" 
                className=" max-w-full object-contain" 
            />
        </div>
    </div>
                </div>
                <div className="flex flex-col justify-center items-center py-sm-5 py-2">
    <h2 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-gray-600 text-center mb-sm-5 mb-0">
       OutComes
    </h2>
    <div className=" max-w-6xl w-full flex flex-col lg:flex-row justify-center items-center">
\
       
          <div className="lg:w-6/12 w-full  md:flex hidden justify-center">
            <img 
                src={img6} 
                alt="Solutions Implemented" 
                className=" max-w-full object-contain" 
            />
        </div>
     
        <div className="lg:w-6/12 w-full space-y-4">
          {results.map((result, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-[#3b7fbf] text-xl font-semibold">
                {result.title}
              </h3>
              <p className="text-gray-600 lg:text-base text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>

      
    </div>
                </div>
                <div className="flex flex-col justify-center items-center py-sm-5 py-0">
      <h2 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-gray-600 text-center mt-sm-0 mt-2 mb-sm-5 mb-3">
        Key Takeaways
      </h2>
      
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center items-center">
       
        <div className="lg:w-6/12 w-full space-y-2">
          {takeaways.map((takeaway, index) => (
            <div key={index} className="flex items-start space-x-3">
              <GiCheckMark className="mt-1 w-5 h-5 flex-shrink-0 text-[#3b7fbf] fw-bold" />
              <p className="text-gray-600 lg:text-base text-sm font-medium">
                {takeaway.text}
              </p>
            </div>
          ))}
        </div>

       
        <div className="lg:w-6/12 w-full flex justify-center">
          <img 
            src={img7}
            alt="Key Takeaways Illustration" 
            className="max-w-full object-contain" 
          />
        </div>
      </div>
    </div>
    
                </Row> */}
        <TestimonialsSection />
        <ClientsSectionLandingPage />

        {/* <Row className='w-screen d-md-flex d-none px-0 bg-[#3b7fbf] p-4'>  
                <div className="flex justify-evenly space-x-4">
   
      <a href="tel:+8448158188"
      className='text-decoration-none'>
        <button className="flex items-center bg-white text-[#3b7fbf] font-medium text-3xl px-4 py-2 rounded-lg shadow-md hover:bg-[#e0f0ff]">
          <MdOutlineWifiCalling3 className="mr-2" />
          Call Now
        </button>
      </a>

      <a href="https://wa.me/8448158188" target="_blank" rel="noopener noreferrer"
      className='text-decoration-none'>
        <button className="flex items-center bg-white text-[#29A71A] font-medium text-3xl px-4 py-2 rounded-lg shadow-md hover:bg-[#e0f0ff]">
          <BiLogoWhatsappSquare className="mr-2 rounded-full h-10 w-10" />
          Chat Now
        </button>
      </a>

      
      <a href="https://wa.me/8448158188" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
        <button className="flex items-center bg-white text-[#29A71A] font-medium text-3xl px-4 py-2 rounded-lg shadow-md hover:bg-[#e0f0ff]">
          <div>
            <BiLogoWhatsappSquare className="mr-2 rounded-full h-10 w-10" />
          </div>
          Chat Now
        </button>
      </a>
    </div>

                </Row> */}
        <Row className='bg-[#3b7fbf] py-4 flex justify-center items-center'>
          <Col md={10} className='flex flex-md-row flex-column justify-between items-center'>
            <h4 className='sm:text-3xl font-semibold text-white'>Start Your Project Today!</h4>
            <ModalExample 
            buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
            subheadingForm="Let's Discuss Your Goals & Provide a Quote" 
            className="btnmain bg-white text-[#3b7fbf] sm:px-0 px-3"/>
          </Col>
        </Row>

      </ScrollTrigger>
      <LayoutFooter />

    </>
  )
}