import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextAnimation from "@/components/TextAnimation";
import { localSectionData } from "@/data/homepageData";
import React from "react";

const LocalSection = () => {
  return (
    <div className="pt-120 pl-40 pr-26">
      <TextAnimation
        text={localSectionData.titleFirst}
        tag="h2"
        className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-neutral-white"
      />
      <TextAnimation
        text={localSectionData.titleSecond}
        tag="h2"
        className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-neutral-white ml-28"
      />
      <div className="mt-4 ml-28 flex gap-36">
        <div className="pt-4">
          <TextAnimation
            text={localSectionData.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 text-neutral-white w-111"
          />
          <PrimaryButton
            variant="primary"
            onClick={() => console.log("Start one now clicked")}
            className="mt-10"
          >
            Know more about Rajesh
          </PrimaryButton>
        </div>
        <div className="h-149 w-119 z-1">
          <img
            src={localSectionData.image}
            alt="Rajesh Krishnamoorthy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-primary-yellow py-14 pl-39 -mt-44 mr-7 relative z-0">
        <div className="flex gap-2 absolute -top-8 left-6">
          <img
            src="/assets/icons/white-quote.svg"
            alt="White quote"
            className="w-14 h-22"
          />
          <img
            src="/assets/icons/white-quote.svg"
            alt="White quote"
            className="w-14 h-22"
          />
        </div>
        <h2 className="text-desktop-quote-2 font-playfair-display italic text-primary-dark w-115.5">
          {localSectionData.quote}
        </h2>
      </div>
    </div>
  );
};

export default LocalSection;
