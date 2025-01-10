
import { useNavigate } from "react-router";
import CarSection from "./SectionsCar/SectionsCar";
import { Row, Col, Button } from 'react-bootstrap';
import BnrCarrer from '../../../../public/Image/Car-1.png'
import ValuesDisplay from './SectionsCar/Values'
import How from "./SectionsCar/How";
import Why from "./SectionsCar/Why";
import FaqSection from "./SectionsCar/SectionsCar";
import ModalExample from "../../Modal/Modal";

export default function Career() {
    const jobOpeningsData = [
      {
        title: "Digital Marketing Intern",
        location: "Gurugram",
        experience: "5 Years",
        preferred: "e-Commerce/ Shopify/ Magento/ Big Commerce Preferred",
        qualification: "Bachelor’s degree in Marketing, Communications, or a related field.",
        requirements: [
          "Minimum of 5 years of proven experience as an SEO Specialist.",
          "In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.",
          "Proficiency in implementing on-page and off-page SEO best practices.",
          "Strong analytical and problem-solving skills.",
          "Excellent communication and collaboration skills.",
          "Ability to adapt to evolving SEO algorithms and industry changes"
        ]
      },
      {
        title: "Web Designer Intern",
        location: "Delhi",
        experience: "5 Years",
        preferred: "e-Commerce/ Shopify/ Magento/ Big Commerce Preferred",
        qualification: "Bachelor’s degree in Marketing, Communications, or a related field.",
        requirements: [
          "Minimum of 5 years of proven experience as an SEO Specialist.",
          "In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.",
          "Proficiency in implementing on-page and off-page SEO best practices.",
          "Strong analytical and problem-solving skills.",
          "Excellent communication and collaboration skills.",
          "Ability to adapt to evolving SEO algorithms and industry changes"
        ]
      },
      {
        title: "Software Developer Intern",
        location: "Mumbai",
        experience: "5 Years",
        preferred: "e-Commerce/ Shopify/ Magento/ Big Commerce Preferred",
        qualification: "Bachelor’s degree in Marketing, Communications, or a related field.",
        requirements: [
          "Minimum of 5 years of proven experience as an SEO Specialist.",
          "In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.",
          "Proficiency in implementing on-page and off-page SEO best practices.",
          "Strong analytical and problem-solving skills.",
          "Excellent communication and collaboration skills.",
          "Ability to adapt to evolving SEO algorithms and industry changes"
        ]
      }
    ];
    

    const navigate = useNavigate()
    return (
        <>
        <Row className="px-0">
            <img src={BnrCarrer} alt="banner"  className="img-fluid px-0" />
        </Row>
           
            <Row className="d-flex flex-column justify-content-center align-items-center pt-md-5 pt-3">
                <Col md={10}>
                    <h2  className='hed2 text-center'>Shape the Future with Us</h2>
                    <p className='text-[#5E5E5E] font-regular md:text-base text-center sm:text-sm text-xs'>We are not just building innovative tech we're shaping the future. Whether you're an experienced developer, a creative
                        marketer, or someone ready to dive into the world of cutting-edge tech, Razobyte  the perfect environment for you to
                        grow and make an impact.</p>
                </Col>
            </Row>
            <Why />
            <How />
            <ValuesDisplay />
           <FaqSection 
        jobOpenings={jobOpeningsData}  // Passing jobOpeningsData as a prop
        title="Current Job Openings"   // Optional title for the FAQ section
      />
          


            <Row style={{ backgroundColor: "#000" }} className='justify-content-center align-items-center'>
                <Col md={10} className='flex items-center justify-between  py-1'>
                    <p className='md:text-4xl sm:text-2xl text-base text-white pt-3'>Success is earned not given!</p>
                    <ModalExample buttonLabel="Apply Now" className="bg-white text-[#3b7fbf] 
                    hover:text-black md:p-0 p-2" />
                </Col>
            </Row>

        </>
    )
}