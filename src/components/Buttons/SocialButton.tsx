import React, { useState } from "react";
import SocialIcons from "./Icons/SocialIcons";
import clsx from "clsx";

const SocialButton = ({ icon }: { icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={clsx(
        "cursor-pointer rounded-full p-2 transition-all duration-500 ease-in-out border",
        isClicked
          ? "bg-[#CC9809] border-[#CC9809]"
          : isHovered
          ? "bg-primary-yellow border-primary-yellow"
          : "bg-primary-dark border-white"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onTouchStart={() => setIsClicked(true)}
      onTouchEnd={() => setIsClicked(false)}
      onBlur={() => setIsClicked(false)}
    >
      <span className="block w-6 h-6">
        <SocialIcons
          icon={icon}
          fill={isClicked ? "#0A192A" : isHovered ? "#0A192A" : "white"}
        />
      </span>
    </button>
  );
};

export default SocialButton;
