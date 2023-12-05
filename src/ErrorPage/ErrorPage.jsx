import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#1c082e] h-screen flex items-center justify-center">
      <Helmet>
        <title>Music Festival | Error</title>
      </Helmet>
      <div>
        <img
          src="https://i.ibb.co/Z80V5wP/Asset-1.png"
          className="lg:w-[500px]"
          alt=""
        />

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-blue-600 rounded-full font-bold text-white"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
