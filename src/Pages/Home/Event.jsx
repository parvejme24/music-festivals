import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaStopwatch } from "react-icons/fa";

const Event = ({ event }) => {
  const {
    singer1_name,
    singer2_name,
    event_time,
    location,
    description,
    singer1_image,
    singer2_image,
  } = event;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="bg-[#0B1D35] p-8 mb-4 rounded-xl mx-4 md:mx-0"
    >
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 lg:gap-6">
        <div className="flex justify-center items-center gap-3">
          <img className="w-14 h-14 rounded-full" src={singer1_image} alt="" />
          <img className="w-14 h-14 rounded-full" src={singer2_image} alt="" />
        </div>
        <div className="text-white font-bold text-[20px]">
          <h2>{singer1_name}</h2>
          <h2>{singer2_name}</h2>
        </div>

        <p className="text-gray-300 col-span-2">{description}</p>

        <div className="space-y-3 col-span-2">
          <p className="flex gap-2">
            <FaMapMarkerAlt className="text-blue-600 text-[20px]" />{" "}
            <span className="text-white">{location}</span>
          </p>
          <p className="flex gap-2">
            <FaStopwatch className="text-orange-600 text-[20px]" />{" "}
            <span className="text-white">{event_time}</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-white font-semibold w-28 h-10 bg-orange-600 hover:bg-blue-600 rounded-full">
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
