import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-[url('https://i.ibb.co/kGVGW58/b.png')] text-white py-12 bg-center bg-cover bg-no-repeat bg-blue-950 bg-blend-overlay bg-fixed">
      <div className="container mx-auto text-center">
        <h2 data-aos="zoom-in" className="text-3xl font-semibold mb-4">
          Get Ready to Rock!
        </h2>
        <p data-aos="zoom-in" className="text-lg mb-8">
          Join us for an unforgettable music festival experience.
        </p>
        <Link
          data-aos="zoom-in"
          to="/campaign"
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full inline-block transition duration-300"
        >
          Get Tickets
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
