import React from 'react'
import { Row, Col } from 'react-bootstrap'
import logo from '../../../../public/Image/COMPANY LOGO -razobyte-01 (1).png'
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import '../../Navbar2/Navbar/Navbar.css';
import wp from '../../../../public/Image/whatsap.png';
import ModalExample from '../../Modal/Modal';


export default function Header() {
  return (
    <>
      <Row className='w-screen px-0 flex justify-center items-center py-sm-4 py-3'>
        <div className='max-w-7xl flex justify-between mx-auto px-sm-5 px-4'>
          <div>
            <img src={logo} alt="logo" className=' md:h-5 h-auto md:w-auto w-36' />
          </div>
          <div className='flex justify-between gap-4'>
            <div className='md:flex hidden justify-center items-center'>
              <a href="https://api.whatsapp.com/send?phone=918448158188" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                <div className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                  <img src={wp} alt="WhatsApp" className="img-fluid w-6 mr-2" />
                  <h5 className="m-0">Chat Now</h5>
                </div>
              </a>
            </div>
            <div className='md:flex hidden justify-center items-center'>
              <a href="tel:+8448158188"
                className='text-decoration-none'>
                <button className="flex items-center bg-[#3b7fbf]
         text-[#fff] font-medium sm:text-xl  text-xs px-6 py-sm-2 py-1 rounded-lg shadow-md hover:text-[#e0f0ff]">
                  <MdOutlineWifiCalling3 className="sm:mr-2 mr-1" />
                  Call Now
                </button>
              </a>
            </div>
            <div className=' flex justify-center items-center'>
            <ModalExample buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
            subheadingForm="Let's Discuss Your Goals & Provide a Quote"
             className="btnmain bg-black text-white md:px-0 px-3"/>
            </div>
          </div>
        </div>

      </Row>
    </>
  )
}
