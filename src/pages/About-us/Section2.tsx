import { section2Data } from "@/data/aboutpageData";
import { useState, useEffect, useRef, useCallback } from "react";
import QuoteIcon from "./Icons/QuoteIcon";
import TextAnimation from "@/components/TextAnimation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SimpleParallax from "simple-parallax-js";
import Lenis from "lenis";

const Section2 = () => {
  const [isResumeBarVisible, setIsResumeBarVisible] = useState(false);
  const [isOverlayInView, setIsOverlayInView] = useState(false);
  const resumeBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);
  const isScrollingDownRef = useRef<boolean>(true);
  const lenisRef = useRef<Lenis | null>(null);

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
          setIsResumeBarVisible(entry?.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const currentRef = resumeBarRef?.current;
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
        threshold: 1.0,
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
  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (!scrollContainer) return;

    // Find the content element (first child div)
    const contentElement = scrollContainer.firstElementChild as HTMLElement;
    if (!contentElement) return;

    const lenis = new Lenis({
      wrapper: scrollContainer,
      content: contentElement,
      duration: 1.2,
      easing: (t) => Math?.min(1, 1.001 - Math?.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

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
      const lenis = lenisRef?.current;

      if (isLockedRef.current && scrollContainer && lenis) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop <= 0;
        const isAtBottom =
          Math?.ceil(scrollTop + clientHeight) >= Math?.floor(scrollHeight);

        if (scrollingDown) {
          if (!isAtBottom) {
            // Use Lenis for smooth scrolling - calculate target scroll position
            const scrollDelta = e?.deltaY * 0.5; // Reduce sensitivity for smoother scroll
            const maxScroll = scrollHeight - clientHeight;
            const targetScroll = Math?.min(scrollTop + scrollDelta, maxScroll);

            lenis?.scrollTo(targetScroll, {
              immediate: false,
              lock: false,
              duration: 1.2,
            });
            e?.preventDefault();
            e?.stopPropagation();
            return;
          }

          if (isAtBottom) {
            unlockScroll();
            return;
          }
        } else {
          if (!isAtTop) {
            // Use Lenis for smooth scrolling - calculate target scroll position
            const scrollDelta = e?.deltaY * 0.5; // Reduce sensitivity for smoother scroll
            const targetScroll = Math?.max(scrollTop + scrollDelta, 0);

            lenis?.scrollTo(targetScroll, {
              immediate: false,
              lock: false,
              duration: 1.2,
            });
            e?.preventDefault();
            e?.stopPropagation();
            return;
          }

          if (isAtTop) {
            unlockScroll();
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
    };
  }, [unlockScroll]);

  useEffect(() => {
    const shouldLock = isOverlayInView && !isResumeBarVisible;

    if (shouldLock && !isLockedRef?.current && isScrollingDownRef?.current) {
      scrollPositionRef.current = window?.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef?.current}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
      isLockedRef.current = true;
    } else if (!shouldLock && isLockedRef?.current) {
      unlockScroll();
    }

    return () => {
      if (isLockedRef?.current) {
        unlockScroll();
      }
    };
  }, [isOverlayInView, isResumeBarVisible, unlockScroll, isScrollingDownRef]);

  return (
    <div
      className="h-full w-full flex flex-col items-end pb-80"
      style={{
        backgroundImage: "url(/AboutUS/about-pattern-desktop.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex gap-16 pr-16 relative z-2">
        <div className="w-137 h-190 -mt-[8.3rem] relative z-3">
          <SimpleParallax scale={1.2}>
            <img src="/AboutUS/section2-profile-desktop.png" alt="" />
          </SimpleParallax>
        </div>
        <div
          ref={scrollContainerRef}
          className="w-126 h-98 mt-26 flex flex-col overflow-y-scroll no-scrollbar"
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
            <div ref={resumeBarRef} className="w-full">
              <span className="block w-full h-[10px] bg-transparent"></span>
            </div>
            {!isResumeBarVisible && (
              <div
                ref={overlayRef}
                className="absolute z-1 bottom-3.5 left-0 w-full h-[18.625em]"
                style={{
                  background:
                    "linear-gradient(0deg, #071729 35%, rgba(7, 23, 41, 0.60) 66.43%, rgba(7, 23, 41, 0.00) 100%)",
                }}
              ></div>
            )}
          </div>
        </div>
      </div>

      <motion.div
        ref={quoteRef}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="-mt-[0.89rem]"
      >
        <div className="bg-white lg:py-18 lg:pl-14 lg:pr-47 lg:ml-50 flex items-start gap-14 relative z-1">
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
