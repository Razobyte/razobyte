import React, { useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import techicon from '../../../../public/Image/tech-icon(5).png'
import techicon1 from '../../../../public/Image/tech-icon(4).png'
import techicon2 from '../../../../public/Image/tech-icon(3).png'
import techicon3 from '../../../../public/Image/tech-icon(2).png'
import techicon4 from '../../../../public/Image/tech-icon(1).png'

const TechStack = () => {
    const [activeTab, setActiveTab] = useState('Frameworks');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Row className="flex justify-center items-center bg-[#5AA1E3] bg-opacity-20 py-4 my-5">
            <h1 className='hed2 text-center'>ReactJS Tech Stack Tested Across Several Markets</h1>
           <Col md={10} xs={10}>
           <div className='flex justify-center '>
                <ul className='flex justify-center gap-20'>
                    <li 
                        className={`hover:underline hover:text-[#3b7fbf] font-medium text-[#474747] cursor-pointer
                             ${activeTab === 'Frameworks' ? 'text-[#3b7fbf]' : ''}`} 
                        onClick={() => handleTabClick('Frameworks')}
                    >
                        Frameworks
                    </li>
                    <li 
                        className={`hover:underline hover:text-[#3b7fbf] font-medium text-[#474747] cursor-pointer ${activeTab === 'Library' ? 'text-[#3b7fbf]' : ''}`} 
                        onClick={() => handleTabClick('Library')}
                    >
                        Library
                    </li>
                </ul>
            </div>
            {activeTab === 'Frameworks' && (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 col-md-10 col-lg-8'>
                    <div className='bg-white p-4 rounded-lg flex flex-col justify-center items-center shadow'>
                        <img src={techicon} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>Next Js</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg flex flex-col justify-center items-center shadow'>
                        <img src={techicon1} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>Angular</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg  flex flex-col justify-center items-center shadow'>
                        <img src={techicon2} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>BluePrint</p>
                    </div>
                   
               
                </div>
            )}
            {activeTab === 'Library' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-md-10 col-lg-8'>
                    <div className='bg-white p-4 rounded-lg  flex flex-col justify-center items-center shadow'>
                        <img src={techicon3} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>BootStrap</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg flex flex-col justify-center items-center shadow'>
                        <img src={techicon4} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>Chakra UI</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg flex flex-col justify-center items-center shadow'>
                        <img src={techicon4} alt="icon"  className='img-fluid' />
                        <p className='text-[#3B7FBF]'>Redux</p>
                    </div>
                </div>
            )}
           </Col>
        </Row>
    );
};

export default TechStack;
