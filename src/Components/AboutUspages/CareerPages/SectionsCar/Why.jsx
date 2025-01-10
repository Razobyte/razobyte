
import React from 'react'
import icon from '../../../../../public/Image/carrer-why-icon (1).png';
import icon1 from '../../../../../public/Image/carrer-why-icon (2).png'
import icon2 from '../../../../../public/Image/carrer-why-icon (3).png'
import icon3 from '../../../../../public/Image/car-2.png';

export default function Why() {
    return (

        <div className='flex row justify-center items-center py-md-5 py-3'>
            <h2 className='hed2 text-center'>Why Join Razobyte?</h2>
            <p className='text-[#5E5E5E] font-medium md:text-lg text-center sm:text-sm text-xs pb-4'>Luck may open doors, but hard work builds the path forward</p>
            <div className="col-md-10 col-12  flex  md:flex-row flex-col gap-4 justify-center items-center">
                <div className="main-div">
                    <div className="first-div flex  flex-col justify-center items-center bg-[#E4FFEC] rounded-xl shadow-md p-4">
                        <div className='bg-[#5ADB80] w-14 h-14 p-2 rounded-full  flex items-center justify-center'>
                            <img src={icon1} alt="icon" className='max-w-full object-cover' />
                        </div>
                        <h5 className='md:text-xl text-[#5e5e5e] text-base font-semibold'>Make a Difference</h5>
                        <p className='md:text-sm text-xs font-normal text-[#5e5e5e]'>your work isn't just another task, it's part of
                            a bigger mission to revolutionize the digital
                            world. Join us, and your ideas will help shape the future.</p>
                    </div>
                    <div className="first-div flex  flex-col justify-center items-center bg-[#DCDCDC] rounded-xl shadow-md p-4 mt-4">
                        <div className='bg-[#535A7C] w-14 h-14 p-2 rounded-full  flex items-center justify-center'>
                            <img src={icon3} alt="icon" className='max-w-full object-cover' />
                        </div>
                        <h5 className='md:text-xl text-[#5e5e5e] text-base font-semibold'>Grow with Us</h5>
                        <p className='md:text-sm text-xs font-normal text-[#5e5e5e]'>We believe in investing in people, and that
                            includes YOU. With endless learning opportunities, career growth,
                            and a team that values mentorship, you'll always be moving forward.</p>
                    </div>
                </div>
                <div className="main-div2">
                    <div className="first-div flex  flex-col justify-center items-center bg-[#FFE0E0] rounded-xl shadow-md p-4">
                        <div className='bg-[#E76A6A] w-14 h-14 p-2 rounded-full  flex items-center justify-center'>
                            <img src={icon2} alt="icon" className='max-w-full object-cover' />
                        </div>
                        <h5 className='md:text-xl text-[#5e5e5e] text-base font-semibold'>Collaborative Culture</h5>
                        <p className='md:text-sm text-xs font-normal text-[#5e5e5e]'>We foster a culture of collaboration and
                            creativity. You’ll work alongside passionate, like-minded people
                            who believe that the best solutions come from the best teamwork.</p>
                    </div>
                    <div className="first-div flex  flex-col justify-center items-center bg-[#BFD7FF] rounded-xl shadow-md p-4 mt-4">
                        <div className='bg-[#4C7DD1] w-14 h-14 p-2 rounded-full  flex items-center justify-center'>
                            <img src={icon1} alt="icon" className='max-w-full object-cover' />
                        </div>
                        <h5 className='md:text-xl text-[#5e5e5e] text-base font-semibold'>Work Hard, Play Hard</h5>
                        <p className='md:text-sm text-xs font-normal text-[#5e5e5e]'>We balance productivity with fun. From team outings to
                            hackathons, we make sure to celebrate every
                            success along the way.</p>
                    </div>
                </div>




            </div>
        </div>
    )
}
