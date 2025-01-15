import React, { useState, useEffect } from 'react';
import { FaShare, FaBookmark, FaChevronDown } from 'react-icons/fa';
import cybersecurity from './Eleven.json';
import BlogSidebar from '../BlogSideNavbar';
import { Row, Col } from 'react-bootstrap';
import banner from '../../../../../public/Image/The Digital Transformation Journey.png'

const ElevenBlog = () => {
    const [data, setData] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const faqData = [
        {
            "title": "What is digital transformation?",
            "answer": "Digital transformation is the integration of digital technologies into business operations to enhance processes, deliver value, and meet market demands."
        },
        {
            "title": "Why is digital transformation important for businesses?",
            "answer": "It helps businesses improve efficiency, adapt to market changes, enhance customer experiences, and gain a competitive edge."
        },
        {
            "title": "What are the key challenges in digital transformation?",
            "answer": "Resistance to change, cybersecurity risks, high costs, and lack of expertise are common challenges."
        },
        {
            "title": "What technologies drive digital transformation?",
            "answer": "AI, IoT, blockchain, cloud computing, and data analytics are critical enablers."
        },
        {
            "title": "How can businesses measure the success of digital transformation?",
            "answer": "By tracking KPIs like customer satisfaction, cost savings, operational efficiency, and revenue growth."
        },
        {
            "title": "What industries benefit most from digital transformation?",
            "answer": "Healthcare, retail, manufacturing, finance, and logistics see significant gains from transformation initiatives."
        },
        {
            "title": "How does culture impact digital transformation?",
            "answer": "A digital-first culture fosters innovation, collaboration, and adaptability, ensuring successful implementation."
        },
        {
            "title": "What role does leadership play in digital transformation?",
            "answer": "Leaders drive vision, allocate resources, and inspire teams to embrace change."
        }
    ];
    useEffect(() => {
        try {
            setData(cybersecurity);
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
            <div className="md:bg-gray-50 py-md-5 py-2 d-md-flex items-center justify-center">
                <Row className="d-md-flex justify-center">
                    {/* Left Column - Blog Content */}
                    <Col md={7} xs={12} className="mb-4">
                        <div className="md:space-y-6">
                            {Object.entries(data).map(([key, section]) => (
                                <div key={key} className="md:bg-white md:p-6 md:rounded-lg md:shadow-sm">
                                    <h2 className="md:text-2xl  text-lg font-semibold mb-4 text-gray-800">{section.title}</h2>

                                    {/* Render description if exists */}
                                    {section.description && (
                                        <h3 className="text-base font-medium mb-4 text-gray-800">{section.description}</h3>
                                    )}

                                    {/* Render section content if available */}
                                    {section.content && Array.isArray(section.content) && section.content.length > 0 && (
                                        <div className="space-y-4">
                                            {section.content.map((item, idx) => {
                                                if (typeof item === "string") {
                                                    return (
                                                        <p key={idx} className="text-gray-700 leading-relaxed">
                                                            {item.split(" ").map((word, wordIdx) => {
                                                                // Bold specific words in the content
                                                                if (["People", "Processes", "Technology"].includes(word)) {
                                                                    return <span key={wordIdx} className="font-bold">{word} </span>;
                                                                }
                                                                return <span key={wordIdx}>{word} </span>;
                                                            })}
                                                        </p>
                                                    );
                                                }

                                                // If item is an object (with mainHeading and description)
                                                return (
                                                    <div key={idx}>
                                                        <h3 className="font-medium text-lg text-black">{item.mainheading} -
                                                            <span className="ps-1 text-base text-gray-700 font-normal">{item.description}</span>
                                                        </h3>
                                                        {item.example && (
                                                            <h6 className="text-sm italic">Example: {item.example}</h6>
                                                        )}

                                                        {/* If subitems exist, display them as a list */}
                                                        {item.subitems && item.subitems.length > 0 && (
                                                            <ul className="list-disc pl-5">
                                                                {item.subitems.map((subitem, subIndex) => (
                                                                    <li key={subIndex}>{subitem}</li>
                                                                ))}
                                                            </ul>
                                                        )}

                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Render subitems (if available) */}
                                    {section.subitems && Array.isArray(section.subitems) && section.subitems.length > 0 && (
                                        <ul className="space-y-4 mt-4">
                                            {section.subitems.map((subitem, idx) => (
                                                <li key={idx} className="text-gray-700">
                                                    {subitem}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}





                            {/* FAQ Section */}
                            <div className="md:bg-white md:p-6 rounded-lg md:shadow-sm">
                                <h2 className="md:text-2xl  text-lg font-semibold mb-6 text-gray-800">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {faqData.map((faq, index) => (
                                        <div key={index} className="border rounded-lg">
                                            <button
                                                className="w-full  bg-slate-50 px-md-5 px-3  py-md-4 py-1 flex justify-between items-center hover:bg-gray-50 rounded-lg"
                                                onClick={() => handleFaqToggle(index)}
                                            >
                                                <span className="font-medium text-left text-gray-800">
                                                    {faq.title}
                                                </span>
                                                <FaChevronDown
                                                    className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
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
                    <Col md={4} xs={12}>
                        <div className="sticky top-4">
                            <BlogSidebar />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default ElevenBlog;