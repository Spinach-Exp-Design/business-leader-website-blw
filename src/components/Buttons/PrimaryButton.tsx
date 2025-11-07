import clsx from "clsx";
import React, { ButtonHTMLAttributes, useState } from "react";
import ArrowIcon from "./Icons/ArrowIcon";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick: () => void;
  className?: string;
}

const PrimaryButton = ({
  children,
  variant = "primary",
  onClick,
  className,
  ...props
}: PrimaryButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Compute button state
  const isPressed = isClicked;
  const isHover = isHovered && !isClicked;

  // Compute styles based on state
  const getButtonStyles = () => {
    if (isPressed) {
      return {
        bg: "bg-[#CC9809]",
        text: "text-primary-dark",
        border: "border-[#CC9809]",
        iconFill: "#0A192A",
      };
    }
    if (isHover) {
      return {
        bg: "bg-primary-yellow",
        text: "text-primary-dark",
        border: "border-primary-yellow",
        iconFill: "#0A192A",
      };
    }
    // Default state
    if (variant === "primary") {
      return {
        bg: "bg-primary-dark",
        text: "text-white",
        border: "border-white",
        iconFill: "white",
      };
    }
    return {
      bg: "",
      text: "text-primary-dark",
      border: "border-primary-dark",
      iconFill: "#0A192A",
    };
  };

  const styles = getButtonStyles();

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  return (
    <button
      className={clsx("cursor-pointer flex items-center", className)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onTouchStart={() => setIsClicked(true)}
      onTouchEnd={() => setIsClicked(false)}
      onBlur={() => setIsClicked(false)}
      {...props}
    >
      <div
        className={clsx(
          "lg:text-desktop-functional-f1 max-lg:text-mobile-functional-f1 flex items-center justify-center rounded-md transition-all duration-500 ease-in-out border border-r-0 font-sans px-6 py-3",
          styles?.bg,
          styles?.text,
          styles?.border
        )}
      >
        {children}
      </div>
      <span
        className={clsx(
          "w-12 h-12 rounded-md transition-all duration-500 ease-in-out border border-l-0 flex items-center justify-center",
          styles?.bg || "bg-transparent",
          styles?.border
        )}
      >
        <ArrowIcon fill={styles?.iconFill} />
      </span>
    </button>
  );
};

export default PrimaryButton;
