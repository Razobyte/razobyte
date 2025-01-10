
import { Row, Col } from 'react-bootstrap';
import mobile from '../../../../../public/Image/mobile-app-maintenance-banner.png';
import './Page1.css'



export default function Page() {
  return (
    <>
      <Row className='position-relative  gradient-overlay-container d-flex justify-content-center align-items-center p-0'>
        <img src={mobile} alt='banner' className='img-fluid p-0 ' />
        <Col md xl lg xxl className='d-flex justify-content-center align-items-center'>
          <div className='overlay-text'>
            <h2 className='hed1 font-bold text-white'>
              Mobile App Maintenance
            </h2><br />
            <h4 className='hed2 d-md-flex d-none text-white'>
              Services - 24/7 Support & Seamless Updates
            </h4>
          </div>
        </Col>
      </Row>


    </>
  )
}