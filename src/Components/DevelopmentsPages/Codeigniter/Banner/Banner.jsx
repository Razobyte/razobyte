import {Row,Col} from 'react-bootstrap';

import codbnrImg from '../../../../../public/Image/codi-1.png';

export default function Banner(){
    return(
        <>
        <Row  className='d-md-flex  align-items-center justify-center' >
        <Col className='px-0' >
        <img src={codbnrImg} alt="" className='img-fluid' />
      

       
          </Col>
          
  
        </Row>
      

        </>
    )
}