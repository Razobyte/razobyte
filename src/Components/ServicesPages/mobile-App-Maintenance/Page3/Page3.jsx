import React from 'react'
import './Page3.css'
import Contract from '../../../../../public/Image/Contract.jpg'
import Maintenance from'../../../../../public/Image/Maintenance.jpg'
import PartTime from'../../../../../public/Image/PartTime.jpg'
import express from'../../../../../public/Image/express.png'
import laravel from'../../../../../public/Image/laravel.png'
import nodejs from'../../../../../public/Image/node.png'
import net from'../../../../../public/Image/.net.png'
import python from'../../../../../public/Image/python.png'
import nextjs from'../../../../../public/Image/nextjs.jpeg'
import vue from'../../../../../public/Image/vue.png'
import spring from'../../../../../public/Image/spring.png'
import cakephp from'../../../../../public/Image/cakephp.png'
import code from'../../../../../public/Image/codenitter.png'
import mean from'../../../../../public/Image/mean.png'
import rxweb from'../../../../../public/Image/rxweb.png'
import react from'../../../../../public/Image/react.png'
import angular from'../../../../../public/Image/angular.jpg'
import { Row,Col } from 'react-bootstrap'

const Page3 = () => {
  return (
    <>
    <Row className='d-flex justify-content-center align-items-center py-5 ' style={{ backgroundColor: "#59a0e333"}}>
            <div className='hed2 text-center'>Mobile Application Maintenance & Support Services Model</div>
            <p className='para text-center'>Our Android & iOS app maintenance services support model enables better and faster software maintenance, increases app productivity, and result in higher app ROI.</p>
        <div className='col-md-10  gap-3 d-flex justify-content-center align-items-center' >
            <div className='boximg shadow-sm p-2 col-md-3 bg-white rounded-md'>
         
            <div className='modelimg'>
            <img src={Contract} height={110} width={130} alt="" />
            </div>
            <div>
                <h3 className='hed3 pt-3'>Annual Maintenance Contract</h3>
                <p className='para'>Offering technical support, bug fixing, corrective maintenance, and app version upgrades, etc.</p>
            </div>
            </div>
           

            <div className='boximg shadow-sm p-2 col-md-3 bg-white rounded-md'>
         
            <div className='modelimg'>
            <img src={PartTime} height={110} width={130} alt="" />
            </div>
            <div>
                <h3 className='hed3'>Part Time / Full Time Person</h3>
                <p className='para'>Our ingenious team manages all maintenance work including app monitoring, app upgrades, and enhancements.</p>
            </div>
            
            </div>

            <div className='boximg shadow-sm p-2 col-md-3 bg-white rounded-md'>
          
            <div className='modelimg'>
            <img src={Maintenance} height={110} width={130} alt="" />
            </div>
            <div>
                <h3 className='hed3'>Scope Based Maintenance</h3>
                <p className='para'>Having a routine schedule for checking critical app.</p>
            </div>
            </div>
          
        </div>
       
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5 '>
            <Col md={10} className='d-flex  flex-column justify-content-center align-items-center  '>
           
        <div className='col-md-10 text-center'>
            <p className='hed2 text-center'>Technology & Tools</p>
            <p className='para'>We have expertise in various cutting edge technologies and software tools to elevate your mobile app maintenance process.</p>
        </div>
        <div className='toolsicon gap-4 pt-4'>
        <div className='hide'>
        <img src={express} height={60} width={70} alt="" />
        </div>
        <img src={laravel} height={60} width={70} alt="" />
        <img src={nodejs} height={60} width={70} alt="" />
        <img src={net} height={60} width={70} alt="" />
        <img src={nextjs} height={60} width={70} alt="" />
        <img src={vue} height={60} width={70} alt="" />
        <img src={spring} height={60} width={70} alt="" />
        <img src={code} height={60} width={70} alt="" />
        <img src={cakephp} height={60} width={70} alt="" />
        <img src={mean} height={60} width={70} alt="" />
        <img src={angular} height={60} width={70} alt="" />
        <div className='hide'>
        <img src={react} height={60} width={70} alt="" />
        {/* <img src={rxweb} height={60} width={70} alt="" /> */}
        </div>

        </div>
        </Col>
        </Row>
        
         </> 
  )

}

export default Page3
