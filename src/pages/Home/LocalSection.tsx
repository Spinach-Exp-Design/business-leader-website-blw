import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextAnimation from "@/components/TextAnimation";
import { localSectionData } from "@/data/homepageData";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SimpleParallax from "simple-parallax-js";

const LocalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: quoteScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteFloatY = useTransform(quoteScrollYProgress, [0, 1], [30, -30]);
  const quoteFloatYSpring = useSpring(quoteFloatY, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div
      ref={sectionRef}
      className="pt-120 pl-40 pr-26 pb-64 max-lg:px-8 max-lg:pt-52 max-lg:pb-8 max-md:pt-44 max-md:pb-4 max-md:px-2"
    >
      <div className="flex flex-col max-lg:flex-row max-lg:gap-20 max-md:flex-col max-md:gap-4 gap-0">
        <div className="max-md:px-2">
          <TextAnimation
            text={localSectionData.titleFirst}
            tag="h2"
            className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-neutral-white"
          />
          <TextAnimation
            text={localSectionData.titleSecond}
            tag="h2"
            className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 text-neutral-white ml-28 max-lg:ml-0"
          />
        </div>
        <div className="mt-4 ml-28 flex gap-36 max-lg:flex-col max-lg:gap-16 max-lg:mt-0 max-lg:ml-0  max-md:px-2">
          <div className="pt-4 max-lg:pt-0">
            <TextAnimation
              text={localSectionData.description}
              tag="p"
              className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 text-neutral-white w-111 max-md:w-full"
            />
            <PrimaryButton
              variant="primary"
              onClick={() => console.log("Start one now clicked")}
              className="mt-10"
            >
              Know more about Rajesh
            </PrimaryButton>
          </div>
          <div className="h-149 w-119 z-1 max-lg:h-108 max-lg:w-md max-md:w-full max-md:h-107.5 overflow-hidden">
            <SimpleParallax scale={1.2}>
              <img
                src={localSectionData.image}
                alt="Rajesh Krishnamoorthy"
                className="w-full h-full object-cover"
              />
            </SimpleParallax>
          </div>
        </div>
      </div>
      <motion.div
        style={{ y: quoteFloatYSpring }}
        className="bg-primary-yellow py-14 pl-39 -mt-44 max-md:-mt-36 mr-7 relative z-0 max-lg:w-139 max-lg:h-89 max-lg:py-10 max-lg:px-6 max-lg:mr-6 max-lg:ml-30 max-lg:flex max-lg:items-end max-md:w-full max-md:h-97 max-md:mx-0"
      >
        <div className="flex gap-2 absolute -top-8 left-6 max-lg:top-48 max-md:top-46">
          <img
            src="/assets/icons/white-quote.svg"
            alt="White quote"
            className="w-14 h-22 max-lg:w-8 max-lg:h-14"
          />
          <img
            src="/assets/icons/white-quote.svg"
            alt="White quote"
            className="w-14 h-22 max-lg:w-8 max-lg:h-14"
          />
        </div>
        <TextAnimation
          text={localSectionData.quote}
          tag="h2"
          className="text-desktop-quote-2 max-lg:text-mobile-quote-2 font-playfair-display italic text-primary-dark w-115.5 max-lg:w-full"
        />
      </motion.div>
    </div>
  );
};

export default LocalSection;
