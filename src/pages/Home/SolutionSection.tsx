"use client";

import { decodeSectionData, noJorgonSectionData } from "@/data/homepageData";
import React, { useState } from "react";
import Image from "next/image";
import useDeviceType from "@/hooks/useDeviceType";
import TextAnimation from "@/components/TextAnimation";

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile } = useDeviceType();

  const activeCard = noJorgonSectionData.cards[activeIndex];

  return (
    <>
      <div className="flex">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-8 pl-40 pt-50 pr-18 pb-20">
          {/* Title */}
          <div>
            <TextAnimation
              text={noJorgonSectionData.firstTitle}
              tag="h2"
              className="text-desktop-heading-h1 font-playfair-display italic max-lg:text-mobile-heading-h1"
            />
            <TextAnimation
              text={noJorgonSectionData.secondTitle}
              tag="h2"
              className="text-desktop-heading-h1 font-playfair-display italic max-lg:text-mobile-heading-h1 ml-28"
            />
          </div>

          {/* Description */}
          <TextAnimation
            text={noJorgonSectionData.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 ml-28"
          />

          {/* Interactive List */}
          <div className="space-y-6 ml-12">
            {noJorgonSectionData.cards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 text-left transition-all duration-300 group w-full ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              >
                {/* Spiral Icon */}
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "scale-100" : "scale-75"
                  }`}
                >
                  <Image
                    src="/assets/icons/spiral.svg"
                    alt=""
                    width={isMobile ? 40 : 50}
                    height={isMobile ? 40 : 50}
                    className={`transition-opacity duration-300 ${
                      activeIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl md:text-2xl font-normal transition-all duration-300 ${
                    activeIndex === index ? "font-medium" : ""
                  }`}
                >
                  {card.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Image Container */}
          <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-800 rounded-lg">
            <Image
              key={activeIndex}
              src={activeCard.image}
              alt={activeCard.title}
              fill
              className="object-cover transition-opacity duration-500 ease-in-out animate-fadeIn"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>

          {/* Description Box */}
          <div className="bg-[#FFBE0B] text-gray-900 p-6 md:p-8 rounded-lg">
            <p
              key={`desc-${activeIndex}`}
              className="text-base md:text-lg leading-relaxed animate-fadeIn"
            >
              {activeCard.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionSection;
