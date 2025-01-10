import Projects2 from "../../AboutUspages/Projects/Projects2";
import Blog from "../../Blog/Blog2";
import Port from "../../HomePages/Port/Port"
import Testominials from "../../HomePages/Testominals/Testomnials"
import Banner from "./Banner/Banner"
import Services from "./DevServices/Services";
import {Row,Col,Button} from 'react-bootstrap'
export default function AppDevelopment(title){
    return(
        <>
        <Banner/>
        <Services/>
        <Testominials/>
        <Port/>
        <Projects2 titleProjects="Top Web Development Projects"/>
        <Blog title="Blogs"/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
        <Col md={10} className='flex items-center justify-center gap-5 py-3'>
            <p className='para text-white pt-3'>Interested in a little more details, let us know how we can assist you</p>
            <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>
        </>
    )
}