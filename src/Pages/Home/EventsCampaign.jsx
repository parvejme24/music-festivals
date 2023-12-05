import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaBoxOpen, FaPenFancy } from "react-icons/fa";

const EventsCampaign = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-[#0B1D35] py-20">
      <div className="container mx-4 md:mx-auto w-fit grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div data-aos="fade-right">
          <img
            src="https://www.halifaxpopexplosion.com/wp-content/uploads/1-1-1024x683.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <h4 className="text-xl font-bold text-orange-600 mb-4">
            Events Campaign
          </h4>
          <h2 className="text-4xl text-blue-600 font-bold mb-4">
            Build Markting Campaign That Move the Needle
          </h2>
          <p className="text-gray-200 mb-6">
            Join us for the biggest music festival of the year! Featuring
            headliners Adele, Beyoncé, and Taylor Swift, plus dozens of your
            other favorite artists. Tickets on sale now!
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-3 text-gray-100">
              <FaBoxOpen className="text-4xl text-orange-600" />
              Identity hot leads and get a compleate view into their activities
              and engagement
            </p>
            <p className="flex items-center text-gray-100 gap-3">
              <FaPenFancy className="text-4xl text-orange-600" />
              Segment prospects and customers based on attributes and behavior
              to send presonalized emails
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCampaign;
