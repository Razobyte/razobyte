

import{Row,Col,Button} from 'react-bootstrap'
import Content from '../Content/Content';
import Main from '../Main/Main';
import { Helmet } from 'react-helmet';
export default function Portfolio() {
    
    return (
        <>
        <Helmet>
        <title>Portfolio Page</title>
        <meta
        name="Portfolio page"
        content="This is my  Portfolio page"
         />

        </Helmet>
        <Main/>
        <Content/>
        
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
        <Col md={12} className='flex items-center justify-center gap-5 py-3'>
            <p className='para text-white'>Interested in a little more details, let us know how we can assist you </p>
            <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>
            
              
        </>
    );
}
