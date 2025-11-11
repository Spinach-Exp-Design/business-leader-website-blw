"use client";

import { decodeSectionData, noJorgonSectionData } from "@/data/homepageData";
import React, { useState } from "react";
import Image from "next/image";
import useDeviceType from "@/hooks/useDeviceType";
import TextAnimation from "@/components/TextAnimation";
import SpiralIcon from "./icons/SpiralIcon";

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isMobile } = useDeviceType();

  const activeCard = noJorgonSectionData.cards[activeIndex];

  return (
    <>
      <div className="flex pb-24">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-8 pl-40 pt-50 pr-18 pb-20">
          {/* Title */}
          <div>
            <TextAnimation
              text={noJorgonSectionData.firstTitle}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h1 tracking-[-0.135rem]"
            />
            <TextAnimation
              text={noJorgonSectionData.secondTitle}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h1 ml-28 tracking-[-0.135rem]"
            />
          </div>

          {/* Description */}
          <TextAnimation
            text={noJorgonSectionData.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 ml-28"
          />

          {/* Interactive List */}
          <div className="ml-12 divide-y divide-neutral-light">
            {noJorgonSectionData.cards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 text-left transition-all duration-300 py-4 group w-full ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              >
                {/* Spiral Icon */}
                <div
                  className={`shrink-0 transition-transform duration-300 h-8 w-8`}
                >
                  <SpiralIcon isActive={activeIndex === index} />
                </div>

                {/* Title */}
                <h3
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "text-desktop-subheading-s1 color-[#0A192A]"
                      : "text-desktop-subheading-s2 color-[#717782]"
                  }`}
                >
                  {card.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-164.5 h-205 shrink-0">
          <img
            key={activeIndex}
            src={activeCard.image}
            alt={activeCard.title}
            className="object-cover h-full w-full transition-opacity duration-500 ease-in-out animate-fadeIn"
          />
          {/* Description Box */}
          <div className="bg-primary-yellow p-12 absolute -bottom-6 left-10 w-154.5">
            <p
              key={`desc-${activeIndex}`}
              className="text-desktop-paragraph-p3 font-sans animate-fadeIn"
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
