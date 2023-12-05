import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="-z-10 bg-[url('https://i.ibb.co/DzTTwMj/banner.png')] bg-no-repeat bg-center bg-cover -mt-24">
      <div className="pt-24 container mx-auto">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2">
          <h2
            data-aos="fade-down"
            className="text-[30px] md:text-6xl font-bold text-white lg:w-[75%] text-center lg:text-left mb-4"
          >
            The Landing Music <br /> Conference of The Year
          </h2>

          <div
            data-aos="fade-up"
            className="max-w-[350px] md:right-0 mx-auto md:ml-auto"
          >
            <div className="bg-white p-4 rounded-full flex">
              <div className="flex">
                <img
                  src="https://media.istockphoto.com/id/1325244678/photo/african-american-handsome-young-man-singing-into-the-microphone-in-the-studio-on-a-neon.webp?b=1&s=170667a&w=0&k=20&c=G5vES1PnbySL0zewdmTM34-O1XOLF3NN_mSdky_Q06g="
                  alt=""
                  className="w-14 h-14 rounded-full border-4"
                />
                <img
                  src="https://media.istockphoto.com/id/1364753955/photo/beautiful-afro-woman.jpg?s=612x612&w=0&k=20&c=5vtb6sZx0yuKHJDfJhSu01kx1c6mnKKrOQMEBwDArx0="
                  alt=""
                  className="w-14 h-14 rounded-full border-4 -ml-4"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0UCfJaFL67BFVag88LAZWus8YTQvPKPgnw&usqp=CAU"
                  alt=""
                  className="w-14 h-14 rounded-full border-4 -ml-4"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAeXAeVk12fIS0nt02VL3qHYiW7IvjHJWZQ&usqp=CAU"
                  alt=""
                  className="w-14 h-14 rounded-full border-4 -ml-4"
                />
              </div>
              <div className="ml-6">
                <h3 className="font-bold text-xl">36k+</h3>
                <p className="font-semibold">Join Us Event</p>
              </div>
            </div>
            <p className="text-white mt-4 font-semibold text-center lg:text-left">
              Join us for Eventor Collaborative Virtual Session on November 21
              2023
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-20">
        <Swiper
          data-aos="zoom-in"
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/5B0qWD3/s4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/8zG8r0H/s3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/N2zVG8L/s6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/b3FkVtD/s7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/RTf1Npk/s2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[500px] w-full rounded-xl"
              src="https://i.ibb.co/Dtyqy2J/s1.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
