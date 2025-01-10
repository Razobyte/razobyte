
import { Button } from 'react-bootstrap'
import { MdPhoneInTalk } from "react-icons/md";


export default function ButtonE({ name }) {

   

    return (
        <>
            <div className='flex justify-center items-center pt-3'>
                <Button className='btnmain cursor-pointer px-3'>{name}</Button>
            </div>
            <div className='flex justify-center items-center pt-4'>
            <span className='flex justify-center gap-3 items-center'>
            <MdPhoneInTalk size={25} className="rounded-5 bg-[#3b7fbf]  text-white p-1 para"  />8448158188
            </span>
            </div>
            <div className='flex justify-center gap-3 pt-4'>
          <a href="https://www.instagram.com/razobyte" target="_blank" rel="noopener noreferrer">
          <img src="/Image/instagram (1) 1.png" alt="Instagram" className="img-fluid w-5" />
        </a>
        <a href="https://www.facebook.com/razobyte" target="_blank" rel="noopener noreferrer">
          <img src="/Image/FB logo final.png" alt="Facebook" className="img-fluid w-5" />
        </a>
        <a href="https://www.linkedin.com/company/razobyte/" target="_blank" rel="noopener noreferrer">
          <img src="/Image/LinkedIn Logo final.png" alt="LinkedIn" className="img-fluid w-5" />
        </a>
        <a href="https://twitter.com/razobyte" target="_blank" rel="noopener noreferrer">
          <img src="/Image/Twitter_new_X_logo Final.png" alt="Twitter" className="img-fluid w-5" />
        </a>




            </div>
        </>


    )
}