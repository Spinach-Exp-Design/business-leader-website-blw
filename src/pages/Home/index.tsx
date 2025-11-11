"use client";
import React from "react";
import DecodeSection from "./DecodeSection";
import LocalSection from "./LocalSection";

const HomePage = () => {
  return (
    <>
      <section>
        <DecodeSection />
      </section>
      <section
        className="-mt-80 max-lg:-mt-32 max-md:-mt-24"
        style={{
          backgroundImage: "url('/assets/images/Pattern_Desktop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0A192A",
        }}
      >
        <LocalSection />
      </section>
    </>
  );
};

export default HomePage;
