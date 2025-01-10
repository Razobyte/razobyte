
import { Row, Col, Button } from 'react-bootstrap';
import '../Banner/Banner.css';
import ebannImg from '../../../../../public/Image/Ecommerce-banner.png'

export default function Banner() {
    return (
        <>
          <Row className='flex items-center justify-center'
            >
                <Col md className='flex items-center justify-center px-0 position-relative'>
                <img src= {ebannImg} alt="banner" className='img-fluid' />
                <div className='absolute lg:top-20 md:top-16 top-7 lg:left-28  md:left-14 left-6'>
                <h1 className='lg:text-5xl md:text-4xl text-sm text-[#3b7fbf] sm:max-w-2xl  max-w-48 mx-auto'>Maximize Your Online Store's Potential</h1>
                <p className='lg:text-3xl md:text-2xl sm:text-xl xs:text-base text-sm text-[#5e5e5e] d-md-flex d-none lg:max-w-2xl max-w-md mx-auto pt-2'>Streamlined Solutions for Seamless Selling Experiences.</p>
                </div>
              

                </Col>
            </Row>
        </>
    )
}