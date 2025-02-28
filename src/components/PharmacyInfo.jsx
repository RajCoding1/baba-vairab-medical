import React from 'react';
const PharmacyInfo = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 px-10 py-10">
      {/* Left Section: Image with Overlays */}
      <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/path-to-image/pharmacy.jpg"
          alt="Pharmacy"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Boxes */}
        <div className="absolute top-10 left-10 bg-black bg-opacity-40 text-white p-5 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-orange-500 p-2 rounded-full">
              📄 {/* Replace with an icon if needed */}
            </div>
            <h3 className="font-semibold text-lg">Refill Prescription</h3>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-white font-semibold underline mt-2 inline-block">
            Refill here
          </a>
        </div>

        <div className="absolute top-10 right-10 bg-black bg-opacity-40 text-white p-5 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-orange-500 p-2 rounded-full">
              🏥 {/* Replace with an icon if needed */}
            </div>
            <h3 className="font-semibold text-lg">Transfer Prescription</h3>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-white font-semibold underline mt-2 inline-block">
            View options
          </a>
        </div>
      </div>

      {/* Right Section: Text Box */}
      <div className="flex-1 bg-orange-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome to MyPharm pharmacy <br /> we offer the best practices.
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-orange-600">
          Find more
        </button>
      </div>
    </section>
  );
};

export default PharmacyInfo;
