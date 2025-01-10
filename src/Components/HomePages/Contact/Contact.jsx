import { Row, Col, Form, FormGroup, FormControl, FormLabel, FormCheck, Button } from 'react-bootstrap'
import prtnr1 from '../../../../public/Image/prtn1 (4).png';
import prtnr2 from '../../../../public/Image/prtn1 (3).png';
import prtnr3 from '../../../../public/Image/prtn1 (2).png';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import prtnr4 from '../../../../public/Image/prtn1 (1).png';
import wp from '../../../../public/Image/whatsap.png';
import call from '../../../../public/Image/msg1 (2).png'
import { useRef, useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
export default function Contact() {
    const navigate =useNavigate();

    // Check paths to conditionally render Header or Navbar


    const form = useRef();
    const [show, setShow] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        plan: '',
        customService: '',
        projectMessage: ''
    });

    // Show modal every 150 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (!submittedForm) {
                setShow(true);
            }
        }, 150000);

        return () => clearInterval(interval);
    }, [submittedForm]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            customService: name === 'plan' && value !== 'Others' ? '' : prev.customService
        }));
    };

    // Close modal and reset form data
    const handleClose = () => {
        setShow(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            companyName: '',
            plan: '',
            customService: '',
            projectMessage: ''
        });
    };

    // Validate name
    const validateName = () => formData.name.trim() !== '';

    // Validate email
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(formData.email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateName() || !validateEmail()) {
            Swal.fire({
                title: "Invalid Input",
                text: "Please provide valid name and email.",
                icon: "error"
            });
            return;
        }

        const serviceId = "service_163pacd";
        const templateId = "template_9vm7a2q";
        const userId = "I8TosX-mUu1K_TQtM";

        emailjs.send(serviceId, templateId, formData, userId)
            .then(() => {
                Swal.fire({
                    title: "Thank you for reaching out.",
                    text: "We'll be in touch shortly regarding your inquiry.",
                    icon: "success"
                });

                // Redirect to thank-you page
                navigate('/thankyou-page');

                // Reset form state
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    plan: '',
                    customService: '',
                    projectMessage: ''
                });
                setSubmittedForm(true);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                Swal.fire({
                    title: "Try Again!",
                    text: "Error sending Mail!",
                    icon: "warning"
                });
            });
    };

 

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
            <form
              onSubmit={handleSubmit}
              className="flex Form flex-col shadow-lg justify-center items-center bg-[#3B7FBF] p-8 rounded-lg"
            >
              <div className="flex justify-between items-center w-full mb-4">
                <div className="flex flex-col items-center w-full">
                  <h4 className="text-white md:text-4xl sm:text-2xl text-xl font-bold text-center">Book Your Session</h4>
                  <p className="text-white text-sm font-medium text-center">
                  We’re Here to Help You Grow and Succeed</p>
                </div>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button> */}
              </div>
              <div className="space-y-3 w-10/12">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Your Phone Number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name/Website (If Any)"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Services</option>
                  <option value="Basic">Website Design & Development</option>
                  <option value="Premium">Digital Marketing (SEO, SMO & SEM)</option>
                  <option value="Enterprise">Mobile App Development (Android & IOS)</option>
                  <option value="Others">Others</option>
                </select>
                {formData.plan === "Others" && (
                  <input
                    type="text"
                    placeholder="Please specify your services"
                    name="customService"
                    value={formData.customService}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
                <textarea
                  placeholder="Tell Us About Your Project/Message"
                  name="projectMessage"
                  value={formData.projectMessage}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className=" w-1/2 py-2 bg-white text-[#3b7fbf] rounded-md
                     hover:text-blue-600  text-lg transition-colors font-bold tracking-wider"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
                {/* <div className='justify-content-center align-items-center'>
                    <Form className='Form p-4' onSubmit={handleSubmit} ref={form}
                    >
                        <div className='d-flex flex-col justify-center items-center'>
                            <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                            <p className='para' style={{ color: "#3b7fbf" }}>Tell Us About Your Project!</p>
                        </div>
                        <FormGroup>
                            <FormControl
                                type='text'
                                placeholder=' Your Name*'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup className='pt-3'>
                            <FormControl
                                type='email'
                                placeholder=' Your Email*'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup className='pt-3'>
                            <FormControl
                                type='number'
                                placeholder='Your Phone Number*'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup className='pt-3'>
                            <FormControl
                                type='text'
                                placeholder='Company Name/Website (If Any)'
                                name='companyName'
                                value={formData.companyName}
                                onChange={handleChange}
                              
                            />
                        </FormGroup>
                        <FormGroup className='pt-3'>
                            <div className="dropdown-container">
                                <FormControl
                                    as='select'
                                    name='plan'
                                    value={formData.plan}
                                    onChange={handleChange}
                                    required
                                    className="form-select-with-icon"
                                >
                                    <option value=''>Select Services</option>
                                    <option value='Basic'>Website Design & Development</option>
                                    <option value='Premium'>Digital Marketing (SEO, SMO & SEM)</option>
                                    <option value='Enterprise'>Mobile App Development (Android & IOS)</option>
                                    <option value='Others'>Others</option>
                                </FormControl>
                                <i className="dropdown-icon">&#x25BC;</i>
                            </div>

                            {formData.plan === 'Others' && (
                                <FormGroup className='pt-3'>
                                    <FormControl
                                        type='text'
                                        name='customService'
                                        placeholder='Please specify your services'
                                        value={formData.customService}
                                        onChange={handleChange}
                                        required
                                    />
                                </FormGroup>
                            )}
                        </FormGroup>
                        <FormGroup className='pt-3'>
                            <FormControl
                                as='textarea'
                                placeholder='Tell Us About Your Project/Message'
                                name='projectMessage'
                                value={formData.projectMessage}
                                onChange={handleChange}
                                rows={2}
                                required
                            />
                        </FormGroup>
                        <div className='flex justify-center align-items-center cursor-pointer gap-3 pt-3'>
                            <div className="flex items-center justify-center">
                                <a href="https://api.whatsapp.com/send?phone=918448158188" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                                        <img src={wp} alt="WhatsApp" className="img-fluid w-6 mr-2" />
                                        <h5 className="m-0">Chat Now</h5>
                                    </div>
                                </a>
                            </div>

                            {<a href="sms:+918448158188">
                                <img src={msg} alt="" className='img-fluid w-10' />
                            </a> }
                            <a href="tel:+918448158188">
                                <img src={call} alt="" className='img-fluid w-10' />
                            </a>

                        </div>
                        <div className='d-flex justify-content-center align-items-center pt-3'>
                        <Button type="submit" variant='outline-dark' className='btnsubmit md:w-64'>
    Submit
</Button>

                                </div>


                    </Form>
                </div> */}
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
