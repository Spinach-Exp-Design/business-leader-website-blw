import { section2Data } from "@/data/aboutpageData";
import { useState, useEffect, useRef, useCallback } from "react";
import QuoteIcon from "./Icons/QuoteIcon";
import TextAnimation from "@/components/TextAnimation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SimpleParallax from "simple-parallax-js";
import useDeviceType from "@/hooks/useDeviceType";

const Section2 = () => {
  const [isResumeBarVisible, setIsResumeBarVisible] = useState(false);
  const [isOverlayInView, setIsOverlayInView] = useState(false);
  const [hasScrolledPastBar, setHasScrolledPastBar] = useState(false);
  const bottomResumeBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);
  const isScrollingDownRef = useRef<boolean>(true);
  const scrollAnimationRef = useRef<number | null>(null);
  const { isTablet, isMobile } = useDeviceType();

  const quoteRef = useRef(null);

  const { scrollYProgress: quoteScrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });

  const quoteFloatY = useTransform(quoteScrollYProgress, [0, 1], [30, -30]);
  const quoteFloatYSpring = useSpring(quoteFloatY, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          const isVisible = entry?.isIntersecting;
          setIsResumeBarVisible(isVisible);
          // Track if we've scrolled past the bar
          if (!isVisible) {
            setHasScrolledPastBar(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "50px 0px 0px 0px",
      }
    );

    const currentRef = bottomResumeBarRef?.current;
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
        threshold: 0.8,
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

  // Initialize Lenis for smooth scrolling on the scroll container

  const unlockScroll = useCallback(() => {
    const savedScrollPosition = scrollPositionRef?.current;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.documentElement.style.overflow = "";
    isLockedRef.current = false;

    if (savedScrollPosition > 0) {
      requestAnimationFrame(() => {
        window?.scrollTo(0, savedScrollPosition);
        scrollPositionRef.current = 0;
      });
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollingDown = e?.deltaY > 0;
      isScrollingDownRef.current = scrollingDown;

      const scrollContainer = scrollContainerRef?.current;

      if (isLockedRef.current && scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop <= 1;
        const isAtBottom =
          Math?.ceil(scrollTop + clientHeight) >= Math?.floor(scrollHeight) - 1;

        if (scrollingDown) {
          if (!isAtBottom) {
            e?.preventDefault();
            e?.stopPropagation();

            // Cancel any existing animation
            if (scrollAnimationRef.current) {
              cancelAnimationFrame(scrollAnimationRef.current);
            }

            // Use requestAnimationFrame for smoother scrolling
            const scrollDelta = e?.deltaY * 1.0;
            const maxScroll = scrollHeight - clientHeight;
            const targetScroll = Math?.min(scrollTop + scrollDelta, maxScroll);

            scrollAnimationRef.current = requestAnimationFrame(() => {
              scrollContainer.scrollTop = targetScroll;
              scrollAnimationRef.current = null;
            });
            return;
          }

          if (isAtBottom) {
            setTimeout(() => unlockScroll(), 50);
            return;
          }
        } else {
          if (!isAtTop) {
            e?.preventDefault();
            e?.stopPropagation();

            // Cancel any existing animation
            if (scrollAnimationRef.current) {
              cancelAnimationFrame(scrollAnimationRef.current);
            }

            // Use requestAnimationFrame for smoother scrolling
            const scrollDelta = e?.deltaY * 1.0;
            const targetScroll = Math?.max(scrollTop + scrollDelta, 0);

            scrollAnimationRef.current = requestAnimationFrame(() => {
              scrollContainer.scrollTop = targetScroll;
              scrollAnimationRef.current = null;
            });
            return;
          }

          if (isAtTop) {
            setTimeout(() => unlockScroll(), 50);
            return;
          }
        }
      }

      if (isLockedRef?.current && !scrollingDown) {
        unlockScroll();
      }
    };

    window?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window?.removeEventListener("wheel", handleWheel);
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [unlockScroll]);

  useEffect(() => {
    const shouldLock = isOverlayInView && !isResumeBarVisible;
    let timeoutId: NodeJS.Timeout;

    if (shouldLock && !isLockedRef?.current && isScrollingDownRef?.current) {
      timeoutId = setTimeout(() => {
        scrollPositionRef.current = window?.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPositionRef?.current}px`;
        document.body.style.width = "100%";
        document.documentElement.style.overflow = "hidden";
        isLockedRef.current = true;
      }, 100);
    } else if (!shouldLock && isLockedRef?.current) {
      unlockScroll();
    }

    return () => {
      clearTimeout(timeoutId);
      if (isLockedRef?.current) {
        unlockScroll();
      }
    };
  }, [isOverlayInView, isResumeBarVisible, unlockScroll, isScrollingDownRef]);

  return (
    <div
      className="h-full w-full flex flex-col items-end pb-80"
      style={{
        backgroundImage: "url(/AboutUS/about-pattern-desktop.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex gap-16 pr-16 relative z-2">
        <div className="w-137 h-190 -mt-[8.3rem] relative z-3 shrink-0 ml-68">
          <SimpleParallax scale={1.1}>
            <img
              src={
                isTablet
                  ? "/AboutUS/section2-profile-tablet.webp"
                  : isMobile
                  ? "/AboutUS/section2-profile-mobile.webp"
                  : "/AboutUS/section2-profile-desktop.webp"
              }
              alt=""
            />
          </SimpleParallax>
        </div>
        <div
          ref={scrollContainerRef}
          className="h-98 mt-26 flex flex-col overflow-y-scroll no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex flex-col">
            {section2Data?.scrollSection?.map((item, index) => (
              <div key={index}>
                <p
                  className={
                    "text-white text-desktop-paragraph-p1 font-sans tracking-[-0.025rem] mt-14"
                  }
                >
                  {item}
                </p>
              </div>
            ))}
            <div ref={bottomResumeBarRef} className="w-full">
              <span className="block w-full h-[10px] bg-transparent"></span>
            </div>
            <div
              ref={overlayRef}
              className="absolute z-1 bottom-3.5 right-0 w-[calc(100%-20%)] h-[18.625em] transition-opacity duration-700 ease-out pointer-events-none"
              style={{
                background:
                  "linear-gradient(0deg, #071729 35%, rgba(7, 23, 41, 0.60) 66.43%, rgba(7, 23, 41, 0.00) 100%)",
                opacity:
                  !isResumeBarVisible && (isOverlayInView || hasScrolledPastBar)
                    ? 1
                    : 0,
              }}
            ></div>
          </div>
        </div>
      </div>

      <motion.div
        ref={quoteRef}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="-mt-[0.89rem] relative"
      >
        <div className="bg-white lg:py-18 lg:pl-14 lg:pr-47 lg:ml-54 flex items-start gap-14 relative z-1">
          <span className="w-27 h-27 shrink-0 block">
            <QuoteIcon />
          </span>
          <TextAnimation
            text={section2Data?.quote || ""}
            tag="h3"
            className="text-desktop-quote-3 font-playfair-display italic text-primary-dark tracking-[-0.04rem]"
          />
        </div>
        <motion.div
          style={{ y: quoteFloatYSpring }}
          className="bg-primary-yellow h-71.75 ml-40 -mt-[15.45rem] p-10"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Section2;
