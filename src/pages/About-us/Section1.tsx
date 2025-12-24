"use client";

import { section1Data } from "../../data/aboutpageData";
import clsx from "clsx";
import useDeviceType from "@/hooks/useDeviceType";
import TextAnimation from "@/components/TextAnimation";
import SwirlIcon from "./Icons/SwirlIcon";

const Section1 = () => {
  const { isTablet, isMobile } = useDeviceType();
  return (
    <div className={clsx("lg:mb-[3.11rem] max-lg:mb-34 max-md:mb-34")}>
      <TextAnimation
        text={section1Data?.title || ""}
        tag="h1"
        className={clsx(
          "font-playfair-display italic text-primary-dark",
          "lg:text-desktop-quote-1 lg:tracking-[-0.12rem] lg:pl-40 lg:pr-80 lg:pt-26 lg:mb-26",
          "max-lg:text-mobile-quote-1 max-lg:tracking-[-0.04rem] max-lg:px-8 max-lg:pt-16 max-lg:mb-6",
          "max-md:text-mobile-quote-1 max-md:tracking-[-0.04rem] max-md:px-4 max-md:pt-16 max-md:mb-6"
        )}
      />
      <span className="block h-21 max-lg:h-12 lg:mr-auto lg:ml-[54.5rem] lg:w-[19.17556rem] lg:h-[5.2065rem] max-lg:w-[11.029rem] max-lg:ml-8 max-md:w-[12.015rem] max-md:ml-4">
        <SwirlIcon
          name={
            isTablet
              ? "swirl-tablet"
              : isMobile
              ? "swirl-mobile"
              : "swirl-desktop"
          }
        />
      </span>
    </div>
  );
};

export default Section1;
