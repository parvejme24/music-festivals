import Aos from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ContactUs = () => {
  const { user } = useContext(AuthContext);
  const handleSendMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Thank you for your Message",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Music Festival | Contact</title>
      </Helmet>
      <div className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10">
        <h1
          data-aos="zoom-in"
          className="text-center text-4xl font-bold text-white"
        >
          Contact Music Festival
        </h1>
        <p data-aos="zoom-in" className="text-gray-100 text-center">
          We're here to answer your questions and help you with anything you
          need.
        </p>
      </div>

      <div className="bg-[#0F1839]">
        <div className="container lg:w-[1280px] mx-auto md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 mx-4 w-fit">
            <div
              data-aos="fade-right"
              className="bg-[#0F2441] shadow-xl rounded-lg p-8"
            >
              <div className="flex flex-col mt-10">
                <p className="mb-5 text-xl text-blue-600">
                  If you have any questions or feedback, please feel free to
                  contact us at the following:
                </p>

                <ul className="mb-5 bg-[#0B1D35] space-y-3 text-gray-200 p-4 rounded-lg">
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-xl text-blue-600" />
                    <a href="mailto:info@musicfestival.com">
                      info@musicfestival.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone className="text-xl text-blue-600" />
                    <a href="tel:+1-555-555-5555">+1-555-555-5555</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLocationArrow className="text-xl text-blue-600" />
                    123 Main Street, Anytown, CA 12345
                  </li>
                </ul>

                <p className="text-orange-600">
                  You can also follow us on social media for the latest news and
                  updates:
                </p>

                <ul className="flex flex-row justify-center mt-5">
                  <li className="mr-5">
                    <a href="https://www.facebook.com/musicfestival">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mr-5">
                    <a href="https://www.twitter.com/musicfestival">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mr-5">
                    <a href="https://www.instagram.com/musicfestival">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-[#0F2441] p-8 rounded-lg shadow-xl"
            >
              <form className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={user && user.displayName}
                  placeholder="Your name"
                  className="bg-[#0B1D35] text-gray-200 mb-5 p-3 border border-gray-600 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  value={user && user.email}
                  placeholder="Your email"
                  className="bg-[#0B1D35] text-gray-200 mb-5 p-3 border border-gray-600 focus:outline-none"
                />

                <textarea
                  placeholder="Your message"
                  name="message"
                  rows={3}
                  className="bg-[#0b1d3589] text-gray-200 mb-5 p-3 border border-gray-600  focus:outline-none "
                />

                <button
                  onClick={handleSendMessage}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
