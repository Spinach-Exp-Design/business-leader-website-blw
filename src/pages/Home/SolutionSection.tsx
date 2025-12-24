"use client";

import { noJorgonSectionData } from "@/data/homepageData";
import React, { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import TextAnimation from "@/components/TextAnimation";
import SpiralIcon from "./icons/SpiralIcon";
import SimpleParallax from "simple-parallax-js";

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { isMobile, isTablet } = useDeviceType();

  const activeCard = noJorgonSectionData.cards[activeIndex];

  return (
    <>
      <div className="flex pb-24 max-lg:pb-6 max-lg:flex-col overflow-x-hidden">
        {/* Left Section */}
        <div className="flex flex-col space-y-8 pl-40 pt-50 pr-18 pb-20 max-lg:px-8 max-lg:pt-20 max-lg:pb-14 max-lg:flex-row max-lg:gap-12 max-lg:space-y-0 max-md:px-4 max-md:flex-col max-md:gap-4">
          {/* Title */}
          <div>
            <TextAnimation
              text={noJorgonSectionData.firstTitle}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 tracking-[-0.135rem] whitespace-nowrap max-lg:tracking-[-0.06rem]"
            />
            <TextAnimation
              text={noJorgonSectionData.secondTitle}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 ml-28 tracking-[-0.135rem] max-lg:ml-0 whitespace-nowrap max-lg:tracking-[-0.06rem]"
            />
          </div>

          {/* Description */}
          <TextAnimation
            text={noJorgonSectionData.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 ml-28 max-lg:ml-0 w-97.5 max-lg:w-full"
          />

          {/* Interactive List */}
          <div className="ml-13.25 divide-y divide-neutral-light border-b border-neutral-light max-lg:hidden">
            {noJorgonSectionData.cards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center gap-5.5 text-left transition-all duration-300 py-4 group w-full cursor-pointer `}
              >
                {/* Spiral Icon */}
                <div
                  className={`shrink-0 transition-transform duration-300 h-8 w-8`}
                >
                  <SpiralIcon
                    isActive={activeIndex === index || hoveredIndex === index}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "text-desktop-subheading-s1 color-[#0A192A]   "
                      : "text-desktop-subheading-s2 color-[#717782] hover:text-desktop-subheading-s1 group-hover:color-[#0A192A] opacity-40 hover:opacity-100"
                  }`}
                >
                  {card.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="relative max-lg:hidden">
          <div className="w-164.5 h-191.5 shrink-0 overflow-hidden">
            <SimpleParallax scale={1.1}>
              <img
                key={activeIndex}
                src={
                  isMobile
                    ? activeCard?.mobileImage
                    : isTablet
                    ? activeCard?.tabletImage
                    : activeCard?.image
                }
                alt={activeCard.title}
                className="object-cover h-full w-full transition-opacity duration-500 ease-in-out animate-fadeIn"
              />
            </SimpleParallax>
          </div>
          {/* Description Box */}
          <div className="bg-primary-yellow py-12 px-12 absolute -bottom-6 left-10 right-10 max-[1200px]:right-16 min-h-42 max-w-full">
            <p
              key={`desc-${activeIndex}`}
              className="text-desktop-paragraph-p3 font-sans animate-fadeIn wrap-break-word"
            >
              {activeCard.description}
            </p>
          </div>
        </div>
        {/* Mobile/Tablet cards */}
        <div className="max-lg:px-8 max-md:px-4 max-lg:flex max-lg:flex-col max-lg:gap-10 hidden">
          {noJorgonSectionData?.cards?.map((card, index) => (
            <div className="max-lg:pb-18" key={index}>
              <div className="flex items-start gap-3">
                {/* Spiral Icon */}
                <div className={"h-7 w-7"}>
                  <SpiralIcon isActive={true} />
                </div>
                {/* Title */}
                <h3 className={"text-mobile-subheading-s1 color-[##0A192A]"}>
                  {card?.title}
                </h3>
              </div>
              <div className="relative">
                <div className="w-full h-88 max-md:h-106 overflow-hidden max-lg:mt-6 max-md:mt-4">
                  <SimpleParallax scale={1.1}>
                    <img
                      src={
                        isMobile
                          ? card?.mobileImage
                          : isTablet
                          ? card?.tabletImage
                          : card?.image
                      }
                      alt={card?.title}
                      className="object-cover h-full w-full"
                    />
                  </SimpleParallax>
                </div>
                <div className="bg-primary-yellow p-6 absolute -bottom-14 left-6 w-136 max-md:w-[95%] max-md:left-1/2 max-md:-translate-x-1/2 z-10">
                  <p className="text-mobile-paragraph-p2">
                    {card?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SolutionSection;
