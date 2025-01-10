import { Row, Col } from 'react-bootstrap';
import './RemainPage.css'; // Import CSS file for styling
import bannerImg from '../../../../public/Image/banner.jpg'


export default function RemainPage() {
  return (
    <>
  
      <Row className='video-container d-md-flex justify-content-center align-items-center d-none'
      style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),  url(${bannerImg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",maxHeight:"auto"}}>
        <Col md={12}>
        <h1 className='text-center text-white text-7xl font-[700]'>This page is Under Maintenance</h1>
        </Col>
      </Row>
    </>
  );
}
