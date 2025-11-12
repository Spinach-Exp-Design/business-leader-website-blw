import { section3Data } from "@/data/aboutpageData";
import useDeviceType from "@/hooks/useDeviceType";
import clsx from "clsx";
import CardIcons from "./Icons/CardIcons";
import TextAnimation from "@/components/TextAnimation";
import SwirlIcon from "./Icons/SwirlIcon";

export const Card = ({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={clsx(
        "lg:py-20 lg:px-12.5 max-lg:px-6 max-lg:py-10 border",
        index === 0
          ? "bg-primary-yellow border-primary-yellow"
          : "border-[#E3E3E3]"
      )}
    >
      <span className="lg:h-12 max-lg:h-8 lg:w-29.5 max-lg:w-[4.266rem] block">
        {<CardIcons index={index} />}
      </span>
      <TextAnimation
        text={title || ""}
        tag="h3"
        className="font-sans text-desktop-subheading-s1 max-lg:text-mobile-subheading-s1 lg:mt-10 max-lg:mt-6 text-primary-dark"
      />

      <TextAnimation
        text={description || ""}
        tag="p"
        className="text-desktop-paragraph-p4 max-lg:text-mobile-paragraph-p2 max-md:text-mobile-paragraph-p1 max-lg:tracking-[-0.02rem] max-md:tracking-[-0.02rem] lg:w-133.5 lg:mt-4 max-lg:mt-2 text-primary-dark lg:pr-[1.688rem]"
      />
    </div>
  );
};

const Section3 = () => {
  const { isTablet, isMobile } = useDeviceType();
  return (
    <div className="flex max-lg:flex-col h-full lg:pb-[7.563rem] max-lg:px-8 max-lg:pt-20 max-lg:pb-[6.31rem] max-md:px-4 max-md:pt-20 max-md:pb-21">
      <div className="lg:pt-45 lg:pl-40 lg:pr-6 max-lg:mb-14">
        <div className="flex flex-col max-lg:flex-row max-md:flex-col gap-8 max-lg:gap-4">
          {/* title */}
          <TextAnimation
            text={section3Data?.title || ""}
            tag="h2"
            className="text-desktop-heading-h2 max-lg:text-mobile-heading-h2 font-playfair-display italic text-primary-dark max-lg:w-1/2 max-md:w-full"
          />
          {/* description */}
          <TextAnimation
            text={section3Data?.description || ""}
            tag="p"
            className="text-desktop-paragraph-p1 max-lg:text-mobile-paragraph-p1 font-sans tracking-[-0.025rem] text-primary-dark lg:pl-28 lg:pr-21 lg:mb-6 max-lg:w-1/2 max-md:w-full"
          />
        </div>
        {/* swirl icon */}
        <div className="lg:pl-28 max-lg:mt-6 h-21 max-lg:h-12 w-fit">
          <SwirlIcon
            name={
              isTablet
                ? "swirl-tablet"
                : isMobile
                ? "swirl-mobile"
                : "swirl-desktop"
            }
          />
        </div>
      </div>
      {/* card col */}
      <div className="flex flex-col lg:-mt-20">
        {section3Data.cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
