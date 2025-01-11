import { Row, Col } from 'react-bootstrap';
import '../Banner/Banner.css';
import Form from '../../form';

export default function Banner({ headingform, subheadingForm, headingColor, paraColor }) {
  return (
    <>
      {/* Desktop view */}
      <Row
        className="banner d-sm-flex d-none justify-content-center align-items-center mainrowdiv"
        style={{
          backgroundImage:
            "linear-gradient(to right ,#3b7fbf9d,#3b7fbf21 ),url('Image/wave (14).svg')",
        }}
      >
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="contact-title">
            <div className="relative">
              <p className="pt-md-3">
                Let’s build what you dreamt of, Together! Drop us a call!
              </p>
              <img
                src="Image/Group 1111 (1).png"
                alt=""
                className="img-fluid img-below"
              />
            </div>
          </div>
        </Col>
        <Col md={5}>
          <Form dynamicBgColor="#fff" headingColor={headingColor} paraColor={paraColor}
          className="Form" buttonBackground="bg-[#3b7fbf]" buttonColor="text-[#fff]" />
        </Col>
      </Row>

      {/* Mobile view */}
      <Row
        className="d-flex d-sm-none justify-content-center align-items-center py-5"
        style={{ backgroundColor: '#3b7fbf' }}
      >
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="contact-title2 text-light">
            <p>Let’s build what you dreamt of, Together! Drop us a call!</p>
          </div>
        </Col>
        <Col xs={12}>
          <Form
            dynamicBgColor="#fff"
            headingform={headingform}
            subheadingForm={subheadingForm}
            headingColor={headingColor}
            paraColor={paraColor}
          
          />
        </Col>
      </Row>
    </>
  );
}
