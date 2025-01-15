import React, { useState, useRef, useEffect } from 'react'
import banner from '../../../../public/Image/Comp 2.mp4';
import bnnervdo from '../../../../public/Image/banner high.png'
import { Row, Col } from 'react-bootstrap'
import ModalExample from '../../Modal/Modal'
import img from '../../../../public/Image/digital-marketingfirst.png'
import ServicesSection from '../../industry/performanceMarketing/Section1'
import WhyWorkWithUs from './FirstComponent'
import Contact from '../../HomePages/Contact/Contact'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Blog from '../../Blog/Blog2'
import SecondComponent from './SecondComponent'
import icon1 from '../../../../public/Image/digital-icon-(1).png'
import icon2 from '../../../../public/Image/digital-icon-(2).png'
import icon3 from '../../../../public/Image/digital-icon-(3).png'
import icon4 from '../../../../public/Image/digital-icon-(4).png'
import icon5 from '../../../../public/Image/digital-icon-(5).png'
import icon6 from '../../../../public/Image/digital-icon-(6).png'
import './Digital.css'


export default function DigitalMarketing() {
  const videoRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (videoRef.current) {
      // Reduce initial loading time
      videoRef.current.preload = "metadata";

      // Load video only when needed
      const loadVideo = () => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      };

      // Load video when it's close to viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadVideo();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, []);


  const faqData = [
    {
      title: "What is covered under digital marketing services?",
      answer: "Digital marketing services include a wide range of strategies and techniques that businesses use to promote their products or services online. These services include SEO, PPC advertising, social media marketing, content marketing, email campaigns, and more."
    },
    {
      title: "What are the top 7 types of digital marketing services?",
      answer: (
        <ul>
          <li>1. Search Engine Optimization (SEO)</li>
          <li>2. Pay-Per-Click (PPC) Advertising</li>
          <li>3. Social Media Marketing</li>
          <li>4. Content Marketing</li>
          <li>5. Email Marketing</li>
          <li>6. Affiliate Marketing</li>
          <li>7. Mobile Marketing</li>
        </ul>
      )
    },
    {
      title: "What are the 4 major types of digital marketing?",
      answer: (
        <ul>
          <li>1. SEO: Optimizing websites for search engines.</li>
          <li>2. PPC: Paid online advertising.</li>
          <li>3. Social Media Marketing: Leveraging social platforms to engage audiences.</li>
          <li>4. Content Marketing: Creating valuable content to attract and retain customers.</li>
        </ul>
      )
    },
    {
      title: "Which digital marketing service is best for small businesses?",
      answer: "For small businesses, SEO and social media marketing are the best options. They provide long-term benefits and are cost-effective. Additionally, local SEO can help small businesses attract nearby customers."
    },
    {
      title: "What is SEO in digital marketing?",
      answer: "SEO (Search Engine Optimization) is a digital marketing service that optimizes a website to rank higher on search engine results pages (SERPs). Involving keyword research, on-page SEO, technical optimization, and link building, it helps increase organic traffic."
    }
  ];
  const services = [
    {
      icon: icon6,
      title: "Website Design & Development",
      description: "Creating and building websites that are user-friendly, functional, and visually appealing.",
    },
    {
      icon: icon5,
      title: "Mobile App Design & Development",
      description: "Designing and building mobile apps that are easy to use and perform well.",
    },
    {
      icon: icon4,
      title: "Maintenance & Support",
      description: "Ongoing help to fix issues and update websites or apps as needed.",
    },
    {
      icon: icon3,
      title: "Game Development",
      description: "Designing and creating video games for entertainment across various platforms."
    },
    {
      icon: icon2,
      title: "UI & UX Design",
      description: "Designing interfaces and experiences that are easy and enjoyable to use.",
    },
    {
      icon: icon1,
      title: "Ecommerce Solutions",
      description: "Building online stores that allow businesses to sell products or services smoothly.",
    },

  ];
  return (
    <>
      <div className="relative w-screen  row p-0">
        {/* Optimized Video Background */}
        <video
          ref={videoRef}
          className="absolute top-0 p-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          {/* Multiple source formats for better browser support and optimization */}
          <source src={banner} type="video/mp4" />
          {/* You can add WebM format for better compression */}
          {/* <source src={bannerWebm} type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            {/* Image Container */}
            <div className="w-full flex justify-end items-center">
              <div className="w-1/2 pt-5">
                <img
                  src={bnnervdo}
                  alt="Banner"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row className='pt-md-5 pt-4 flex  flex-col justify-center items-center'>
        <div className="flex items-center justify-center text-center ">
          <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70  max-w-24"></div>
          <h1 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-gray-900">
            Dominate Your Market with Expert Digital Marketing Solutions</h1>
          <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
        </div>
        <Col md={11} xs={12} className="d-md-flex justify-center ">
          <div className="col-md-5 d-sm-flex d-none ">
            <img src={img} alt="img" className='img-fluid px-0' />
          </div>
          <div className="col-md-5">
            <p className='md:text-lg  font-normal text-sm pt-4 pb-3'>In today’s digital world, standing out online is crucial. We’re
              here to help you get noticed, build strong relationships with
              your customers, and grow your business. Whether you're
              just starting or looking to level up, we have the right tools,
              strategies, and team to make it happen.</p>
            <ModalExample buttonLabel="Let's connect"
              headingform="Book Your Session" className="py-2 px-3 text-white font-semibold md:text-2xl sm:text-xl
                                text-sm bg-[#3b7fbf]"/>
          </div>


        </Col>


      </Row>
      <SecondComponent />
      <Row className='bg-[#3b7fbf] py-2 flex justify-center items-center'>
        <Col md={9} className='flex flex-md-row flex-column justify-between items-center'>
          <h4 className='sm:text-3xl text-xl font-semibold text-white mt-1'>Start Your Project Today!</h4>
          <ModalExample
            buttonLabel="Book A  Free Session" headingform="Book A Free Session"
            subheadingForm="Let's Discuss Your Goals & Provide a Quote"
            className="btnmain 
               bg-white font-semibold text-[#3b7fbf]  sm:px-0 px-3" />
        </Col>
      </Row>
      <WhyWorkWithUs />
      <ServicesSection headingservices="Our  Other Expertise" className="bg-white" servicesData={services} />

      <Contact />
      <div className="w-screen flex justify-center items-center md:py-8 pb-5 relative overflow-hidden min-h-screen">
        {/* FAQ Content */}
        <div className="max-w-6xl w-full relative">
          <div className="flex items-center justify-center text-center mb-12">
            <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70 max-w-24" />
            <h2 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70" />
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div className="rounded-lg w-full overflow-hidden" key={index}>
                <div
                  className={`flex items-center justify-between p-3 hover:bg-gray-100 
          border-b border-gray-200 cursor-pointer transition-all duration-300 
          ${expandedIndex === index
                      ? 'bg-gray-200 text-black'  // Apply text-black when expanded
                      : 'bg-white text-[#3D3D3D] hover:bg-gray-500 active:bg-gray-100'  // Hover effect for collapsed state
                    }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex md:justify-between justify-evenly items-center w-full ">
                    <span className={`font-medium text-sm md:text-lg ${expandedIndex === index ? 'text-black'
                      : 'text-[#3D3D3D] '}`}>
                      {faq.title}
                    </span>
                  </div>
                  <span
                    className={`flex justify-center items-center text-3xl rounded-full h-8 w-8 transition-all duration-300  hover:bg-gray-100
            ${expandedIndex === index
                        ? 'border-black text-black rotate-[180deg]'
                        : 'border-[#3b7fbf] text-black rotate-0'
                      } border`}
                  >
                    {expandedIndex === index ? '−' : '+'}
                  </span>
                </div>

                {expandedIndex === index && (
                  <div className="px-4 py-3 bg-[#3b7fbf] text-white mt-0 animate-fadeIn">
                    <div className="text-left">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>

        {/* Kite Overlay */}
        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          <div className="kite-1" />
          <div className="kite-2" />
          <div className="kite-3" />
          <div className="kite-4" />
          <div className="kite-5" />
          <div className="kite-6" />
        </div>
      </div>


      <Blog title="Blog" />
      <Row style={{ backgroundColor: "#000" }} className='justify-content-center align-items-center'>
        <Col md={10} className='flex items-center justify-evenly  gap-5 py-1'>
          <p className='md:text-3xl sm:text-2xl font-semibold text-base text-white pt-3'>Go Digital Show Digital</p>
          <ModalExample buttonLabel="Book Your Session"
            headingform="Book Your Session"
            className="bg-white text-[#3b7fbf] 
                    hover:text-black  font-[900] py-2 px-3" />
        </Col>
      </Row>





    </>

  )
}
