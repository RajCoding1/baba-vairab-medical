import React from 'react';
const products = [
  {
    name: "Gentle Brushes",
    image: "/path-to-image/gentle-brushes.jpg",
  },
  {
    name: "Body Lotion",
    image: "/path-to-image/body-lotion.jpg",
  },
  {
    name: "Lip Balm",
    image: "/path-to-image/lip-balm.jpg",
  },
  {
    name: "Gym Gummies",
    image: "/path-to-image/gym-gummies.jpg",
  },
  {
    name: "Face Serum",
    image: "/path-to-image/face-serum.jpg",
  },
];

const ProductSection = () => {
  return (
    <section className="px-10 py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <a href="#" className="text-sm underline hover:text-gray-300">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
