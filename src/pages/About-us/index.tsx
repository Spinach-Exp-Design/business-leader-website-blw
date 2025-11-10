"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section2TabMobile from "./Section2TabMobile";
import useDeviceType from "@/hooks/useDeviceType";

const AboutUs = () => {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <div>
      <Section1 />

      {isMobile || isTablet ? <Section2TabMobile /> : <Section2 />}
    </div>
  );
};

export default AboutUs;
