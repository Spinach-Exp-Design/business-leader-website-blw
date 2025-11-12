"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section2TabMobile from "./Section2TabMobile";
import useDeviceType from "@/hooks/useDeviceType";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const AboutUs = () => {
  const { isTablet, isMobile } = useDeviceType();

  return (
    <>
      <section>
        <Section1 />
      </section>

      <section>
        {isMobile || isTablet ? <Section2TabMobile /> : <Section2 />}
      </section>

      <section>
        <Section3 />
      </section>

      <section>
        <Section4 />
      </section>

      <section>
        <Section5 />
      </section>
    </>
  );
};

export default AboutUs;
