
import React from 'react';
import img1 from '../../../../../public/Image/carrer-how.png';
import img2 from '../../../../../public/Image/carrer-how2.png';


export default function How() {
  return (
    <>
    <div className='flex flex-col justify-center items-center md:pb-20'>
        <h2 className='hed2 text-center'>How We Work</h2>
        <p className='text-[#5E5E5E] font-medium md:text-lg text-center sm:text-sm text-xs pb-3'>We believe the journey is just as important as the destination. Here's how we do things</p>
        <div className='col-md-10 flex justify-center items-center gap-5'>
            <div className="col-md-5">
                <img src={img1} alt="img1" className='object-cover' />
            </div>
            <div className="col-md-5">
            <img src={img2} alt="img2" className='object-cover' />
            </div>

        </div>

    </div>
    </>
    
  )
}
