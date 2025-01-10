import React, { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


// Reusable FAQ Component for Job Openings
const FaqSection = ({ jobOpenings, title }) => {
    const [expandedIndex, setExpandedIndex] = useState(null); // Initialize with null for no open item by default

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="w-full flex justify-center items-center md:py-8 pb-md-5 pb-5">
            <div className="max-w-6xl w-full px-4">
                {title && (
                    <h2 className="mb-1 hed2 text-center">
                        {title}
                    </h2>
                )}
                <p className='text-[#5E5E5E] font-medium md:text-lg text-center sm:text-sm text-xs pb-4'>Ready to make an impact? Here are some of the roles we’re hiring for</p>
                <div className="space-y-4">
                    {jobOpenings.map((job, index) => (
                        <div className="bg-white rounded-lg shadow w-full" key={index}>
                            <div
                                className="flex items-center justify-between p-2 cursor-pointer border-4 border-[#3b7fbf]"
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex md:justify-between justify-evenly  items-center w-full">
                                    <span className="font-[550] text-sm md:text-lg text-[#3D3D3D]">
                                        {job.title}
                                    </span>
                                    <p className="text-[#5e5e5e]  md:text-base text-xs font-medium pe-12">{job.location}</p>
                                </div>
                                {expandedIndex === index ? (
                                    <IoIosArrowDown className="text-blue-500   text-2xl " />
                                ) : (
                                    <IoIosArrowForward className="text-blue-500  text-2xl " />
                                )}
                            </div>
                            {expandedIndex === index && (
                                <div className="px-4 py-3 text-white bg-[#3b7fbf] border-l-0 mt-2">
                                    <h3 className="font-bold text-left">{job.title}</h3>
                                    <p className="text-left">Experience: {job.experience}</p>
                                    <p className="text-left">Preferred: {job.preferred}</p>
                                    <p className="text-left">Qualification: {job.qualification}</p>
                                    <ul className="text-left">
                                        {job.requirements.map((req, idx) => (
                                            <li className="d-flex align-items-center py-2" key={idx}>
                                                <MdKeyboardDoubleArrowRight /> {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
