"use client";

import TextAnimation from "@/components/TextAnimation";
import { section4Data } from "@/data/aboutpageData";
import useDeviceType from "@/hooks/useDeviceType";
import React, { useRef } from "react";
import {
  motion,
  useInView,
  // useScroll,
  // useSpring,
  // useTransform,
} from "framer-motion";
import SimpleParallax from "simple-parallax-js";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-white flex flex-col gap-4 max-lg:gap-2">
      <TextAnimation
        text={title || ""}
        tag="h3"
        className="font-sans text-desktop-subheading-s1 max-lg:text-mobile-subheading-s2"
      />

      <TextAnimation
        text={description || ""}
        tag="div"
        className="font-sans text-desktop-paragraph-p3 max-lg:text-mobile-paragraph-p2 max-lg:tracking-[-0.018rem]"
      />
    </div>
  );
};

const Section4 = () => {
  const { isTablet, isMobile } = useDeviceType();

  const section4Ref = useRef<HTMLDivElement>(null);

  // const { scrollYProgress: quoteScrollYProgress } = useScroll({
  //   target: section4Ref,
  //   offset: ["start end", "end start"],
  // });

  // const quoteFloatY = useTransform(quoteScrollYProgress, [0, 1], [30, -30]);
  // const quoteFloatYSpring = useSpring(quoteFloatY, {
  //   stiffness: 120,
  //   damping: 20,
  //   restDelta: 0.001,
  // });

  const inView = useInView(section4Ref, {
    once: true,
    amount: 0.25,
  });

  const yellowCardImage = isTablet
    ? "/AboutUS/section4-Image-tablet.webp"
    : isMobile
    ? "/AboutUS/section4-Image-mobile.webp"
    : "/AboutUS/section4-Image-desktop.webp";

  return (
    <div
      ref={section4Ref}
      className="bg-primary-dark flex lg:flex-row flex-col lg:pb-40 max-lg:pr-8 max-md:pr-4"
    >
      {/* yellow card */}
      <motion.div
        // style={{ y: quoteFloatYSpring }}
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-primary-yellow h-[46.313rem] w-207 max-lg:h-full max-md:h-full max-lg:w-full shrink-0"
      >
        <div className="lg:pr-12 max-lg:pr-[7.313rem] max-md:pr-6">
          <div className="relative -mt-[7.563rem] max-lg:-mt-[3.063rem] max-md:-mt-[1.813rem]">
            <SimpleParallax scale={1.1}>
              <img
                src={yellowCardImage}
                alt=""
                className="w-full h-118.5 max-lg:h-60 max-md:h-[12.688rem] object-cover"
              />
            </SimpleParallax>
          </div>
          <div className="lg:py-14 flex flex-col items-end max-lg:items-start max-lg:pl-8 max-md:pl-4 max-lg:pb-[3.188rem] max-md:pb-8 max-lg:pt-8 max-md:pt-[1.19rem]">
            <div className="flex flex-col max-lg:flex-row max-md:flex-col items-end max-lg:items-start max-lg:gap-2 max-md:gap-0">
              <TextAnimation
                text={section4Data?.title1 || ""}
                tag="h2"
                className="text-desktop-heading-h2 max-lg:text-mobile-heading-h2 font-playfair-display italic text-primary-dark lg:pr-15"
              />

              <TextAnimation
                text={section4Data?.title2 || ""}
                tag="h2"
                className="text-desktop-heading-h2 max-lg:text-mobile-heading-h2 font-playfair-display italic text-primary-dark lg:pr-[5.188rem]"
              />
            </div>
            <TextAnimation
              text={section4Data?.description || ""}
              tag="p"
              className="font-sans text-desktop-paragraph-p2 max-lg:text-mobile-paragraph-p2 text-primary-dark tracking-[-0.023rem] max-lg:tracking-[-0.018rem] lg:mt-8 max-lg:mt-4 lg:pl-60 lg:pr-16.5"
            />
          </div>
        </div>
      </motion.div>

      {/* cards */}
      <div className="lg:pt-[13.813rem] lg:mr-[7.2rem] lg:ml-22 flex flex-col gap-20 max-lg:gap-10 max-lg:pl-8 max-lg:pr-30 max-md:px-4 max-lg:mt-[2.313rem] max-lg:mb-[3.063rem] max-md:my-14">
        {section4Data.cards.map((card, index) => (
          <React.Fragment key={index}>
            <Card title={card.title} description={card.description} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Section4;
