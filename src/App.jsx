import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import AdditionalSection from "./components/AdditionalSection";
import PharmacyInfo from "./components/PharmacyInfo";
import ContactUs from "./components/ContactUs";
import MapsComponent from "./components/MapsComponent";
import ContactUsButton from "./components/ContactUsButton";
import DoctorsSection from "./components/DoctorsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ContactUsButton />
      <AdditionalSection />
      <PharmacyInfo />
      <ContactUs />
      
      {/* Added spacing before the heading */}
      <h2 className="mt-10 text-center text-2xl font-semibold">BABA VAIRAV MEDICAL Location</h2>
      
      <MapsComponent />
      <DoctorsSection />
      <Footer />
    </div>
  );
};

export default App;
