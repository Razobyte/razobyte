import React, { useState, useEffect } from 'react';
import { FaShare, FaBookmark, FaChevronDown } from 'react-icons/fa';
import theriseofComputingData from './Eight.json';
import BlogSidebar from '../BlogSideNavbar';
import {Row,Col} from 'react-bootstrap';
import banner from '../../../../../public/Image/The Rise of Edge Computing.png'

const EightBlog = () => {
  const [data, setData] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      title: "What is edge computing in simple terms?",
      answer: "Edge computing processes data near its source, such as IoT devices or local servers, rather than relying on centralized data centers."
    },
    {
      title: "How does edge computing differ from cloud computing?",
      answer: "While cloud computing processes data in centralized data centers, edge computing handles data locally at the edge of the network, reducing latency and bandwidth usage."
    },
    {
      title: "What are some common use cases of edge computing?",
      answer: "Common use cases include autonomous vehicles, healthcare monitoring, predictive maintenance, smart cities, and retail analytics."
    },
    {
      title: "What industries benefit the most from edge computing?",
      answer: "Industries like manufacturing, healthcare, retail, energy, and transportation benefit significantly from edge computing."
    },
    {
      title: "What are the key challenges in implementing edge computing?",
      answer: "Key challenges include security risks, integration complexities, and managing distributed resources effectively."
    },
    {
      title: "How does 5G enhance edge computing?",
      answer: "5G networks improve edge computing by providing faster connectivity, enabling real-time data analysis, and supporting more connected devices."
    },
    {
      title: "What is the difference between edge and fog computing?",
      answer: "Edge computing processes data directly at the source, while fog computing creates an intermediary layer to process and analyze data between the edge and the cloud."
    },
    {
      title: "Why is edge computing important for IoT devices?",
      answer: "Edge computing ensures IoT devices can process data locally, reducing latency and enabling faster responses."
    },
    {
      title: "Can edge computing improve data security?",
      answer: "Yes, by processing sensitive data locally, edge computing minimizes the risks associated with transmitting data over networks."
    },
    {
      title: "What is the role of AI in edge computing?",
      answer: "AI enhances edge computing by enabling devices to analyze data and make decisions locally, improving efficiency and responsiveness."
    }
  ];
  


  useEffect(() => {
    try {
      setData(theriseofComputingData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, []);
  const handleFaqToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <>
    <Row className='p-0'>
        <img src={banner} alt="banner" className='img-fluid p-0' />
    </Row>
    <div className="md:bg-gray-50 py-md-5 row w-screen py-3 d-md-flex  items-center justify-center">
      <Row className="flex justify-center">
        {/* Left Column - Blog Content */}
        <Col md={7} xs={12} className="mb-4">
          <div className="md:space-y-6">
            {Object.entries(data).map(([key, section]) => (
              <div key={key} className="md:bg-white md:p-6  md:rounded-lg md:shadow-sm">
                <h2 className="md:text-2xl  text-lg font-semibold mb-4 text-gray-800">
                  {section.title}
                </h2>
                {section.content && (
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ul className="space-y-4 mt-4">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <div className="flex-1">
                          <span className="font-medium text-gray-800">
                            {item.header || item.title}
                          </span>
                          {(item.header || item.title) && ": "}
                          <span className="text-gray-700">{item.description || item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* FAQ Section */}
            <div className="bg-white md:p-6 rounded-lg md:shadow-sm">
              <h2 className="md:text-2xl  text-lg font-semibold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="w-full  bg-slate-50 px-md-5 px-3 py-md-4 py-1 flex justify-between items-center hover:bg-gray-50 rounded-lg"
                      onClick={() => handleFaqToggle(index)}
                    >
                      <span className="font-medium text-left text-gray-800">
                        {faq.title}
                      </span>
                      <FaChevronDown
                        className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedIndex === index && (
                      <div className="px-5 py-4 bg-[#3b7fbf] text-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        {/* Right Column - Sidebar */}
        <Col md={5} xs={12}>
          <div className="sticky top-4">
            <BlogSidebar />
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default EightBlog;