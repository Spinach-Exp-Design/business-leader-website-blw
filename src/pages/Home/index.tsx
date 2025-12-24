"use client";
import React, { useRef } from "react";
import DecodeSection from "./DecodeSection";
import LocalSection from "./LocalSection";
import useDeviceType from "@/hooks/useDeviceType";
import SolutionSection from "./SolutionSection";
import FormSection from "./FormSection";
import NoiseSection from "./NoiseSection";

const HomePage = () => {
  const { isMobile, isTablet } = useDeviceType();
  const formSectionRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const bgImage = isMobile
    ? "/assets/images/Pattern_Mobile.webp"
    : isTablet
    ? "/assets/images/Pattern_Tablet.webp"
    : "/assets/images/Pattern_Desktop.webp";

  return (
    <>
      <section>
        <DecodeSection onStartNowClick={scrollToForm} />
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
      <section ref={formSectionRef} className="bg-primary-dark">
        <FormSection />
      </section>
      <section className="relative">
        <div className="w-full h-70 bg-primary-dark absolute top-0 left-0 z-0 max-lg:hidden" />
        <NoiseSection />
      </section>
    </>
  );
};

export default HomePage;
