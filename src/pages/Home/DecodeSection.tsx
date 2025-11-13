import { decodeSectionData } from "../../data/homepageData";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TextAnimation from "@/components/TextAnimation";
import useDeviceType from "@/hooks/useDeviceType";
import SwirlIcon from "../About-us/Icons/SwirlIcon";
import SimpleParallax from "simple-parallax-js";

const DecodeSection = () => {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <div className="w-full relative">
      <div className="w-px h-full bg-neutral-light top-0 left-36 absolute z-[-1] max-lg:hidden" />
      <div className="w-px h-full bg-neutral-light bottom-0 right-36 absolute z-[-1] max-lg:hidden" />
      {/* Top Content Section */}
      <div className="pt-36 pl-65 pr-40 max-lg:px-8 max-md:px-6 max-lg:pt-16 max-lg:flex max-lg:gap-4 max-md:flex-col max-md:gap-10">
        <div>
          <TextAnimation
            text={decodeSectionData.titleFirst}
            tag="h2"
            className="text-desktop-heading-h1 font-playfair-display italic max-lg:text-mobile-heading-h1 tracking-[-0.075rem]"
          />
          <TextAnimation
            text={decodeSectionData.titleSecond}
            tag="h2"
            className="text-desktop-heading-h1 font-playfair-display italic max-lg:text-mobile-heading-h1 tracking-[-0.075rem] ml-28 max-lg:ml-0"
          />
          <div className="shrink-0 hidden max-lg:flex mt-4">
            <span className="h-18 max-lg:h-10">
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
        </div>
        <div className="pt-8 flex gap-10 pl-[20.8rem] max-lg:pl-0 max-lg:pt-0">
          <div className="max-lg:hidden">
            <span className="h-18 ">
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
          <div className="w-86 max-lg:w-86">
            <TextAnimation
              text={decodeSectionData.description}
              tag="p"
              className="text-desktop-paragraph-p1 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1"
            />
            <PrimaryButton
              variant="secondary"
              onClick={() => console.log("Start one now clicked")}
              className="mt-6"
            >
              Start one now
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Bottom Image Section with Geometric Blocks */}
      <div className="mt-20 max-lg:mt-16 relative pb-16 max-lg:pb-6 max-md:pb-4 overflow-visible">
        <div className="w-245 h-136 max-lg:w-162 max-lg:h-106 max-md:w-86 max-md:h-56 relative">
          <div className="bg-primary-yellow lg:h-129.75 lg:w-280.75 max-lg:h-[26.36238rem] max-lg:w-[calc(100%+1.24rem)] max-md:h-56.25 max-md:w-[calc(100%+1rem)] lg:pb-16 max-lg:pb-6 max-md:pb-4 absolute z-0 lg:left-0 lg:mt-22 max-lg:mt-[1.26rem]"></div>
          <div className="relative z-10 w-full h-full overflow-hidden">
            <SimpleParallax scale={1.2}>
              <img
                src={decodeSectionData.image}
                alt="Rajesh Krishnamoorthy speaking"
                className="w-full h-full object-cover"
              />
            </SimpleParallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecodeSection;
