import { Row, Col } from 'react-bootstrap';
import banner from '../../../../../public/Image/laravel-banner.png'

export default function Banner() {
    return (
        <>
        
            <Row>
            <Col md  xl lg xxl className='px-0 flex items-center position-relative '>
            <img src= {banner} className='img-fluid w-100'/>
            <div className='absolute md:top-14 top-10 md:left-14 left-8'>
            <h1 className='md:text-5xl text-sm text-[#3b7fbf] pb-3 '>Laravel Development</h1>
            <p className='para text-black d-md-flex d-none'> Dive into your web app development project  with laravel development <br/> services.</p>
            <p className='para text-black d-md-flex d-none'>Employ fast-paced, high quality web apps through modular programming  <br /> and stress- free coding compatible across platforms and devices</p>
        </div>
                </Col>
               





            </Row>


        </>
    )
}