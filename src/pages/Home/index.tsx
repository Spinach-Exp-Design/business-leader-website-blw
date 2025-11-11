"use client";
import React from "react";
import DecodeSection from "./DecodeSection";
import LocalSection from "./LocalSection";
import useDeviceType from "@/hooks/useDeviceType";
import SolutionSection from "./SolutionSection";

const HomePage = () => {
  const { isMobile, isTablet } = useDeviceType();
  const bgImage = isMobile
    ? "/assets/images/Pattern_Mobile.png"
    : isTablet
    ? "/assets/images/Pattern_Tablet.png"
    : "/assets/images/Pattern_Desktop.png";

  return (
    <>
      <section>
        <DecodeSection />
      </section>
      <section
        className="-mt-80 max-lg:-mt-32 max-md:-mt-24"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0A192A",
        }}
      >
        <LocalSection />
      </section>
      <section className="-mt-8 max-lg:mt-0">
        <SolutionSection />
      </section>
    </>
  );
};

export default HomePage;
