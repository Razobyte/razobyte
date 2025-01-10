import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import '../Count/Count.css';
import count1 from '../../../../public/Image/Mask group (1).png'
import count2 from '../../../../public/Image/Mask group (2).png'
import count3 from '../../../../public/Image/Mask group (3).png'
import count4 from '../../../../public/Image/Mask group (4).png'


export default function Count({ clients }) {

   
    return (
        <>
        <Row style={{ backgroundColor: "#FFFF" }} className='justify-content-center align-items-center '  >
                <Col md={12}  xs={10} className='col-count-homepage d-block d-none d-md-flex'>
                    <div className='clients-card-homepage'  data-aos="fade-up" data-aos-duration="3000">
                        <div className='count-img-homepage'>
                            <img src={count1} alt="count-image" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={98} duration={3} delay={0} />
                                }
                                %
                            </h5>
                            <p className='text-[#5e5e5e]'>Clients Satisfied</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src={count2} alt="count-image" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={340} duration={3} delay={0} />
                                }
                                +
                            </h5>
                            < p className='text-[#5e5e5e]'>Successful Project</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src={count3} alt="count-image" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={4} duration={3} delay={0} />}
                                M+
                            </h5>
                            <p className='text-[#5e5e5e]'>Lines of Code</p>
                        </div>
                    </div>
                    <div className='clients-card-homepage'>
                        <div className='count-img-homepage'>
                            <img src={count4} alt="count-image" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={8} duration={3} delay={0} />}
                                +
                            </h5>
                            <p className='text-[#5e5e5e]'>Years of Excellence</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>


        
    )
}
