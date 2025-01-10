import React from 'react'
import './Page5.css'

const Page5 = () => {
  return (
    <div className='row d-flex justify-content-center align-items-center' style={{backgroundColor:"#59a0e333"}}>
        <div className='form col-md-10'>
             <div className='form-text'>
                <p className='formpara'>Get in touch for detailed discussion</p>
                <p className='formpara2'>Accelerate your business growth with our digital solutions and services</p>
            </div>
            <div className='formfill'>
               <div className='formrow'>
                    <div>
                <input className='fill' type='text' placeholder='Name'/>
                </div>
                <div>
                <input className='fill' type='text' placeholder='Business Email'/>
                </div>
                </div>
                <div className='formrow'>
                <input className='fill' type='text' placeholder='Phone'/>
                <input className='fill' type='text' placeholder='Country'/>
                </div>
                <div>
                <input className='message' type='text' placeholder='Message'/>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default Page5
