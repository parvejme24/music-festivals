import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { id, name, image, price, short_description } = service;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="bg-[#0E223B] p-6">
      <div>
        <img className="w-full h-[220px]" src={image} alt="" />
      </div>
      <div className="space-y-2 mt-4">
        <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
        <p className="font-semibold text-gray-200">{short_description}</p>
        <div className="flex items-center justify-between">
          <Link
            to={`/service/${id}`}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-800 font-semibold text-white"
          >
            Parsec Now
          </Link>
          <p className="text-blue-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
