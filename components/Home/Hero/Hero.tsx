import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* text content */}
          <div>
            <div className="w-fit py-1.5 px-2 flex items-center space-x-3 shadow-md rounded-full">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white cursor-pointer">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our term & condition policy
              </p>
            </div>
            {/* heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl  mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]">
              The premiere platform for all your business needs
            </h1>
            <p className="text-gray-700">
              Offering a wide range of tools and services designed to support
              and elevate your business operations, ensuring success and growth
              in every aspect of your company.
            </p>
            {/* play store and app store image */}
            <div className="flex items-center space-x-4 mb-8 mt-8">
              <Image
                src="/images/as.png"
                alt="playstore"
                width={150}
                height={150}
                className="object-contain cursor-pointer"
              />
              <Image
                src="/images/gp.png"
                alt="googleplay"
                width={150}
                height={150}
                className="object-contain cursor-pointer"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="hidden lg:block">
            <Image src="/images/hero.png" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
      {/* image content */}
    </div>
  );
};

export default Hero;
