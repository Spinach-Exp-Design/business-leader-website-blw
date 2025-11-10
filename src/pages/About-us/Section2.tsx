import { section2Data } from "@/data/aboutpageData";
import React, { useState, useEffect, useRef } from "react";
import QuoteIcon from "./Icons/QuoteIcon";

const Section2 = () => {
  const [isLastItemVisible, setIsLastItemVisible] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsLastItemVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px",
      }
    );

    const currentRef = lastItemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="h-full w-full flex flex-col items-end pb-80"
      style={{
        backgroundImage: "url(/aboutUS/about-pattern-desktop.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex gap-16 mr-16 relative z-2">
        <div className="w-137 h-190 -mt-[8.3rem] relative z-3">
          <img src="/aboutUS/section2-profile-desktop.png" alt="" />
        </div>
        <div className="w-126 h-98 mt-26 flex flex-col gap-14 overflow-y-scroll no-scrollbar">
          <>
            {section2Data?.scrollSection?.map((item, index) => {
              const isLastItem =
                index === section2Data.scrollSection.length - 1;
              return (
                <div key={index} ref={isLastItem ? lastItemRef : null}>
                  <p className="text-white text-desktop-paragraph-p1 font-sans tracking-[-0.025rem] ">
                    {item}
                  </p>
                </div>
              );
            })}
            {!isLastItemVisible && (
              <div
                className="absolute z-1 bottom-3.5 left-0 w-full h-[18.625em]"
                style={{
                  background:
                    "linear-gradient(0deg, #071729 35%, rgba(7, 23, 41, 0.60) 66.43%, rgba(7, 23, 41, 0.00) 100%)",
                }}
              ></div>
            )}
          </>
        </div>
      </div>

      <div className="-mt-3.5">
        <div className="bg-white  lg:py-18 lg:pl-14 lg:pr-47 lg:ml-50 flex items-start gap-14 relative z-1">
          <span className="w-27 h-27 shrink-0 block">
            <QuoteIcon />
          </span>
          <h3 className="text-desktop-quote-3 font-playfair-display italic text-primary-dark tracking-[-0.04rem]">
            {section2Data?.quote}
          </h3>
        </div>
        <div className="bg-primary-yellow h-[17.938rem] ml-40 -mt-[15.45rem]"></div>
      </div>
    </div>
  );
};

export default Section2;
