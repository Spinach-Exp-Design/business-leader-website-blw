"use client";
import { section2Data } from "@/data/aboutpageData";
import useDeviceType from "@/hooks/useDeviceType";
import QuoteIcon from "./Icons/QuoteIcon";
import TextAnimation from "@/components/TextAnimation";
import React from "react";

const Section2TabMobile = () => {
  const { isTablet, isMobile } = useDeviceType();
  const backgroundImage = isMobile
    ? "url(/aboutUS/about-pattern-mobile.png)"
    : isTablet
    ? "url(/aboutUS/about-pattern-tablet.png)"
    : "url(/aboutUS/about-pattern-desktop.png)";

  const profileImage = isTablet
    ? "/aboutUS/section2-profile-tablet.png"
    : isMobile
    ? "/aboutUS/section2-profile-mobile.png"
    : "/aboutUS/section2-profile-desktop.png";

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:h-[102.938rem] max-lg:h-full max-md:h-full w-full lg:ml-auto lg:pt-[6.577rem]"
    >
      <div className="flex flex-col">
        <div className=" max-lg:ml-[1.188rem] max-md:ml-2">
          <div className="max-lg:-mt-20 relative z-3 max-lg:pl-[0.813rem] max-lg:pr-8 max-md:pl-2 max-md:pr-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white max-lg:pl-[3.063rem] max-lg:pr-8 max-lg:pt-18 max-lg:pb-18 max-md:px-6 max-md:pt-18 max-md:pb-10 relative z-1 max-lg:-mt-8">
            <span className="shrink-0 block w-[4.27rem] h-[4.27rem] mb-4">
              <QuoteIcon />
            </span>
            <TextAnimation
              text={section2Data?.quote || ""}
              tag="h3"
              className="text-desktop-quote-3 font-playfair-display italic text-primary-dark tracking-[-0.04rem]"
            />
          </div>
          <div className="bg-primary-yellow h-74 max-lg:ml-4 max-lg:-mt-69"></div>
        </div>
        <div className="flex flex-col gap-6 max-lg:px-8 max-lg:pt-16 max-lg:pb-14.5 max-md:px-6 max-md:pb-10.5 ">
          {section2Data?.scrollSection?.map((item, index) => (
            <React.Fragment key={index}>
              <p className="text-white font-sans text-mobile-paragraph-p1 tracking-[-0.0225rem]">
                {item}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2TabMobile;
