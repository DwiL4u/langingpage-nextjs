'use'

import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaEnvelope,
FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="b g-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* logo & description */}
          <div>
            {/* logo */}
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
              <span className="text-3xl md:text-3xl text-pink-700">A</span>ppify
            </h1>
            {/* descriptions */}
            <p className="font-medium leading-[2rem] mt-4 text-sm text-gray-600 w-[80%]">
              Our solutions are tailored to support your success, ensuring your
              company thrives in a marketplace.
            </p>
          </div>
          {/* links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500 hover:cursor-pointer hover:underline">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </div>
          {/* information link */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500 hover:cursor-pointer hover:underline">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 font-semibold space-y-4 text-sm text-gray-500">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-4" />
                Tokyo, Japan
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-4" />
                03-123-4567
              </li>
              <li className="flex items-center">
                <FaClock className="mr-4" />7 Days - 08am - 10pm
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-4" />
                info@appify.com
              </li>
            </ul>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            {" "}
            Copyright &copy; {new Date().getFullYear()} Dwi Lenggani. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-900">
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-amber-900 ">
              <FaInstagram className="w-5 h-5 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
