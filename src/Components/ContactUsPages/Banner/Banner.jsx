import { Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import '../Banner/Banner.css';

export default function Banner() {
  const navigate = useNavigate();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    plan: '',
    customService: '',
    projectMessage: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      customService: name === 'plan' && value !== 'Others' ? '' : prev.customService
    }));
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
    <>
      <style>
        {`
          /* Remove number input arrows */
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
          
          /* Placeholder styles */
          ::placeholder {
            color: #5e5e5e65 !important;
            opacity: 0.5;
          }
            input:focus, select:focus, textarea:focus {
  border-color: #3b7fbf;
  outline: none;
  box-shadow: 0 0 5px rgba(59, 127, 191, 0.5);  /* Optional: Add a box shadow on focus */
}

/* When the input has a value */
input:not(:placeholder-shown), select:not([value=""]), textarea:not(:placeholder-shown) {
  color: #000;

            
          /* Select placeholder color */
          select option:first-child {
            color: #5e5e5e;
            opacity: 0.7;
          }
          
          select {
             color: #5e5e5e65 !important;
          }
          
          /* Change color when option is selected */
          select.has-value {
            color: #000000;
          }
        `}
      </style>

      {/* Desktop view */}
      <Row className="banner d-sm-flex d-none justify-content-center align-items-center mainrowdiv"
        style={{ backgroundImage: "linear-gradient(to right ,#3b7fbf9d,#3b7fbf21 ),url('Image/wave (14).svg')" }}>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="contact-title">
            <div className='relative'>
              <p className='pt-md-3'>Let’s build what you dreamt of, Together! Drop us a call!</p>
              <img src="Image/Group 1111 (1).png" alt="" className="img-fluid img-below" />
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="p-3  bg-white rounded-xl">
              <div className='d-flex flex-col justify-center items-center'>
                <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                <p className='para' style={{ color: "#3b7fbf" }}>Tell Us About Your Project!</p>
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="number"
                  placeholder="Your Phone Number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="text"
                  placeholder="Company Name/Website (If Any)"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <div className="relative">
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#5e5e5e25] rounded-md appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                  >
                    <option value="">Select Services</option>
                    <option value="Basic">Website Design & Development</option>
                    <option value="Premium">Digital Marketing (SEO, SMO & SEM)</option>
                    <option value="Enterprise">Mobile App Development (Android & IOS)</option>
                    <option value="Others">Others</option>
                  </select>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    &#x25BC;
                  </span>
                </div>

                {formData.plan === "Others" && (
                  <input
                    type="text"
                    placeholder="Please specify your services"
                    name="customService"
                    value={formData.customService}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                  />
                )}

                <textarea
                  placeholder="Tell Us About Your Project/Message"
                  name="projectMessage"
                  value={formData.projectMessage}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-1/2 py-2 bg-[#3b7fbf] text-white rounded-md hover:bg-[#0a4883] transition-colors font-medium tracking-wider"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
      {/* Mobile view */}
      <Row className="d-flex d-sm-none justify-content-center align-items-center py-5" style={{ backgroundColor: "#3b7fbf" }}>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="contact-title2 text-light">
            <p>Let’s build what you dreamt of, Together! Drop us a call!</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className="justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="p-3 bg-white">
              <div className='d-flex flex-col justify-center items-center'>
                <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                <p className='para' style={{ color: "#3b7fbf" }}>Tell Us About Your Project!</p>
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="number"
                  placeholder="Your Phone Number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <input
                  type="text"
                  placeholder="Company Name/Website (If Any)"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <div className="relative">
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#5e5e5e25] rounded-md appearance-none bg-white focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                  >
                    <option value="">Select Services</option>
                    <option value="Basic">Website Design & Development</option>
                    <option value="Premium">Digital Marketing (SEO, SMO & SEM)</option>
                    <option value="Enterprise">Mobile App Development (Android & IOS)</option>
                    <option value="Others">Others</option>
                  </select>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    &#x25BC;
                  </span>
                </div>

                {formData.plan === "Others" && (
                  <input
                    type="text"
                    placeholder="Please specify your services"
                    name="customService"
                    value={formData.customService}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                  />
                )}

                <textarea
                  placeholder="Tell Us About Your Project/Message"
                  name="projectMessage"
                  value={formData.projectMessage}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full p-2 border border-[#5e5e5e25] rounded-md focus:outline-none focus:ring-1 focus:ring-[#3b7fbf]"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-1/2 py-2 bg-[#3b7fbf] text-white rounded-md hover:bg-[#0a4883] transition-colors font-medium tracking-wider"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </>
  );
}
