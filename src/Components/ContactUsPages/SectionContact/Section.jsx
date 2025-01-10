import { Row, Col } from 'react-bootstrap';
import '../SectionContact/Section.css';

export default function Section() {
    return (
        <>
            <Row className='py-5 d-flex flex-sm-row flex-column justify-content-center align-items-center 
            gap-5'
                style={{ backgroundImage: "url('Image/blue.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right 20px", backgroundSize: "40%" }}>
                <Col md={5} className='d-flex justify-content-center'>
                    <div className='map-image-div'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.17879838281!2d77.03960357450099!3d28.413861293978993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23cd1acc602b%3A0x204ebd76ab048452!2sRazobyte%20Softech!5e0!3m2!1sen!2sin!4v1706015585799!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            style={{ border: "0px", boxShadow: "2px 2px 2px  2px rgba(0,0,0,0.2)" }}>
                        </iframe>
                    </div>
                </Col>
                <Col md={5} className='pt-md-0 pt-3 d-flex flex-column justify-content-center px-md-0 px-5'>
                    <h4 className='hed2  text-left'>India</h4>
                    <h5 className='hed3  text-left '>Gurugram</h5>
                    <p className='para text-left'>
                        Unit 337 B, Tower A, Spaze I-Tech Park, Sector 49, Sohna Road, Gurugram 1220018 Haryana <br />
                        Phone: <a href="tel:+9101244084508" className='text-[#3b7fbf]'>+91-01244084508</a> <br />
                        Email: <a href="mailto:contact-us@razobyte.com" className='text-[#3b7fbf]'>Contact-Us@Razobyte.Com</a>
                    </p>

                </Col>
            </Row>
            <Row className='py-5 d-flex flex-sm-row flex-column justify-content-center align-items-center 
            gap-5'
            >
                <Col md={5} className='pt-md-0 pt-3  px-md-0 px-5 d-flex flex-column justify-content-center'>
                    <h4 className='hed2  text-left'>India</h4>
                    <h5 className='hed3  text-left'> Ahmedabad</h5>
                    <p className='para  text-left'> C Siddhi Vinayak Tower, Sarkhej Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051   <br />   Phone: <a href="tel:+9101244084508" className='text-[#3b7fbf]' >+91-01244084508</a> <br />
                        Email: <a href="mailto:contact-us@razobyte.com" className='text-[#3b7fbf]'>Contact-Us@Razobyte.Com</a>
                    </p>
                </Col>
                <Col md={5} className='d-flex justify-content-center'>
                    <div className='map-image-div'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8059342291363!2d72.49459187185211!3d22.99416272142676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac2f8623323%3A0xc84338dfb6bdb047!2sSIDDHI%20VINAYAK%20TOWER%2C%20Kataria%20Automobiles%20Rd%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1712917968215!5m2!1sen!2sin" width="600" height="450"
                            style={{ border: "0px", boxShadow: "2px 2px 2px  2px rgba(0,0,0,0.2)" }}>
                        </iframe>
                    </div>
                </Col>
            </Row>
        </>
    );
}
