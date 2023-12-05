import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaTicketAlt,
} from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [event, setEvents] = useState([]);
  const { id } = useParams();
  const events = useLoaderData();
  useEffect(() => {
    let findEvent = events?.find((event) => event.id == id);
    setEvents(findEvent);
  }, [events, id]);
  const {
    name,
    image,
    price,
    long_description,
    location,
    singers,
    ticket_remaining,
    event_date,
  } = event;
  return (
    <div className="py-8 bg-[#0B1C34] pt-48 -mt-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-full">
          <img
            src={image}
            className="w-[90%] md:w-full h-[100%] rounded-lg mx-4 md:mx-0"
            alt=""
          />
        </div>

        <div className="space-y-2 bg-[#172554] p-4  rounded-lg mx-4 md:mx-0">
          <h2 className="text-4xl font-bold text-blue-600">{name}</h2>
          <p className="text-gray-200 font-semibold">{long_description}</p>
          <div className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4">
            <span className="bg-[#0F2441] p-3 rounded-2xl flex items-center justify-center h-fit">
              <FaCalendarAlt className="text-3xl text-orange-600" />
            </span>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-gray-300">
                Event Date
              </h3>
              <p className=" text-xl font-bold text-white">{event_date}</p>
            </div>
          </div>
          <div className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4">
            <span className="bg-[#0F2441] p-3 rounded-2xl flex items-center justify-center h-fit">
              <FaMapMarkerAlt className="text-3xl text-orange-600" />
            </span>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-gray-300">
                Location
              </h3>
              <p className=" text-xl font-bold text-white">{location}</p>
            </div>
          </div>
          <div className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4">
            <span className="bg-[#0F2441] p-3 rounded-2xl flex items-center justify-center h-fit">
              <FaTicketAlt className="text-3xl text-orange-600" />
            </span>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-gray-300">
                Ticket Remaining
              </h3>
              <p className=" text-xl font-bold text-white">
                {ticket_remaining}
              </p>
            </div>
          </div>
          <div className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4">
            <span className="bg-[#0F2441] p-3 rounded-2xl flex items-center justify-center h-fit">
              <FaDollarSign className="text-3xl text-orange-600" />
            </span>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-gray-300">
                Ticket Price
              </h3>
              <p className=" text-xl font-bold text-white">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
