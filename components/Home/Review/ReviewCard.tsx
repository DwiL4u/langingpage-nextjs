import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

const ReviewCard = ({ name, image }: Props) => {
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white rounded-lg shadow-lg z-1">
      <div>
        <FaQuoteLeft className="w-14 h-14 top-8 opacity-10 absolute left-4" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center ">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]">
            The analytics tools here are incredibly powerful and easy to use. I
            love how everything is laid out on the dashboard—makes it simple to
            track performance and optimize campaigns in real-time. A great
            resource for anyone serious about data-driven growth!
          </p>
          <div className="flex items-center mt-6">
            <FaStar className="text-yellow-500 w-6 h-6" />
            <FaStar className="text-yellow-500 w-6 h-6" />
            <FaStar className="text-yellow-500 w-6 h-6" />
            <FaStar className="text-yellow-500 w-6 h-6" />
            <FaStar className="text-yellow-500 w-6 h-6" />
          </div>
          <h1 className="mt-8 text-xl font-semibold">{name}</h1>
          <p className="mt-2 text-lg font-medium mb-6 text-gray-600">
            Full Stack Web Developer
          </p>
                    </div>
                    {/* image */}
                    <div className="col-span-2 mx-auto order-1 lg:order-2">
                          <Image src={image} alt="name" width={250} height={120} className="object-contain rounded-full" />
                            
                          
                          
                    </div>
      </div>
    </div>
  );
};

export default ReviewCard;
