import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
      linkText: string;
      paragraph: string;
};

const WhyChooseCard = ({ image, title, linkText, paragraph }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-lg font-semibold mt-5 mb-5 text-center text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
            {paragraph}
              </p>
              <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
                    {linkText} &#8594;
                    
              </p>
    </div>
  );
};

export default WhyChooseCard;
