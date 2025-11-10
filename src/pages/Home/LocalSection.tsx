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
        <div className="h-149 w-119">
          <img
            src={localSectionData.image}
            alt="Rajesh Krishnamoorthy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LocalSection;
