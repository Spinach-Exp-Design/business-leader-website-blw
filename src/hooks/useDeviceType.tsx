"use client";

import { useState, useLayoutEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  useLayoutEffect(() => {
    const getDeviceType = () => {
      const width = window?.innerWidth;
      return {
        isMobile: width <= 743,
        isTablet: width >= 744 && width <= 1023,
        isLaptop: width >= 1024 && width <= 1279,
        isDesktop: width >= 1280,
      };
    };

    let throttleTimeout: number | null = null;

    const handleResize = () => {
      if (!throttleTimeout) {
        throttleTimeout = requestAnimationFrame(() => {
          const newDeviceType = getDeviceType();
          setDeviceType((prev) => {
            // Update only if device type changes
            if (
              prev?.isMobile === newDeviceType?.isMobile &&
              prev?.isTablet === newDeviceType?.isTablet &&
              prev?.isLaptop === newDeviceType?.isLaptop &&
              prev?.isDesktop === newDeviceType?.isDesktop
            ) {
              return prev;
            }
            return newDeviceType;
          });
          throttleTimeout = null;
        });
      }
    };

    // Set initial device type on mount
    handleResize();

    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
      if (throttleTimeout) {
        cancelAnimationFrame(throttleTimeout);
      }
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
