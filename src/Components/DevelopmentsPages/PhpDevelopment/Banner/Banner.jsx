import {Row,Col} from 'react-bootstrap';
import phpbnrImg from '../../../../../public/Image/php-banner.png'

export default function Banner(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center' 
        >
        <Col md  xl lg xxl className='px-0   position-relative'>
        <img src= {phpbnrImg} className='img-fluid w-100 '/>
        <div className='absolute md:top-24  top-8 left-10'>
        <h1 className='md:text-5xl text-sm text-white'>Custom PHP Development <br/> Services</h1>
        <p className='para text-white d-md-flex d-none'>custome php web development company to take your businees to the <br />
         next level and drive-large scale transformation.</p>
        </div>
        </Col>
        </Row>

        </>
    )
}