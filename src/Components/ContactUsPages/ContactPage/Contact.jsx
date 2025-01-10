import {Row,Col,Button} from 'react-bootstrap';
import Banner from "../Banner/Banner";
import Section from "../SectionContact/Section";
import { Helmet } from 'react-helmet';
export default function Contact(){
    return(
        <>
        <Banner/>
        <Section/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center items-center'>
        <Col md={10} className='flex justify-center items-center gap-5 py-3' >
            <p className='pt-3 para text-white'>Interested in a little more details, let us know how we can assist you.</p>
            <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>

       
        </>
    )
}