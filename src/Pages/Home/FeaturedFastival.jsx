import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const FeaturedFastival = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-no-repeat bg-center bg-cover bg-blue-950 bg-blend-overlay py-12 bg-fixed">
      <h2
        data-aos="zoom-in"
        className="text-center text-4xl text-blue-600 font-bold"
      >
        Features Festival
      </h2>
      <div className="container mx-auto mt-8">
        <div className=" mx-4 lg:mx-0">
          <div className="lg:col-span-2 bg-blue-950 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              Summer Soundwave Festival
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div
                data-aos="fade-right"
                className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4"
              >
                <span className="bg-[#0F2441] p-3 rounded-2xl flex justify-center items-center h-fit">
                  <FaCalendarAlt className="text-3xl text-orange-600" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-gray-300">
                    Date Conference
                  </h3>
                  <p className=" text-xl font-bold text-white">
                    July 15-17, 2023
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-left"
                className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4"
              >
                <span className="bg-[#0F2441] p-3 rounded-2xl flex items-center justify-center h-fit">
                  <FaMapMarkerAlt className="text-3xl text-orange-600" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-gray-300">
                    Location
                  </h3>
                  <p className=" text-xl font-bold text-white">
                    Beachfront Park, Miami, FL
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="bg-[#0B1D35] p-4 rounded-xl flex items gap-4"
              >
                <span className="bg-[#0F2441] p-3 rounded-2xl flex justify-center items-center h-fit">
                  <FaTicketAlt className="text-3xl text-orange-600" />
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-gray-300">
                    Buy Tickets
                  </h3>
                  <p className=" text-xl font-bold text-white">
                    Tickets starting from $99.99
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mt-2">
              Don't miss out on this amazing event!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFastival;
