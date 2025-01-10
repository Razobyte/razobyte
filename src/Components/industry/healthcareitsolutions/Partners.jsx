import partners1 from '../../../../public/Image/partners1 (4).png'; // MDRC
import partners2 from '../../../../public/Image/partners1 (3).png'; // Sanarcare
import partners3 from '../../../../public/Image/partners1 (2).png'; // Healing Gloves
import partners4 from '../../../../public/Image/partners1 (1).png'; // Mysaathii
import { Row, Col } from 'react-bootstrap';

export default function Partners() {
    return (
        <>
            <Row className="flex justify-center items-center "> 
                <h2 className='hed2 text-center'>Our trusted Partners in Healthcare</h2>
                <Col md={10} xs={10} className='flex justify-center items-center'>
                    <div>
                        <a href="https://www.mdrcindia.com/" target="_blank" rel="noopener noreferrer">
                            <img src={partners1} alt="MDRC" className='img-fluid' />
                        </a>
                    </div>
                    <div>
                        <a href="https://sanarmanually.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={partners2} alt="Sanarcare" className='img-fluid' />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.healinggloves.in/" target="_blank" rel="noopener noreferrer">
                            <img src={partners3} alt="Healing Gloves" className='img-fluid' />
                        </a>
                    </div>
                    <div>
                        <a href="https://mysaathii.com/" target="_blank" rel="noopener noreferrer">
                            <img src={partners4} alt="Mysaathii" className='img-fluid' />
                        </a>
                    </div>
                </Col>
            </Row>
        </>
    );
}
