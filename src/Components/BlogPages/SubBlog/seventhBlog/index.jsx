import React, { useState, useEffect } from 'react';
import { FaShare, FaBookmark, FaChevronDown } from 'react-icons/fa';
import aiAutomationData from './seventh.json';
import BlogSidebar from '../BlogSideNavbar';
import {Row,Col} from 'react-bootstrap';
import banner from '../../../../../public/Image/AI-Powered Automation.png'

const SeventhBlog = () => {
  const [data, setData] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      title: "What is AI-powered automation in IT services?",
      answer: "AI-powered automation refers to the use of AI technologies like machine learning, NLP, and RPA to automate tasks within IT services. It helps streamline operations, improve decision-making, and reduce human intervention."
    },
    {
      title: "How is AI different from traditional automation?",
      answer: "Traditional automation follows predefined rules, while AI automation learns from data, adapts to changing environments, and makes decisions autonomously."
    },
    {
      title: "What are the key benefits of AI automation in IT services?",
      answer: (
        <ul className="list-disc pl-4">
          <li>Enhanced productivity</li>
          <li>Cost savings</li>
          <li>Improved customer experiences</li>
          <li>Scalability</li>
          <li>Better decision-making</li>
        </ul>
      )
    },
    {
      title: "How does AI automation improve cybersecurity?",
      answer: "AI tools analyze network traffic patterns, identify potential threats, and respond in real-time, bolstering an organization's security defenses."
    },
    {
      title: "What challenges do businesses face when adopting AI automation?",
      answer: "Challenges include data privacy concerns, skill gaps, high initial costs, and transparency issues related to AI's decision-making processes."
    }
  ];

  useEffect(() => {
    try {
      setData(aiAutomationData);
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
    <div className="md:bg-gray-50 py-md-5  py-3 d-md-flex items-center justify-center">
      <Row className="flex justify-center">
        {/* Left Column - Blog Content */}
        <Col md={7} className="mb-4">
          <div className="space-y-6">
            {Object.entries(data).map(([key, section]) => (
              <div key={key} className="md:bg-white md:p-6 rounded-md-lg md:shadow-sm">
                <h2 className="md:text-2xl text-lg font-semibold mb-4 text-gray-800">
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="md:text-2xl text-lg font-semibold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="w-full  bg-slate-50 px-md-5 px-3 py-md-4 y-1 flex justify-between items-center hover:bg-gray-50 rounded-lg"
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
        <Col md={4}>
          <div className="sticky top-4">
            <BlogSidebar />
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default SeventhBlog;