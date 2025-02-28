import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const additionalItems = [
  {
    name: "Hand Sanitizer",
    image: "/path-to-image/hand-sanitizer.jpg",
    price: "$15",
    discountPrice: "$10",
    tag: "SALE",
    rating: 4,
  },
  {
    name: "Face Mask (50 pcs)",
    image: "/path-to-image/face-mask.jpg",
    price: "$25",
    discountPrice: "$20",
    tag: "POPULAR",
    rating: 5,
  },
  {
    name: "Herbal Tea",
    image: "/path-to-image/herbal-tea.jpg",
    price: "$18",
    discountPrice: "$14",
    tag: "SALE",
    rating: 4,
  },
  {
    name: "Digital Thermometer",
    image: "/path-to-image/digital-thermometer.jpg",
    price: "$40",
    discountPrice: "$30",
    tag: "POPULAR",
    rating: 5,
  },
  {
    name: "Vitamin C Tablets",
    image: "/path-to-image/vitamin-c.jpg",
    price: "$30",
    discountPrice: "$22",
    tag: "SALE",
    rating: 4,
  },
  {
    name: "Blood Pressure Monitor",
    image: "/path-to-image/blood-pressure.jpg",
    price: "$80",
    discountPrice: "$65",
    tag: "POPULAR",
    rating: 5,
  },
  {
    name: "Protein Powder",
    image: "/path-to-image/protein-powder.jpg",
    price: "$50",
    discountPrice: "$40",
    tag: "SALE",
    rating: 4,
  },
  {
    name: "Pain Relief Gel",
    image: "/path-to-image/pain-relief-gel.jpg",
    price: "$20",
    discountPrice: "$15",
    tag: "POPULAR",
    rating: 5,
  },
];

const AdditionalSection = () => {
  return (
    <section className="px-10 py-10 relative"> {/* ✅ Ensure relative positioning */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">More Essentials</h2>
      </div>

      <div className="relative"> {/* ✅ Ensures arrows stay inside this section */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next-additional",
            prevEl: ".swiper-button-prev-additional",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {additionalItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden shadow-lg border p-4 bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.tag}
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 line-through">{item.price}</p>
                  <p className="text-lg font-bold text-blue-600">{item.discountPrice}</p>
                  <button className="mt-2 text-sm text-blue-500 underline hover:text-blue-700">
                    Add to cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Fixes the navigation arrows overlapping with other sections */}
        <button className="swiper-button-prev-additional absolute -left-6 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">
          ❮
        </button>
        <button className="swiper-button-next-additional absolute -right-6 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">
          ❯
        </button>
      </div>
    </section>
  );
};

export default AdditionalSection;
