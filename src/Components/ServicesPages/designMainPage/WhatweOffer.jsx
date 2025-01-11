import React from 'react'
import { Row, Col } from 'react-bootstrap'
import bulbimg from '../../../../public/Image/whatweoffer-design.png'
export default function WhatweOffer() {
    return (
        <>
            <Row className="row d-md-flex justify-content-center align-items-center py-5 px-0 bg-[#0136A3]">
                <div className="flex items-center justify-center text-center mb-0 mt-4">
                    <div className="h-px flex-grow bg-[#ffff] bg-opacity-70 max-w-24"></div>
                    <h2 className="px-1 md:text-[32px] sm:text-2xl text-xl font-semibold text-light">What We Offer</h2>
                    <div className="h-px flex-grow bg-[#ffff] max-w-24 bg-opacity-70 "></div>
                </div>
                <p className="text-light  text-center sm:text-xl text-xs">We create more than just designs;
                    we create experiences that make your brand <br />
                    memorable. Here’s how we can help</p>

                <Col md={12} xs={11} className='d-md-flex justify-content-center align-items-center gap-20  '>
                    <div className='col-md-6 col-12'>
                        <img src={bulbimg} alt="bulb-img" className='max-w-full h-1/2 p-0' />
                    </div>
                    <div className="col-md-5 col-12 d-md-block d-none">
                        <div className="div main-boxes">
                            <div className="div1st-box py-1 mb-8 max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>L</span>ogo Design</h2>
                            </div>
                            <div className="div2nd-box relative p-4  mb-8">
                                <div className="absolute left-40 top-1/2 px-10 transform -translate-y-1/2 py-1
                                   border-2 border-white rounded-e-full  flex items-center justify-center">
                                    <h2 className="text-white md:text-2xl text-sm  font-bold text-center">
                                        <span className="md:text-6xl font-bold text-2xl text-white">B</span>rand Identity
                                    </h2>
                                </div>
                            </div>
                            <div className="div3rd-box py-1  max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full  mb-8">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>W</span>ebsite Design</h2>
                            </div>
                            <div className="div4th-box relative p-4  mb-8">
                                <div className="absolute left-40 top-1/2 px-10 transform -translate-y-1/2 py-1
                                   border-2 border-white rounded-e-full  flex items-center justify-center">
                                    <h2 className="text-white md:text-2xl text-sm  font-bold text-center">
                                        <span className="md:text-6xl font-bold text-2xl text-white">G</span>raphic Design
                                    </h2>
                                </div>
                            </div>
                            <div className="div5th-box py-1  max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full  ">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>S</span>ocial Media Branding</h2>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-12 d-md-none d-block ">
                        <div className="div main-boxes">
                            <div className="div1st-box py-1 md:mb-8 mb-12 max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>L</span>ogo Design</h2>
                            </div>
                            <div className="div2nd-box relative  md:w-auto max-w-xs md:p-4  md:mb-8">
                                <div className="md:absolute md:left-40 md:top-1/2 md:px-10 transform -translate-y-1/2 py-1
                                   border-2 border-white rounded-e-full  flex items-center justify-center">
                                    <h2 className="text-white md:text-2xl text-sm  font-bold text-center">
                                        <span className="md:text-6xl font-bold text-2xl text-white">B</span>rand Identity
                                    </h2>
                                </div>
                            </div>
                            <div className="div3rd-box py-1  max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full  mb-8">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>W</span>ebsite Design</h2>
                            </div>
                            <div className="div4th-box relative md:w-auto max-w-xs md:p-4  md:mb-8">
                                <div className="md:absolute left-40 top-1/2 px-10 transform -translate-y-1/2 py-1
                                   border-2 border-white rounded-e-full  flex items-center justify-center">
                                    <h2 className="text-white md:text-2xl text-sm  font-bold text-center">
                                        <span className="md:text-6xl font-bold text-2xl text-white">G</span>raphic Design
                                    </h2>
                                </div>
                            </div>
                            <div className="div5th-box py-1  max-w-xs border-white border-2 flex items-center text-center justify-center rounded-s-full  ">
                                <h2 className='md:text-2xl text-sm font-bold text-white'>
                                    <span className='md:text-6xl font-bold text-2xl text-white'>S</span>ocial Media Branding</h2>
                            </div>

                        </div>

                    </div>
                </Col>

            </Row>
        </>
    )
}
