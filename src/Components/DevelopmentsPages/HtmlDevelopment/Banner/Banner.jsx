
import { Row, Col } from 'react-bootstrap';
import htmlBannerimg from '../../../../../public/Image/Html-1.png'
export default function Banner() {
    return (
        <>
            <Row className='d-flex  align-items-center py-5'
                style={{ backgroundImage: `url('${htmlBannerimg}')`,
                 backgroundSize: "cover", backgroundPosition: "center",
                  backgroundRepeat: "no-repeat" }}
            >
                <Col md={6} xl={6} lg={6} xxl={5} sm={2} className=' py-1 ps-md-5 ps-2'>
                    <h2 className="hed1 font-bold p-0 m-0" style={{ color: "#3b7fbf" }}>
                        HTML & CSS
                    </h2>
                    <p className="lg:text-3xl  mmd;tex-2xl sm:text-lg sm:font-semibold font-medium" 
                    style={{ color: "#3b7fbf" }}>
                        <span className="lg:text-6xl md:text-5xl sm:text-3xl  text-[#3b7fbf] font-bold">
                            D</span>evelopment
                    </p>
                    <p className="lg:text-2xl  mmd;tex-xl sm:text-base text-sm  sm:font-medium
                    font-normal text-[#5e5e5e] p-0 m-0
                    col-7">
                        Custom Web Development and Innovative Designs
                    </p>
                </Col>
            </Row>

            <Row className='d-flex justify-content-center align-items-center pt-5' >
                <Col md={10}>
                    <h2 className='hed2 text-center'>Tailored Solutions for Your Business</h2>
                </Col>
            </Row>
        </>
    )
}