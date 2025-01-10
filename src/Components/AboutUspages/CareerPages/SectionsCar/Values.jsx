import React from 'react';
import bg from '../../../../../public/Image/Ellipse 29.png';
import img from '../../../../../public/Image/men-value-page.png';

const ValuesDisplay = () => {
    return (
        <>
            {/* Content Section */}
            <div className='position-relative row d-md-flex  d-none flex-column justify-content-center align-items-center z-10 pt-5 pb-36 bg-[#F4FEFF]'>
                {/* Heading Section */}
                <div className='text-center pb-20'>
                    <h2 className='hed2 text-center'>Our Values</h2>
                    <p className='text-[#5E5E5E] font-medium md:text-lg sm:text-sm text-xs'>
                        We live by a set of values that guide everything we do
                    </p>
                </div>
                <div className='col-md-10 flex flex-col justify-center items-center relative'>
                    <div className='relative'>
                    <img src={bg} alt="bg" className='max-w-2xl object-cover'/>
                    </div>
                     {/* Central Figure */}
                     <div className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                            <img
                                src={img}
                                alt="Business professional"
                                className="max-w-xs max-h-80"
                            />
                        </div>
                    </div>
                      {/* Circle Group - Top Section */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex gap-32 z-20">
                    {/* Integrity Circle - Top Left */}
                    <div
                        className="bg-[#FFE0E0] rounded-full w-48 h-48 flex flex-col items-center justify-center text-center p-8"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <h3 className="md:font-semibold md:text-xl text-base mb-1">Integrity</h3>
                        <p className="md:text-sm text-xs font-medium">We believe in honesty and transparency in all aspects of our work.</p>
                    </div>

                    {/* Diversity Circle - Top Right */}
                    <div
                        className="bg-[#BFD7FF] rounded-full w-48 h-48 flex flex-col items-center justify-center text-center p-8"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <h3 className="md:font-semibold md:text-xl text-base mb-1">Diversity & Inclusion</h3>
                        <p className="md:text-sm text-xs font-medium">We celebrate our differences and know they make us stronger.</p>
                    </div>
                </div>
                {/* Side Circles */}
                {/* Innovation Circle - Left */}
                <div className="absolute lg:left-24  xl:left-28  md:left-6 left-0 top-64 transform -translate-y-1/2 z-20">
                    <div
                        className="bg-[#E4FFEC] rounded-full w-48 h-48 flex flex-col items-center justify-center text-center p-8"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <h3 className="md:font-semibold md:text-xl text-base mb-1">Innovation</h3>
                        <p className="md:text-sm text-xs font-medium">We're always exploring new ideas and improving.</p>
                    </div>
                </div>
                {/* Excellence Circle - Right */}
                <div className="absolute lg:right-24  xl:right-28 md:right-6 top-64 right-0 -translate-y-1/2 z-20">
                    <div
                        className="bg-[#D9D9D9] rounded-full w-48 h-48 flex flex-col items-center justify-center text-center p-8"
                        style={{ boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" }}
                    >
                        <h3 className="md:font-semibold md:text-xl text-base mb-1">Excellence</h3>
                        <p className="md:text-sm text-xs font-medium">We push the boundaries of what's possible to deliver high-quality solutions.</p>
                    </div>
                </div>


                    
              
              
            </div>
            </div>
       
        </>
    );
};

export default ValuesDisplay;
