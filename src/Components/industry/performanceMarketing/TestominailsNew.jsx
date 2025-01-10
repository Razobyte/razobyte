import React, { useState, useEffect } from "react";
import bg from "../../../../public/Image/bg-testominials.png"; // Make sure this path is correct
import test1Img from "../../../../public/Image/lar-7.png";
import test3Img from "../../../../public/Image/Raseo-Technology-Solutions.jpg";
import test4Img from "../../../../public/Image/Eric-yong.jpg";
import bg2 from '../../../../public/Image/testominailsbg.png';
import exclamatory from '../../../../public/Image/exclamatory.png';
import { Row } from "react-bootstrap";

const TestimonialsSection = () => {
  const testimonials = [
    {
      exclamatory: exclamatory,
      name: "Alvin Hong",
      title: "Manager",
      rating: 5,
      image: test1Img,
      review: "The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best.",
    },
    {
      exclamatory: exclamatory,
      name: "Eunice Yong",
      title: "Director",
      rating: 5,
      image: test3Img,
      review: "They have been very good to boost my business through SEO campaign and Google adwords, thanks.",
    },
    {
      exclamatory: exclamatory,
      name: "Eric Lim",
      title: "Owner",
      rating: 5,
      image: test4Img,
      review: "They are at their words in terms of providing service and support!! all the best.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update mobile view on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Determine visible testimonials based on screen size
  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]] // Show one card on mobile
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length], // Show two cards on desktop
      ];

  return (
    <>
      {/* Desktop and Tablet View */}
      <Row
        className="w-screen d-md-flex d-none justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="max-w-6xl col-md-11 flex flex-col md:flex-row gap-4 items-center justify-center mx-auto py-11">
          {/* Heading */}
          <div className="mt-10">
            <div className="flex items-center">
              <h2 className="text-lg uppercase bg-white px-3 py-1 font-semibold text-[#3b7fbf]">
                Testimonials
              </h2>
            </div>
            <h2
              className="text-6xl font-medium mt-2 text-[#ACACAC]"
              style={{ opacity: "0.9" }}
            >
              500+
            </h2>
            <h2 className="text-xl text-[#ACACAC] uppercase">
              Clients Are Served
            </h2>
            <h3 className="text-lg font-medium text-[#ffff]">
              Words by our amazing clients.
            </h3>
            <p className="text-sm text-white font-normal max-w-md">
              Razobyte offers a full range of consultancy and solutions for
              sustainable growth.
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={handlePrevious}
                className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
              >
                <span className="text-lg">❮</span>
              </button>
              <button
                onClick={handleNext}
                className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
              >
                <span className="text-lg">❯</span>
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6"
                style={{
                  boxShadow: "0px 4.51px 13.52px 4.51px rgba(0, 0, 0, 0.25)",
                  border: "1px solid #878484",
                  borderRadius: "9.2px",
                }}
              >
                <div className="flex max-w-md">
                  <div>
                    <img
                      src={testimonial.exclamatory}
                      alt="excla"
                      className="w-6 h-6 object-contain mb-2"
                    />
                    <h3 className="text-xl font-normal text-white border-b border-white w-fit pb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-white font-normal mt-0 pt-0 pb-0">
                      {testimonial.title}
                    </p>
                    <div className="flex m-0 p-0">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-lg mt-0 pt-0"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {testimonial.review}
                    </p>
                  </div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Row>

      {/* Mobile View */}
      <Row
        className="w-screen d-md-none d-flex justify-center items-center bg-cover bg-center py-5"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-10">
            <div className="flex items-center">
              <h2 className="text-lg uppercase bg-white px-3 py-1 font-semibold text-[#3b7fbf]">
                Testimonials
              </h2>
            </div>
            <h2
              className="text-6xl font-medium mt-2 text-[#ACACAC]"
              style={{ opacity: "0.9" }}
            >
              500+
            </h2>
            <h2 className="text-xl text-[#ACACAC] uppercase">
              Clients Are Served
            </h2>
            <h3 className="text-lg font-medium text-[#ffff]">
              Words by our amazing clients.
            </h3>
            <p className="text-sm text-white font-normal max-w-md">
              Razobyte offers a full range of consultancy and solutions for
              sustainable growth.
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={handlePrevious}
                className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
              >
                <span className="text-lg">❮</span>
              </button>
              <button
                onClick={handleNext}
                className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
              >
                <span className="text-lg">❯</span>
              </button>
            </div>
          </div>
        <div className="max-w-6xl col-md-11 flex flex-col gap-4 items-center justify-center mx-auto py-11">
          {/* Testimonial Cards */}
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg"
            >
              <div className="flex space-x-4">
                <div>
                  <h3 className="text-xl font-normal text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white font-normal mt-1">
                    {testimonial.title}
                  </p>
                  <div className="flex m-0 p-0">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg mt-0 pt-0"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {testimonial.review}
                  </p>
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Row>
    </>
  );
};

export default TestimonialsSection;
