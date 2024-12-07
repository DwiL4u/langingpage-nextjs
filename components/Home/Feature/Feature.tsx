import React from "react";
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6";

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      text: "50+ Unique Design Block",
    },
    {
      icon: <FaLaptop className="text-teal-500" />,
      text: "Cross Platform Support",
    },
    {
      icon: <FaMobileAlt className="text-blue-500" />,
      text: "Mobile First Design",
    },
    {
      icon: <FaDesktop className="text-green-500" />,
      text: "Responsive Design",
    },
    {
      icon: <FaCog className="text-yellow-500" />,
      text: "Customizable Options",
    },
    {
      icon: <FaHeadset className="text-purple-500" />,
      text: "24/7 Support",
    },
    {
      icon: <FaInfinity className="text-pink-500" />,
      text: "Unlimited Possibilities",
    },
    {
      icon: <FaBook className="text-blue-500" />,
      text: "Well Documented",
    },
    {
      icon: <FaShieldAlt className="text-green-500" />,
      text: "Secure and Reliable",
    },
  ];
  return (
    <div className="pt-20 pb-20 bg-pink-50">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Its everything you will ever need
        </h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              data-aos="flip-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 100}`}
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                <span>{feature.icon}</span>
              </div>
              <span className="text-gray-800 font-semibold">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
