"use client";
import React from "react";
import useDeviceType from "@/hooks/useDeviceType";
import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";
import SocialButton from "../Buttons/SocialButton";
import { footerData } from "@/data/footerData";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { isTablet, isMobile } = useDeviceType();
  const router = useRouter();
  const backgroundImage = isMobile
    ? "url(/footerImages/PatternMobile.png)"
    : isTablet
    ? "url(/footerImages/PatternTablet.png)"
    : "url(/footerImages/Pattern.png)";

  return (
    <div
      className="bg-primary-dark text-white lg:h-139.5 max-lg:h-112.5"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* home | about */}
        <div className="flex items-center justify-center gap-2 lg:pt-10 lg:mb-12 max-lg:pt-16 max-lg:mb-6">
          <Link
            className="lg:text-desktop-subheading-s5 max-lg:text-mobile-paragraph-p2"
            href="/"
          >
            Home
          </Link>{" "}
          |
          <Link
            className="lg:text-desktop-subheading-s5 max-lg:text-mobile-paragraph-p2"
            href="/about"
          >
            About
          </Link>
        </div>

        {/* title */}
        <h3 className="font-playfair-display italic lg:text-desktop-heading-h3 max-lg:text-mobile-heading-h2 text-primary-yellow text-center mb-8">
          Ready for a dialogue <br /> that matters?
        </h3>

        {/* button */}
        <PrimaryButton
          variant="primary"
          onClick={() => router.push(footerData?.buttonData?.link)}
          className="lg:mb-20 max-lg:mb-14"
        >
          {footerData?.buttonData?.text}
        </PrimaryButton>

        {/* social icons */}
        <div className="flex items-center justify-center lg:gap-4 max-lg:gap-2 mb-3.5">
          {footerData?.socialIcons?.map((icon, index) => (
            <Link href={footerData?.socialIconsLinks?.[index]} key={index}>
              <SocialButton icon={icon} />
            </Link>
          ))}
        </div>

        {/* copyright */}
        <p className="font-sans text-neutral-medium lg:text-desktop-paragraph-p8 max-lg:text-mobile-paragraph-p4">
          {footerData?.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
