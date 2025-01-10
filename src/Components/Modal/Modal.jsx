import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ModalExample = ({ buttonLabel, className,headingform,subheadingForm }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!submittedForm) {
        setIsOpen(true);
      }
    }, 600000);

    return () => clearInterval(interval);
  }, [submittedForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      customService: name === 'plan' && value !== 'Others' ? '' : prev.customService
    }));
  };

  const resetForm = () => {
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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name.trim() !== '' && emailRegex.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide valid name and email.',
      });
      return;
    }

    try {
      await emailjs.send(
        "service_163pacd",
        "template_9vm7a2q",
        formData,
        "I8TosX-mUu1K_TQtM"
      );

      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Thank you for reaching out. We\'ll be in touch shortly.',
      });

      navigate('/thankyou-page');
      resetForm();
      setSubmittedForm(true);
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error sending mail! Please try again.',
      });
    }
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
  color: #918F8F !important;
  font-weight: 500;
  font-size: 15px;
  opacity: 0.5;
}

          /* Select placeholder color */
          select option:first-child {
           color: #918F8F !important;
  font-weight: 500;
  font-size: 15px;
          }
          
          select {
              color: #918F8F !important;
  font-weight: 500;
  font-size: 15px;

          }
          
          /* Change color when option is selected */
          select.has-value {
            color: #000000;
          }
        `}
      </style>
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:px-4 md:px-2 sm:px-0 sm:text-[15px] lg:text-[20px] md:text-[17px] md:font-[400] w-fit lg:font-[500] rounded-md py-1 ${className}`}
      >
        {buttonLabel}
      </button>
      {isOpen && !submittedForm && (
        <div className='relative row'>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center p-0 justify-center z-50">
          <div className="bg-white flex flex-col  shadow-lg items-center rounded-lg w-full max-w-md relative">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col shadow-lg justify-center items-center bg-[#3B7FBF] p-8 rounded-lg"
            >
              <div className="flex justify-between items-center w-full mb-4">
                <div className="flex flex-col items-center w-full">
                  <h4 className="text-white md:text-3xl sm:text-2xl text-xl font-bold text-center">{headingform}</h4>
                  <p className="text-white text-sm font-medium text-center">
                    {subheadingForm}
                 </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
          </div>
        </div>
        </div>

      )}
    </>
  );
};
export default ModalExample;