
import {Row,Col,Button} from 'react-bootstrap';
import '../Banner/Banner.css';
import devImg1 from '../../../../../public/Image/dev-2.png'


export default function Banner(){
    return(
        <>
    
        <Row className='d-md-flex d-xl-flex d-lg-flex d-xxl-flex  d-none items-center justify-evenly bg-[#3b7fbf]  h-[500px]'>
        <Col md={5} xl={5} lg={5}  xxl={5}>
        <div>
        <h1 className='hed1 text-white '>Your Success Is Our Purpose</h1>
        <h4 className='hed3 text-white'>we've Got Experienced Developers</h4>
        <p className='para text-white' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
        <Button className='site-button'>Get a web Development</Button>
        </div>
        </Col>
        <Col md={5} xl={5} lg={5}  xxl={5}>
        <div>
        <img src={devImg1} alt="babnner-img" className='img-fluid'/>
        </div>
        </Col>

       
 

      

        </Row>
        <Row className='d-flex d-sm-none  justify-content-evenly align-items-center  py-5   bg-[#3b7fbf]'>
        <Col md={8} className='d-flex align-items-center'>
        <div>
        <h1 className='hed2 text-light'>Your Success Is Our Purpose</h1>
        <h4 className='hed3 text-light'>we've Got Experienced Developers</h4>
        <p className='para text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
     
        </div>
        </Col>
        <Col md={4} className='d-flex align-items-center' >
        <img src={devImg1} alt="" className='img-fluid'/>
        </Col>
        </Row>
     </>
    )
}