import React from 'react';
import { Search, ShoppingCart, User, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src="/logo.svg" alt="BABA VAIRAB MEDICAL" className="h-10" />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/3">
        <Search className="text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none px-2 w-full text-sm"
        />
      </div>

      {/* Right Section: Icons & Contact Button */}
      <div className="flex items-center gap-6">
        <User className="text-gray-700 cursor-pointer" size={20} />
        <Heart className="text-gray-700 cursor-pointer" size={20} />
        <div className="relative">
          <ShoppingCart className="text-gray-700 cursor-pointer" size={20} />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">0</span>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;