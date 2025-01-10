import React from 'react'
import { Row, Col } from 'react-bootstrap'
import img from '../../../public/Image/Elllipss.png'
import img2 from '../../../public/Image/Ellipse 1.png'


export default function Section1() {
    return (
        <>
            <Row className='d-md-flex d-none justify-center items-center py-md-4 py-2 gap-12'
            >
                <Col md={4} className='flex flex-col justify-center items-center relative'>
                    <div className="flex justify-center items-center " >
                        <div className='absolute -z-10'>
                            <img src={img} alt="img" className='w-auto' />
                        </div>
                        <div className='bg-white  flex flex-col justify-center items-center md:absolute z-50 '>
                            <h2 className='sm:text-5xl text-2xl mt-sm-4 mt-2 font-semibold text-[#5E5E5E]'>Why </h2>
                            <p className='text-3xl font-medium text-[#5E5E5E] p-0 m-0'>
                                raz<span className='text-[#3b7fbf]'>O</span>byte
                            </p>
                        </div>
                    </div>

                </Col>

                <Col md={6} className='flex flex-col justify-center -z-10' >
                    <h4 className='text-[#5E5E5E] font-semibold text-lg'>8+ Years of Global IT & Digital Expertise</h4>
                    <p className='para'>
                        With 8+ years of experience, Razobyte delivers trusted IT and digital solutions, including
                        website development, digital marketing, and mobile app services. We focus on helping
                        businesses grow through innovative and effective strategies.</p>
                    <div className='flex justify-between items-start mb-2'>
                        <div className=' 
                            font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4 text-[#3b7fbf]'>
                            Why Us?
                        </div>
                        <div
                            className=' text-[#5E5E5E] 
                      font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4'  >
                            Proven Results
                        </div>
                        <div
                            className=' text-[#5E5E5E] 
                        font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4'>
                            Global Reach
                        </div>
                        <div className=' text-[#5E5E5E] 
                            font-semibold hover:text-[#3b7fbf]'>
                            Custom Solutions
                        </div>
                    </div>
                </Col>



            </Row>
            <Row className='d-md-none d-flex flex-col justify-center items-center  relative'>
                {/* <div className="w- absolute -z-50">
                    <img src={img2} alt="img2" />
                </div> */}
                <Col xs={12} className='flex flex-col justify-start items-start relative'>
                    <h2 className='md:text-5xl sm:text-3xl text-xl mt-2 mb-0 pb-0 font-semibold text-[#5E5E5E]'>Why
                   <span className='text-2xl font-semibold text-[#5E5E5E] p-0 m-0' ></span>  raz<span className='text-[#3b7fbf]'>O</span>byte
                    </h2>
                   
                </Col>
                <Col sm={10} xs={12} className='flex flex-col justify-center'>
                    <h4 className='text-[#5E5E5E] font-semibold text-sm'>8+ Years of Global IT & Digital Expertise</h4>
                    <p className='text-xs font-medium'>
                        With 8+ years of experience, Razobyte delivers trusted IT and digital solutions..
                        <span className= 'pl-1 text-[#3b7fbf] text-xs font-medium'>
                        READ MORE
                        </span>
                    </p>
                    <div className='flex justify-evenly items-center mb-2'>
                        <div className='font-normal text-xs hover:text-[rgb(59,127,191)] border-r-[1px] pe-2 text-[#3b7fbf]'>Why Us?</div>
                        <div className='text-[#5E5E5E] font-normal text-xs hover:text-[#3b7fbf] border-r-[1px] pe-2'>Proven Results</div>
                        <div className='text-[#5E5E5E] font-normal text-xs hover:text-[#3b7fbf] border-r-[1px] pe-2'>Global Reach</div>
                        <div className='text-[#5E5E5E] font-normal text-xs hover:text-[#3b7fbf]'>Custom Solutions</div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
