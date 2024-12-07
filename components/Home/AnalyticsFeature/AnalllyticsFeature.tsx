import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AnalllyticsFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* define grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
         
        >
          <Image
            src="/images/a.jpg"
            alt="image analytics"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* text content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-orange-500">
            Audience Tracking And Insights
          </h1>
          <h1 className="mt-4 text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold">
            Powerfull Analytics tools that put you in control are just a click
            away
          </h1>
          <p className="mt-4 text-gray-600 font-medium leading-[2rem] text-sm">
            Whether you are optimizing marketing campaigns, monitoring user
            behavior, or improving operational efficiency, our intuitive
            dashboard gives you everything you need to stay ahead of the
            competition. Start leveraging the full potential of your data today
            and unlock new opportunities for success.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800 ">
            <li className="flex font-semibold items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Chat prompt module supported
            </li>
            <li className="flex font-semibold items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Enjoy unlimited features by premium plan
            </li>
            <li className="flex font-semibold items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              Manage your business with our app
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-blue-600 transition-all duration-200 hover:text-white">
            Explore more &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalllyticsFeature;
