import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Music Festival | About Us</title>
      </Helmet>
      {/* Header */}
      <header className="bg-indigo-800 bg-[url('https://i.ibb.co/6XKpnkJ/cover.jpg')] bg-center bg-cover bg-no-repeat pt-40 -mt-24 pb-10 text-white py-6">
        <div data-aos="zoom-in" className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">
            About Music Festival
          </h1>
          <p className="mt-2">Unite, Celebrate, and Revel in Music</p>
        </div>
      </header>

      {/* Mission and Vision */}
      <section className="py-12 bg-[#172554]">
        <div className="container mx-4 md:mx-auto w-fits">
          <div className="md:flex gap-8">
            <div
              data-aos="fade-right"
              className="md:w-1/2 shadow-xl border-[#0F1839] bg-[#0B1D35] border p-4 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Mission
              </h2>
              <p className="text-gray-300">
                At Music Festival, our mission is to create exceptional music
                festival experiences that resonate with the hearts and souls of
                music lovers worldwide. We believe in the power of music to
                inspire, connect, and transform, and we're committed to making
                every festival a momentous celebration of sound and unity.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="md:w-1/2 shadow-xl bg-[#0B1D35] mt-6 md:mt-0 border-[#0F1839] border p-4 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Vision
              </h2>
              <p className="text-gray-300">
                Our vision is to be the leading force in the world of music
                festivals, known for our innovative approach, inclusivity, and
                dedication to sustainability. We envision a world where people
                from diverse backgrounds come together to revel in the magic of
                music, leaving a positive mark on the environment and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-[#172554] py-12">
        <div className="container mx-4 md:mx-auto w-fit text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Meet Our Team
            </h2>
            <p className="text-gray-200">
              Music Festival is powered by a passionate team of music
              enthusiasts, event planners, and tech innovators who share a
              common goal - to create unforgettable festival experiences.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div
              data-aos="fade-right"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <img
                src="https://media.licdn.com/dms/image/C5603AQHSW957wrdRZw/profile-displayphoto-shrink_800_800/0/1655216679664?e=2147483647&v=beta&t=FTWkt4JQViONCxOZTGnrct3xLUutYp-N7rAMbjFuhGg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">
                Anna Grace
              </h3>
              <p className="text-gray-300">Event Director</p>
            </div>

            {/* Team Member 2 */}
            <div
              data-aos="fade-up"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">
                Jane Smith
              </h3>
              <p className="text-gray-300">Music Curator</p>
            </div>

            {/* Team Member 3 */}
            <div
              data-aos="fade-left"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qr8vj-yOKkhNzRQLLD74wWsaHMKn33O-jQ&usqp=CAU"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">
                Michael Johnson
              </h3>
              <p className="text-gray-300">Tech Wizard</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-blue-950">
        <div className="container mx-4 w-fit md:mx-auto">
          <h2
            data-aos="zoom-in"
            className="text-3xl font-semibold text-center mb-8 text-blue-600"
          >
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Festival Curation */}
            <div
              data-aos="fade-down"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                Festival Curation
              </h3>
              <p className="text-gray-200">
                We meticulously curate lineups that feature a diverse range of
                artists, ensuring there's something for everyone. From rock and
                pop to electronic and indie, we've got your musical tastes
                covered.
              </p>
            </div>

            {/* Immersive Experiences */}
            <div
              data-aos="fade-left"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                Immersive Experiences
              </h3>
              <p className="text-gray-200">
                We go beyond just music. Our festivals are immersive experiences
                that combine stunning visual art, interactive installations, and
                mouthwatering food to create a sensory wonderland.
              </p>
            </div>
            {/* Sustainability */}
            <div
              data-aos="fade-right"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                Sustainability
              </h3>
              <p className="text-gray-200">
                We're committed to making a positive impact on the environment.
                Our festivals are designed with sustainability in mind, from
                eco-friendly stages to waste reduction initiatives.
              </p>
            </div>
            {/* Technology Integration */}
            <div
              data-aos="fade-up"
              className="bg-[#0B1D35] p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                Technology Integration
              </h3>
              <p className="text-gray-200">
                We embrace technology to enhance the festival experience. From
                mobile apps for seamless navigation to cashless payment systems,
                we keep you connected and make your festival experience
                hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-[url('https://i.ibb.co/jVGt3CF/bb.png')] bg-center bg-cover bg-no-repeat bg-fixed bg-indigo-900 bg-blend-overlay text-white py-12">
        <div data-aos="zoom-out" className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Join the Music Festival Family
          </h2>
          <p className="mt-2">
            Let's create memories, share laughter, and dance to the rhythm of
            life. Welcome to Music Festival!
          </p>
          <a
            href="/contactUs"
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
