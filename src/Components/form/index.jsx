import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Form = ({headingform,subheadingForm,dynamicBgColor,headingColor,paraColor,className,buttonBackground,buttonColor}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    service: '',
    customService: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      customService: name === 'service' && value !== 'Others' ? '' : prev.customService
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyname: '',
      service: '',
      customService: '',
      message: ''
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
    setIsSubmitting(true);
    try {
      const formDataToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyname: formData.companyname,
        service: formData.service === 'Others' ? formData.customService : formData.service,
        message: formData.message,
        dateOfEnquiry: new Date().toISOString(),
      };
  
      // If it's a GET request, modify the URL with query parameters
      const url = new URL('https://api-fawn-seven.vercel.app/api/data/get/');
      url.search = new URLSearchParams(formDataToSubmit).toString(); // Convert formDataToSubmit to query parameters
  
      const response = await fetch(url, {
        method: 'GET', // Change POST to GET if the API requires a GET request
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Handle successful form submission
      await Swal.fire({
        title: "Submission Successful",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      resetForm();
      navigate('/thankyou-page');
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: "Error",
        text: error.message || "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className='py-12 row flex justify-center items-center'>
      <div className='max-w-6xl w-full flex justify-center items-center shadow-sm'>
      <form
  onSubmit={handleSubmit}
  className={`max-w-lg flex flex-col shadow-md justify-center items-center p-4 rounded-lg ${className}`}  // Conditionally add classProp
  style={{ backgroundColor: dynamicBgColor || '#3B7FBF' }}  // Default background
>
  {/* Your form content goes here */}

  <div className="flex justify-between items-center w-full mb-4">
      <div className="flex flex-col items-center w-full">
        <h4
          className={`md:text-3xl sm:text-2xl text-xl font-bold text-center ${headingColor || 'text-[#3b7fbf]'}`}
        >
          {headingform || "Book Your Session"} {/* Default to "Book Your Session" if no prop passed */}
        </h4>
        <p className={`text-sm font-medium text-center ${paraColor || 'text-[#3b7fbf]'}`}>
          {subheadingForm || "We’re Here to Help You Grow and Succeed"} {/* Default subheading */}
        </p>
      </div>
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
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Services</option>
              <option value="Website Design & Development">Website Design & Development</option>
              <option value="Digital Marketing">Digital Marketing (SEO, SMO & SEM)</option>
              <option value="Mobile App Development">Mobile App Development (Android & IOS)</option>
              <option value="Others">Others</option>
            </select>
            {formData.service === "Others" && (
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={2}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-center">
            <button
    type="submit"
    disabled={isSubmitting}
    className={`w-1/2 py-2  rounded-md hover:text-blue-600 text-lg transition-colors font-bold tracking-wider ${
      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
    } ${buttonBackground || 'bg-white'}
    ${buttonColor || 'text-[#3b7fbf]'}`}
  >
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        ::placeholder {
          color: #918F8F !important;
          font-weight: 500;
          font-size: 15px;
          opacity: 0.5;
        }
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
        select.has-value {
          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default Form;
