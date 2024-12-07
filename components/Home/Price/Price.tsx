import React from "react";
import PriceCard from "./Pricecard";


const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-[#edfbff]">
      <h2 className="text-2xl md:tetx-3xl font-bold text-center mt-6">
        Meet Exciting Price Plan
      </h2>
      <div className="w-[90%] md-w[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard price={15} plan="Starter" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <PriceCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
};

export default Price;
