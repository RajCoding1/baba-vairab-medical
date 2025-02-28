import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/slider1.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h1 className="text-5xl font-bold">UPTO 20% Discount on purchase over 1000</h1>
              <p className="mt-2 text-lg">Grab your Discount</p>
              <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg text-white">Read More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/slider2.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h1 className="text-5xl font-bold">Quality Medicines</h1>
              <p className="mt-2 text-lg">Delivered to your doorstep</p>
              <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg text-white">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
