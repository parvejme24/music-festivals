import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const FAQs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const faqs = [
    {
      id: 1,
      question: "How can I purchase tickets for the festival?",
      answer:
        "You can purchase tickets for the festival through our official website. Simply go to the Tickets page and follow the instructions to complete your purchase.",
    },
    {
      id: 2,
      question: "What is the festival's refund policy?",
      answer:
        "Our refund policy varies depending on the circumstances. Please refer to our Refund Policy page for detailed information on our refund process and eligibility.",
    },
    {
      id: 3,
      question: "Is there parking available at the festival venue?",
      answer:
        "Yes, there is ample parking available at the festival venue. We recommend arriving early to secure your parking spot.",
    },
    {
      id: 4,
      question: "Can I bring my own food and drinks to the festival?",
      answer:
        "Outside food and drinks are not allowed at the festival. We offer a wide range of food and beverage options onsite to cater to various tastes.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Music Festival | FAQ</title>
      </Helmet>
      {/* FAQs Header */}
      <header className="bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10 text-white py-6">
        <div data-aos="zoom-in" className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">FAQs</h1>
          <p className="mt-2">
            Find answers to common questions about our festival.
          </p>
        </div>
      </header>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                data-aos="fade-up"
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* FAQ Question */}
                <div className="px-4 py-3 cursor-pointer flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{faq.question}</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 transform transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {/* FAQ Answer */}
                <div className="px-4 py-3 bg-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
