import React from "react";
const ContactUsButton = () => {
    return (
      <a
        href="tel:+911234567890" // Replace with your shop's phone number
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white px-4 py-2 rounded-r-lg shadow-lg rotate-[-90deg] origin-bottom-left hover:bg-purple-800 transition-all duration-300"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Contact Us
      </a>
    );
  };
  
  export default ContactUsButton;
  