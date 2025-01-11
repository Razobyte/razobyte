import React, { useEffect, useState } from 'react';
import Form from '../form';

const ModalExample = ({ buttonLabel, className, headingform, subheadingForm}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedForm, setSubmittedForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!submittedForm) {
        setIsOpen(true);
      }
    }, 600000);

    return () => clearInterval(interval);
  }, [submittedForm]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:px-4 md:px-2 sm:px-0 sm:text-[15px] lg:text-[20px] md:text-[17px] md:font-[400] w-fit lg:font-[500] rounded-md py-1 ${className}`}
      >
        {buttonLabel}
      </button>
      {isOpen && !submittedForm && (
        <div className="relative row">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center p-0 justify-center z-50">
            <div className="relative w-full max-w-md rounded-md">
              {/* Close button positioned to the left */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-20 right-8 text-white hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>    
              {/* Form content with dynamic heading color */}
              <Form
                headingform={headingform}
                subheadingForm={subheadingForm}
                headingColor="text-[#fff]"
                paraColor="text-[#fff]" // Pass the heading color to the Form
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalExample;
