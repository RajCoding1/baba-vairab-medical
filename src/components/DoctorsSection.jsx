import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const doctors = [
  {
    name: "Dr. Arjun Srivatsa",
    title: "DIRECTOR & HOD - INSTITUTE OF NEUROSCIENCES",
    image: "/doctor1.jpg", // Replace with actual image paths
  },
  {
    name: "Dr. Shishir Chandrashekhar",
    title: "DIRECTOR AND HOD OF THE DEPARTMENT OF ANESTHESIOLOGY & OT MANAGEMENT",
    image: "/doctor2.jpg",
  },
  {
    name: "Dr. Maheswarappa B.M.",
    title: "DIRECTOR & HOD SAKRA INSTITUTE OF REHABILITATION SCIENCES",
    image: "/doctor3.jpg",
  },
  {
    name: "Dr. Lorance Peter",
    title: "DIRECTOR - GASTROENTEROLOGY & HEPATOLOGY",
    image: "/doctor4.jpg",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-[#FFF5F1] text-center">
      <h2 className="text-4xl font-bold text-[#23255E]">Our Doctors</h2>
      <p className="text-gray-600 mt-2">Find the right specialist from our list of doctors</p>

      {/* Swiper Carousel */}
      <div className="mt-8 max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="pb-6"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="text-center">
                <div className="relative p-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-56 h-56 rounded-2xl border-4 border-[#23255E] object-cover mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#23255E] mt-2">{doctor.name}</h3>
                <p className="text-sm text-[#764085] font-semibold max-w-xs mx-auto">
                  {doctor.title}
                </p>
                <button className="mt-3 bg-[#4B2D7F] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-[#392066] transition">
                  Book an Appointment
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DoctorsSection;

