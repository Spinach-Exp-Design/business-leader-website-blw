import { section2Data } from "@/data/aboutpageData";
import React, { useState, useEffect, useRef } from "react";
import QuoteIcon from "./Icons/QuoteIcon";
import TextAnimation from "@/components/TextAnimation";
import { motion } from "framer-motion";

const Section2 = () => {
  const [isLastItemVisible, setIsLastItemVisible] = useState(false);
  const [isOverlayInView, setIsOverlayInView] = useState(false);
  const [isLastLineInView, setIsLastLineInView] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const lastLineRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          setIsLastItemVisible(entry?.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px",
      }
    );

    const currentRef = lastItemRef?.current;
    if (currentRef) {
      observer?.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer?.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const overlayObserver = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          setIsOverlayInView(entry?.isIntersecting);
        });
      },
      {
        threshold: 1.0, // Trigger when 100% of the element is visible
        rootMargin: "0px",
      }
    );

    const currentOverlayRef = overlayRef?.current;
    if (currentOverlayRef) {
      overlayObserver?.observe(currentOverlayRef);
    }

    return () => {
      if (currentOverlayRef) {
        overlayObserver?.unobserve(currentOverlayRef);
      }
    };
  }, []);

  useEffect(() => {
    const lastLineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsLastLineInView(entry?.isIntersecting);
        });
      },
      {
        threshold: 1.0, // Trigger when 100% of the last line is visible
        rootMargin: "0px",
      }
    );

    const currentLastLineRef = lastLineRef?.current;
    if (currentLastLineRef) {
      lastLineObserver?.observe(currentLastLineRef);
    }

    return () => {
      if (currentLastLineRef) {
        lastLineObserver?.unobserve(currentLastLineRef);
      }
    };
  }, []);

  useEffect(() => {
    const shouldLock =
      isOverlayInView && !isLastItemVisible && !isLastLineInView;

    if (shouldLock && !isLockedRef.current) {
      // Lock scroll - transitioning from unlocked to locked
      scrollPositionRef.current = window?.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef?.current}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
      isLockedRef.current = true;
    } else if (!shouldLock && isLockedRef?.current) {
      // Unlock scroll - transitioning from locked to unlocked
      const savedScrollPosition = scrollPositionRef?.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      isLockedRef.current = false;

      // Restore scroll position only once when unlocking
      if (savedScrollPosition > 0) {
        requestAnimationFrame(() => {
          window?.scrollTo(0, savedScrollPosition);
          // Clear the saved position after restoring to prevent future restorations
          scrollPositionRef.current = 0;
        });
      }
    }

    return () => {
      // Cleanup on unmount
      if (isLockedRef?.current) {
        const savedScrollPosition = scrollPositionRef?.current;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.documentElement.style.overflow = "";
        if (savedScrollPosition > 0) {
          requestAnimationFrame(() => {
            window?.scrollTo(0, savedScrollPosition);
          });
        }
      }
    };
  }, [isOverlayInView, isLastItemVisible, isLastLineInView]);

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
      <div className="flex gap-16 pr-16 relative z-2">
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
                  <p
                    ref={isLastItem ? lastLineRef : null}
                    className="text-white text-desktop-paragraph-p1 font-sans tracking-[-0.025rem] "
                  >
                    {item}
                  </p>
                </div>
              );
            })}
            {!isLastItemVisible && (
              <div
                ref={overlayRef}
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

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="-mt-3.5"
      >
        <div className="bg-white  lg:py-18 lg:pl-14 lg:pr-47 lg:ml-50 flex items-start gap-14 relative z-1">
          <span className="w-27 h-27 shrink-0 block">
            <QuoteIcon />
          </span>
          <TextAnimation
            text={section2Data?.quote || ""}
            tag="h3"
            className="text-desktop-quote-3 font-playfair-display italic text-primary-dark tracking-[-0.04rem]"
          />
        </div>
        <div className="bg-primary-yellow h-[17.938rem] ml-40 -mt-[15.45rem]"></div>
      </motion.div>
    </div>
  );
};

export default Section2;
