import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextAnimation from "@/components/TextAnimation";
import { formSectionData } from "@/data/homepageData";
import useDeviceType from "@/hooks/useDeviceType";
import React, { useState } from "react";

const FormSection = () => {
  const { isMobile, isTablet } = useDeviceType();
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (emailTouched && value) {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submission
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      setEmailTouched(true);
      return;
    }

    // Handle form submission
    console.log({ email, response });
  };

  return (
    <div className="relative pt-36 pb-[13.37rem] pl-40 pr-42 bg-primary-dark max-lg:pt-28 max-lg:pb-20 max-lg:px-8 overflow-hidden max-md:pt-30 max-md:pb-8 max-md:px-4">
      {/* Tabla pattern background */}
      <div
        className="absolute top-20 left-20 w-148 h-full max-lg:w-84 max-lg:h-64 max-lg:-left-2 max-lg:-top-[0.2rem] max-md:top-[-0.2rem] max-md:left-4"
        style={{
          backgroundImage: isMobile
            ? `url(/assets/images/tabla-mobile.png)`
            : isTablet
            ? `url(/assets/images/tabla-tablet.png)`
            : `url(/assets/images/tabla-desktop.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="grid grid-cols-2 gap-52 max-lg:grid-cols-1 max-lg:gap-26">
        {/* Left Content */}
        <div className="max-lg:gap-8 max-md:flex-col max-md:gap-4 flex flex-col gap-8 max-lg:flex-row">
          <div>
            <TextAnimation
              text={formSectionData?.titleFirst}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 tracking-[-0.135rem] whitespace-nowrap max-lg:tracking-[-0.06rem] text-neutral-white"
            />
            <TextAnimation
              text={formSectionData?.titleSecond}
              tag="h2"
              className="text-desktop-heading-h2 font-playfair-display italic max-lg:text-mobile-heading-h2 tracking-[-0.135rem] whitespace-nowrap max-lg:tracking-[-0.06rem] text-neutral-white"
            />
          </div>
          {/* Description */}
          <TextAnimation
            text={formSectionData?.description}
            tag="p"
            className="text-desktop-paragraph-p2 font-sans tracking-[-0.025rem] max-lg:text-mobile-paragraph-p1 text-neutral-white w-97.5 max-lg:w-full max-lg:tracking-[-0.0225rem]"
          />
        </div>
        {/* Right Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={`w-full bg-transparent border-b ${
                  emailError ? "border-[#FF3A3E]" : "border-neutral-medium"
                } text-neutral-white placeholder-neutral-medium pb-4 px-0 focus:outline-none transition-colors text-desktop-paragraph-p4 max-lg:text-mobile-paragraph-p2 max-lg:pb-2`}
                required
              />
              {emailError && (
                <p className="text-[#FF3A3E] text-desktop-paragraph-p8 max-lg:text-mobile-paragraph-p4 mt-2">
                  {emailError}
                </p>
              )}
            </div>

            {/* Response Textarea */}
            <div>
              <textarea
                placeholder="Your response"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                rows={1}
                className="w-full bg-transparent border-b border-neutral-medium text-neutral-white placeholder-neutral-medium pb-4 px-0 focus:outline-none transition-colors resize-none text-desktop-paragraph-p4 max-lg:text-mobile-paragraph-p2 max-lg:pb-2"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <PrimaryButton
                variant="primary"
                onClick={() => console.log("Start one now clicked")}
              >
                Send response
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
