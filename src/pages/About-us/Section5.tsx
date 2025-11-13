"use client";

import TextAnimation from "@/components/TextAnimation";
import { section5Data } from "@/data/aboutpageData";
import useDeviceType from "@/hooks/useDeviceType";
import SimpleParallax from "simple-parallax-js";

const Section5 = () => {
  const { isTablet, isMobile } = useDeviceType();
  const image = isTablet
    ? "/AboutUS/section5-image-tablet.png"
    : isMobile
    ? "/AboutUS/section5-image-mobile.png"
    : "/AboutUS/section5-image-desktop.png";

  const sliceWords = isMobile
    ? section5Data?.words?.slice(0, 1)
    : isTablet
    ? section5Data?.words
    : section5Data?.words?.slice(0, 2);

  const remainingWords =
    isTablet || isMobile
      ? section5Data?.words?.slice(1)
      : section5Data?.words?.slice(2);

  return (
    <div className="flex flex-col lg:flex-row lg:py-40 lg:pl-40 lg:pr-16 max-lg:px-8 max-lg:pt-20 max-lg:pb-12 max-md:px-4 max-md:pt-20 max-md:pb-16 lg:gap-20 max-lg:gap-14">
      <div className="flex flex-col lg:gap-8 max-lg:gap-4 max-md:gap-4">
        <div>
          <div className="flex gap-2">
            {sliceWords?.map((word, index) => (
              <TextAnimation
                key={index}
                text={word || ""}
                tag="h3"
                className="text-desktop-heading-h2 max-lg:text-mobile-heading-h2 font-playfair-display italic text-primary-dark"
              />
            ))}
          </div>
          <div className="flex gap-2 lg:pl-28 max-lg:hidden max-md:flex">
            {remainingWords?.map((word, index) => (
              <TextAnimation
                key={index}
                text={word || ""}
                tag="h3"
                className="text-desktop-heading-h2 max-lg:text-mobile-heading-h2 font-playfair-display italic text-primary-dark"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:gap-10 max-lg:gap-4 max-md:gap-4 lg:pl-28">
          {section5Data?.paragraph?.map((paragraph, index) => (
            <TextAnimation
              key={index}
              text={paragraph || ""}
              tag="p"
              className="font-sans text-primary-dark tracking-[-0.023rem] text-desktop-paragraph-p2 max-lg:text-mobile-paragraph-p1"
            />
          ))}
        </div>
      </div>
      <div className="shrink-0">
        <SimpleParallax scale={1.2}>
          <img
            src={image}
            alt=""
            className="lg:h-156.5 lg:w-[31.563rem] max-lg:h-115 max-lg:w-full max-md:h-[26.563rem] max-md:w-full"
          />
        </SimpleParallax>
      </div>
    </div>
  );
};

export default Section5;
