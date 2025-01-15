import React, { useState, useEffect } from 'react';
import { FaShare, FaBookmark, FaChevronDown } from 'react-icons/fa';
import cybersecurity from './TenBlog.json';
import BlogSidebar from '../BlogSideNavbar';
import { Row, Col } from 'react-bootstrap';
import banner from '../../../../../public/Image/Cloud-Native Development.png'

const TenBlog = () => {
    const [data, setData] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

      
    const faqData = [
        {
            title: "What is the difference between cloud-native and cloud-enabled applications?",
            answer: "Cloud-native applications are designed for the cloud from inception, using microservices and containers. Cloud-enabled applications are traditional applications adapted to run in cloud environments."
        },
        {
            title: "How do microservices improve cloud-native applications?",
            answer: "Microservices allow developers to isolate, update, and scale specific functionalities without affecting the entire application, enhancing agility and reliability."
        },
        {
            title: "What role do containers play in cloud-native development?",
            answer: "Containers package applications and dependencies into portable units, ensuring consistent performance across diverse environments."
        },
        {
            title: "What is a service mesh in cloud-native architecture?",
            answer: "A service mesh manages communication between microservices, providing traffic control, load balancing, and security features."
        },
        {
            title: "How does cloud-native development support edge computing?",
            answer: "By leveraging portable, scalable architectures, cloud-native applications can process data closer to users or devices, enabling real-time insights."
        },
        {
            title: "Is cloud-native development cost-effective?",
            answer: "Yes. Serverless computing and scalable infrastructure models ensure businesses only pay for resources they use, reducing operational costs."
        },
        {
            title: "What are the main benefits of cloud-native development for businesses?",
            answer: "Cloud-native development offers scalability, adaptability, cost efficiency, resilience, and portability, enabling businesses to stay competitive."
        },
        {
            title: "How does DevOps align with cloud-native practices?",
            answer: "DevOps emphasizes collaboration, automation, and continuous improvement, complementing the agile and iterative nature of cloud-native development."
        },
        {
            title: "What tools are commonly used in cloud-native development?",
            answer: "Popular tools include Kubernetes (container orchestration), Docker (containers), and CI/CD pipelines for automated testing and deployment."
        },
        {
            title: "What industries benefit most from cloud-native applications?",
            answer: "Industries like retail, healthcare, finance, and transportation benefit greatly due to the need for scalable, resilient, and adaptable solutions."
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
            <div className="md:bg-gray-50 py-md-5  py-3 flex items-center justify-center">
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
                                                        <h3 className="font-medium text-lg text-[#3b7fbf]">{item.mainheading} -
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
export default TenBlog;