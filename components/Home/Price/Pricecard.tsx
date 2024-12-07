import React from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  price: number;
  plan: string;
};

const Pricecard = ({ price, plan }: Props) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg">
      <p className="mt-8 text-xl font-semibold text-blue-600 text-center">
        {plan} Plan
      </p>
      <div className="font-medium mt-4 text-3xl text-center">
        $ <span className="font-bold text-5xl">{price}</span>/mo
      </div>
      <p className="mt-2 text-gray-600 text-center">Per User</p>
      <div className="mt-10">
        <div className="text-center mb-4 flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
            <FaCheck className="text-green-500" />
          </div>
          <p className="text-xs text-gray-700 font-semibold">
            Unlimited Conections
          </p>
        </div>
        <div className="text-center mb-4 flex items-center space-x-3">
          <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
            <FaCheck className="text-green-500" />
          </div>
          <p className="text-sm text-gray-700 font-semibold">
            Basic Actions 
          </p>
        </div>
        <div className="text-center mb-4 flex items-center space-x-3">
          <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
            <FaCheck className="text-green-500" />
          </div>
          <p className="text-sm text-gray-700 font-semibold">Draft Payments</p>
        </div>
        <div className="text-center mb-4 flex items-center space-x-3">
          <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
            <FaCheck className="text-green-500" />
          </div>
          <p className="text-sm text-gray-700 font-semibold">
            Unlimited Supports
          </p>
        </div>
        <div className="text-center mb-4 flex items-center space-x-3">
          <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
            <FaCheck className="text-green-500" />
          </div>
          <p className="text-sm text-gray-700 font-semibold">
            Lifetime Updates
          </p>
                    </div>
                    <div className="mt-8">
                          <button className="block w-full p-4 text-base md:text-lg text-white font-bold bg-blue-900 hover:bg-blue-950 transition-all duration-300">Start 14 Days Free Trial</button>
                    </div>
      </div>
    </div>
  );
};

export default Pricecard;
