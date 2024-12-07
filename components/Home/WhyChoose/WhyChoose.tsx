import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mmt-6 text-2xl font-bold capitalize text-center md:text-3xl">
        Why you choose this Aplication
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/i1.png"
            title="Create Free Account"
            linkText="Start Earning"
            paragraph="Create a free account and start earning money by selling your products online. No hidden fees or charges."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/i2.png"
            title="Monitor User Analytics"
            linkText="Sign Up Your Store"
            paragraph="Gain insights into user behavior, track engagement, and optimize your platform for better performance."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/i3.png"
            title="Safe and Trusted"
            linkText="Get the App"
            paragraph="We take security seriously, and our platform is designed to ensure that your data is safe and secure at all times."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/i4.png"
            title="Fast Customer Support"
            linkText="Learn More"
            paragraph="Our dedicated support team is available 24/7 to assist you with any questions or issues you may have."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
