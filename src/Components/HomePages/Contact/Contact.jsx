import { Row, Col } from 'react-bootstrap'
import prtnr1 from '../../../../public/Image/prtn1 (4).png';
import prtnr2 from '../../../../public/Image/prtn1 (3).png';
import prtnr3 from '../../../../public/Image/prtn1 (2).png';
import prtnr4 from '../../../../public/Image/prtn1 (1).png';
import Form from '../../form';
export default function Contact() { 

    return (
        <Row style={{ backgroundColor: "#FFFF" }}
            className='px-0 justify-content-center  align-items-center gap-md-5 gap-2 py-md-5 py-3'
        >
            <div>
                <h2 className="hed2  text-black text-center">
                    Let's Talk To Our Experts</h2>
                <p className="text-[#5E5E5E] sm:text-xl text-xs pb-md-0 pb-1 text-center">
                    Take the first step towards success</p>
            </div>
            <Col md={5} >
            <Form  className="Form"
              headingColor="text-[#fff]"
              paraColor="text-[#fff]"/>
          
            </Col>
            <Col md={5} className='d-md-flex'
            >
                <div className='d-flex  flex-column  justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
                    </div>
                    <div style={{
                        backgroundImage: "url('Image/Rectangle 211 (1).png')",
                        backgroundRepeat: "no-repeat", backgroundSize: "155px 105px", backgroundPosition: "center"
                    }}
                        className='pt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={prtnr1} alt="" className='img-fluid w-50' />
                            <img src={prtnr4} alt="" className='img-fluid w-50' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={prtnr3} alt="" className='img-fluid w-50' />
                            <img src={prtnr2} alt="" className='img-fluid w-50' />
                        </div>
                    </div>
                </div>

            </Col>
            <Col md={5} className='d-none '>
                <div className='d-flex  flex-column  justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
                    </div>
                    <div className='d-flex flex-sm-row contactpartnerimage pt-5'>
                        <div>
                            <img src={prtnr4} alt="" className='img-fluid' />
                            <img src={prtnr1} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <img src={prtnr3} alt="" className='img-fluid' />
                            <img src={prtnr2} alt="" className='img-fluid' />
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    );
}
