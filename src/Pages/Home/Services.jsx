import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-[#0B1C34] py-20">
      <h2 className="text-center text-blue-600 text-4xl font-bold mb-8">
        Our Services
      </h2>
      <div className="container mx-4 w-fit md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
