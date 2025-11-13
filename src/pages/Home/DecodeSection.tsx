import { decodeSectionData } from "../../data/homepageData";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TextAnimation from "@/components/TextAnimation";
import useDeviceType from "@/hooks/useDeviceType";
import SwirlIcon from "../About-us/Icons/SwirlIcon";

interface DecodeSectionProps {
  onStartNowClick: () => void;
}

const DecodeSection = ({ onStartNowClick }: DecodeSectionProps) => {
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
              onClick={onStartNowClick}
              className="mt-6"
            >
              Start one now
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Bottom Image Section with Geometric Blocks */}
      <div className="mt-20 max-lg:mt-16 w-245 h-136 max-lg:w-162 max-lg:h-106 max-md:w-86 max-md:h-56 relative pb-16 max-lg:pb-6 max-md:pb-4">
        <img
          src={decodeSectionData.image}
          alt="Rajesh Krishnamoorthy speaking"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-22 max-lg:top-16 -right-36 w-36 max-lg:w-6 max-md:w-4 max-md:-right-4 max-lg:-right-6 max-lg:h-90 max-md:h-40 h-114 bg-primary-yellow z-0" />
        <div className="absolute bottom-0 right-0 w-full h-16 max-lg:h-6 max-md:h-4 bg-primary-yellow z-0" />
      </div>
    </div>
  );
};

export default DecodeSection;
