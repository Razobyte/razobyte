import React from 'react';
import { Row, Col, Button, } from 'react-bootstrap';
import Banner from '../../Banner/Banner';
import { useNavigate } from 'react-router';
import './Ses.css'
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";




export default function Ses() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand if not expanded
    }
  };
  const filteredSeo5 = [
    {
      name: 'Ongoing monthly traffic, goal & CPL  reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },

    {
      name: 'Ongoing user experience reporting bounce rate, device category, etc.', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },
    { name: 'Custom Keywords Analysis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: " SEO PACKAGES" },
    { name: 'Technical Website Analysis & Opportunity Report', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
  ]
  const filteredSeo4 = [
    {
      name: 'Ongoing monthly traffic, goal & CPL  reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },

    {
      name: 'Ongoing user experience reporting bounce rate, device category, etc.', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },
    { name: 'Custom Keywords Analysis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: " SEO PACKAGES" },
    { name: 'Technical Website Analysis & Opportunity Report', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
  ]
  const features = [
    { name: 'Pages Optimized', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },

    { name: 'Internal linking restructuring & optimization', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'Schema Implementation (JSON-LD)', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    {
      name: 'Initial visitor profile report', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },
    {
      name: 'Ongoing quarterly keyword ranking reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },


  ]
  const filteredSeo3 = [
    { name: 'Keyword research & selection', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Keyword mapping to target pages', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Setup of website sitemap', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'Custom 404 error page setup and  optimization', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    {
      name: 'Ongoing monthly traffic, goal & CPL  reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },

    {
      name: 'Ongoing user experience reporting bounce rate, device category, etc.', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },]
  const features1 = [
    { name: 'Duplicate content analysis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Header Tags Optimized (Ex. H1s)', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Link redirect audit', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Title Tags & Meta descriptions', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Robots.txt optimization', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'XML sitemap creation & submission', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'Google Business Profile optimization', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    {
      name: 'Ongoing quarterly competitor conquest reports', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },

    {
      name: 'Keyword rank checker access with  weekly updates (if requested)', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },

    {
      name: 'Ability to check location data accuracy across 40+ local directories', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },




  ]
  const features3 = [
    { name: 'Information architecture audit', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Canonicalization analysis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES" },
    { name: 'Initial external link analysis and disavow', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'Initial external link analysis and disavow', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES" },
    { name: 'A/B Testing of SERP title &  description to improve clickthrough', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES " },
    { name: 'Notification of new reviews (major review platforms)', starter: 'Yes', basic: 'Yes', category: "ECOMSEO PACKAGES " },
  ]
  const features4 = [
    {
      name: 'Analyze your leads to project the # of leads competitors receive on a  monthly basis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES"
    },

    {
      name: 'Predict your and your competitors’ market share on a monthly basis', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },
    {
      name: 'Competitor intelligence login to view competitor data', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES"
    },
    {
      name: 'Dedicated Internet Marketer', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "ECOMSEO PACKAGES "
    },
    {
      name: 'Online Project Management Platform', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "SEO PACKAGES"
    },
    {
      name: '450+ SMEs behind campaign driving results', starter: 'Yes', basic: 'Yes', standard: 'Yes', popular: 'Yes', premium: 'Yes', category: "LOCAL SEOPACKAGES"
    },
  ]
  // ... rest of the features

  const filteredSeo2 = [

    {
      name: "Total Cost", price1: "$250.00", price2: "$350.00", price3: "$400.00", price4: "$500.00", price5: "$650.00"
    },
    {
      name: "Quarterly", price1: "$250.00", price2: "$350.00", price3: "$400.00", price4: "$500.00", price5: "$650.00"
    },
    {
      name: "Half-Yearly", price1: "$250.00", price2: "$350.00", price3: "$400.00", price4: "$500.00", price5: "$650.00"
    },
    {
      name: "Yearly", price1: "$250.00", price2: "$350.00", price3: "$400.00", price4: "$500.00", price5: "$650.00"
    },

  ]
  const [currentCategory, setCurrentCategory] = useState('All');
  const filteredSeo = currentCategory === 'All' ? features : features.filter(blog => blog.category === currentCategory);
  const [currentCategory1, setCurrentCategory1] = useState('All');
  const filteredSeo1 = currentCategory1 === 'All' ? features1 : features1.filter(blog => blog.category === currentCategory);


  return (
    <>
      <Banner image="Image/Ses-banner.png" title="SEO Enterprise Solutions" />
      <p className='para text-center'>9+ years of experience in providing end-end digital solutions to clients all across the world ranging from start- <br />
        up to large scale entreprises</p>
      <Row className='flex justify-center items-center'>
        <div className='col-md-10'>
          <div className='ses-btn flex justify-cetnter items-center'>
            <Button variant='dark' onClick={() => setCurrentCategory('LOCAL SEOPACKAGES')}>LOCAL SEOPACKAGES</Button>
            <Button variant='dark' onClick={() => setCurrentCategory('SEO PACKAGES')}>SEO PACKAGES</Button>
            <Button variant='dark' onClick={() => setCurrentCategory('ECOMSEO PACKAGES ')}>ECOMSEO PACKAGES</Button>
          </div>
        </div>
        <div className='col-md-12 new-table-ui'>
          <ul>
            <li><span className='md:text-xl  text-sm font-[500]'>Features</span></li>
            <li><span className=' md:text-xl  text-sm font-[500]'>Starter</span></li>
            <li><span className='md:text-xl  text-sm font-[500]'>Basic</span></li>
            <li><span className='md:text-xl  text-sm font-[500]'>Standard</span></li>
            <li style={{ boxShadow: "-5px 7px 12px 2px #44444485" }}><span className='md:text-xl  text-sm font-[500] '
            >Popular</span></li>
            <li style={{ boxShadow: "-5px 7px 12px 2px #44444485" }}><span className='md:text-xl  text-sm font-[500]'>Premium</span></li>
          </ul>
        </div>
        <div className='col-md-12 new-table-ui '>
          <ul>
            <li><span className='para text-white'>Keywords </span></li>
            <li><span className='para text-white'>Up to 25 Keywords</span></li>
            <li><span className='para text-white'>Up to 50 Keywords</span></li>
            <li><span className='para text-white'>Up to 75 Keywords</span></li>
            <li style={{ boxShadow: "-5px 7px 12px 2px #44444485" }}><span className='para text-white'>Up to 100 Keywords</span></li>
            <li style={{ boxShadow: "-5px 7px 12px 2px #44444485" }}><span className='para text-white'>Up to 100+ Keywords</span></li>
          </ul>
        </div>
        <div className='col-md-12 getpricing '>
          <ul className='bg-[#3b7fbf]'>
            <li><span className=' font-[550] md:text-xl text-md '>Get pricing</span></li>
            <li><span className='font-[550] md:text-xl text-md '>Get Pricing</span></li>
            <li><span className='font-[550] md:text-xl text-md '>Get pricing</span></li>
            <li><span className='font-[550] md:text-xl text-md '>Get pricing</span></li>
            <li><span className='font-[550] md:text-xl text-md '>Get pricing</span></li>
            <li><span className='font-[550] md:text-xl text-md '>Get pricing</span></li>
          </ul>
        </div>
        <div className="seo-rank-table table" >
          <ul className="accordian-packages-ui" >
            <li>
              {filteredSeo.map((seoData) => (
                <ul className='flex' key={seoData.index}>
                  <li><span className='para'>{seoData.name}</span></li>
                  <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  <li style={{ textAlign: 'center', boxShadow: "-5px 7px 12px 2px #44444485" }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  <li style={{ textAlign: 'center', boxShadow: "-5px 7px 12px 2px #44444485" }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                </ul>
              ))}
            </li>
            <div className='card-header' onClick={() => toggleAccordion(0)}>
              <h3 className='flex justify-center items-center'>
                On Page Optimization
                <span className='icon'>{expandedIndex === 0 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 0 && (
              <li>
                {filteredSeo.map((seoData) => (
                  <ul className='flex' key={seoData.index} >
                    <li><span className='para'>{seoData.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(1)}>
              <h3 className='flex justify-center items-center'>
                Conversion Tracking and Optimization
                <span className='icon'>{expandedIndex === 1 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 1 && (
              <li>
                {filteredSeo1.map((seo1Data) => (
                  <ul className='flex' key={seo1Data.index} >
                    <li><span className='para'>{seo1Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(2)}>
              <h3 className='flex justify-center items-center'>
                Schema & Structured Data Mark Up
                <span className='icon'>{expandedIndex === 2 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 2 && (
              <li>
                {filteredSeo2.map((seo2Data) => (
                  <ul className='flex' key={seo2Data.index} >
                    <li><span className='para'>{seo2Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(3)}>
              <h3 className='flex justify-center items-center'>
                Local Search Optimization
                <span className='icon'>{expandedIndex === 3 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 3 && (
              <li>
                {filteredSeo3.map((seo3Data) => (
                  <ul className='flex' key={seo3Data.index} >
                    <li><span className='para'>{seo3Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(4)}>
              <h3 className='flex justify-center items-center'>
                Content Marketing (per month)
                <span className='icon'>{expandedIndex === 4 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 4 && (
              <li>
                {filteredSeo4.map((seo4Data) => (
                  <ul className='flex' key={seo4Data.index} >
                    <li><span className='para'>{seo4Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(5)}>
              <h3 className='flex justify-center items-center'>
                Off Page Optimization
                <span className='icon'>{expandedIndex === 5 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 5 && (
              <li>
                {filteredSeo5.map((seo5Data) => (
                  <ul className='flex' key={seo5Data.index} >
                    <li><span className='para'>{seo5Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(6)}>
              <h3 className='flex justify-center items-center'>
                Monthly Reporting
                <span className='icon'>{expandedIndex === 1 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 6 && (
              <li>
                {features3.map((seo6Data) => (
                  <ul className='flex' key={seo6Data.index} >
                    <li><span className='para'>{seo6Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>

            )}
            <div className='card-header' onClick={() => toggleAccordion(7)}>
              <h3 className='flex justify-center items-center'>
                Customer Support
                <span className='icon'>{expandedIndex === 7 ? <FaMinus /> : <FaPlus />}</span>
              </h3>
            </div>
            {expandedIndex === 7 && (
              <li>
                {features4.map((seo7Data) => (
                  <ul className='flex' key={seo7Data.index} >
                    <li><span className='para'>{seo7Data.name}</span></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i ><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                    <li style={{ textAlign: 'center' }}><i><FaCheck size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1" /></i></li>
                  </ul>
                ))}
              </li>
            )}
          </ul>
          <div className="signup-btn" style={{ width: '100%', height: '100%' }}>
  <ul className="signup-btn-ui">
    <li><span><img src="Image/paypal.png" alt="" className='img-fluid' style={{maxWidth:"200px"}} /></span></li>
    <li><span className='font-[550] md:text-xl text-md '>SIGNUP</span></li>
    <li><span className='font-[550] md:text-xl text-md '>SIGNUP</span></li>
    <li><span className='font-[550] md:text-xl text-md '>SIGNUP</span></li>
    <li><span className='font-[550] md:text-xl text-md '>SIGNIN</span></li>
    <li><span className='font-[550] md:text-xl text-md '>SIGNIN</span></li>
  </ul>
</div>

        
        </div>
        
      



      </Row>

    </>
  );
}