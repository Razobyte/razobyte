import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen  row flex flex-col justify-between bg-gray-100/50">
      {/* Header Section */}
      {/* <header className="bg-orange-500 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-white font-bold text-xl">
            Razobyte
          </a>
          <nav className="space-x-4">
            <a href="/" className="text-white hover:underline">
              Home
            </a>
            <a href="/about" className="text-white hover:underline">
              About Company
            </a>
            <a href="/services" className="text-white hover:underline">
              Our Services
            </a>
            <a href="/contact" className="text-white hover:underline">
              Reach Us
            </a>
          </nav>
        </div>
      </header> */}

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-4xl font-bold text-[#5e5e5e] mb-4">
          Thank You for Reaching Out!
        </h1>
        <p className="text-lg text-gray-600 mb-2">
        You are one step closer to achieving your vision.<span className="text-yellow-500">⭐</span>
        </p>
        <p className="text-lg text-gray-600 mb-2 max-w-4xl">
        Schedule your complimentary consultation with our experts at Razobyte to discuss your objectives and explore solutions.
        </p>
        <p className="mt-0 text-[#3b7fbf] font-medium">
        Let’s bring your ideas to life—Book your consultation now!
        </p>
        {/* Calendly Embed */}
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://calendly.com/rohit-razobyte"
            width="100%"
            height="600"
            frameBorder="0"
            title="Calendly Scheduling"
          ></iframe>
        </div>
      
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-gray-800 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-white">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Razobyte. All rights reserved.</p>
            <p className="text-sm">Privacy Policy | Terms & Conditions</p>
          </div>
          <div>
            <p className="text-sm">Contact Us: support@razobyte.com</p>
            <p className="text-sm">Call: +123-456-7890</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ThankYouPage;
