import React, { useState, useEffect } from 'react';
import { FaShare, FaBookmark, FaChevronDown } from 'react-icons/fa';
import cybersecurity from './Nine.json';
import BlogSidebar from '../BlogSideNavbar';
import { Row, Col } from 'react-bootstrap';
import banner from '../../../../../public/Image/Cybersecurity in 2024.png'

const NineBlog = () => {
    const [data, setData] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqData = [
        {
            title: "What is cybersecurity?",
            answer: "Cybersecurity involves protecting systems, networks, and data from digital attacks using tools, technologies, and best practices."
        },
        {
            title: "What are the biggest cyber threats in 2024?",
            answer: "Major threats include ransomware, phishing, IoT vulnerabilities, AI-powered attacks, and supply chain breaches."
        },
        {
            title: "Why is multi-factor authentication important?",
            answer: "MFA enhances security by requiring multiple credentials, reducing the risk of unauthorized access."
        },
        {
            title: "How can businesses protect against ransomware?",
            answer: "Regular data backups, endpoint security solutions, and employee training are crucial for ransomware defense."
        },
        {
            title: "What is a Zero Trust security model?",
            answer: "Zero Trust is a security approach that restricts access to resources until verified, ensuring stronger defenses."
        },
        {
            title: "Why are IoT devices vulnerable?",
            answer: "IoT devices often lack robust security features, making them easy targets for cybercriminals."
        },
        {
            title: "How do phishing attacks work?",
            answer: "Phishing involves tricking victims into revealing sensitive information through fraudulent emails or messages."
        },
        {
            title: "What role does AI play in cybersecurity?",
            answer: "AI enhances threat detection and response but also enables attackers to automate and refine their tactics."
        },
        {
            title: "What is the best way to protect personal devices?",
            answer: "Regular updates, antivirus software, and avoiding suspicious links or downloads are essential."
        },
        {
            title: "How can individuals and organizations stay updated on threats?",
            answer: "Subscribe to threat intelligence feeds, follow cybersecurity news, and invest in ongoing training programs."
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
            <div className="md:bg-gray-50 py-5 flex items-center justify-center">
                <Row className="flex justify-center">
                    {/* Left Column - Blog Content */}
                    <Col md={7} className="mb-4">
                        <div className="space-y-6">
                            {Object.entries(data).map(([key, section]) => (
                                <div key={key} className="md:bg-white md:p-6 rounded-lg md:shadow-sm">
                                    <h2 className="md:text-2xl  text-lg font-semibold mb-4 text-gray-800">{section.title}</h2>

                                    <h3 className="text-base font-medium mb-4 text-gray-800">{section.description}</h3>

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

                                                        <h3 className="font-medium text-lg text-gray-800">{item.mainHeading} -
                                                            <span className=" ps-1 text-base text-gray-700 font-normal">{item.description}</span>
                                                        </h3>



                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Render list of cyber threats if available */}
                                    {section.list && Array.isArray(section.list) && section.list.length > 0 && (
                                        <ul className="space-y-4 mt-4">
                                            {section.list.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                                    <div className="flex-1">
                                                        <span className="font-semibold md:text-xl text-base text-gray-800">{item.header || item.title}</span>
                                                        {(item.header || item.title) && " - "}
                                                        <span className="text-gray-700">{item.description || item}</span>

                                                        {/* Render defense tips for each cyber threat */}
                                                        {item.defenseTips && Array.isArray(item.defenseTips) && item.defenseTips.length > 0 && (
                                                            <div className="mt-2 space-y-2 text-gray-900">
                                                                <h4 className="font-medium text-lg text-gray-900">Defense Tips - </h4>
                                                                <ul className="list-disc ml-5">
                                                                    {item.defenseTips.map((tip, tipIdx) => (
                                                                        <li key={tipIdx} className="text-gray-700">{tip}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
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
                                                className="w-full  bg-slate-50 px-md-5 px-3 py-md-4 py-1 flex justify-between items-center hover:bg-gray-50 rounded-lg"
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
export default NineBlog;