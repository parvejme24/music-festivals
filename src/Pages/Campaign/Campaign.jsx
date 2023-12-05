import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Campaign = () => {
  const handleGetTicket = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Ticket will send in your Email",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Music Festival | Campaign</title>
      </Helmet>
      {/* Campaign Header */}
      <header className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10 text-white py-6">
        <div data-aos="zoom-in" className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Exclusive Festival Offer</h1>
          <p className="mt-2">
            Don't miss out on our special festival campaign!
          </p>
        </div>
      </header>

      {/* Campaign Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="md:flex gap-6">
            {/* Campaign Image */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                data-aos="fade-right"
                src="https://i.ytimg.com/vi/pC6ldTRlqGY/mqdefault.jpg"
                alt="Campaign Image"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            {/* Campaign Details */}
            <div data-aos="fade-left" className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Limited-Time Festival Offer
                </h2>
                <p className="text-gray-700">
                  Experience the ultimate festival extravaganza with our
                  exclusive limited-time offer. Embrace the rhythm, the energy,
                  and the memories.
                </p>
                <p className="text-gray-700 mt-4">
                  This incredible offer includes:
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>
                      Discounted festival tickets for you and your friends
                    </li>
                    <li>
                      Access to VIP areas, ensuring the best view of your
                      favorite artists
                    </li>
                    <li>
                      Early entry to the festival grounds to secure the perfect
                      spot
                    </li>
                    <li>
                      Complimentary festival merchandise to make your experience
                      unforgettable
                    </li>
                  </ul>
                </p>
                <div className="mt-6">
                  <p className="text-gray-700">
                    Hurry, this offer is only available until{" "}
                    <strong>December 31, 2023</strong>. Secure your tickets now
                    and join the festival journey of a lifetime!
                  </p>
                  <button
                    data-aos="zoom-in"
                    onClick={handleGetTicket}
                    className="bg-indigo-600 w-full hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full mt-4 block text-center"
                  >
                    Get Your Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaign;
