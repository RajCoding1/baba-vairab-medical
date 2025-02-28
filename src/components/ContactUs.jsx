import React from "react";

const ContactUs = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 px-10 py-14">
      {/* Left Section - Contact Info */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-900">
          Contact us for any enquiries or questions you may have
        </h2>
        <p className="text-gray-600 mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
        </p>

        <div className="mt-6 flex gap-10">
          {/* Contact Info - New York */}
          <div>
            <h3 className="font-bold text-lg">New York</h3>
            <p className="flex items-center gap-2 mt-2">
              📧 <span>vitasana.ny@example.com</span>
            </p>
            <p className="flex items-center gap-2 mt-1">
              📞 <span>009 66 154 78 882</span>
            </p>
            <p className="flex items-center gap-2 mt-1">
              📍 <span>22nd St East Village</span>
            </p>
          </div>

          {/* Contact Info - Chicago */}
          <div>
            <h3 className="font-bold text-lg">Chicago</h3>
            <p className="flex items-center gap-2 mt-2">
              📧 <span>vitasana.ny@example.com</span>
            </p>
            <p className="flex items-center gap-2 mt-1">
              📞 <span>009 66 154 78 882</span>
            </p>
            <p className="flex items-center gap-2 mt-1">
              📍 <span>22nd St East Village</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md">
        <form>
          <input
            type="text"
            placeholder="Name*"
            className="w-full px-4 py-3 mb-4 rounded-md bg-gray-200 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="w-full px-4 py-3 mb-4 rounded-md bg-gray-200 focus:outline-none"
          />
          <textarea
            placeholder="Message..."
            rows="4"
            className="w-full px-4 py-3 mb-4 rounded-md bg-gray-200 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
