"use client";

import { section1Data } from "../../data/aboutpageData";
import clsx from "clsx";
import useDeviceType from "@/hooks/useDeviceType";

const Section1 = () => {
  const { isTablet, isMobile } = useDeviceType();
  return (
    <div className={clsx("lg:mb-[14.938rem] max-lg:mb-34 max-md:mb-34")}>
      <h1
        className={clsx(
          "font-playfair-display italic text-primary-dark",
          "lg:text-desktop-quote-1 lg:tracking-[-0.12rem] lg:pl-40 lg:pr-80 lg:pt-26 lg:mb-26",
          "max-lg:text-mobile-quote-1 max-lg:tracking-[-0.04rem] max-lg:px-8 max-lg:pt-16 max-lg:mb-6",
          "max-md:text-mobile-quote-1 max-md:tracking-[-0.04rem] max-md:px-4 max-md:pt-16 max-md:mb-6"
        )}
      >
        {section1Data?.title || ""}
      </h1>
      <div className="lg:mr-[16.324rem] lg:ml-auto lg:w-[19.176rem] lg:h-[5.207rem] max-lg:w-[11.029rem] max-lg:h-12 max-lg:ml-8 max-md:w-[12.015rem] max-md:ml-4">
        <img
          src={
            isTablet
              ? "/AboutUS/swivel_tablet.png"
              : isMobile
              ? "/AboutUS/swivel_mobile.png"
              : "/AboutUS/swivel_desktop.png"
          }
          alt={
            isTablet
              ? "Swivel Tablet"
              : isMobile
              ? "Swivel Mobile"
              : "Swivel Desktop"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Section1;
