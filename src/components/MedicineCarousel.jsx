import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const medicines = [
  { name: "Paracetamol", image: "/assets/medicine1.jpg", price: "₹50" },
  { name: "Ibuprofen", image: "/assets/medicine2.jpg", price: "₹80" },
  { name: "Antibiotic", image: "/assets/medicine3.jpg", price: "₹120" },
];

const MedicineCarousel = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Medicines</h2>
      <Swiper navigation={true} modules={[Navigation]} className="w-full max-w-2xl mx-auto">
        {medicines.map((medicine, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
            <img src={medicine.image} alt={medicine.name} className="w-40 h-40 object-cover rounded-lg" />
            <p className="text-lg font-semibold mt-2">{medicine.name}</p>
            <p className="text-sm text-gray-500">{medicine.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MedicineCarousel;
