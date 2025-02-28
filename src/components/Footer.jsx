import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D50] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold">BABA VAIRAV MEDICAL</h2>
            <p className="text-gray-300 mt-3">
              Your trusted medical shop, providing quality medicines at the best price.
            </p>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="font-bold mb-3">Information</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-gray-100">About Us</a></li>
              <li><a href="#" className="hover:text-gray-100">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-100">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Browse Section */}
          <div>
            <h3 className="font-bold mb-3">Browse</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-gray-100">Pain Relief</a></li>
              <li><a href="#" className="hover:text-gray-100">Antibiotics</a></li>
              <li><a href="#" className="hover:text-gray-100">Vitamins</a></li>
              <li><a href="#" className="hover:text-gray-100">Skincare</a></li>
            </ul>
          </div>

          {/* Working Hours & Social Media */}
          <div>
            <h3 className="font-bold mb-3">Working Hours</h3>
            <p className="text-gray-300">Mon - Fri: 09:00 - 22:30</p>
            <p className="text-gray-300">Sat: 09:00 - 22:00</p>
            <p className="text-gray-300">Sun: Closed</p>

            <h3 className="font-bold mt-4 mb-3">Follow us</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <div className="flex items-center space-x-4">
            <p className="flex items-center">
              <MdEmail className="mr-2" /> babavairav@example.com
            </p>
            <p className="flex items-center">
              <MdPhone className="mr-2" /> +91 9830443338
            </p>
            <p className="flex items-center">
              <MdLocationOn className="mr-2" /> 7, Debinibas Rd, Amarpalli, Dum Dum, Kolkata, West Bengal 700074
            </p>
          </div>
          <p>© BABA VAIRAV MEDICAL, 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
