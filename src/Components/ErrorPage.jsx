import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className=" row w-scrren flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-500 mt-2">
          It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-[#3b7fbf] text-white py-2 px-4 rounded-lg text-lg shadow hover:bg-blue-600 transition duration-300 text-decoration-none"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
