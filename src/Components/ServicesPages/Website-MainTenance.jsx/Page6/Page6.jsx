import React from 'react'
import './Page6.css'
import Quality from '../assets/Quality.png'

const Page6 = () => {
  return (
    <>
    <div className='page6'>
      <div className='imgP6'>
      <img height={330} width={350} src={Quality} alt="" />
      </div>
      <div className='headingp5'>Not Satisfied?</div>
      <div className='headingp5'>Get Your Money Back</div>
      <p className='P5'>The quality of our work is always at the highest level, which is why we are confident in the services we offer as uniquely beneficial for your website. However, our clients have the right to end their subscription to our services at any time. We offer a 100% No Questions Asked refund for our Maintenance Services during the first month of business. For monthly subscriptions, the Money Back Period is 14 Days.</p>
    </div>
    <div className='footerp6'>
    <div className='box'>
    <div className='p6main'>100%
      <div className='p6main2'>Money Back Guarantee. We Offer 100% No Question Asked Refund During First 30 Days of Service.</div>
    </div>
  </div>
  <div className='box'>
    <div className='p6main'>UNLIMITED
      <div className='p6main2'>We Offer Unlimited Standard Technical Support With All Our Maintenance Plans.</div>
    </div>
  </div>
  <div className='box'>
    <div className='p6main'>SYSTEMIZED
      <div className='p6main2'>Take Advantage Of World's First Systemized Website Maintenance Program</div>
    </div>
  </div>
  <div className='box'>
    <div className='p6main'>100%
      <div className='p6main2'>Backed With A Decade Of Industry Expertise To Take 100% Care Of Your Website</div>
    </div>
  </div>
</div>

    </>
  )
}

export default Page6
