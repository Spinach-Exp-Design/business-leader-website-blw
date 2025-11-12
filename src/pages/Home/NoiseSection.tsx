import React, { useState } from "react";
import TextAnimation from "@/components/TextAnimation";
import { noiseSectionData } from "@/data/homepageData";

const NoiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="px-12 pb-36">
      <div className="pt-26 px-16 shadow-2xl">
        {/* Header Section */}
        <div className="flex gap-[4.8rem] pl-12">
          <div>
            <TextAnimation
              text={noiseSectionData.titleFirst}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark"
            />
            <TextAnimation
              text={noiseSectionData.titleSecond}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark ml-28 max-lg:ml-0"
            />
          </div>
          <TextAnimation
            text={noiseSectionData.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans max-lg:text-mobile-paragraph-p1 text-primary-dark w-68 shrink-0"
          />
        </div>

        {/* Main Content: Cards and Image */}
        <div className="mt-12">
          {/* Left Side: Accordion Cards */}
          <div className="bg-primary-yellow divide-y divide-[#0D1F1] pt-10 pl-8 pb-20">
            {noiseSectionData.cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`py-8 ${index === 0 && "pt-0"} ${
                  index === noiseSectionData.cards.length - 1 && "pb-0"
                }`}
              >
                <h3 className="text-desktop-subheading-s3 max-lg:text-mobile-subheading-s1 font-sans font-medium text-primary-dark">
                  {card.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-desktop-paragraph-p4 max-lg:text-mobile-paragraph-p2 font-sans text-primary-dark pt-4">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative h-150 max-lg:h-108 max-md:h-80 overflow-hidden">
            {noiseSectionData.cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseSection;
