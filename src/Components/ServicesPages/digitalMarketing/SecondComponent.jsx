import React, { useState } from 'react';
import bg from '../../../../public/Image/digital-marketing-section-bg-circel.png';
import men from '../../../../public/Image/digital-marketing1.png';
import icon1 from '../../../../public/Image/digital-marketing-icon (1).png';
import icon2 from '../../../../public/Image/digital-marketing-icon (2).png';
import icon3 from '../../../../public/Image/digital-marketing-icon (3).png';
import icon4 from '../../../../public/Image/digital-marketing-icon (4).png';
import icon5 from '../../../../public/Image/digital-marketing-icon (5).png';
import icon6 from '../../../../public/Image/digital-marketing-icon (6).png';
import icon7 from '../../../../public/Image/digital-marketing-icon (7).png';
import icon8 from '../../../../public/Image/digital-marketing-icon (8).png';
import icon9 from '../../../../public/Image/digital-marketing-icon (9).png';
import icon10 from '../../../../public/Image/digital-marketing-icon (10).png';
import { HiMiniInformationCircle } from "react-icons/hi2";

const SecondComponent = () => {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [showDetails, setShowDetails] = useState(null);

  // Modal component
  const Modal = ({ service, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-[#D9D9D9] rounded-sm p-4 max-w-md transform transition-all duration-300 scale-100 opacity-100 relative z-50">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">×</button>
        {/* Content */}
        <div className="space-y-4">
          <p className="text-xs text-black">{service.description.intro}</p>
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold text-sm mb-1">What We Do</h4>
              <p className="text-xs text-black">{service.description.whatWeDo}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Why It Matters</h4>
              <p className="text-xs text-black">{service.description.whyItMatters}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const services = [
    {
      id: 'seo',
      link:"/services/digital-marketing/seo-search-engine-optimization",
      title: 'Search Engine Optimization (SEO)',
      icon: icon10,
      bgColor: 'bg-[#b7ca28]',
      position: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      description: {
        intro: "If your website isn’t showing up in search results, it’s like you’re invisible online.",
        whatWeDo: "We optimize your content and website structure to help you rank higher in search results.",
        whyItMatters: "More visibility leads to more visitors, and more visitors mean more potential customers"
      }
    },
    {
      id: 'affiliate',
      link:"/services/remainpage",
      title: 'Affiliate Marketing',
      icon: icon2,
      bgColor: 'bg-red-500',
      position: 'absolute top-28 left-36',
      description: {
        intro: "Affiliate marketing lets you expand your reach without upfront costs.",
        whatWeDo: "We set up and manage affiliate programs, connecting you with the right partners.",
        whyItMatters: "It’s a low-risk way to grow your business by only paying when you get results"
      }
    },
    {
      id: 'sem',
      link:"/services/digital-marketing/sem-search-engine-marketing",
      title: 'Search Engine Marketing (SEM)',
      icon: icon1,
      bgColor: 'bg-blue-500',
      position: 'absolute top-28 right-36',
      description: {
        intro: "SEM combines paid ads and SEO to increase your visibility on search engines.",
        whatWeDo: "We run paid ads (Google Ads, Bing Ads) and improve your SEO to ensure your business gets noticed.",
        whyItMatters: "SEM increases traffic, helping you convert more visitors into customers."
      }
    },
    {
      id: 'email',
      link:"/services/digital-marketing/email-marketing",
      title: 'Email Marketing',
      icon: icon4,
      bgColor: 'bg-green-500',
      position: 'absolute top-1/2 left-28 -translate-y-1/2',
      description: {
        intro: "Email marketing is still one of the most effective ways to stay in touch with your customers.",
        whatWeDo: "We send personalized emails that drive engagement, from newsletters to special offers.",
        whyItMatters: "Email helps keep your customers informed and engaged, driving repeat business."
      }
    },
    {
      id: 'meta',
      link:"/services/remainpage",
      title: 'Meta Ads (Facebook & Instagram Ads)',
      icon: icon8,
      bgColor: 'bg-orange-500',
      position: 'absolute top-1/2 right-28 -translate-y-1/2',
      description: {
        intro: "Meta Ads are a powerful way to reach people based on their interests and demographics.",
        whatWeDo: "We design engaging Facebook and Instagram ads tailored to your business goals.",
        whyItMatters: "Meta Ads allow you to reach the right people at the right time with highly targeted content."
      }
    },
    {
      id: 'social',
      link:"/services/digital-marketing/smm/social-media-marketing",
      title: 'Social Media Marketing',
      icon: icon5,
      bgColor: 'bg-pink-500',
      position: 'absolute bottom-[16%] left-28',
      description: {
        intro: "Social media is a powerful tool for building relationships and brand awareness.",
        whatWeDo: "We manage your social media presence and run campaigns on platforms like Facebook, Instagram, and others.",
        whyItMatters: "Being active on social media builds trust, keeps your brand top-of-mind, and strengthens customer loyalty."
      }
    },
    {
      id: 'performance',
      link:"/services/digital-marketing/performance-marketing",
      title: 'Performance Marketing',
      icon: icon7,
      bgColor: 'bg-yellow-500',
      position: 'absolute bottom-[16%] right-28',
      description: {
        intro: "Drive measurable results through data-driven marketing.",
        whatWeDo: "We create ROI-focused marketing campaigns.",
        whyItMatters: "Maximize your marketing budget with trackable results."
      }
    },
    {
      id: 'ppc',
      link:"/services/remainpage",
      title: 'Paid Advertising (PPC)',
      icon: icon6,
      bgColor: 'bg-purple-500',
      position: 'absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2',
      description: {
        intro: "Paid ads give your business the visibility it needs to attract customers quickly.",
        whatWeDo: "We create and manage ads across platforms like Google, Bing, Facebook, and Instagram.",
        whyItMatters: "Paid ads drive immediate traffic and results, helping your business grow faster."
      }
    }
  ];

  return (
    <div className="container mx-auto mb-20">
      <div className="flex items-center justify-center text-center mb-12 mt-4">
        <div className="h-px flex-grow bg-[#3b7fbf] bg-opacity-70 max-w-24"></div>
        <h2 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-gray-900">What We Do</h2>
        <div className="h-px flex-grow bg-[#3b7fbf] max-w-24 bg-opacity-70 "></div>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="relative">
          <img
            src={bg}
            alt="Background Circle"
            className="max-w-2xl mx-auto"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <img
              src={men}
              alt="Marketing Professional"
              className="w-full max-h-80 object-contain"
            />
          </div>
          {services.map((service) => (
            <div
              key={service.id}
              className={service.position}
              onMouseEnter={() => setHoveredBox(service.id)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <div className={`relative ${service.bgColor}
               text-white h-16 px-3 rounded-sm shadow-lg flex items-center gap-3 w-64`}>
                <img src={service.icon} alt={`${service.title} Icon`} className="w-8 h-8" />
                <a href={service.link} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>
                  <span className="font-medium">{service.title}</span>
                </a>
                {/* Icon for top-right corner */}
                <div className="absolute top-0 right-0 mt-2 mr-2">
                <HiMiniInformationCircle  onClick={() => setShowDetails(service.id)} className='text-white'/>
                </div>
              </div>
              {/* Modal for details */}
              {showDetails === service.id && (
                <Modal
                  service={service}
                  onClose={() => setShowDetails(null)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SecondComponent;
