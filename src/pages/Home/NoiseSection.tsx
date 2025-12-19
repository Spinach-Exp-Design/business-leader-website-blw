import React, { useState } from "react";
import TextAnimation from "@/components/TextAnimation";
import { noiseSectionData } from "@/data/homepageData";
import useDeviceType from "@/hooks/useDeviceType";
import SimpleParallax from "simple-parallax-js";
import clsx from "clsx";

const NoiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile, isTablet } = useDeviceType();

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="px-12 pb-36 max-lg:pl-8 max-lg:pr-0 max-lg:pt-20 max-lg:pb-10 max-md:pl-4 max-md:pb-30 bg-[#F6F5F2]">
      {isMobile || isTablet ? (
        <>
          <div className="flex gap-4 pr-8 max-md:pr-4 max-md:flex-col">
            <div>
              <TextAnimation
                text={noiseSectionData.titleFirst}
                tag="h2"
                className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark whitespace-nowrap"
              />
              <TextAnimation
                text={noiseSectionData.titleSecond}
                tag="h2"
                className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark whitespace-nowrap"
              />
            </div>
            <TextAnimation
              text={noiseSectionData.description}
              tag="p"
              className="max-lg:text-mobile-paragraph-p1 text-primary-dark self-end"
            />
          </div>
          <div className="bg-primary-yellow mt-14 pl-8 py-8 flex flex-col gap-12 max-md:pb-28">
            {noiseSectionData.cards.map((card, index) => (
              <div key={index}>
                <h3 className="max-lg:text-mobile-subheading-s1 font-sans text-primary-dark">
                  {card.title}
                </h3>
                <p className="text-desktop-paragraph-p7 max-lg:text-mobile-paragraph-p2 font-sans text-primary-dark pt-4 max-lg:pr-8 max-md:pr-4 max-lg:pt-2">
                  {card.description}
                </p>
                <div
                  className={clsx(
                    "h-75 w-full mt-6 max-md:h-44 overflow-hidden",
                    index === noiseSectionData.cards.length - 1 &&
                      "max-md:absolute"
                  )}
                  style={{
                    width:
                      isMobile && index === noiseSectionData.cards.length - 1
                        ? "calc(100% - 3rem)"
                        : "100%",
                  }}
                >
                  <SimpleParallax scale={1.1}>
                    <img
                      src={isMobile ? card.mobileImage : card.tabletImage}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </SimpleParallax>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="pt-26 px-16 relative z-1 bg-[#FFFFFF] -mt-20">
            {/* Header Section */}
            <div className="flex gap-[4.8rem] pl-12">
              <div>
                <TextAnimation
                  text={noiseSectionData?.titleFirst || ""}
                  tag="h2"
                  className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark"
                />
                <TextAnimation
                  text={noiseSectionData?.titleSecond || ""}
                  tag="h2"
                  className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-primary-dark ml-28 max-lg:ml-0"
                />
              </div>
              <TextAnimation
                text={noiseSectionData?.description || ""}
                tag="p"
                className="text-desktop-paragraph-p2 font-sans max-lg:text-mobile-paragraph-p1 text-primary-dark w-68 shrink-0 self-end"
              />
            </div>

            {/* Main Content: Cards and Image */}
            <div className="mt-14">
              {/* Left Side: Accordion Cards */}
              <div className="bg-primary-yellow pt-10 pl-8 pb-20 relative -bottom-16 flex gap-8 h-120">
                <div className="overflow-hidden">
                  {noiseSectionData?.cards?.map((card, index) => (
                    <div
                      key={index}
                      onClick={() => handleCardClick(index)}
                      className={`py-8 w-78 cursor-pointer ${
                        index === 0 && "pt-0"
                      } ${
                        index === noiseSectionData?.cards?.length - 1 && "pb-0"
                      } ${
                        index !== noiseSectionData?.cards?.length - 1 &&
                        "border-b border-[#0D1F1]"
                      }`}
                    >
                      <h3 className="text-desktop-subheading-s3 max-lg:text-mobile-subheading-s1 font-sans text-primary-dark">
                        {card?.title || ""}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          activeIndex === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-desktop-paragraph-p7 max-lg:text-mobile-paragraph-p2 font-sans text-primary-dark pt-4">
                          {card?.description || ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative overflow-hidden w-210 h-121.25 -mt-30">
                  {noiseSectionData?.cards?.map((card, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out animate-fadeIn ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <SimpleParallax scale={1.1}>
                        <img
                          src={card?.image}
                          alt={card?.title}
                          className="w-full h-full object-cover"
                        />
                      </SimpleParallax>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NoiseSection;
